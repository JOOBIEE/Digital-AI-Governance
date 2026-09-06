import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo-dga.png";
import { NAV_LINKS } from "../../data/navigation";
import { SITE_CONFIG } from "../../data/siteConfig";
import { Container } from "./Container";
import { Divider } from "../ui/Divider";
import { NewsletterForm } from "../forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img
              src={logo}
              alt="Digital Governance Africa"
              className="h-40 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {SITE_CONFIG.tagline}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={SITE_CONFIG.social.linkedin}
                aria-label="DGA on LinkedIn"
                className="text-white/70 hover:text-white"
              >
                <FaLinkedin aria-hidden size={18} />
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                aria-label="DGA on TikTok"
                className="text-white/70 hover:text-white"
              >
                <FaTiktok aria-hidden size={18} />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                aria-label="DGA on Instagram"
                className="text-white/70 hover:text-white"
              >
                <FaInstagram aria-hidden size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <FiMail aria-hidden className="mt-0.5 shrink-0" size={15} />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiPhone aria-hidden className="mt-0.5 shrink-0" size={15} />
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin aria-hidden className="mt-0.5 shrink-0" size={15} />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <NewsletterForm variant="dark" />
        </div>

        <Divider className="my-10 bg-white/15" />

        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
