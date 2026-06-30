
function NavbarManager(navbar) {
  if (!navbar) {
    console.error('Navbar not found!');
    return {
      scrollNavbar: () => { }
    };
  }

  const scrollNavbar = () => {
    window.addEventListener('scroll', () => {
      (window.pageYOffset > 100)
        ? navbar.classList.add('navbar--scrolled')
        : navbar.classList.remove('navbar--scrolled')
    });
  };

  return { scrollNavbar };
}

export { NavbarManager };
