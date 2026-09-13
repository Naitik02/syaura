const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const root = __dirname;
const publicDir = path.join(root, 'public');
const inquiriesFile = path.join(root, 'data', 'inquiries.json');
const ordersFile = path.join(root, 'data', 'orders.json');
const reviewsFile = path.join(root, 'data', 'reviews.json');
const receiptsDir = path.join(publicDir, 'uploads', 'receipts');

// Ensure storage directories exist
fs.mkdirSync(path.join(root, 'data'), { recursive: true });
fs.mkdirSync(receiptsDir, { recursive: true });

const SERVED_CITIES = ['Ulhasnagar', 'Kalyan', 'Vitthalwadi', 'Ambernath', 'Badlapur'];

function getReviewsData() {
  try {
    if (fs.existsSync(reviewsFile)) {
      return JSON.parse(fs.readFileSync(reviewsFile, 'utf8'));
    }
  } catch (err) {
    console.error('Error reading reviewsFile:', err);
  }
  return [];
}

function calculateReviewStats(reviews) {
  const count = reviews.length;
  if (count === 0) {
    return {
      count: 0,
      averageRating: '5.0',
      averageRatingNum: 5.0,
      distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      percentages: { 5: 100, 4: 0, 3: 0, 2: 0, 1: 0 },
      recommendedPercent: 100
    };
  }

  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let sum = 0;

  for (const r of reviews) {
    const star = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5)));
    distribution[star] = (distribution[star] || 0) + 1;
    sum += star;
  }

  const average = sum / count;
  const percentages = {};
  for (let s = 1; s <= 5; s++) {
    percentages[s] = Math.round(((distribution[s] || 0) / count) * 100);
  }

  const positive = (distribution[5] || 0) + (distribution[4] || 0);
  const recommendedPercent = Math.round((positive / count) * 100);

  return {
    count,
    averageRating: average.toFixed(1),
    averageRatingNum: Math.round(average * 10) / 10,
    distribution,
    percentages,
    recommendedPercent
  };
}

function getOrdersData() {
  try {
    if (fs.existsSync(ordersFile)) {
      return JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
    }
  } catch (err) {
    console.error('Error reading ordersFile:', err);
  }
  return [];
}

function saveOrdersData(orders) {
  fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
}

const defaultPort = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';

