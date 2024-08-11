onload = () => {
    const c = setTimeout(() => {
      const b = document.getElementsByClassName('customBody')[0];
      document.b.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };