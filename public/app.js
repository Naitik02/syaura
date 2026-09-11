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
    availableBases: ['Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Milk Chocolate': '/products/bases/cookie-crumble-milk.jpg',
      'Dark Chocolate': '/products/bases/cookie-crumble-dark.jpg',
      'White Chocolate': '/products/bases/cookie-crumble-white.jpg'
    },
    defaultQty: '4 Pieces',
    defaultBase: 'Milk Chocolate',
    prices: {
      '4 Pieces': 139,
      '6 Pieces': 169
    },
    quantities: ['4 Pieces', '6 Pieces']
  },
  'royal-crunch': {
    id: 'royal-crunch',
    name: 'Royal Crunch',
    flavour: 'Mixed Dry Fruit Square',
    category: 'Choco Bites',
    shape: 'Square Pcs · 4 & 6 per box',
    badge: 'Royal Selection',
    description: 'A luxurious blend of assorted roasted dry fruits encased in rich chocolate, crafted into an elegant square bite bringing together royal richness and satisfying crunch in every bite.',
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
    availableBases: ['Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Milk Chocolate': '/products/bases/royal-crunch-milk.jpg',
      'Dark Chocolate': '/products/bases/royal-crunch-dark.jpg',
      'White Chocolate': '/products/bases/royal-crunch-white.jpg'
    },
    defaultQty: '4 Pieces',
    defaultBase: 'Milk Chocolate',
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
    availableBases: ['Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Milk Chocolate': '/products/bases/cookie-crave-milk.jpg',
      'Dark Chocolate': '/products/bases/cookie-crave-dark.jpg',
      'White Chocolate': '/products/bases/cookie-crave-white.jpg'
    },
    defaultQty: '4 Pieces',
    defaultBase: 'Milk Chocolate',
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
    availableBases: ['Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Milk Chocolate': '/products/bases/almond-crush-milk.jpg',
      'Dark Chocolate': '/products/bases/almond-crush-dark.jpg',
      'White Chocolate': '/products/bases/almond-crush-white.jpg'
    },
    defaultQty: '4 Pieces',
    defaultBase: 'Milk Chocolate',
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
    availableBases: ['White Chocolate', 'Milk Chocolate', 'Dark Chocolate'],
    baseImages: {
      'White Chocolate': '/products/bases/biscoff-baby-white.jpg',
      'Milk Chocolate': '/products/bases/biscoff-baby-milk.jpg',
      'Dark Chocolate': '/products/bases/biscoff-baby-dark.jpg'
    },
    defaultQty: '4 Pieces',
    defaultBase: 'White Chocolate',
    prices: {
      '4 Pieces': 199,
      '6 Pieces': 239
    },
    quantities: ['4 Pieces', '6 Pieces']
  },
  'nut-noble': {
    id: 'nut-noble',
    name: 'Nut & Noble',
    flavour: 'Mixed Dry Fruit Bar',
    category: 'The Artisan Bars',
    shape: 'Artisan Bar · 11 Pcs Box',
    badge: 'Gifting Special',
    description: 'A generous blend of premium dry fruits wrapped in rich chocolate. Nut & Noble celebrates the naturally luxurious character of every nut.',
    mainImage: '/products/floating/nut-noble-studio.jpg',
    cutout: '/products/floating/nut-noble-floating.png',
    gallery: [
      '/products/floating/nut-noble-studio.jpg',
      '/products/floating/nut-noble-macro.jpg',
      '/products/floating/nut-noble-floating.png'
    ],
    baseCustomizable: false,
    availableBases: [],
    defaultQty: '11 Pieces',
    defaultBase: 'Mixed Dry Fruit Bar',
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
    baseCustomizable: false,
    availableBases: [],
    defaultQty: '11 Pieces',
    defaultBase: 'Oreo Bar',
    prices: {
      '11 Pieces': 169
    },
    quantities: ['11 Pieces']
  },
  'modak-royale': {
    id: 'modak-royale',
    name: 'Modak Royale',
    flavour: 'Dry Fruit Modak Bar',
    category: 'The Artisan Bars',
    shape: 'Festive Sacred Mold · 21 Pcs',
    badge: 'Festive Exclusive',
    description: 'Traditional sacred shape meets modern artisan chocolate elegance. Prepared specially for divine celebrations, festive hampers, and royal gifting.',
    mainImage: '/products/floating/modak-royale-studio.jpg',
    cutout: '/products/floating/modak-royale-floating.png',
    gallery: [
      '/products/floating/modak-royale-studio.jpg',
      '/products/floating/modak-royale-macro.jpg',
      '/products/floating/modak-royale-floating.png'
    ],
    baseCustomizable: false,
    availableBases: [],
    defaultQty: '21 Pieces',
    defaultBase: 'Dry Fruit Modak Bar',
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
    availableBases: ['Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Milk Chocolate': '/products/bases/cookie-heart-milk.jpg',
      'Dark Chocolate': '/products/bases/cookie-heart-dark.jpg',
      'White Chocolate': '/products/bases/cookie-heart-white.jpg'
    },
    defaultQty: '12 Pieces',
    defaultBase: 'Milk Chocolate',
    prices: {
      '12 Pieces': 499,
      '18 Pieces': 699
    },
    quantities: ['12 Pieces', '18 Pieces']
  },
  'royal-heart': {
    id: 'royal-heart',
    name: 'Royal Heart',
    flavour: 'Mixed Dry Fruit Heart',
    category: 'Sweet Hearts',
    shape: 'Diamond Faceted Heart · 12 & 18 Pcs',
    badge: 'Pure Luxury',
    description: 'A delicate faceted 3D diamond heart filled with royal dry fruits, topped with roasted pistachios, golden almond slivers, and rich caramel ribbons wrapped in smooth chocolate.',
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
    availableBases: ['Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
    baseImages: {
      'Milk Chocolate': '/products/bases/royal-heart-milk.jpg',
      'Dark Chocolate': '/products/bases/royal-heart-dark.jpg',
      'White Chocolate': '/products/bases/royal-heart-white.jpg'
    },
    defaultQty: '12 Pieces',
    defaultBase: 'Milk Chocolate',
    prices: {
      '12 Pieces': 449,
      '18 Pieces': 649
    },
    quantities: ['12 Pieces', '18 Pieces']
  }
};

