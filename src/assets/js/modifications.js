function clearForm(form) {
    setTimeout(() => {
      form.reset();
    }, 100); // Let Formspree capture the values before reset
  }

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.grid-item');
  const loadMoreButton = document.getElementById('loadMore');
  let visibleCount = 6;

  // Universal visibility updater
  function updateVisibility() {
    const activeFilter = document.querySelector('.btn-custom-filter.selected').dataset.filter;
    const filteredItems = Array.from(items).filter(item => {
      const filterClass = activeFilter.replace('.', '');
      return activeFilter === '*' || item.classList.contains(filterClass);
    });

    items.forEach(item => {
      const isMatch = filteredItems.includes(item);
      item.classList.toggle('filter-hidden', !isMatch);
      item.classList.toggle('load-hidden', 
        filteredItems.indexOf(item) >= visibleCount || !isMatch
      );
    });

    loadMoreButton.style.display = visibleCount >= filteredItems.length ? 'none' : 'inline-block';
    //new WOW().init();
  }

  // Load More handler
  loadMoreButton.addEventListener('click', () => {
    visibleCount += 6;
    updateVisibility();
  });

  // Filter handler
  document.querySelectorAll('.btn-custom-filter').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.btn-custom-filter').forEach(btn => 
        btn.classList.remove('selected')
      );
      this.classList.add('selected');
      visibleCount = 6; // Reset pagination on filter change
      updateVisibility();
    });
  });

  // Initial setup
  updateVisibility();
});
    
