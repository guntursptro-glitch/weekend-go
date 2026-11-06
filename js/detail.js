const params = new URLSearchParams(window.location.search);
const placeId = Number(params.get('id'));

const place = places.find(function (item) {
  return item.id === placeId;
});

function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID');
}

function setText(elementId, value) {
  document.getElementById(elementId).textContent = value || 'Belum tersedia';
}

function setupLightbox(photos, placeName, track) {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const count = document.getElementById('lightbox-count');

  let index = 0;
  let isActive = false;

  function show(newIndex) {
    index = (newIndex + photos.length) % photos.length;
    img.src = photos[index];
    img.alt = placeName + ' foto ' + (index + 1);
    count.textContent = index + 1 + ' / ' + photos.length;
  }

  function open(startIndex) {
    isActive = true;

    const hasMany = photos.length > 1;
    prevBtn.style.display = hasMany ? '' : 'none';
    nextBtn.style.display = hasMany ? '' : 'none';
    count.style.display = hasMany ? '' : 'none';

    show(startIndex);
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    isActive = false;
    box.hidden = true;
    document.body.style.overflow = '';
    track.scrollLeft = index * track.clientWidth;
  }

  track.addEventListener('click', function (event) {
    const slide = event.target.closest('.slide');
    if (!slide || !slide.querySelector('img')) return;
    open(Array.from(track.children).indexOf(slide));
  });

  closeBtn.addEventListener('click', function () {
    if (isActive) close();
  });

  box.addEventListener('click', function (event) {
    if (isActive && event.target === box) close();
  });

  prevBtn.addEventListener('click', function () {
    if (isActive) show(index - 1);
  });

  nextBtn.addEventListener('click', function () {
    if (isActive) show(index + 1);
  });

  document.addEventListener('keydown', function (event) {
    if (!isActive || box.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft' && photos.length > 1) show(index - 1);
    if (event.key === 'ArrowRight' && photos.length > 1) show(index + 1);
  });

  let touchStartX = 0;
  let touchStartY = 0;

  box.addEventListener(
    'touchstart',
    function (event) {
      touchStartX = event.changedTouches[0].clientX;
      touchStartY = event.changedTouches[0].clientY;
    },
    { passive: true }
  );

  box.addEventListener(
    'touchend',
    function (event) {
      if (!isActive || photos.length < 2) return;

      const diffX = event.changedTouches[0].clientX - touchStartX;
      const diffY = event.changedTouches[0].clientY - touchStartY;

      if (Math.abs(diffX) < 50 || Math.abs(diffX) < Math.abs(diffY)) return;

      show(diffX < 0 ? index + 1 : index - 1);
    },
    { passive: true }
  );
}

function setupMenuPhotos(menuPhotos, placeName) {
  const section = document.getElementById('menu-photos');
  const grid = document.getElementById('menu-grid');

  if (menuPhotos.length === 0) return;

  grid.innerHTML = menuPhotos
    .map(function (src, index) {
            return `<div class="slide"><img src="${src}" alt="Menu ${placeName} ${index + 1}" loading="lazy"></div>`;
    })
    .join('');

  section.hidden = false;
  setupLightbox(menuPhotos, 'Menu ' + placeName, grid);
}

function setupSlider(photos, placeName) {
  const track = document.getElementById('slider-track');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const counter = document.getElementById('slider-count');

  if (photos.length === 0) {
    track.innerHTML = '<div class="slide">Foto belum tersedia</div>';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    counter.style.display = 'none';
    return;
  }

  track.innerHTML = photos
    .map(function (src, index) {
      return `<div class="slide"><img src="${src}" alt="${placeName} foto ${index + 1}"></div>`;
    })
    .join('');

  setupLightbox(photos, placeName, track);

  if (photos.length === 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    counter.style.display = 'none';
    return;
  }

  function currentIndex() {
    return Math.round(track.scrollLeft / track.clientWidth);
  }

  function updateCounter() {
    counter.textContent = currentIndex() + 1 + ' / ' + photos.length;
  }

  function goTo(index) {
    const safeIndex = Math.max(0, Math.min(index, photos.length - 1));
    track.scrollTo({ left: safeIndex * track.clientWidth, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', function () {
    goTo(currentIndex() - 1);
  });

  nextBtn.addEventListener('click', function () {
    goTo(currentIndex() + 1);
  });

  track.addEventListener('scroll', updateCounter);
  updateCounter();
}

if (!place) {
  document.querySelector('main').innerHTML =
    '<a href="search.html" class="back-link">Kembali ke hasil</a>' +
    '<p class="empty">Tempat tidak ditemukan.</p>';
} else {
  document.title = place.name + ' - Weekend Go';

  setText('place-name', place.name);
  setText('place-meta', place.area.replace('-', ' ') + ' · ' + place.tags.slice(0, 2).join(', '));

  document.getElementById('place-price').innerHTML =
    formatRupiah(place.priceMin) + ' - ' + formatRupiah(place.priceMax) +
    ' <small>per orang</small>';

  setText('place-address', place.address);
  setText('place-hours', place.openHours);
  setText('place-facilities', (place.facilities || []).join(', '));
  setText('place-phone', place.whatsapp);
  setText('price-checked', place.priceCheckedAt);

  const social = [];
  if (place.instagram) social.push('Instagram: ' + place.instagram);
  if (place.tiktok) social.push('TikTok: ' + place.tiktok);
  if (social.length === 0 && place.noSocial) {
    document.getElementById('place-social').textContent = 'Tidak ada akun media sosial';
  } else {
    setText('place-social', social.join(' · '));
  }

  document.getElementById('maps-link').href = place.mapsUrl;

  const waLink = document.getElementById('wa-link');
  if (place.whatsapp) {
    waLink.href = 'https://wa.me/' + place.whatsapp;
  } else {
    waLink.style.display = 'none';
  }

  setupSlider(place.photos || [], place.name);
  setupMenuPhotos(place.menuPhotos || [], place.name);
}

document.addEventListener('click', function (event) {
  const link = event.target.closest('.back-link');

  if (link && window.history.length > 1) {
    event.preventDefault();
    window.history.back();
  }
});