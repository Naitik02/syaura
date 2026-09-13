/**
 * SYAURA — Handcrafted Luxury Chocolates
 * Frontend Menu Catalog & Direct Instagram Ordering
 */

const INSTA_HANDLE = 'syaura.shop';
const INSTA_DEFAULT_MSG = 'Hey i am intrested to buy some chocolates !';

// Official SYAURA Catalog — Strictly matching official menu card
const SYAURA_CATALOG = {
  'cookie-crumble': {
    id: 'cookie-crumble',
    name: 'Cookie Crumble',
    flavour: 'Oreo Ball',
    category: 'Choco Bites',
    shape: 'Circle Pcs · 4 & 6 per box',
    badge: 'Bestseller',
    description: 'A delightful bite of crunchy Oreo wrapped in smooth, indulgent chocolate. Handcrafted into delicate Oreo Ball truffles with fine chocolate ribbon drizzle.',
    mainImage: '/products/floating/cookie-crumble-studio.jpg',
    cutout: '/products/floating/cookie-crumble-floating.png',
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
    defaultQty: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 139,
      '6 Pieces': 169
    },
    quantities: ['4 Pieces', '6 Pieces']
  },
  'royal-crunch': {
    id: 'royal-crunch',
    name: 'Royal Crunch',
    flavour: 'Mix Dry Fruit Square',
    category: 'Choco Bites',
    shape: 'Square Pcs · 4 & 6 per box',
    badge: 'Royal Selection',
    description: 'A luxurious blend of assorted roasted mix dry fruits encased in rich chocolate, crafted into an elegant square bite bringing together royal richness and satisfying crunch in every bite.',
    mainImage: '/products/floating/royal-crunch-studio.jpg',
    cutout: '/products/floating/royal-crunch-floating.png',
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
    defaultQty: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 179,
      '6 Pieces': 199
    },
    quantities: ['4 Pieces', '6 Pieces']
  },
  'cookie-crave': {
    id: 'cookie-crave',
    name: 'Cookie Crave',
    flavour: 'Oreo Chocolate',
    category: 'Choco Bites',
    shape: 'Square Pcs · 4 & 6 per box',
    badge: 'All-Time Favorite',
    description: 'Crunchy Oreo pieces meet silky chocolate in this irresistible combination of creamy indulgence and biscuit bite.',
    mainImage: '/products/floating/cookie-crave-studio.jpg',
    cutout: '/products/floating/cookie-crave-floating.png',
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
    defaultQty: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 119,
      '6 Pieces': 139
    },
    quantities: ['4 Pieces', '6 Pieces']
  },
  'almond-crush': {
    id: 'almond-crush',
    name: 'Almond Crush',
    flavour: 'Almond Chocolate',
    category: 'Choco Bites',
    shape: 'Square Pcs · 4 & 6 per box',
    badge: 'Roasted Nutty',
    description: 'Roasted almond goodness meets luscious chocolate, creating a beautifully crunchy bite with a rich, nutty finish.',
    mainImage: '/products/floating/almond-crush-studio.jpg',
    cutout: '/products/floating/almond-crush-floating.png',
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
    defaultQty: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 169,
      '6 Pieces': 199
    },
    quantities: ['4 Pieces', '6 Pieces']
  },
  'biscoff-baby': {
    id: 'biscoff-baby',
    name: 'Biscoff Baby',
    flavour: 'Biscoff Chocolate',
    category: 'Choco Bites',
    shape: 'Square Pcs · 4 & 6 per box',
    badge: 'Biscoff Special',
    description: 'Handcrafted chocolate square topped with Belgian speculoos swirl and crunchy Lotus Biscoff biscuit crumble. A warm, caramelised bite in every piece.',
    mainImage: '/products/floating/biscoff-baby-studio.jpg',
    cutout: '/products/floating/biscoff-baby-floating.png',
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
    defaultQty: '4 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '4 Pieces': 199,
      '6 Pieces': 239
    },
    quantities: ['4 Pieces', '6 Pieces']
  },
  'nut-noble': {
    id: 'nut-noble',
    name: 'Nut & Noble',
    flavour: 'Mix Dry Fruit Bar',
    category: 'The Artisan Bars',
    shape: 'Artisan Bar · 11 Pcs Box',
    badge: 'Gifting Special',
    description: 'A generous blend of premium mix dry fruits wrapped in rich chocolate. Nut & Noble celebrates the naturally luxurious character of handcrafted chocolates.',
    mainImage: '/products/floating/nut-noble-studio.jpg',
    cutout: '/products/floating/nut-noble-floating.png',
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
    defaultQty: '11 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '11 Pieces': 210
    },
    quantities: ['11 Pieces']
  },
  'cookie-crunch-bars': {
    id: 'cookie-crunch-bars',
    name: 'Cookie Crunch Bars',
    flavour: 'Oreo Bar',
    category: 'The Artisan Bars',
    shape: 'Artisan Bar · 11 Pcs Box',
    badge: 'Party Pack',
    description: 'Loaded with crunchy Oreo pieces and enveloped in smooth chocolate, these bars turn a classic cookie into an indulgent chocolate experience.',
    mainImage: '/products/floating/cookie-crunch-bar-studio.jpg',
    cutout: '/products/floating/cookie-crunch-bar-floating.png',
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
    defaultQty: '11 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '11 Pieces': 169
    },
    quantities: ['11 Pieces']
  },
  'modak-royale': {
    id: 'modak-royale',
    name: 'Modak Royale',
    flavour: 'Chocolate Modak',
    category: 'The Artisan Bars',
    shape: 'Festive Modak · 21 Pcs',
    badge: 'Festive Exclusive',
    description: 'Festive handcrafted chocolate modaks with 1–2 whole almonds nestled inside, inspired by timeless sacred tradition and crafted with an artisanal royal touch.',
    mainImage: '/products/floating/modak-royale-studio.jpg',
    cutout: '/products/floating/modak-royale-floating.png',
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
    defaultQty: '21 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '21 Pieces': 249
    },
    quantities: ['21 Pieces']
  },
  'cookie-heart': {
    id: 'cookie-heart',
    name: 'Cookie Heart',
    flavour: 'Oreo Heart',
    category: 'Sweet Hearts',
    shape: 'Diamond Faceted Heart · 12 & 18 Pcs',
    badge: 'Romantic Bestseller',
    description: 'Crunchy Oreo pieces wrapped in smooth, indulgent chocolate, crafted into a charming faceted 3D diamond heart with dark cookie crumbs and white drizzle for a playful yet irresistible treat.',
    mainImage: '/products/floating/cookie-heart-studio.jpg',
    cutout: '/products/floating/cookie-heart-floating.png',
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
    defaultQty: '12 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '12 Pieces': 499,
      '18 Pieces': 699
    },
    quantities: ['12 Pieces', '18 Pieces']
  },
  'royal-heart': {
    id: 'royal-heart',
    name: 'Royal Heart',
    flavour: 'Mix Dry Fruit Heart',
    category: 'Sweet Hearts',
    shape: 'Diamond Faceted Heart · 12 & 18 Pcs',
    badge: 'Royal Indulgence',
    description: 'A delicate faceted 3D diamond heart filled with premium mix dry fruits, wrapped in smooth, rich chocolate.',
    mainImage: '/products/floating/royal-heart-studio.jpg',
    cutout: '/products/floating/royal-heart-isolated.png',
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
    defaultQty: '12 Pieces',
    defaultBase: 'Assorted Flavours',
    prices: {
      '12 Pieces': 449,
      '18 Pieces': 649
    },
    quantities: ['12 Pieces', '18 Pieces']
  }
};

