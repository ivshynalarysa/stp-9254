function loadPage(page) {
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    })
    .catch(err => console.error('Помилка завантаження:', err));
}