const products = [
  // 🍫 Choco Bites
  {
    id: 'cookie-crumble',
    name: 'Cookie Crumble',
    flavour: 'Oreo Ball',
    category: 'choco-bites',
    categoryTitle: 'Choco Bites',
    shape: 'circle',
    shapeLabel: 'Circle Pcs · 4 & 6 per box',
    description: 'A delightful bite of crunchy Oreo wrapped in smooth, indulgent chocolate. Handcrafted into delicate Oreo Ball truffles with fine chocolate ribbon drizzle.',
    badge: 'Bestseller',
    image: '/products/floating/cookie-crumble-studio.jpg',
    cutout: '/products/floating/cookie-crumble-floating.png',
    floating: '/products/floating/cookie-crumble-floating.png',
    gallery: [
      '/products/floating/cookie-crumble-studio.jpg',
      '/products/floating/cookie-crumble-macro.jpg',
      '/products/floating/cookie-crumble-floating.png',
      '/products/bases/cookie-crumble-milk.jpg',
      '/products/bases/cookie-crumble-dark.jpg',
      '/products/bases/cookie-crumble-white.jpg'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/cookie-crumble-floating.png',
      'Milk Chocolate': '/products/bases/cookie-crumble-milk.jpg',
      'Dark Chocolate': '/products/bases/cookie-crumble-dark.jpg',
      'White Chocolate': '/products/bases/cookie-crumble-white.jpg'
    },
    defaultQuantity: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 139,
      '6 Pieces': 169
    },
    availableQuantities: ['4 Pieces', '6 Pieces']
  },
  {
    id: 'royal-crunch',
    name: 'Royal Crunch',
    flavour: 'Mix Dry Fruit Square',
    category: 'choco-bites',
    categoryTitle: 'Choco Bites',
    shape: 'square',
    shapeLabel: 'Square Pcs · 4 & 6 per box',
    description: 'A luxurious blend of assorted roasted mix dry fruits encased in rich chocolate, crafted into an elegant square bite bringing together royal richness and satisfying crunch in every bite.',
    badge: 'Royal Selection',
    image: '/products/floating/royal-crunch-studio.jpg',
    cutout: '/products/floating/royal-crunch-floating.png',
    floating: '/products/floating/royal-crunch-floating.png',
    gallery: [
      '/products/floating/royal-crunch-studio.jpg',
      '/products/floating/royal-crunch-macro.jpg',
      '/products/floating/royal-crunch-floating.png',
      '/products/bases/royal-crunch-milk.jpg',
      '/products/bases/royal-crunch-dark.jpg',
      '/products/bases/royal-crunch-white.jpg'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/royal-crunch-floating.png',
      'Milk Chocolate': '/products/bases/royal-crunch-milk.jpg',
      'Dark Chocolate': '/products/bases/royal-crunch-dark.jpg',
      'White Chocolate': '/products/bases/royal-crunch-white.jpg'
    },
    defaultQuantity: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 179,
      '6 Pieces': 199
    },
    availableQuantities: ['4 Pieces', '6 Pieces']
  },
  {
    id: 'cookie-crave',
    name: 'Cookie Crave',
    flavour: 'Oreo Chocolate',
    category: 'choco-bites',
    categoryTitle: 'Choco Bites',
    shape: 'square',
    shapeLabel: 'Square Pcs · 4 & 6 per box',
    description: 'Crunchy Oreo pieces meet silky chocolate in this irresistible combination of creamy indulgence and biscuit bite.',
    badge: 'All-Time Favorite',
    image: '/products/floating/cookie-crave-studio.jpg',
    cutout: '/products/floating/cookie-crave-floating.png',
    floating: '/products/floating/cookie-crave-floating.png',
    gallery: [
      '/products/floating/cookie-crave-studio.jpg',
      '/products/floating/cookie-crave-macro.jpg',
      '/products/floating/cookie-crave-floating.png',
      '/products/bases/cookie-crave-milk.jpg',
      '/products/bases/cookie-crave-dark.jpg',
      '/products/bases/cookie-crave-white.jpg'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/cookie-crave-floating.png',
      'Milk Chocolate': '/products/bases/cookie-crave-milk.jpg',
      'Dark Chocolate': '/products/bases/cookie-crave-dark.jpg',
      'White Chocolate': '/products/bases/cookie-crave-white.jpg'
    },
    defaultQuantity: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 119,
      '6 Pieces': 139
    },
    availableQuantities: ['4 Pieces', '6 Pieces']
  },
  {
    id: 'almond-crush',
    name: 'Almond Crush',
    flavour: 'Almond Chocolate',
    category: 'choco-bites',
    categoryTitle: 'Choco Bites',
    shape: 'square',
    shapeLabel: 'Square Pcs · 4 & 6 per box',
    description: 'Roasted almond goodness meets luscious chocolate, creating a beautifully crunchy bite with a rich, nutty finish.',
    badge: 'Roasted Nutty',
    image: '/products/floating/almond-crush-studio.jpg',
    cutout: '/products/floating/almond-crush-floating.png',
    floating: '/products/floating/almond-crush-floating.png',
    gallery: [
      '/products/floating/almond-crush-studio.jpg',
      '/products/floating/almond-crush-macro.jpg',
      '/products/floating/almond-crush-floating.png',
      '/products/bases/almond-crush-milk.jpg',
      '/products/bases/almond-crush-dark.jpg',
      '/products/bases/almond-crush-white.jpg'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/almond-crush-floating.png',
      'Milk Chocolate': '/products/bases/almond-crush-milk.jpg',
      'Dark Chocolate': '/products/bases/almond-crush-dark.jpg',
      'White Chocolate': '/products/bases/almond-crush-white.jpg'
    },
    defaultQuantity: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 169,
      '6 Pieces': 199
    },
    availableQuantities: ['4 Pieces', '6 Pieces']
  },
  {
    id: 'biscoff-baby',
    name: 'Biscoff Baby',
    flavour: 'Biscoff Chocolate',
    category: 'choco-bites',
    categoryTitle: 'Choco Bites',
    shape: 'square',
    shapeLabel: 'Square Pcs · 4 & 6 per box',
    description: 'Handcrafted chocolate square topped with Belgian speculoos swirl and crunchy Lotus Biscoff biscuit crumble. A warm, caramelised bite in every piece.',
    badge: 'Biscoff Special',
    image: '/products/floating/biscoff-baby-studio.jpg',
    cutout: '/products/floating/biscoff-baby-floating.png',
    floating: '/products/floating/biscoff-baby-floating.png',
    gallery: [
      '/products/floating/biscoff-baby-studio.jpg',
      '/products/floating/biscoff-baby-macro.jpg',
      '/products/floating/biscoff-baby-floating.png',
      '/products/bases/biscoff-baby-white.jpg',
      '/products/bases/biscoff-baby-milk.jpg',
      '/products/bases/biscoff-baby-dark.jpg'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/biscoff-baby-floating.png',
      'Milk Chocolate': '/products/bases/biscoff-baby-milk.jpg',
      'Dark Chocolate': '/products/bases/biscoff-baby-dark.jpg',
      'White Chocolate': '/products/bases/biscoff-baby-white.jpg'
    },
    defaultQuantity: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 199,
      '6 Pieces': 239
    },
    availableQuantities: ['4 Pieces', '6 Pieces']
  },

  // 🍫 The Artisan Bars
  {
    id: 'nut-noble',
    name: 'Nut & Noble',
    flavour: 'Mix Dry Fruit Bar',
    category: 'artisan-bars',
    categoryTitle: 'The Artisan Bars',
    shape: 'bar',
    shapeLabel: 'Artisan Bar · 11 Pcs',
    description: 'A generous blend of premium mix dry fruits wrapped in rich chocolate. Nut & Noble celebrates the naturally luxurious character of handcrafted chocolates.',
    badge: 'Gifting Special',
    image: '/products/floating/nut-noble-studio.jpg',
    cutout: '/products/floating/nut-noble-floating.png',
    floating: '/products/floating/nut-noble-floating.png',
    gallery: [
      '/products/floating/nut-noble-studio.jpg',
      '/products/floating/nut-noble-macro.jpg',
      '/products/floating/nut-noble-floating.png'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/nut-noble-floating.png',
      'Milk Chocolate': '/products/floating/nut-noble-studio.jpg',
      'Dark Chocolate': '/products/floating/nut-noble-studio.jpg',
      'White Chocolate': '/products/floating/nut-noble-studio.jpg'
    },
    defaultQuantity: '11 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '11 Pieces': 210
    },
    availableQuantities: ['11 Pieces']
  },
  {
    id: 'cookie-crunch-bars',
    name: 'Cookie Crunch Bars',
    flavour: 'Oreo Bar',
    category: 'artisan-bars',
    categoryTitle: 'The Artisan Bars',
    shape: 'bar',
    shapeLabel: 'Artisan Bar · 11 Pcs',
    description: 'Loaded with crunchy Oreo pieces and enveloped in smooth chocolate, these bars turn a classic cookie into an indulgent chocolate experience.',
    badge: 'Party Pack',
    image: '/products/floating/cookie-crunch-bar-studio.jpg',
    cutout: '/products/floating/cookie-crunch-bar-floating.png',
    floating: '/products/floating/cookie-crunch-bar-floating.png',
    gallery: [
      '/products/floating/cookie-crunch-bar-studio.jpg',
      '/products/floating/cookie-crunch-bar-macro.jpg',
      '/products/floating/cookie-crunch-bar-floating.png'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/cookie-crunch-bar-floating.png',
      'Milk Chocolate': '/products/floating/cookie-crunch-bar-studio.jpg',
      'Dark Chocolate': '/products/floating/cookie-crunch-bar-studio.jpg',
      'White Chocolate': '/products/floating/cookie-crunch-bar-studio.jpg'
    },
    defaultQuantity: '11 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '11 Pieces': 169
    },
    availableQuantities: ['11 Pieces']
  },
  {
    id: 'modak-royale',
    name: 'Modak Royale',
    flavour: 'Chocolate Modak',
    category: 'artisan-bars',
    categoryTitle: 'The Artisan Bars',
    shape: 'modak',
    shapeLabel: 'Festive Modak · 21 Pcs',
    description: 'Festive handcrafted chocolate modaks with 1–2 whole almonds nestled inside, inspired by timeless sacred tradition and crafted with an artisanal royal touch.',
    badge: 'Festive Drop',
    image: '/products/floating/modak-royale-studio.jpg',
    cutout: '/products/floating/modak-royale-floating.png',
    floating: '/products/floating/modak-royale-floating.png',
    gallery: [
      '/products/floating/modak-royale-studio.jpg',
      '/products/floating/modak-royale-macro.jpg',
      '/products/floating/modak-royale-floating.png'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/modak-royale-floating.png',
      'Milk Chocolate': '/products/floating/modak-royale-studio.jpg',
      'Dark Chocolate': '/products/floating/modak-royale-studio.jpg',
      'White Chocolate': '/products/floating/modak-royale-studio.jpg'
    },
    defaultQuantity: '21 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '21 Pieces': 249
    },
    availableQuantities: ['21 Pieces']
  },

  // 🤍 Sweet Hearts
  {
    id: 'cookie-heart',
    name: 'Cookie Heart',
    flavour: 'Oreo Heart',
    category: 'sweet-hearts',
    categoryTitle: 'Sweet Hearts',
    shape: 'heart',
    shapeLabel: 'Diamond Heart · 12 & 18 Pcs',
    description: 'Crunchy Oreo pieces wrapped in smooth, indulgent chocolate, crafted into a charming faceted heart with dark cookie crumbs and white drizzle for a playful yet irresistible treat.',
    badge: 'Romantic Bestseller',
    image: '/products/floating/cookie-heart-studio.jpg',
    cutout: '/products/floating/cookie-heart-floating.png',
    floating: '/products/floating/cookie-heart-floating.png',
    gallery: [
      '/products/floating/cookie-heart-studio.jpg',
      '/products/floating/cookie-heart-macro.jpg',
      '/products/floating/cookie-heart-floating.png',
      '/products/bases/cookie-heart-milk.jpg',
      '/products/bases/cookie-heart-dark.jpg',
      '/products/bases/cookie-heart-white.jpg'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/cookie-heart-floating.png',
      'Milk Chocolate': '/products/bases/cookie-heart-milk.jpg',
      'Dark Chocolate': '/products/bases/cookie-heart-dark.jpg',
      'White Chocolate': '/products/bases/cookie-heart-white.jpg'
    },
    defaultQuantity: '12 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '12 Pieces': 499,
      '18 Pieces': 699
    },
    availableQuantities: ['12 Pieces', '18 Pieces']
  },
  {
    id: 'royal-heart',
    name: 'Royal Heart',
    flavour: 'Mix Dry Fruit Heart',
    category: 'sweet-hearts',
    categoryTitle: 'Sweet Hearts',
    shape: 'heart',
    shapeLabel: 'Diamond Heart · 12 & 18 Pcs',
    description: 'A delicate faceted 3D heart filled with premium mix dry fruits, wrapped in smooth, rich chocolate.',
    badge: 'Royal Indulgence',
    image: '/products/floating/royal-heart-studio.jpg',
    cutout: '/products/floating/royal-heart-isolated.png',
    floating: '/products/floating/royal-heart-isolated.png',
    gallery: [
      '/products/floating/royal-heart-studio.jpg',
      '/products/floating/royal-heart-macro.jpg',
      '/products/floating/royal-heart-floating.png',
      '/products/bases/royal-heart-milk.jpg',
      '/products/bases/royal-heart-dark.jpg',
      '/products/bases/royal-heart-white.jpg'
    ],
    baseCustomizable: true,
    availableBases: ['Assorted Flavours', 'Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Assorted Flavours': '/products/floating/royal-heart-isolated.png',
      'Milk Chocolate': '/products/bases/royal-heart-milk.jpg',
      'Dark Chocolate': '/products/bases/royal-heart-dark.jpg',
      'White Chocolate': '/products/bases/royal-heart-white.jpg'
    },
    defaultQuantity: '12 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '12 Pieces': 449,
      '18 Pieces': 649
    },
    availableQuantities: ['12 Pieces', '18 Pieces']
  }
];

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function send(res, status, data, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', ...headers });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    // Allow up to 25MB for payment screenshots
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 25_000_000) reject(new Error('Request too large'));
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch {
        reject(new Error('Invalid JSON format'));
      }
    });
    req.on('error', reject);
  });
}