// Global State
let currentProduct = null;
let currentBase = 'Assorted Flavours';
let currentQty = '4 Pieces';

// --------------------------------------------------------------------------
// Multi-layer Clipboard Helper
// --------------------------------------------------------------------------
function copyTextDirect(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  } catch (err) {}
}

// --------------------------------------------------------------------------
// Instagram Direct Redirection & Auto-Write Solution
// --------------------------------------------------------------------------
window.buyOnInstagram = function (customMsg) {
  const msg = customMsg || INSTA_DEFAULT_MSG;
  
  // 1. Instantly copy the message to clipboard
  copyTextDirect(msg);

  // 2. Open / show the interactive Instagram prompt dialog
  showInstaPrompt(msg);

  // 3. Launch Instagram direct URL
  const igUrl = `https://ig.me/m/${INSTA_HANDLE}?text=${encodeURIComponent(msg)}`;
  setTimeout(() => {
    window.open(igUrl, '_blank', 'noopener,noreferrer');
  }, 250);
};

window.buyCurrentModalOnInstagram = function () {
  if (!currentProduct) {
    window.buyOnInstagram();
    return;
  }
  const price = currentProduct.prices[currentQty] || Object.values(currentProduct.prices)[0];
  const freeDeliveryNote = price >= 999 ? ' (Free Delivery applied!)' : '';
  const customMsg = `Hey i am intrested to buy some chocolates ! Specifically: ${currentProduct.name} (${currentProduct.flavour}) - ${currentQty}, Base: ${currentBase} (₹${price})${freeDeliveryNote}.`;
  window.buyOnInstagram(customMsg);
};

function showInstaPrompt(msg) {
  let modal = document.getElementById('syauraInstaPrompt');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'syauraInstaPrompt';
    modal.className = 'insta-prompt-backdrop';
    modal.innerHTML = `
      <div class="insta-prompt-card">
        <div class="insta-prompt-header">
          <span class="insta-prompt-badge">✦ INSTAGRAM DIRECT ORDER</span>
          <button class="insta-prompt-close" onclick="closeInstaPrompt()">&times;</button>
        </div>
        <h3 class="insta-prompt-title">Message Ready &amp; Copied!</h3>
        <p class="insta-prompt-sub">We've copied your order message to your clipboard so you can paste it directly into Instagram chat.</p>
        
        <div class="insta-prompt-msgbox">
          <span class="insta-prompt-msgtext" id="instaPromptText">${msg}</span>
          <button type="button" class="btn-copy-chip" onclick="copyPromptMsgAgain()">
            <span id="copyChipLabel">✓ Copied to Clipboard</span>
          </button>
        </div>

        <div class="insta-prompt-instructions">
          <div class="prompt-step">
            <span class="step-num">1</span>
            <span>Opening Instagram DM chat with <strong>@${INSTA_HANDLE}</strong></span>
          </div>
          <div class="prompt-step">
            <span class="step-num">2</span>
            <span>Simply <strong>Paste (Ctrl+V or tap Paste)</strong> into the chat message bar &amp; hit Send!</span>
          </div>
        </div>

        <div class="insta-prompt-actions">
          <a id="instaLaunchBtn" href="https://ig.me/m/${INSTA_HANDLE}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener" class="btn-gold" style="flex:1; text-align:center; padding:12px 20px;">
            Open Instagram Chat ↗
          </a>
          <button type="button" class="btn-outline" onclick="closeInstaPrompt()" style="padding:12px 20px;">
            Done
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    const textEl = document.getElementById('instaPromptText');
    const launchBtn = document.getElementById('instaLaunchBtn');
    if (textEl) textEl.textContent = msg;
    if (launchBtn) launchBtn.href = `https://ig.me/m/${INSTA_HANDLE}?text=${encodeURIComponent(msg)}`;
    const copyLabel = document.getElementById('copyChipLabel');
    if (copyLabel) copyLabel.textContent = '✓ Copied to Clipboard';
  }

  modal.classList.add('open');
}

