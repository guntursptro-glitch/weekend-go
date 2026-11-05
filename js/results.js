const params = new URLSearchParams(window.location.search);
const city = params.get('city') || 'depok';
const area = params.get('area') || 'all';
const keyword = (params.get('keyword') || '').trim().toLowerCase();

const summary = document.getElementById('summary');
const resultsContainer = document.getElementById('results');

function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID');
}

function titleCase(text) {
  return text
    .split('-')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function searchPlaces() {
  return places.filter(function (place) {
    const matchCity = place.city === city;
    const matchArea = area === 'all' || place.area === area;
    const matchKeyword =
      keyword === '' ||
      place.name.toLowerCase().includes(keyword) ||
      place.tags.some(function (tag) {
        return tag.includes(keyword);
      });

    return matchCity && matchArea && matchKeyword;
  });
}

function renderResults(list) {
  if (list.length === 0) {
    resultsContainer.innerHTML =
      '<p class="empty">Belum ada tempat yang cocok. Coba ubah area atau kata kunci.</p>';
    return;
  }

  const sorted = list.slice().sort(function (a, b) {
    return (b.address ? 1 : 0) - (a.address ? 1 : 0);
  });

  const cards = sorted
    .map(function (place) {
      const hasPhoto = place.photos && place.photos.length > 0;

      const thumb = hasPhoto
        ? `<img class="card-thumb" src="${place.photos[0]}" alt="${place.name}">`
        : `<div class="card-thumb card-thumb-empty">${place.name.charAt(0)}</div>`;

      const chips = place.tags
        .slice(0, 3)
        .map(function (tag) {
          return `<span class="chip">${tag}</span>`;
        })
        .join('');

      const detailButton = place.address
        ? `<a href="detail.html?id=${place.id}" class="btn btn-primary btn-small card-link">Lihat detail</a>`
        : '';

      return `
        <article class="place-card">
          <div class="card-main">
            ${thumb}
            <div class="card-body">
              <h2>${place.name}</h2>
              <p class="place-meta">${titleCase(place.area)}</p>
              <p class="place-price">
                ${formatRupiah(place.priceMin)} - ${formatRupiah(place.priceMax)}
                <small>per orang</small>
              </p>
              <div class="chips">${chips}</div>
            </div>
          </div>
          <div class="card-actions">
            ${detailButton}
            <a href="${place.mapsUrl}" class="btn btn-outline btn-small" target="_blank" rel="noopener">Buka Maps</a>
          </div>
        </article>
      `;
    })
    .join('');

  resultsContainer.innerHTML =
    `<p class="result-count">${sorted.length} tempat ditemukan</p>` + cards;
}

let summaryText = area === 'all' ? 'Semua area' : titleCase(area);
if (keyword) {
  summaryText += ' · ' + keyword;
}
summary.textContent = summaryText;

renderResults(searchPlaces());