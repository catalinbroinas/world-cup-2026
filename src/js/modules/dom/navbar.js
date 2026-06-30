
function NavbarManager(navbar) {
  if (!navbar) {
    console.error('Navbar not found!');
    return;
  }

  const handleScroll = () => {
    navbar.classList.toggle(
      'navbar--scrolled',
      window.pageYOffset > 100
    );
  };

  const initScroll = () => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  };

  return { initScroll };
}

export { NavbarManager };
