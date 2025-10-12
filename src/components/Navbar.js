import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const links = [
    { label: "Studio", href: "#studio" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Journal", href: "#journal" }
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container nav">
        <Link to="/" className="nav-brand">
          <span className="nav-brand__wordmark">Future Three</span>
          <span className="nav-brand__tag">Brand & Digital Studio</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:hello@example.com">
          預約合作
        </a>
      </div>
    </header>
  );
};

export default Navbar;
