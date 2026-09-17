'use client';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Globe2,
  Pill,
  ShieldCheck,
  PackageCheck,
  Stethoscope,
  FlaskConical,
  Menu,
  X,
  Download,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const categories = [
  {
    title: 'Pharmaceutical formulations',
    detail: 'Tablets, capsules, oral liquids and other finished dosage forms.',
    icon: Pill,
  },
  {
    title: 'Hospital & clinical supplies',
    detail:
      'Healthcare consumables and institutional procurement requirements.',
    icon: Stethoscope,
  },
  {
    title: 'Nutraceuticals & wellness',
    detail: 'Vitamins, minerals and nutritional supplements for your market.',
    icon: FlaskConical,
  },
  {
    title: 'Private-label opportunities',
    detail:
      'Explore manufacturer-led packaging and brand development, subject to feasibility.',
    icon: PackageCheck,
  },
];
const nav = [
  ['About', 'about'],
  ['Products', 'products'],
  ['Global markets', 'markets'],
  ['Quality approach', 'quality'],
  ['Partner with us', 'partners'],
];
function BrandMark() {
  return (
    <svg className="brandmark" viewBox="0 0 64 64" aria-hidden="true">
      <path className="brand-orbit" d="M49.5 12.5A24 24 0 1 0 52 49" />
      <text className="brand-s" x="10" y="47">
        S
      </text>
      <text className="brand-e" x="30" y="47">
        H
      </text>
      <path className="brand-horizon" d="M27 37c10-1 18-5 28-12" />
    </svg>
  );
}
export default function Home() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll(
      '.section-head,.split>div,.category,.quality-grid article,.partner-grid article,.contact>div,.contact form,.market-panel,.product-visual',
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    targets.forEach((target, i) => {
      (target as HTMLElement).style.setProperty(
        '--reveal-delay',
        `${(i % 4) * 65}ms`,
      );
      target.classList.add('reveal');
      observer.observe(target);
    });
    const showAll = () => {
      if (motion.matches)
        targets.forEach((target) => target.classList.add('is-visible'));
    };
    motion.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', showAll);
      targets.forEach((target) => target.classList.remove('reveal'));
    };
  }, []);
  const [menu, setMenu] = useState(false);
  const [interest, setInterest] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  function inquire(value: string) {
    setInterest(value);
    setDownloaded(false);
    document.getElementById('contact')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  }
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const brief =
      'STARLINE HEALTH — INQUIRY BRIEF\nNot submitted. Retain this brief until a contact channel is available.\n\n' +
      Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n\n');
    const url = URL.createObjectURL(
      new Blob([brief], { type: 'text/plain;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'starline-health-inquiry.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="topbar">
        <span>INDIA-BASED. INTERNATIONALLY FOCUSED.</span>
        <span>
          Pharmaceutical & healthcare sourcing <ArrowUpRight size={13} />
        </span>
      </div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Starline Health home">
          <BrandMark />
          <span className="brand-copy">
            <span className="brand-name">STARLINE</span>
            <small>HEALTH</small>
          </span>
        </a>
        <nav className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button navcta" href="#contact">
          Start an inquiry <ArrowUpRight size={17} />
        </a>
        <button
          className="menubutton"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? 'Close menu' : 'Open menu'}
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-main">
            <div className="eyebrow">
              <span className="dot" /> YOUR CONNECTION TO INDIAN HEALTHCARE
            </div>
            <h1>
              Indian expertise.
              <br />
              Global possibilities.
            </h1>
            <p>
              Connecting international healthcare buyers with pharmaceutical
              sourcing opportunities in India. Built around your products, your
              market, and your next step.
            </p>
            <div className="actions">
              <a href="#contact" className="button lime">
                Discuss your requirements <ArrowUpRight size={19} />
              </a>
              <a href="#products" className="textlink">
                Explore categories <ArrowRight size={18} />
              </a>
            </div>
            <div className="hero-note">
              <ShieldCheck size={19} />
              <span>
                A considered approach to sourcing. A clear focus on compliance.
              </span>
            </div>
          </div>
          <aside
            className="hero-side hero-editorial"
            aria-label="Starline Health approach"
          >
            <div className="editorial-number">01</div>
            <p>Pharmaceutical &amp; healthcare sourcing</p>
            <div className="editorial-list">
              <span>Product fit</span>
              <span>Documentation</span>
              <span>Market pathway</span>
            </div>
            <a href="#partners">
              Explore our approach <ArrowUpRight size={20} />
            </a>
          </aside>
          <div
            className="reference-logo"
            role="img"
            aria-label="Starline Health logo"
          >
            <img
              src="/images/starline-card-reference.webp"
              alt=""
              width={1050}
              height={600}
            />
          </div>
          <div className="hero-bottom">
            <span>STARLINE HEALTH</span>
            <span>Scroll to discover ↓</span>
          </div>
        </section>
        <section className="audience">
          <span>WHO WE WORK WITH</span>
          <p>Importers</p>
          <p>Distributors</p>
          <p>Hospitals</p>
          <p>Pharmacy chains</p>
          <p>Procurement partners</p>
        </section>
        <section className="section split" id="about">
          <div>
            <div className="eyebrow">01 / ABOUT STARLINE</div>
            <h2>
              A sourcing partner.
              <br />A shared ambition.
            </h2>
          </div>
          <div>
            <p className="large">
              We’re building Starline Health to make pharmaceutical and
              healthcare sourcing from India more connected, transparent and
              purposeful.
            </p>
            <p>
              As an India-based company in formation, we are developing
              relationships with prospective manufacturing partners and
              international buyers. Our role is to coordinate sourcing and
              export opportunities—not to manufacture products.
            </p>
            <p>
              Every opportunity begins with understanding your requirements and
              assessing the right product, manufacturer and destination-market
              pathway.
            </p>
            <a className="inline-link" href="#partners">
              Explore a partnership <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className="section products" id="products">
          <div className="section-head">
            <div>
              <div className="eyebrow">02 / PRODUCT CATEGORIES</div>
              <h2>
                Your requirements.
                <br />
                Our starting point.
              </h2>
            </div>
            <p>
              Explore potential sourcing categories. Product availability,
              specifications and eligibility for export are confirmed for each
              inquiry.
            </p>
          </div>
          <figure className="product-visual">
            <img
              src="/images/skyline-products.webp"
              alt="Illustrative unbranded healthcare cartons, vial, blister pack and documentation"
              width={1536}
              height={1024}
              loading="lazy"
            />
            <figcaption>
              FROM PRODUCT REQUIREMENTS TO SOURCING POSSIBILITIES
              <span>
                Illustrative packaging. Availability subject to confirmation.
              </span>
            </figcaption>
          </figure>
          <div className="category-grid">
            {categories.map(({ title, detail, icon: Icon }, i) => (
              <button
                className="category"
                key={title}
                onClick={() => inquire(title)}
              >
                <div className="category-top">
                  <Icon size={31} strokeWidth={1.4} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
                <span className="category-link">
                  Discuss this category <ArrowUpRight size={19} />
                </span>
              </button>
            ))}
          </div>
          <p className="fine">
            These categories are areas of interest, not a confirmed product
            catalogue. No product approval or market authorization is implied.
          </p>
        </section>
        <section className="section markets" id="markets">
          <div>
            <div className="eyebrow">03 / GLOBAL MARKETS</div>
            <h2>
              Global ambition.
              <br />
              <em>Market-by-market care.</em>
            </h2>
            <p>
              Tell us where you operate. We’ll explore the commercial and
              documentation requirements with prospective manufacturers and your
              local team.
            </p>
            <a href="#contact" className="button lime">
              Explore your market <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="market-panel">
            <div className="market-heading">
              <Globe2 size={28} />
              <span>EVERY MARKET STARTS WITH A CONVERSATION</span>
            </div>
            {[
              'Product & demand fit',
              'Local registration pathway',
              'Importer & manufacturer responsibilities',
              'Commercial & logistics feasibility',
            ].map((s, i) => (
              <div className="market-row" key={s}>
                <span>0{i + 1}</span>
                {s}
                <ArrowUpRight size={17} />
              </div>
            ))}
            <p>
              We are evaluating opportunities. No countries served,
              registrations or local approvals are claimed.
            </p>
          </div>
        </section>
        <section className="section" id="quality">
          <div className="section-head">
            <div>
              <div className="eyebrow">04 / QUALITY & COMPLIANCE APPROACH</div>
              <h2>
                Trust begins with
                <br />
                the right questions.
              </h2>
            </div>
            <p>
              Our intended approach puts verification before commitment.
              Requirements and responsibilities must be confirmed for each
              product and destination.
            </p>
          </div>
          <div className="quality-grid">
            {[
              [
                '01',
                'Partner evaluation',
                'Review relevant manufacturing credentials, capabilities and product documentation before progressing.',
              ],
              [
                '02',
                'Documentation review',
                'Assess availability of dossiers, certificates and product information needed for the proposed market.',
              ],
              [
                '03',
                'Market alignment',
                'Clarify registration, labeling and import requirements with the manufacturer and destination-market partner.',
              ],
              [
                '04',
                'Supply coordination',
                'Agree specifications, traceability documents, storage conditions and shipment responsibilities before an order.',
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span className="step">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <div className="quality-note">
            <ShieldCheck size={24} />
            <p>
              Starline Health does not claim manufacturing certifications,
              export licenses or product approvals. Any applicable credentials
              will be verified and shared in the context of a specific
              opportunity.
            </p>
          </div>
        </section>
        <section className="section partner-section" id="partners">
          <div className="eyebrow">05 / PARTNER WITH US</div>
          <h2>
            Good partnerships
            <br />
            start with a clear fit.
          </h2>
          <div className="partner-grid">
            <article>
              <span>FOR INTERNATIONAL BUYERS</span>
              <h3>Bring us your sourcing brief.</h3>
              <p>
                Share your product needs, destination, quantity and
                documentation expectations. Let’s explore a potential supply
                relationship.
              </p>
              <button
                className="inline-link"
                onClick={() => inquire('International buyer partnership')}
              >
                Discuss sourcing <ArrowUpRight size={19} />
              </button>
            </article>
            <article>
              <span>FOR INDIAN MANUFACTURERS</span>
              <h3>Explore new market opportunities.</h3>
              <p>
                Share your portfolio, manufacturing credentials, export
                experience and markets of interest to explore collaboration.
              </p>
              <button
                className="inline-link"
                onClick={() => inquire('Manufacturing partnership')}
              >
                Discuss collaboration <ArrowUpRight size={19} />
              </button>
            </article>
          </div>
        </section>
        <section className="section contact" id="contact">
          <div>
            <div className="eyebrow">06 / LET’S CONNECT</div>
            <h2>
              What are you
              <br />
              looking to source?
            </h2>
            <p>
              A focused brief is the first step toward a useful conversation.
              Tell us about your business and requirements.
            </p>
            <div className="contact-detail">
              <Globe2 size={22} />
              <div>
                <strong>Based in India</strong>
                <span>Open to international B2B inquiries</span>
              </div>
            </div>
            <div className="contact-status">
              <span className="dot" /> COMPANY IN FORMATION
              <p>
                Business contact details will be added when confirmed. For now,
                prepare and download your inquiry brief.
              </p>
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="form-heading">
              <h3>Prepare an inquiry</h3>
              <span>Fields marked * are required</span>
            </div>
            <div className="form-grid">
              <label>
                Full name *
                <Input
                  name="Full name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                />
              </label>
              <label>
                Business email *
                <Input
                  name="Business email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                />
              </label>
              <label>
                Company / organization *
                <Input
                  name="Company"
                  autoComplete="organization"
                  required
                  placeholder="Organization name"
                />
              </label>
              <label>
                Destination country *
                <Input
                  name="Destination country"
                  required
                  placeholder="Your target market"
                />
              </label>
            </div>
            <label>
              Product or partnership interest *
              <Input
                name="Interest"
                required
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="e.g. oral formulations, buyer partnership"
              />
            </label>
            <label>
              Requirements *
              <Textarea
                name="Requirements"
                required
                minLength={10}
                rows={4}
                placeholder="Include products, dosage forms, estimated quantities, timelines and documentation needs."
              />
            </label>
            <p className="form-notice">
              Preview mode: this form creates a file on your device. It does not
              send or store your information. Please do not include patient
              information or confidential documents.
            </p>
            <button className="button submit" type="submit">
              Download inquiry brief <Download size={18} />
            </button>
            {downloaded && (
              <p className="success" role="status">
                Your brief is ready. It has not been sent to Starline Health.
                Keep the downloaded file until a contact channel is available.
              </p>
            )}
          </form>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <a className="brand" href="#home" aria-label="Starline Health home">
            <BrandMark />
            <span className="brand-copy">
              <span className="brand-name">STARLINE</span>
              <small>HEALTH</small>
            </span>
          </a>
          <p>
            Connecting Indian healthcare expertise
            <br />
            with international opportunity.
          </p>
          <div className="footer-actions">
            <a href="#contact">
              Let’s start a conversation <ArrowUpRight size={20} />
            </a>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/company/skylinexports"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Company LinkedIn page (opens in a new tab)"
            >
              <span className="linkedin-logo" aria-hidden="true">
                in
              </span>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Starline Health · Company in formation
          </span>
          <span>
            B2B inquiries only · All opportunities subject to verification
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
