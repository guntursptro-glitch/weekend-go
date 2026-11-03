const form = document.getElementById('search-form');
const resultsContainer = document.getElementById('results');

const STORAGE_KEY = 'weekendgo-last-search';

function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID');
}

function searchPlaces() {
  const city = document.getElementById('city').value;
  const area = document.getElementById('area').value;
  const keyword = document.getElementById('keyword').value.trim().toLowerCase();

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

  resultsContainer.innerHTML = list
    .map(function (place) {
      const detailLink = place.address
        ? `<a href="detail.html?id=${place.id}" class="detail-link">Lihat detail</a>`
        : '';

      return `
        <article class="place-card">
          <h2>${place.name}</h2>
          <p class="place-meta">${place.area.replace('-', ' ')}</p>
          <p class="place-price">
            ${formatRupiah(place.priceMin)} - ${formatRupiah(place.priceMax)}
            <small>per orang</small>
          </p>
          <div class="card-links">
            ${detailLink}
            <a href="${place.mapsUrl}" target="_blank" rel="noopener">Buka di Google Maps</a>
          </div>
        </article>
      `;
    })
    .join('');
}

function showResults() {
  renderResults(searchPlaces());
}

function saveSearch() {
  const data = {
    city: document.getElementById('city').value,
    area: document.getElementById('area').value,
    keyword: document.getElementById('keyword').value
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    // Penyimpanan tidak tersedia, abaikan saja
  }
}

function restoreSearch() {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) return false;

    const data = JSON.parse(saved);
    document.getElementById('city').value = data.city;
    document.getElementById('area').value = data.area;
    document.getElementById('keyword').value = data.keyword;
    return true;
  } catch (error) {
    return false;
  }
}

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    saveSearch();
    showResults();
  });

  if (restoreSearch()) {
    showResults();
  }
} else {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // Abaikan
  }
}