window.closeInstaPrompt = function () {
  const modal = document.getElementById('syauraInstaPrompt');
  if (modal) modal.classList.remove('open');
};

window.copyPromptMsgAgain = function () {
  const textEl = document.getElementById('instaPromptText');
  const msg = textEl ? textEl.textContent : INSTA_DEFAULT_MSG;
  copyTextDirect(msg);
  const copyLabel = document.getElementById('copyChipLabel');
  if (copyLabel) {
    copyLabel.textContent = '✓ Copied Again!';
    setTimeout(() => {
      copyLabel.textContent = '✓ Copied to Clipboard';
    }, 1800);
  }
};

// --------------------------------------------------------------------------
// Product Modal Handlers
// --------------------------------------------------------------------------
window.openProductModal = function (productId) {
  const prod = SYAURA_CATALOG[productId];
  if (!prod) return;

  currentProduct = prod;
  const hasBases = prod.baseCustomizable && prod.availableBases && prod.availableBases.length > 0;
  currentBase = hasBases ? (prod.defaultBase || prod.availableBases[0]) : prod.flavour;
  currentQty = prod.defaultQty || prod.quantities[0];

  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalFlavour = document.getElementById('modalFlavour');
  const modalDesc = document.getElementById('modalDesc');
  const modalBadge = document.getElementById('modalBadge');
  const modalShapeTag = document.getElementById('modalShapeTag');
  const modalMainImg = document.getElementById('modalMainImg');
  const modalThumbStrip = document.getElementById('modalThumbStrip');
  const modalBaseChips = document.getElementById('modalBaseChips');
  const modalSelectedBaseLabel = document.getElementById('modalSelectedBaseLabel');

  if (modalTitle) modalTitle.textContent = prod.name;
  if (modalFlavour) modalFlavour.textContent = prod.flavour;
  if (modalDesc) modalDesc.textContent = prod.description;
  if (modalBadge) modalBadge.textContent = prod.badge;
  if (modalShapeTag) modalShapeTag.textContent = prod.shape;

  // Set main image to default or base image
  if (modalMainImg) {
    if (hasBases && prod.baseImages && prod.baseImages[currentBase]) {
      modalMainImg.src = prod.baseImages[currentBase];
    } else {
      modalMainImg.src = prod.gallery[0] || prod.mainImage;
    }
    modalMainImg.alt = prod.name;
  }

  // Populate thumbnails
  if (modalThumbStrip) {
    modalThumbStrip.innerHTML = '';
    prod.gallery.forEach((imgSrc, idx) => {
      const thumb = document.createElement('div');
      const isInitialActive = hasBases && prod.baseImages && prod.baseImages[currentBase]
        ? imgSrc === prod.baseImages[currentBase]
        : idx === 0;
      thumb.className = `modal-thumb modal-thumb-item ${isInitialActive ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${imgSrc}" alt="${prod.name} view ${idx + 1}" loading="lazy">`;
      thumb.addEventListener('click', () => {
        if (modalMainImg) {
          modalMainImg.style.opacity = '0.35';
          setTimeout(() => {
            modalMainImg.src = imgSrc;
            modalMainImg.style.opacity = '1';
          }, 100);
        }
        modalThumbStrip.querySelectorAll('.modal-thumb, .modal-thumb-item').forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active');
      });
      modalThumbStrip.appendChild(thumb);
    });
  }

  // Setup Base Chips: Dynamically render all available base chips
  const modalBaseGroup = document.getElementById('modalBaseGroup');
  if (modalBaseGroup) {
    if (hasBases) {
      modalBaseGroup.style.display = 'block';
      if (modalBaseChips) {
        modalBaseChips.innerHTML = '';
        const baseIcons = {
          'Assorted Flavours': '✨',
          'Milk Chocolate': '🥛',
          'Dark Chocolate': '🍫',
          'White Chocolate': '🤍'
        };
        prod.availableBases.forEach((baseName) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'base-chip' + (baseName === currentBase ? ' active' : '');
          btn.setAttribute('data-base', baseName);
          const icon = baseIcons[baseName] || '✦';
          btn.textContent = `${icon} ${baseName}`;
          btn.addEventListener('click', () => {
            selectChocolateBase(baseName);
          });
          modalBaseChips.appendChild(btn);
        });
      }
    } else {
      modalBaseGroup.style.display = 'none';
    }
  }

  if (modalSelectedBaseLabel) modalSelectedBaseLabel.textContent = currentBase;

  renderModalQtyChips();
  updateModalPriceAndLink();

  if (modal) {
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
};

