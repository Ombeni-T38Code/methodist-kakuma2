import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "../../assets/brand/logo.png";
import "./Footer.css";

const congregations = [
  "Kakuma 1 Sanctuary",
  "Kakuma 2 Parish",
  "Kakuma 3 Fellowship",
  "Kakuma 4 Chapel",
  "Kakuma Town Prayer Room",
];

const ministries = [
  { label: "Uhuru Choir", to: "/ministries" },
  { label: "Fadhili Choir", to: "/ministries" },
  { label: "JC Band", to: "/ministries" },
  { label: "Sermons & Bible Study", to: "/sermons" },
  { label: "Youth & Outreach", to: "/ministries" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <section className="footer-brand" aria-label="About Methodist Church Kakuma">
            <Link to="/" className="footer-brand-lockup">
              <img src={logo} alt="" className="footer-brand-logo" />
              <span className="footer-brand-name">
                <strong>Methodist Church</strong>
                <span>Kakuma, Kenya</span>
              </span>
            </Link>
            <p className="footer-quote">“One faith. One family. One mission.”</p>
            <p className="footer-description">
              Methodist Church in Kenya Kakuma Fellowship. Sharing hope, truth,
              and community peace across Turkana West.
            </p>
          </section>

          <section className="footer-column">
            <h2>Congregations</h2>
            <ul className="footer-link-list footer-location-list">
              {congregations.map((congregation) => (
                <li key={congregation}>{congregation}</li>
              ))}
            </ul>
          </section>

          <section className="footer-column">
            <h2>Music &amp; Ministries</h2>
            <ul className="footer-link-list">
              {ministries.map((ministry) => (
                <li key={ministry.label}>
                  <Link to={ministry.to}>{ministry.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-column footer-connect">
            <h2>Connect &amp; Support</h2>
            <p>
              Questions about Thursday services or Kakuma Town Prayer Room days?
              We would love to hear from you.
            </p>
            <Link to="/contact" className="footer-contact-link">
              Contact the church <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
            <Link to="/prayer-request" className="footer-prayer-link">
              Send a prayer request
            </Link>
          </section>
        </div>

        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} Methodist Church. All rights reserved.</p>
          <p className="footer-signoff">Faith, Peace, and Hope in the Desert.</p>
        </div>
      </div>
    </footer>
  );
}