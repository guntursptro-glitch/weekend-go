const tabs = document.querySelectorAll('.tab');
const form = document.getElementById('search-form');
const resultsContainer = document.getElementById('results');

let selectedCategory = 'food';

function formatRupiah(number) {
  return 'Rp' + number.toLocaleString('id-ID');
}

function searchPlaces() {
  const city = document.getElementById('city').value;
  const area = document.getElementById('area').value;
  const keyword = document.getElementById('keyword').value.trim().toLowerCase();

  return places.filter(function (place) {
    const matchCity = place.city === city;
    const matchCategory = place.categories.includes(selectedCategory);
    const matchArea = area === 'all' || place.area === area;
    const matchKeyword =
      keyword === '' ||
      place.name.toLowerCase().includes(keyword) ||
      place.tags.some(function (tag) {
        return tag.includes(keyword);
      });

    return matchCity && matchCategory && matchArea && matchKeyword;
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
      return `
        <article class="place-card">
          <h2>${place.name}</h2>
          <p class="place-meta">${place.area}</p>
          <p class="place-price">
            ${formatRupiah(place.priceMin)} - ${formatRupiah(place.priceMax)}
            <small>per orang</small>
          </p>
          <a href="${place.mapsUrl}" target="_blank" rel="noopener">Buka di Google Maps</a>
        </article>
      `;
    })
    .join('');
}

function showResults() {
  renderResults(searchPlaces());
}

tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    tabs.forEach(function (t) {
      t.classList.remove('active');
    });

    tab.classList.add('active');
    selectedCategory = tab.dataset.category;
    showResults();
  });
});

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    showResults();
  });

  showResults();
}