// Global State
let currentProduct = null;
let currentBase = 'Milk Chocolate';
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
  const customMsg = `Hey i am intrested to buy some chocolates ! Specifically: ${currentProduct.name} (${currentProduct.flavour}) - ${currentQty}, Base: ${currentBase} (₹${price}).`;
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

  // Setup Base Chips: Hide completely for single-flavor products (Nut & Noble, Modak Royale, etc.)
  const modalBaseGroup = document.getElementById('modalBaseGroup');
  if (modalBaseGroup) {
    if (hasBases) {
      modalBaseGroup.style.display = 'block';
      if (modalBaseChips) {
        modalBaseChips.querySelectorAll('.base-chip').forEach((chip) => {
          const baseName = chip.getAttribute('data-base');
          if (prod.availableBases.includes(baseName)) {
            chip.style.display = 'inline-flex';
            chip.classList.toggle('active', baseName === currentBase);
          } else {
            chip.style.display = 'none';
          }
          const newChip = chip.cloneNode(true);
          chip.parentNode.replaceChild(newChip, chip);
          newChip.addEventListener('click', () => {
            selectChocolateBase(baseName);
          });
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
  if (priceSubtext) priceSubtext.textContent = `${currentQty} · ${currentBase}`;
}

window.closeProductModal = function () {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('open');
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
    desc: 'Roasted almond goodness meets luscious chocolate, creating a beautifully crunchy bite with a rich, nutty finish. Handcrafted with slow-roasted whole Californian almonds and pure cocoa butter.',
    pills: ['✦ Slow-Roasted Whole Almonds', '✦ Pure Cocoa Butter', '✦ 4 & 6 Piece Gift Boxes', '✦ Artisanal Keepsake Box'],
    btnText: 'Explore Almond Crush ✦'
  },
  'cookie-crumble': {
    id: 'cookie-crumble',
    title: 'Cookie Crumble',
    badgeTitle: 'Cookie Crumble',
    poster: '/products/floating/cookie-crumble-studio.jpg',
    desc: 'A delightful bite of crunchy Oreo wrapped in smooth, indulgent chocolate. Handcrafted into delicate Oreo Ball truffles with fine chocolate ribbon drizzle.',
    pills: ['✦ Crushed Oreo Truffles', '✦ Signature Chocolate Ribbon', '✦ 4 & 6 Piece Gift Boxes', '✦ Pure Cocoa Butter'],
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
    desc: 'A luxurious blend of assorted roasted dry fruits encased in rich chocolate, crafted into an elegant square bite bringing together royal richness and satisfying crunch in every bite.',
    pills: ['✦ Roasted Almonds & Pistachios', '✦ Pure Cocoa Butter', '✦ 4 & 6 Piece Gift Boxes', '✦ Square Artisan Pcs'],
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
    }
  });

  // Close modals on backdrop click
  ['productModal', 'priceCardModal'].forEach((modalId) => {
    const el = document.getElementById(modalId);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          if (modalId === 'productModal') closeProductModal();
          if (modalId === 'priceCardModal') closePriceCardModal();
        }
      });
    }
  });

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);

  const priceModalCloseBtn = document.getElementById('priceCardModalCloseBtn');
  if (priceModalCloseBtn) priceModalCloseBtn.addEventListener('click', closePriceCardModal);

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.querySelector('.main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
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