function selectChocolateBase(baseName) {
  currentBase = baseName;
  const modalSelectedBaseLabel = document.getElementById('modalSelectedBaseLabel');
  if (modalSelectedBaseLabel) modalSelectedBaseLabel.textContent = currentBase;

  const modalBaseChips = document.getElementById('modalBaseChips');
  if (modalBaseChips) {
    modalBaseChips.querySelectorAll('.base-chip').forEach((chip) => {
      chip.classList.toggle('active', chip.getAttribute('data-base') === currentBase);
    });
  }

  // Dynamic Image Switching based on Flavor/Base selection!
  if (currentProduct && currentProduct.baseImages && currentProduct.baseImages[baseName]) {
    const modalMainImg = document.getElementById('modalMainImg');
    const targetSrc = currentProduct.baseImages[baseName];
    if (modalMainImg) {
      modalMainImg.style.transition = 'opacity 0.18s ease';
      modalMainImg.style.opacity = '0.35';
      setTimeout(() => {
        modalMainImg.src = targetSrc;
        modalMainImg.style.opacity = '1';
      }, 120);
    }
    
    // Also highlight thumbnail matching this base if present in gallery
    const modalThumbStrip = document.getElementById('modalThumbStrip');
    if (modalThumbStrip) {
      modalThumbStrip.querySelectorAll('.modal-thumb, .modal-thumb-item').forEach((thumb) => {
        const img = thumb.querySelector('img');
        if (img && img.src.includes(targetSrc.replace('/products/', ''))) {
          thumb.classList.add('active');
        } else {
          thumb.classList.remove('active');
        }
      });
    }
  }

  updateModalPriceAndLink();
}

function renderModalQtyChips() {
  const modalQtyChips = document.getElementById('modalQtyChips');
  const modalSelectedQtyLabel = document.getElementById('modalSelectedQtyLabel');
  if (!modalQtyChips || !currentProduct) return;

  modalQtyChips.innerHTML = '';
  const qtys = currentProduct.quantities || Object.keys(currentProduct.prices);

  if (!qtys.includes(currentQty)) {
    currentQty = qtys[0];
  }

  qtys.forEach((qty) => {
    const chip = document.createElement('div');
    chip.className = `qty-chip ${qty === currentQty ? 'active' : ''}`;
    const price = currentProduct.prices[qty];
    chip.innerHTML = `${qty} <span style="font-size:11px; opacity:0.8;">(₹${price})</span>`;
    chip.addEventListener('click', () => {
      currentQty = qty;
      renderModalQtyChips();
      updateModalPriceAndLink();
    });
    modalQtyChips.appendChild(chip);
  });

  if (modalSelectedQtyLabel) modalSelectedQtyLabel.textContent = currentQty;
}

function updateModalPriceAndLink() {
  if (!currentProduct) return;
  const priceVal = document.getElementById('modalPriceVal');
  const priceSubtext = document.getElementById('modalPriceSubtext');
  const price = currentProduct.prices[currentQty] || Object.values(currentProduct.prices)[0];

  if (priceVal) priceVal.textContent = `₹${price}`;
  if (priceSubtext) {
    const deliveryNote = price >= 999 ? '✦ Free Delivery Included!' : '✦ Free Delivery on orders above ₹999';
    priceSubtext.textContent = `${currentQty} · ${currentBase} · ${deliveryNote}`;
  }
}

window.closeProductModal = function () {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
};

// --------------------------------------------------------------------------
// Spotlight Poster Switcher
// --------------------------------------------------------------------------
const FLOATING_POSTERS = {
  'almond-crush': {
    id: 'almond-crush',
    title: 'Almond Crush',
    badgeTitle: 'Almond Crush',
    poster: '/products/floating/almond-crush-studio.jpg',
    desc: 'Roasted almond goodness meets luscious chocolate, creating a beautifully crunchy bite with a rich, nutty finish. Handcrafted with slow-roasted whole almonds and rich chocolate.',
    pills: ['✦ Slow-Roasted Whole Almonds', '✦ Rich Artisanal Chocolate', '✦ 4 & 6 Piece Gift Boxes', '✦ Artisanal Keepsake Box'],
    btnText: 'Explore Almond Crush ✦'
  },
  'cookie-crumble': {
    id: 'cookie-crumble',
    title: 'Cookie Crumble',
    badgeTitle: 'Cookie Crumble',
    poster: '/products/floating/cookie-crumble-studio.jpg',
    desc: 'A delightful bite of crunchy Oreo wrapped in smooth, indulgent chocolate. Handcrafted into delicate Oreo Ball truffles with fine chocolate ribbon drizzle.',
    pills: ['✦ Crushed Oreo Truffles', '✦ Signature Chocolate Ribbon', '✦ 4 & 6 Piece Gift Boxes', '✦ Rich Artisanal Chocolate'],
    btnText: 'Explore Cookie Crumble ✦'
  },
  'biscoff-baby': {
    id: 'biscoff-baby',
    title: 'Biscoff Baby',
    badgeTitle: 'Biscoff Baby',
    poster: '/products/floating/biscoff-baby-studio.jpg',
    desc: 'Handcrafted white chocolate square topped with Belgian speculoos swirl and crunchy Lotus Biscoff biscuit crumble. A warm, caramelised bite in every piece.',
    pills: ['✦ Lotus Biscoff Crumb', '✦ Belgian Speculoos Swirl', '✦ 4 & 6 Piece Gift Boxes', '✦ Artisanal Keepsake Box'],
    btnText: 'Explore Biscoff Baby ✦'
  },
  'royal-crunch': {
    id: 'royal-crunch',
    title: 'Royal Crunch',
    badgeTitle: 'Royal Crunch',
    poster: '/products/floating/royal-crunch-studio.jpg',
    desc: 'A luxurious blend of assorted roasted mix dry fruits encased in rich chocolate, crafted into an elegant square bite bringing together royal richness and satisfying crunch in every bite.',
    pills: ['✦ Roasted Mix Dry Fruits', '✦ Rich Artisanal Chocolate', '✦ 4 & 6 Piece Gift Boxes', '✦ Square Artisan Pcs'],
    btnText: 'Explore Royal Crunch ✦'
  }
};