function saveInquiry(inquiry) {
  fs.mkdirSync(path.dirname(inquiriesFile), { recursive: true });
  let inquiries = [];
  try {
    inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
  } catch {
    /* start fresh */
  }
  inquiries.push(inquiry);
  fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));
}

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const requestPath = urlPath === '/' ? '/index.html' : urlPath;
  const filePath = path.resolve(publicDir, `.${requestPath}`);

  if (!filePath.startsWith(publicDir + path.sep) && filePath !== path.join(publicDir, 'index.html')) {
    send(res, 403, { error: 'Forbidden' });
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') send(res, 404, { error: 'Not found' });
      else send(res, 500, { error: 'Server error reading asset' });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': types[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end(content);
  });
}

const ADMIN_KEY = process.env.ADMIN_KEY || 'Syaura.shop@1506';

function isAdmin(req) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const headerKey = req.headers['x-admin-key'];
  const queryKey = url.searchParams.get('key');
  return headerKey === ADMIN_KEY || queryKey === ADMIN_KEY;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Redirect /admin to /admin.html
  if (url.pathname === '/admin') {
    res.writeHead(302, { Location: '/admin.html' });
    res.end();
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/products') {
    send(res, 200, products);
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/health') {
    send(res, 200, { status: 'ok', brand: 'SYAURA', timestamp: new Date().toISOString() });
    return;
  }

  // Live Reviews API - Get all reviews & calculated stats
  if (req.method === 'GET' && url.pathname === '/api/reviews') {
    const reviews = getReviewsData();
    send(res, 200, {
      success: true,
      stats: calculateReviewStats(reviews),
      reviews: reviews.slice().reverse()
    });
    return;
  }

  // Live Reviews API - Post a new review
  if (req.method === 'POST' && url.pathname === '/api/reviews') {
    try {
      const payload = await readBody(req);
      const name = String(payload.name || '').trim();
      const city = String(payload.city || '').trim();
      const ratingNum = Math.min(5, Math.max(1, Math.round(Number(payload.rating) || 5)));
      const chocolate = String(payload.chocolate || '').trim() || 'Assorted Creation';
      const reviewText = String(payload.review || '').trim();

      if (!name || !reviewText) {
        send(res, 400, { error: 'Your name and review note are required.' });
        return;
      }

      if (reviewText.length < 5) {
        send(res, 400, { error: 'Please write a review with at least 5 characters.' });
        return;
      }

      const reviews = getReviewsData();
      const newReview = {
        id: `REV-${randomUUID().slice(0, 8).toUpperCase()}`,
        name,
        city: city || 'Verified Buyer',
        rating: ratingNum,
        chocolate,
        review: reviewText,
        createdAt: new Date().toISOString(),
        verified: true
      };

      reviews.push(newReview);
      fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));

      send(res, 201, {
        success: true,
        message: 'Thank you! Your review is now live.',
        review: newReview,
        stats: calculateReviewStats(reviews)
      });
    } catch (err) {
      send(res, 500, { error: 'Failed to submit review. Please try again.' });
    }
    return;
  }

  // ==========================================
  // CUSTOMER DIRECT ORDER API WITH PAYMENT SS
  // ==========================================
  if (req.method === 'POST' && url.pathname === '/api/orders') {
    try {
      const payload = await readBody(req);
      const name = String(payload.name || '').trim();
      const phone = String(payload.phone || '').trim();
      const city = String(payload.city || '').trim();
      const address = String(payload.address || '').trim();
      const deliveryDate = String(payload.deliveryDate || '').trim();
      const notes = String(payload.notes || '').trim();
      const items = Array.isArray(payload.items) ? payload.items : [];
      const packageFee = Number(payload.packageFee) || 35;
      const subtotal = Number(payload.subtotal) || 0;
      // Free Delivery on orders above ₹999
      let deliveryFee = Number(payload.deliveryFee) || 55;
      if (subtotal >= 999) {
        deliveryFee = 0;
      }
      const totalAmount = Number(payload.totalAmount) || (subtotal + packageFee + deliveryFee);
      const upiRef = String(payload.upiRef || '').trim();
      const paymentScreenshot = String(payload.paymentScreenshot || '');

      if (!name || !phone) {
        send(res, 400, { error: 'Customer name and phone number are required.' });
        return;
      }

      if (!city) {
        send(res, 400, { error: 'Please select a delivery city.' });
        return;
      }

      const isCityServed = SERVED_CITIES.some((c) => c.toLowerCase() === city.toLowerCase());
      if (!isCityServed) {
        send(res, 400, {
          error: `Currently we deliver exclusively to: ${SERVED_CITIES.join(', ')}.`
        });
        return;
      }

      if (!deliveryDate) {
        send(res, 400, { error: 'Please choose a delivery date.' });
        return;
      }

      // Validate delivery date is at least 1 day in advance
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const targetDate = new Date(deliveryDate);
      targetDate.setHours(0, 0, 0, 0);
      const diffDays = Math.round((targetDate - today) / (1000 * 60 * 60 * 24));

      if (diffDays < 1) {
        send(res, 400, {
          error: 'Artisanal chocolates are crafted fresh to order. Delivery date must be at least 1 day in advance.'
        });
        return;
      }

      if (items.length === 0) {
        send(res, 400, { error: 'Your cart is empty. Please select chocolates to order.' });
        return;
      }

      const orderId = `SYAURA-${randomUUID().slice(0, 8).toUpperCase()}`;

      // Save screenshot file if provided (base64 data)
      let screenshotUrl = '';
      if (paymentScreenshot && paymentScreenshot.includes(';base64,')) {
        try {
          const parts = paymentScreenshot.split(';base64,');
          const ext = parts[0].includes('png') ? '.png' : '.jpg';
          const buffer = Buffer.from(parts[1], 'base64');
          const fileName = `${orderId}-receipt${ext}`;
          const filePath = path.join(receiptsDir, fileName);
          fs.writeFileSync(filePath, buffer);
          screenshotUrl = `/uploads/receipts/${fileName}`;
        } catch (imgErr) {
          console.error('Failed to save screenshot image:', imgErr);
        }
      }

      const newOrder = {
        id: orderId,
        createdAt: new Date().toISOString(),
        name,
        phone,
        city,
        address: address || 'Pickup / Contact via Phone',
        deliveryDate,
        notes,
        items,
        packageFee,
        deliveryFee,
        subtotal,
        totalAmount,
        upiRef,
        screenshotUrl,
        paymentStatus: 'Payment Under Verification',
        orderStatus: 'Payment Under Verification',
        adminNotes: '',
        timeline: [
          {
            step: 1,
            title: 'Order Placed & Payment Uploaded',
            status: 'completed',
            time: new Date().toISOString(),
            description: `Order received with ${items.length} item(s). Payment proof submitted.`
          },
          {
            step: 2,
            title: 'Payment Verification & Admin Approval',
            status: 'in_progress',
            time: null,
            description: 'Our admin is verifying your UPI payment receipt.'
          },
          {
            step: 3,
            title: 'Artisanal Handcrafting',
            status: 'pending',
            time: null,
            description: 'Small batch freshly tempered chocolate crafting.'
          },
          {
            step: 4,
            title: `Out for Delivery (${city})`,
            status: 'pending',
            time: null,
            description: `Scheduled for delivery on ${deliveryDate}.`
          },
          {
            step: 5,
            title: 'Delivered',
            status: 'pending',
            time: null,
            description: 'Enjoy your handcrafted luxury chocolates!'
          }
        ]
      };

      const orders = getOrdersData();
      orders.push(newOrder);
      saveOrdersData(orders);

      send(res, 201, {
        success: true,
        orderId: newOrder.id,
        order: newOrder,
        message: 'Your order and payment proof have been submitted! Our team will verify and approve your order shortly.'
      });
    } catch (err) {
      console.error('Order submission error:', err);
      send(res, 500, { error: 'Failed to process order. ' + (err.message || '') });
    }
    return;
  }

  // Track Order API (Public)
  if (req.method === 'GET' && url.pathname === '/api/orders/track') {
    const qId = (url.searchParams.get('id') || '').trim().toUpperCase();
    const qPhone = (url.searchParams.get('phone') || '').trim().replace(/[^0-9]/g, '');

    if (!qId && !qPhone) {
      send(res, 400, { error: 'Please provide an Order ID or Phone number to track.' });
      return;
    }

    const orders = getOrdersData();
    let matched = null;

    if (qId) {
      matched = orders.find((o) => (o.id || '').toUpperCase() === qId);
    }
    if (!matched && qPhone) {
      matched = orders.slice().reverse().find((o) => (o.phone || '').replace(/[^0-9]/g, '').endsWith(qPhone));
    }

    if (!matched) {
      send(res, 404, { error: 'No order found matching your search. Please verify your Order ID or phone number.' });
      return;
    }

    send(res, 200, {
      success: true,
      order: {
        id: matched.id,
        createdAt: matched.createdAt,
        name: matched.name,
        city: matched.city,
        address: matched.address,
        deliveryDate: matched.deliveryDate,
        items: matched.items,
        subtotal: matched.subtotal,
        packageFee: matched.packageFee,
        deliveryFee: matched.deliveryFee,
        totalAmount: matched.totalAmount,
        paymentStatus: matched.paymentStatus,
        orderStatus: matched.orderStatus,
        adminNotes: matched.adminNotes,
        timeline: matched.timeline
      }
    });
    return;
  }

  // Admin: Get all orders
  if (req.method === 'GET' && url.pathname === '/api/admin/orders') {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid or missing Admin Key.' });
      return;
    }
    const orders = getOrdersData();
    send(res, 200, orders.slice().reverse());
    return;
  }

  // Admin: Update order (Approve, change delivery date, change status, add notes)
  if (req.method === 'PATCH' && url.pathname.startsWith('/api/admin/orders/')) {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid Admin Key.' });
      return;
    }
    const id = url.pathname.split('/').pop().toUpperCase();
    try {
      const payload = await readBody(req);
      const orders = getOrdersData();
      const order = orders.find((o) => (o.id || '').toUpperCase() === id);

      if (!order) {
        send(res, 404, { error: 'Order not found.' });
        return;
      }

      if (payload.paymentStatus) order.paymentStatus = payload.paymentStatus;
      if (payload.orderStatus) {
        order.orderStatus = payload.orderStatus;
        // Update timeline status based on order status
        const s = payload.orderStatus.toLowerCase();
        if (s.includes('approved') || s.includes('confirmed')) {
          if (order.timeline[1]) {
            order.timeline[1].status = 'completed';
            order.timeline[1].time = new Date().toISOString();
          }
          if (order.timeline[2]) order.timeline[2].status = 'in_progress';
        }
        if (s.includes('crafting') || s.includes('kitchen')) {
          if (order.timeline[1]) order.timeline[1].status = 'completed';
          if (order.timeline[2]) {
            order.timeline[2].status = 'completed';
            order.timeline[2].time = new Date().toISOString();
          }
          if (order.timeline[3]) order.timeline[3].status = 'in_progress';
        }
        if (s.includes('dispatched') || s.includes('out for delivery')) {
          if (order.timeline[1]) order.timeline[1].status = 'completed';
          if (order.timeline[2]) order.timeline[2].status = 'completed';
          if (order.timeline[3]) {
            order.timeline[3].status = 'completed';
            order.timeline[3].time = new Date().toISOString();
          }
          if (order.timeline[4]) order.timeline[4].status = 'in_progress';
        }
        if (s.includes('delivered')) {
          order.timeline.forEach((t) => {
            t.status = 'completed';
            if (!t.time) t.time = new Date().toISOString();
          });
        }
      }
      if (payload.deliveryDate) order.deliveryDate = payload.deliveryDate;
      if (payload.adminNotes !== undefined) order.adminNotes = payload.adminNotes;

      saveOrdersData(orders);
      send(res, 200, { success: true, order });
    } catch (err) {
      send(res, 400, { error: 'Could not update order: ' + err.message });
    }
    return;
  }

  // Admin: Delete order
  if (req.method === 'DELETE' && url.pathname.startsWith('/api/admin/orders/')) {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid Admin Key.' });
      return;
    }
    const id = url.pathname.split('/').pop().toUpperCase();
    try {
      let orders = getOrdersData();
      orders = orders.filter((o) => (o.id || '').toUpperCase() !== id);
      saveOrdersData(orders);
      send(res, 200, { success: true, message: 'Order deleted' });
    } catch (err) {
      send(res, 400, { error: 'Could not delete order.' });
    }
    return;
  }

  // Admin: Get all inquiries
  if (req.method === 'GET' && url.pathname === '/api/admin/inquiries') {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid or missing Admin Key.' });
      return;
    }
    let inquiries = [];
    try {
      inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
    } catch {
      inquiries = [];
    }
    send(res, 200, inquiries.slice().reverse());
    return;
  }

  // Admin: Update inquiry status / notes
  if (req.method === 'PATCH' && url.pathname.startsWith('/api/admin/inquiries/')) {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid Admin Key.' });
      return;
    }
    const id = url.pathname.split('/').pop();
    try {
      const payload = await readBody(req);
      let inquiries = [];
      try {
        inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
      } catch {
        inquiries = [];
      }
      const item = inquiries.find((i) => i.id === id);
      if (!item) {
        send(res, 404, { error: 'Inquiry not found' });
        return;
      }
      if (payload.status) item.status = payload.status;
      if (payload.notes !== undefined) item.notes = payload.notes;
      fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));
      send(res, 200, { success: true, item });
    } catch (err) {
      send(res, 400, { error: 'Could not update inquiry' });
    }
    return;
  }

  // Admin: Delete inquiry
  if (req.method === 'DELETE' && url.pathname.startsWith('/api/admin/inquiries/')) {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid Admin Key.' });
      return;
    }
    const id = url.pathname.split('/').pop();
    try {
      let inquiries = [];
      try {
        inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
      } catch {
        inquiries = [];
      }
      inquiries = inquiries.filter((i) => i.id !== id);
      fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));
      send(res, 200, { success: true, message: 'Inquiry deleted' });
    } catch (err) {
      send(res, 400, { error: 'Could not delete inquiry' });
    }
    return;
  }

  // Admin: Get all reviews
  if (req.method === 'GET' && url.pathname === '/api/admin/reviews') {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid Admin Key.' });
      return;
    }
    const reviews = getReviewsData();
    send(res, 200, { success: true, reviews: reviews.slice().reverse(), stats: calculateReviewStats(reviews) });
    return;
  }

  // Admin: Create a new review
  if (req.method === 'POST' && url.pathname === '/api/admin/reviews') {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid Admin Key.' });
      return;
    }
    try {
      const payload = await readBody(req);
      const name = String(payload.name || '').trim();
      const city = String(payload.city || '').trim();
      const ratingNum = Math.min(5, Math.max(1, Math.round(Number(payload.rating) || 5)));
      const chocolate = String(payload.chocolate || '').trim() || 'Assorted Creation';
      const reviewText = String(payload.review || '').trim();

      if (!name || !reviewText) {
        send(res, 400, { error: 'Name and review text are required.' });
        return;
      }

      const reviews = getReviewsData();
      const newReview = {
        id: `REV-${randomUUID().slice(0, 8).toUpperCase()}`,
        name,
        city: city || 'Verified Buyer',
        rating: ratingNum,
        chocolate,
        review: reviewText,
        createdAt: payload.createdAt || new Date().toISOString(),
        verified: true
      };

      reviews.push(newReview);
      fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
      send(res, 201, { success: true, review: newReview });
    } catch (err) {
      send(res, 500, { error: 'Failed to create review.' });
    }
    return;
  }

  // Admin: Update a review
  if (req.method === 'PATCH' && url.pathname.startsWith('/api/admin/reviews/')) {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid Admin Key.' });
      return;
    }
    const id = url.pathname.split('/').pop();
    try {
      const payload = await readBody(req);
      const reviews = getReviewsData();
      const review = reviews.find((r) => r.id === id);
      if (!review) {
        send(res, 404, { error: 'Review not found.' });
        return;
      }
      if (payload.name !== undefined) review.name = String(payload.name).trim();
      if (payload.city !== undefined) review.city = String(payload.city).trim();
      if (payload.rating !== undefined) review.rating = Math.min(5, Math.max(1, Math.round(Number(payload.rating))));
      if (payload.chocolate !== undefined) review.chocolate = String(payload.chocolate).trim();
      if (payload.review !== undefined) review.review = String(payload.review).trim();
      if (payload.verified !== undefined) review.verified = Boolean(payload.verified);
      fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
      send(res, 200, { success: true, review });
    } catch (err) {
      send(res, 500, { error: 'Failed to update review.' });
    }
    return;
  }

  // Admin: Delete a review
  if (req.method === 'DELETE' && url.pathname.startsWith('/api/admin/reviews/')) {
    if (!isAdmin(req)) {
      send(res, 401, { error: 'Unauthorized. Invalid Admin Key.' });
      return;
    }
    const id = url.pathname.split('/').pop();
    try {
      let reviews = getReviewsData();
      reviews = reviews.filter((r) => r.id !== id);
      fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));
      send(res, 200, { success: true, message: 'Review deleted' });
    } catch (err) {
      send(res, 400, { error: 'Could not delete review' });
    }
    return;
  }

  // Public: Customer creates advanced order / bespoke inquiry
  if (req.method === 'POST' && url.pathname === '/api/inquiries') {
    try {
      const payload = await readBody(req);
      const name = String(payload.name || '').trim();
      const email = String(payload.email || '').trim();
      const instagram = String(payload.instagram || payload.insta || '').trim();
      const phone = String(payload.phone || '').trim();
      const area = String(payload.area || '').trim();
      const occasion = String(payload.occasion || 'Bespoke Gifting').trim();
      
      // Flavours can be array or string
      let selection = payload.selection || payload.flavours || 'Assorted Creations';
      if (Array.isArray(selection)) {
        selection = selection.filter(Boolean).join(', ') || 'Assorted Creations';
      } else {
        selection = String(selection).trim();
      }

      const base = String(payload.base || 'Assorted Flavours').trim();
      const quantity = String(payload.quantity || 'Not specified').trim();
      const price = String(payload.price || '').trim();
      const targetDate = String(payload.targetDate || payload.deliveryDate || '').trim();
      
      // Packaging add-ons
      let packaging = payload.packaging || payload.packagingAddons || [];
      if (Array.isArray(packaging)) {
        packaging = packaging.filter(Boolean);
      } else if (packaging) {
        packaging = [String(packaging)];
      }

      const budget = String(payload.budget || '').trim();
      const notes = String(payload.notes || payload.specialRequests || '').trim();

      if (!name || (!email && !instagram)) {
        send(res, 400, { error: 'Name and Email or Instagram handle are required to submit an inquiry.' });
        return;
      }

      const inquiryId = `SYAURA-INQ-${randomUUID().slice(0, 6).toUpperCase()}`;

      const inquiry = {
        id: inquiryId,
        createdAt: new Date().toISOString(),
        name,
        email: email || undefined,
        instagram: instagram || undefined,
        phone: phone || undefined,
        area: area || 'Not specified',
        occasion,
        selection,
        base,
        quantity,
        packaging,
        targetDate: targetDate || undefined,
        budget: budget || undefined,
        price: price || undefined,
        notes,
        status: 'Pending Contact'
      };

      saveInquiry(inquiry);

      send(res, 201, {
        success: true,
        inquiryId: inquiry.id,
        message: `Thank you, ${name}! Your bespoke inquiry (${inquiry.id}) has been recorded. Our concierge team will reach out via Instagram (@syaura.shop) or Email shortly.`,
        instagramUrl: 'https://www.instagram.com/syaura.shop/',
        emailUrl: `mailto:syaurashop@gmail.com?subject=Bespoke%20Inquiry%20Ref%20${inquiry.id}`,
        inquiry
      });
    } catch (error) {
      send(res, 400, { error: error.message || 'Could not save inquiry.' });
    }
    return;
  }

  // Public: Customer checks inquiry status by Reference ID or Email / Instagram
  if (req.method === 'GET' && url.pathname === '/api/inquiries/track') {
    try {
      const q = String(url.searchParams.get('ref') || url.searchParams.get('query') || url.searchParams.get('id') || '').trim();
      if (!q) {
        send(res, 400, { error: 'Please provide an Inquiry Reference ID or registered Email / Instagram handle.' });
        return;
      }

      let inquiries = [];
      if (fs.existsSync(inquiriesFile)) {
        inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
      }

      const cleanQ = q.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const match = inquiries.find((i) => {
        const cleanId = (i.id || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const cleanEmail = (i.email || '').toLowerCase();
        const cleanInsta = (i.instagram || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const cleanPhone = (i.phone || '').replace(/[^0-9]/g, '');
        return cleanId === cleanQ || cleanId.includes(cleanQ) || (cleanEmail && cleanEmail.includes(cleanQ)) || (cleanInsta && cleanInsta.includes(cleanQ)) || (cleanPhone && cleanPhone.endsWith(cleanQ));
      });

      if (!match) {
        send(res, 200, {
          success: true,
          found: false,
          message: `No inquiry found matching "${q}". Please verify your reference ID or Email address.`
        });
        return;
      }

      // Return sanitized client-safe inquiry status
      send(res, 200, {
        success: true,
        found: true,
        inquiry: {
          id: match.id,
          createdAt: match.createdAt,
          status: match.status || 'Pending Contact',
          occasion: match.occasion || 'Custom Selection',
          selection: match.selection || 'Assorted Chocolates',
          base: match.base || 'Assorted Flavours',
          quantity: match.quantity || 'Custom Quantity',
          area: match.area || 'Direct Dispatch',
          targetDate: match.targetDate || null,
          packaging: match.packaging || []
        }
      });
    } catch (err) {
      send(res, 500, { error: 'Could not query inquiry status.' });
    }
    return;
  }

  if (req.method === 'GET' || req.method === 'HEAD') {
    serveStatic(req, res);
  } else {
    send(res, 405, { error: 'Method not allowed' });
  }
});

let currentPort = defaultPort;

function startServer(p) {
  server.listen(p, host, () => {
    console.log(`SYAURA Chocolates site running at:`);
    console.log(`  > Local:   http://localhost:${p}`);
    console.log(`  > Network: http://127.0.0.1:${p}`);
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.warn(`Port ${currentPort} is currently in use, trying port ${currentPort + 1}...`);
    currentPort += 1;
    setTimeout(() => {
      startServer(currentPort);
    }, 200);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});

startServer(currentPort);
