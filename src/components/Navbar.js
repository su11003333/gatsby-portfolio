import * as React from "react";
import { Link } from "gatsby";
import { useLocale } from "../context/LocaleContext";

const navContent = {
  en: {
    brand: {
      wordmark: "LAI ZHAO TING",
      tag: "Full-stack · Marketing"
    },
    primary: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/work" },
      { label: "Journal", href: "/blog" },
      { label: "Contact", href: "mailto:hello@laizhaoting.com" }
    ],
    socialsLabel: "Follow",
    contactCta: "Start a project",
    language: {
      en: "EN",
      zh: "中"
    }
  },
  zh: {
    brand: {
      wordmark: "賴昭庭",
      tag: "全端 × 行銷製作"
    },
    primary: [
      { label: "首頁", href: "/" },
      { label: "作品", href: "/work" },
      { label: "筆記", href: "/blog" },
      { label: "聯絡", href: "mailto:hello@laizhaoting.com" }
    ],
    socialsLabel: "追蹤",
    contactCta: "洽談合作",
    language: {
      en: "EN",
      zh: "中"
    }
  }
};

const socialLinks = [
  { label: "IG", href: "https://www.instagram.com" },
  { label: "LI", href: "https://www.linkedin.com" },
  { label: "YT", href: "https://www.youtube.com" }
];

const isExternalLink = (href) => /^https?:/i.test(href) || href.startsWith("mailto:");

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { locale, setLocale } = useLocale();
  const copy = navContent[locale] ?? navContent.en;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleLocaleChange = (targetLocale) => {
    setLocale(targetLocale);
    closeMenu();
  };

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}${isOpen ? " is-open" : ""}`}>
      <div className="container nav">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <span className="nav-brand__wordmark">{copy.brand.wordmark}</span>
          <span className="nav-brand__tag">{copy.brand.tag}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <nav id="primary-navigation" className="nav-menu" aria-label="Primary">
          {copy.primary.map((link) =>
            isExternalLink(link.href) ? (
              <a key={`${link.label}-${link.href}`} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ) : (
              <Link key={`${link.label}-${link.href}`} to={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="nav-tools">
          <div className="nav-language" role="group" aria-label="Language selector">
            <button
              type="button"
              onClick={() => handleLocaleChange("en")}
              aria-pressed={locale === "en"}
              className={locale === "en" ? "is-active" : undefined}
            >
              {copy.language.en}
            </button>
            <button
              type="button"
              onClick={() => handleLocaleChange("zh")}
              aria-pressed={locale === "zh"}
              className={locale === "zh" ? "is-active" : undefined}
            >
              {copy.language.zh}
            </button>
          </div>
          <div className="nav-socials" aria-label={copy.socialsLabel}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <a className="button button--solid nav-contact" href="mailto:hello@laizhaoting.com" onClick={closeMenu}>
            {copy.contactCta}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