window.switchFloatingPoster = function (flavourKey) {
  const data = FLOATING_POSTERS[flavourKey];
  if (!data) return;

  const img = document.getElementById('floatingPosterImg');
  const badgeTitle = document.getElementById('floatingPosterBadgeTitle');
  const copyTitle = document.getElementById('floatingCopyTitle');
  const copyDesc = document.getElementById('floatingCopyDesc');
  const pillsRow = document.getElementById('floatingPillsRow');
  const exploreBtn = document.getElementById('floatingExploreBtn');

  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = data.poster;
      img.alt = `${data.title} Artisan Showcase`;
      img.style.opacity = '1';
    }, 150);
  }

  if (badgeTitle) badgeTitle.textContent = data.badgeTitle;
  if (copyTitle) copyTitle.textContent = data.title;
  if (copyDesc) copyDesc.textContent = data.desc;

  if (pillsRow && data.pills) {
    pillsRow.innerHTML = data.pills.map((pill) => `<span class="floating-pill">${pill}</span>`).join('');
  }

  if (exploreBtn) {
    exploreBtn.textContent = data.btnText;
    exploreBtn.onclick = () => openProductModal(data.id);
  }

  const switcher = document.getElementById('flavourSwitcher');
  if (switcher) {
    switcher.querySelectorAll('.flavour-pill-btn').forEach((btn) => {
      btn.classList.remove('active');
      if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(flavourKey)) {
        btn.classList.add('active');
      }
    });
  }
};

// --------------------------------------------------------------------------
// Gallery Category Filter
// --------------------------------------------------------------------------
window.filterGallery = function (category) {
  const buttons = document.querySelectorAll('.gallery-filter-btn');
  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });

  const cards = document.querySelectorAll('.gallery-card-luxury');
  cards.forEach((card) => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
      card.style.opacity = '0';
    }
  });
};

