// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Site-level UI tweaks layered on top of the Material theme.

(function () {
  function applySearchPlaceholder() {
    document.querySelectorAll('.md-search__input').forEach(function (input) {
      input.setAttribute('placeholder', 'Search or filter');
      input.setAttribute('aria-label', 'Search or filter');
    });
  }

  // Initial paint.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySearchPlaceholder);
  } else {
    applySearchPlaceholder();
  }

  // Re-apply on Material's instant-navigation page swaps, if available.
  if (typeof window !== 'undefined' && window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(applySearchPlaceholder);
  }
})();
