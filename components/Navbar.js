import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ navbar }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          {/* <Image> innerhalb von <Link> ohne <a> */}
          <Image src="/img/teclify-logo.png" alt="Teclify Logo" width={80} height={80} />
        </Link>
      </div>
      <ul className="navbar-links">
        {navbar.links.map((link, index) => (
          <li key={index} className="nav-item">
            <Link href={link.href}>
              {link.name}
              {link.dropdown && <span className="dropdown-icon">▼</span>}
            </Link>
            {link.dropdown && (
              <ul className="dropdown">
                {link.dropdown.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <Link href={navbar.contactButton.href} className="contact-button">
            {navbar.contactButton.label}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