// --------------------------------------------------------------------------
// Price List Lightbox Modal
// --------------------------------------------------------------------------
window.openPriceCardModal = function () {
  const modal = document.getElementById('priceCardModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closePriceCardModal = function () {
  const modal = document.getElementById('priceCardModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// --------------------------------------------------------------------------
// Customer Reviews Loader & Submissions
// --------------------------------------------------------------------------
async function loadLiveReviews() {
  try {
    const res = await fetch('/api/reviews');
    if (!res.ok) return;
    const data = await res.json();
    renderReviewsSection(data);
  } catch (err) {
    console.warn('Live reviews unavailable:', err);
  }
}

function renderReviewsSection(data) {
  const { summary, reviews } = data;

  const countEl = document.getElementById('reviewCountBadge');
  const avgEl = document.getElementById('summaryAvgRating');
  const starsEl = document.getElementById('summaryStarsDisplay');
  const recEl = document.getElementById('recommendedPercent');

  if (countEl) countEl.textContent = `${summary.count} Verified Patron Notes`;
  if (avgEl) avgEl.textContent = summary.averageRating;
  if (recEl) recEl.textContent = `${summary.recommendedPercent}%`;

  if (starsEl) {
    const fullStars = Math.floor(summary.averageRatingNum || 5);
    starsEl.innerHTML = '★'.repeat(fullStars) + (summary.averageRatingNum % 1 >= 0.5 ? '½' : '');
  }

  [5, 4, 3, 2, 1].forEach((s) => {
    const fillEl = document.getElementById(`distFill${s}`);
    const pctEl = document.getElementById(`distPct${s}`);
    const pct = summary.percentages[s] || 0;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (pctEl) pctEl.textContent = `${pct}%`;
  });

  const grid = document.getElementById('liveReviewsGrid');
  if (!grid || !reviews) return;

  grid.innerHTML = reviews.map((r) => `
    <div class="review-luxury-card ${r.featured ? 'featured-review' : ''}">
      <div class="review-card-top">
        <div class="reviewer-avatar">${(r.name || 'P')[0].toUpperCase()}</div>
        <div class="reviewer-meta">
          <div class="reviewer-name">
            <span>${r.name}</span>
            ${r.verified ? '<span class="verified-pill">✓ Verified Patron</span>' : ''}
          </div>
          <div class="reviewer-sub">${r.city} · Ordered: <em>${r.flavour}</em></div>
        </div>
      </div>
      <div class="review-stars-row">
        <span class="stars-gold">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
        <span class="review-date-text">${new Date(r.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </div>
      <p class="review-body-text">"${r.comment}"</p>
      ${r.quote ? `<div class="review-pullquote">"${r.quote}"</div>` : ''}
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// Advanced Custom Gifting & Bespoke Inquiry Controller
// --------------------------------------------------------------------------
const inquiryState = {
  occasion: 'Wedding & Favours',
  flavours: ['Cookie Crumble (Oreo Ball)', 'Royal Crunch (Mix Dry Fruit)'],
  base: 'Assorted Flavours',
  quantity: '6–15 Boxes',
  targetDate: '',
  city: 'Kalyan',
  packaging: ['Handwritten Note Card', 'Golden Satin Ribbon'],
  clientName: '',
  clientInsta: '',
  clientEmail: '',
  budget: '',
  notes: ''
};

window.switchInquiryMode = function (mode) {
  const createView = document.getElementById('inquiryCreateView');
  const trackView = document.getElementById('inquiryTrackView');
  const btnCreate = document.getElementById('tabBtnCreateInquiry');
  const btnTrack = document.getElementById('tabBtnTrackInquiry');

  if (mode === 'create') {
    if (createView) createView.style.display = 'block';
    if (trackView) trackView.style.display = 'none';
    if (btnCreate) btnCreate.classList.add('active');
    if (btnTrack) btnTrack.classList.remove('active');
  } else {
    if (createView) createView.style.display = 'none';
    if (trackView) trackView.style.display = 'block';
    if (btnCreate) btnCreate.classList.remove('active');
    if (btnTrack) btnTrack.classList.add('active');
  }
};

window.selectOccasion = function (btn, occasion) {
  document.querySelectorAll('.occasion-card').forEach((el) => el.classList.remove('active'));
  btn.classList.add('active');
  inquiryState.occasion = occasion;
  window.updateInquirySummary();
};

window.toggleFlavourChip = function (btn, flavour) {
  const idx = inquiryState.flavours.indexOf(flavour);
  if (idx > -1) {
    if (inquiryState.flavours.length > 1) {
      inquiryState.flavours.splice(idx, 1);
      btn.classList.remove('active');
      const check = btn.querySelector('.chip-check');
      if (check) check.textContent = '+';
    }
  } else {
    inquiryState.flavours.push(flavour);
    btn.classList.add('active');
    const check = btn.querySelector('.chip-check');
    if (check) check.textContent = '✓';
  }
  window.updateInquirySummary();
};

window.selectInquiryBase = function (btn, base) {
  document.querySelectorAll('.inquiry-base-btn').forEach((el) => el.classList.remove('active'));
  btn.classList.add('active');
  inquiryState.base = base;
  window.updateInquirySummary();
};

window.selectInquiryQty = function (btn, qty) {
  document.querySelectorAll('.inquiry-qty-btn').forEach((el) => el.classList.remove('active'));
  btn.classList.add('active');
  inquiryState.quantity = qty;
  window.updateInquirySummary();
};

window.toggleAddon = function (input) {
  const card = input.closest('.addon-check-card');
  if (card) {
    card.classList.toggle('active', input.checked);
  }
  const addons = [];
  document.querySelectorAll('.addon-checkbox:checked').forEach((ch) => {
    addons.push(ch.value);
  });
  inquiryState.packaging = addons;
  window.updateInquirySummary();
};

window.updateInquirySummary = function () {
  const dateInput = document.getElementById('inquiryEventDate');
  const citySelect = document.getElementById('inquiryCitySelect');
  const nameInput = document.getElementById('inquiryClientName');
  const instaInput = document.getElementById('inquiryClientInsta');
  const emailInput = document.getElementById('inquiryClientEmail');
  const budgetInput = document.getElementById('inquiryBudgetGuide');
  const notesInput = document.getElementById('inquirySpecialNotes');

  if (dateInput) inquiryState.targetDate = dateInput.value;
  if (citySelect) inquiryState.city = citySelect.value;
  if (nameInput) inquiryState.clientName = nameInput.value.trim();
  if (instaInput) inquiryState.clientInsta = instaInput.value.trim();
  if (emailInput) inquiryState.clientEmail = emailInput.value.trim();
  if (budgetInput) inquiryState.budget = budgetInput.value.trim();
  if (notesInput) inquiryState.notes = notesInput.value.trim();

  const occVal = document.getElementById('summaryOccasionVal');
  const baseVal = document.getElementById('summaryBaseVal');
  const qtyVal = document.getElementById('summaryQtyVal');
  const locVal = document.getElementById('summaryLocationVal');
  const dateRow = document.getElementById('summaryDateRow');
  const dateVal = document.getElementById('summaryDateVal');
  const tagsWrap = document.getElementById('summaryCreationsTags');
  const addonsList = document.getElementById('summaryAddonsList');

  if (occVal) occVal.textContent = inquiryState.occasion;
  if (baseVal) baseVal.textContent = inquiryState.base;
  if (qtyVal) qtyVal.textContent = inquiryState.quantity;
  if (locVal) locVal.textContent = inquiryState.city;

  if (dateRow && dateVal) {
    if (inquiryState.targetDate) {
      dateRow.style.display = 'flex';
      dateVal.textContent = new Date(inquiryState.targetDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } else {
      dateRow.style.display = 'none';
    }
  }

  if (tagsWrap) {
    tagsWrap.innerHTML = inquiryState.flavours.map((f) => {
      const short = f.split('(')[0].trim();
      return `<span class="mini-tag">${short}</span>`;
    }).join('');
  }

  if (addonsList) {
    if (inquiryState.packaging.length > 0) {
      addonsList.innerHTML = inquiryState.packaging.map((p) => `<span>• ${p}</span>`).join('');
    } else {
      addonsList.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">Standard Packaging</span>`;
    }
  }
};

window.handleInquirySubmit = async function (e) {
  e.preventDefault();
  window.updateInquirySummary();

  const submitBtn = document.getElementById('submitInquiryBtn');
  const statusMsg = document.getElementById('inquirySubmitStatus');

  if (statusMsg) {
    statusMsg.style.display = 'none';
    statusMsg.className = 'inquiry-status-msg';
  }

  if (!inquiryState.clientName || (!inquiryState.clientEmail && !inquiryState.clientInsta)) {
    if (statusMsg) {
      statusMsg.textContent = 'Please enter your Full Name, along with your Email Address or Instagram handle.';
      statusMsg.classList.add('error');
      statusMsg.style.display = 'block';
    }
    return;
  }

  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Recording Bespoke Inquiry...</span> ⏳';
  }

  try {
    const payload = {
      name: inquiryState.clientName,
      email: inquiryState.clientEmail,
      instagram: inquiryState.clientInsta,
      area: inquiryState.city,
      occasion: inquiryState.occasion,
      flavours: inquiryState.flavours,
      base: inquiryState.base,
      quantity: inquiryState.quantity,
      packaging: inquiryState.packaging,
      targetDate: inquiryState.targetDate,
      budget: inquiryState.budget,
      notes: inquiryState.notes
    };

    const res = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Failed to submit inquiry.');
    }

    // Populate and open success modal
    const modalRef = document.getElementById('inquiryModalRef');
    const modalOccasion = document.getElementById('inquiryModalOccasion');
    const modalQty = document.getElementById('inquiryModalQty');
    const modalMessage = document.getElementById('inquiryModalMessage');
    const modalEmailBtn = document.getElementById('inquiryModalEmailBtn');

    if (modalRef) modalRef.textContent = data.inquiryId;
    if (modalOccasion) modalOccasion.textContent = inquiryState.occasion;
    if (modalQty) modalQty.textContent = inquiryState.quantity;
    if (modalMessage) {
      modalMessage.textContent = `Thank you, ${inquiryState.clientName}! Your bespoke inquiry has been registered. Reference: ${data.inquiryId}. Connect with us on Instagram (@syaura.shop) or via Email.`;
    }
    if (modalEmailBtn) {
      modalEmailBtn.href = `mailto:syaurashop@gmail.com?subject=Bespoke%20Inquiry%20Ref%20${data.inquiryId}&body=Hello%20SYAURA%20Concierge!%20My%20Inquiry%20Reference%20is%20${data.inquiryId}...`;
    }

    window.openInquiryModal();
  } catch (err) {
    if (statusMsg) {
      statusMsg.textContent = err.message || 'Something went wrong. Please connect via Instagram (@syaura.shop) or Email (syaurashop@gmail.com).';
      statusMsg.classList.add('error');
      statusMsg.style.display = 'block';
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  }
};

window.openInquiryModal = function () {
  const modal = document.getElementById('inquirySuccessModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeInquiryModal = function () {
  const modal = document.getElementById('inquirySuccessModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.trackInquiryStatus = async function () {
  const input = document.getElementById('trackQueryInput');
  const resultWrap = document.getElementById('trackResultContainer');
  if (!input || !resultWrap) return;

  const q = input.value.trim();
  if (!q) {
    resultWrap.style.display = 'block';
    resultWrap.innerHTML = `
      <div style="color: #ef9a9a; text-align: center; font-size: 14px; padding: 12px;">
        Please enter an Inquiry Reference ID or your registered Email/Instagram handle.
      </div>`;
    return;
  }

  resultWrap.style.display = 'block';
  resultWrap.innerHTML = `
    <div style="text-align: center; color: var(--gold-light); font-size: 14px; padding: 16px;">
      Checking concierge records... ⏳
    </div>`;

  try {
    const res = await fetch(`/api/inquiries/track?ref=${encodeURIComponent(q)}`);
    const data = await res.json();

    if (!res.ok || !data.success || !data.found) {
      resultWrap.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <h4 style="color: #ef9a9a; margin-bottom: 6px; font-size: 16px;">No Inquiry Record Found</h4>
          <p style="color: var(--text-muted); font-size: 13.5px; margin-bottom: 14px;">
            ${data.message || 'We could not find an active inquiry matching this search. Please check your reference ID or Email.'}
          </p>
          <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
            <a href="https://www.instagram.com/syaura.shop/" target="_blank" rel="noopener" class="btn-gold" style="display: inline-flex; padding: 9px 20px; font-size: 13px; text-decoration: none;">
              Message on Instagram (@syaura.shop) ↗
            </a>
            <a href="mailto:syaurashop@gmail.com?subject=Inquiry%20Status%20Query:%20${encodeURIComponent(q)}" class="btn-outline" style="display: inline-flex; padding: 9px 20px; font-size: 13px; text-decoration: none;">
              Email Us ✉
            </a>
          </div>
        </div>`;
      return;
    }

    const inq = data.inquiry;
    const dateStr = inq.createdAt
      ? new Date(inq.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      : 'Recent';

    let statusLabel = '✦ Under Concierge Review';
    let statusDesc = 'Your request has been received. Our concierge team will reach out via Instagram DM or Email with custom box layouts and exact pricing.';

    if ((inq.status || '').toLowerCase().includes('confirm')) {
      statusLabel = '✓ Confirmed & Production Scheduled';
      statusDesc = 'Your bespoke inquiry has been approved and scheduled for freshly handcrafted small-batch crafting.';
    } else if ((inq.status || '').toLowerCase().includes('deliver')) {
      statusLabel = '🎉 Crafted & Dispatched';
      statusDesc = 'Your luxury chocolates have been crafted, packaged, and dispatched.';
    }

    const emailSubject = encodeURIComponent(`SYAURA Inquiry Status Check — ${inq.id}`);
    const emailBody = encodeURIComponent(`Hello SYAURA Concierge!\n\nI am inquiring about my inquiry reference ${inq.id} (${inq.occasion}).\n\nClient Name: ${inq.name || ''}\nSelected: ${inq.selection || ''}`);
    const mailtoUrl = `mailto:syaurashop@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    resultWrap.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; border-bottom: 1px solid rgba(212,175,55,0.25); padding-bottom: 14px;">
        <div>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Inquiry Reference</span>
          <h4 style="font-family: var(--font-mono); font-size: 17px; color: var(--gold-light); margin: 2px 0 0;">${inq.id}</h4>
        </div>
        <div style="text-align: right;">
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); text-transform: uppercase;">Submitted On</span>
          <div style="font-size: 13px; color: #fff;">${dateStr}</div>
        </div>
      </div>

      <div style="margin-bottom: 18px; padding: 14px; background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.3); border-radius: 12px;">
        <strong style="color: var(--gold-light); font-size: 14px; display: block; margin-bottom: 4px;">${statusLabel}</strong>
        <p style="font-size: 12.5px; color: var(--text-muted); margin: 0; line-height: 1.4;">${statusDesc}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin-bottom: 20px;">
        <div>
          <small style="color: var(--text-muted); font-size: 11.5px; display: block;">Occasion</small>
          <strong style="color: #fff; font-size: 13.5px;">${inq.occasion}</strong>
        </div>
        <div>
          <small style="color: var(--text-muted); font-size: 11.5px; display: block;">Quantity Volume</small>
          <strong style="color: var(--gold-light); font-size: 13.5px;">${inq.quantity}</strong>
        </div>
        <div>
          <small style="color: var(--text-muted); font-size: 11.5px; display: block;">Chocolate Base</small>
          <strong style="color: #fff; font-size: 13.5px;">${inq.base}</strong>
        </div>
        <div>
          <small style="color: var(--text-muted); font-size: 11.5px; display: block;">Dispatch Region</small>
          <strong style="color: #fff; font-size: 13.5px;">${inq.area}</strong>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <small style="color: var(--text-muted); font-size: 11.5px; display: block; margin-bottom: 4px;">Requested Creations</small>
        <div style="color: #fff; font-size: 13px;">${inq.selection}</div>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 10px; flex-wrap: wrap;">
        <a href="https://www.instagram.com/syaura.shop/" target="_blank" rel="noopener" class="btn-gold" style="padding: 9px 20px; font-size: 13px; text-decoration: none;">
          <span>Message on Instagram (@syaura.shop) ↗</span>
        </a>
        <a href="${mailtoUrl}" class="btn-outline" style="padding: 9px 20px; font-size: 13px; text-decoration: none;">
          <span>Email Concierge ✉</span>
        </a>
      </div>`;
  } catch (err) {
    resultWrap.innerHTML = `
      <div style="color: #ef9a9a; text-align: center; font-size: 13.5px; padding: 12px;">
        Could not connect to tracking server. Please reach out via Instagram (@syaura.shop) or Email (syaurashop@gmail.com).
      </div>`;
  }
};

// --------------------------------------------------------------------------
// Initialization
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Close modals on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closePriceCardModal();
      closeInstaPrompt();
      closeInquiryModal();
    }
  });

  // Close modals on backdrop click
  ['productModal', 'priceCardModal', 'inquirySuccessModal'].forEach((modalId) => {
    const el = document.getElementById(modalId);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          if (modalId === 'productModal') closeProductModal();
          if (modalId === 'priceCardModal') closePriceCardModal();
          if (modalId === 'inquirySuccessModal') closeInquiryModal();
        }
      });
    }
  });

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);

  const priceModalCloseBtn = document.getElementById('priceCardModalCloseBtn');
  if (priceModalCloseBtn) priceModalCloseBtn.addEventListener('click', closePriceCardModal);

  // Initialize summary on page load
  window.updateInquirySummary();

  // Mobile menu toggle (strictly targeting #navLinks)
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks') || document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      document.body.classList.toggle('menu-open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav when clicking any link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Load verified reviews
  loadLiveReviews();

  // Header scroll shadow
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', window.scrollY > 40);
    }
  }, { passive: true });
});
