document.querySelectorAll('.accardion-trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accardion-trigger__active')) {
      parent.classList.remove('accardion-trigger__active');
    } else {
      document
        .querySelectorAll('.accardion-item')
        .forEach((child) =>
          child.classList.remove('accardion-trigger__active')
        );
      parent.classList.toggle('accardion-trigger__active');
    }
  })
);
