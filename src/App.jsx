import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Building2, CalendarCheck, Car, ChevronDown, Clock, CreditCard, FileText, HeartPulse,
  Mail, MapPin, Menu, Phone, ShieldCheck, Stethoscope, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/cmos-logo.png";
import river from "./assets/river.jpg";
import drHunt from "./assets/dr-hunt.jpg";
import youngPatient from "./assets/young-patient.jpg";
import consult from "./assets/consult.jpg";
import nitrous from "./assets/nitrous.jpg";
import implantModel from "./assets/implant-model.jpg";
import jawModel from "./assets/jaw-model.jpg";
import surgery from "./assets/surgery.jpg";
import toothache from "./assets/toothache.jpg";

// ------------------------------------------------------------ Content (from kylehuntdmd.com: home, meet-dr-hunt, patient-information,
// new-patient-forms, contact-us, procedure pages and the dental-implants-oral-surgeon-jackson-ms page)
const COMPANY = "Central Mississippi Oral & Maxillofacial Surgery";
const ABBR = "cmos";
const END_DATE = "2026-11-30T23:59:59-06:00";
const ORIGINAL = "https://www.kylehuntdmd.com/";
const DOCTOR = "Dr. Kyle T. Hunt, DMD";
const PHONE = "(601) 981-3111";
const PHONE_TEL = "+16019813111";
const EMAIL = "cmoms123@gmail.com";
const ADDRESS = ["971 Lakeland Drive, Suite 952", "Jackson, MS 39216"];
const BUILDING = "St. Dominic Medical Offices West Tower";
const HOURS = [["Monday – Friday", "7:30 am – 4:00 pm"], ["Saturday – Sunday", "Closed"]];
const REGISTRATION_URL = "https://mysecurepractice.com/Truform/0f9eec44-78dd-4b45-a422-7dab9b68168c/Submission/Create";
const POLICY_PDF = "https://irp-cdn.multiscreensite.com/74f6944c24fc4a3dac88cf9e3089b006/files/uploaded/Financial%20%26%20Office%20Policy.pdf";
const MAP_URL = "https://www.google.com/maps/place/971+Lakeland+Dr+%23952,+Jackson,+MS+39216";
const GOOGLE_REVIEWS = "https://www.google.com/maps/place/Kyle+T+Hunt+DMD/@32.3335504,-90.1652254,15z/data=!4m2!3m1!1s0x0:0xc051930c4bc6f258";
const FACEBOOK = "https://facebook.com/Central-Mississippi-Oral-Maxillofacial-Surgery-105308625301519/";
const HIPAA_URL = "https://www.hhs.gov/hipaa/index.html";
const COUNTIES = ["Hinds", "Madison", "Rankin"];
const TOWNS = ["Jackson", "Brandon", "Ridgeland", "Flowood", "Clinton"];

// Outline traced from the state mark in the practice logo; the star marks Jackson, as it does in the logo.
const MS_PATH = "M59.3 0.0 L60.2 1.5 L60.7 3.0 L60.7 8.9 L60.5 10.4 L60.2 11.9 L60.2 14.8 L60.0 16.3 L59.8 17.8 L59.8 19.3 L59.5 20.7 L59.5 22.2 L59.3 23.7 L59.3 25.2 L59.0 26.7 L59.0 28.1 L58.8 29.6 L58.8 32.6 L58.5 34.1 L58.3 35.6 L58.0 37.0 L58.0 40.0 L57.8 41.5 L57.8 43.0 L57.5 44.4 L57.5 45.9 L57.3 47.4 L57.3 48.9 L57.0 50.4 L57.0 51.9 L56.8 53.3 L56.8 56.3 L56.5 57.8 L56.3 59.3 L56.0 60.7 L56.0 69.6 L56.3 71.1 L56.3 72.6 L56.5 74.1 L56.8 75.6 L56.8 80.0 L57.0 81.5 L57.0 83.0 L57.3 84.4 L57.3 88.9 L57.5 90.4 L57.5 91.9 L57.8 93.3 L57.8 94.8 L57.5 96.3 L40.7 97.8 L39.3 99.3 L38.5 100.0 L37.0 100.0 L36.0 99.3 L35.6 97.8 L35.3 96.3 L34.6 94.8 L33.3 93.3 L32.6 91.9 L32.1 90.4 L31.9 88.9 L32.6 87.4 L33.1 85.9 L33.6 84.4 L1.0 83.0 L0.7 81.5 L0.5 80.0 L0.0 78.5 L2.0 77.0 L1.5 75.6 L2.0 74.1 L2.5 72.6 L3.2 71.1 L4.2 69.6 L4.4 68.1 L4.9 66.7 L6.9 65.2 L7.9 63.7 L9.6 62.2 L10.1 60.7 L8.4 59.3 L10.4 57.8 L12.3 56.3 L11.6 54.8 L10.4 53.3 L9.6 51.9 L9.6 50.4 L9.1 48.9 L9.6 47.4 L8.6 45.9 L9.9 44.4 L7.9 43.0 L8.9 41.5 L8.4 40.0 L9.9 38.5 L10.1 37.0 L9.1 35.6 L8.9 34.1 L7.9 32.6 L7.9 31.1 L8.6 29.6 L8.1 28.1 L9.1 26.7 L10.6 25.2 L10.6 22.2 L12.6 20.7 L13.1 19.3 L12.8 17.8 L13.8 16.3 L15.8 14.8 L17.5 13.3 L18.8 11.9 L19.0 10.4 L19.0 7.4 L19.3 5.9 L20.7 4.4 L23.7 3.0 L24.4 1.5 L50.4 0.0Z";
const STAR = [23.8, 58];

const NAV = [
  ["Procedures", "#procedures"],
  ["Meet Dr. Hunt", "#dr-hunt"],
  ["Your Visit", "#patients"],
  ["Insurance", "#insurance"],
  ["Contact", "#contact"],
];

const PROCEDURES = [
  {
    id: "implants", title: "Dental Implants & Bone Grafting", img: implantModel, alt: "Model of a jaw with two dental implant posts",
    summary: "A titanium post placed in the jawbone becomes a stable root for a replacement tooth that looks and works like your own.",
    points: [
      "Team approach: Dr. Hunt places the implant; your restorative dentist makes the crown.",
      "Right for people of all ages except growing children.",
      "When the jawbone has thinned, bone grafting can rebuild enough bone for a successful implant.",
      "Steps: consultation and imaging, planning, placement, a healing period, then the final crown.",
    ],
  },
  {
    id: "wisdom", title: "Wisdom Teeth", img: youngPatient, alt: "Dentist talking with a young patient in the chair",
    summary: "Removing third molars that are impacted, crowding other teeth or hard to keep clean. Easiest in the late teens and early twenties.",
    points: [
      "Usually performed with IV sedation.",
      "Recovery is usually within three to seven days.",
      "Impacted teeth can raise the risk of infection, gum disease, cavities and cysts.",
      "Dr. Hunt coordinates with your referring dentist.",
    ],
  },
  {
    id: "sedation", title: "IV Sedation & Nitrous Oxide", img: nitrous, alt: "Patient comfortable with a nitrous oxide nasal hood",
    summary: "IV (twilight) sedation, where patients often have little memory of surgery, or nitrous oxide for lighter relaxation and a quicker recovery.",
    points: [
      "IV sedation: nothing to eat or drink for six hours before surgery.",
      "An adult 18 or older must drive you home; no driving for 24 hours.",
      "No nail polish or artificial nails; wear loose clothing for the monitors.",
      "Nitrous oxide: no driving for one hour afterwards.",
    ],
  },
  {
    id: "jaw", title: "Jaw / Orthognathic Surgery", img: jawModel, alt: "Illustration of a corrected jaw with fixation plates and braces",
    summary: "Corrective jaw surgery for skeletal bite problems, done in the operating room alongside your orthodontist's care.",
    points: [
      "Usually requires an overnight hospital stay.",
      "Braces before surgery to align the teeth, and for a time afterwards.",
      "Can improve the facial profile, and may help patients with a small jaw and sleep apnea.",
    ],
  },
  {
    id: "tmj", title: "TMJ Disorders", img: toothache, alt: "Man holding his jaw in discomfort",
    summary: "Muscle or joint problems of the jaw joint, usually treated conservatively together with your general dentist.",
    points: [
      "First steps: mouth guards, diet changes and cleansing the joint.",
      "When needed: disc repositioning, corrective jaw surgery or joint replacement.",
    ],
  },
  {
    id: "trauma", title: "Facial Trauma", img: surgery, alt: "Surgical team at work in an operating room",
    summary: "Repair of facial fractures and soft-tissue injuries by a surgeon trained in facial anatomy and bite alignment.",
    points: [
      "Broken jaws, cheekbones (zygoma), nasal and dentoalveolar fractures.",
      "Lacerations of the face, neck or ears, including cosmetic closure.",
      "Blast injuries and foreign body removal.",
      "Dr. Hunt is on staff at St. Dominic Jackson Memorial Hospital and Mississippi Baptist Medical Center.",
    ],
  },
  {
    id: "oral", title: "Oral Surgery & Pathology", img: consult, alt: "Surgeon reviewing an X-ray on a tablet with a patient",
    summary: "Diagnosis and treatment of cysts, tumors and other tissue concerns, plus procedures that prepare the mouth for dentures or braces.",
    points: [
      "Bone smoothing, tori removal and frenectomy for better prosthetic fit.",
      "Impacted canine exposure and bracketing for orthodontic alignment.",
      "Reconstruction after removal of a tumor or cyst.",
    ],
  },
];

const TIMELINE = [
  ["2002", "B.S., summa cum laude", "Mississippi College"],
  ["2006", "D.M.D., first in his class", "University of Mississippi School of Dentistry"],
  ["2009–10", "Chief resident, oral & maxillofacial surgery", "Medical College of Georgia, Augusta"],
  ["2010", "Joined the practice in July", "Central Mississippi Oral & Maxillofacial Surgery"],
];

const CREDENTIALS = [
  "Diplomate, American Board of Oral and Maxillofacial Surgery",
  "Fellow, American Association of Oral and Maxillofacial Surgeons",
  "Member, American Dental Association & Mississippi Dental Association",
  "Past president, Mississippi Dental Association, District IV",
  "Past president, Mississippi Society of Oral and Maxillofacial Surgeons",
  "On staff: St. Dominic Jackson Memorial Hospital & Mississippi Baptist Medical Center",
];

const HONORS = [
  "Dean's scholar; Omicron Kappa Upsilon, Hembree and Phi Kappa Phi honor societies",
  "2003 Lyn Frances Johnson Award",
  "2004 Alliance of the Mississippi Dental Association Scholarship",
  "2005 Hinman Scholar Award",
  "2005 William S. Kramer Award of Excellence",
  "2006 Ottilie Schillig Memorial Scholarship",
  "2006 American Association of Oral and Maxillofacial Surgeons Award",
  "2006 American Academy of Oral and Maxillofacial Pathology Award",
  "2006 Dean's Scholastic Achievement Award",
  "2006 Mississippi Dental Association Award",
  "2006 Academy of Oral Medicine Award",
  "2006 American Academy of Periodontology Award",
  "2006 Academy of Osseointegration Award",
];

const BRING = [
  "Any X-rays from your dentist or physician",
  "A list of the medications you take",
  "Your medical or dental insurance card and any completed forms",
  "A parent or guardian, for patients under 18",
];

const VISIT_TABS = [
  {
    id: "consult", label: "Consultation",
    intro: "Your first visit covers your medical history, insurance and a detailed consultation on your diagnosis and treatment options.",
    items: [
      "Arrive 15 minutes early, or register online beforehand.",
      "Some conditions allow surgery the same day; most plans need a second appointment.",
      "Tell us about conditions such as pregnancy, diabetes, high blood pressure, artificial heart valves or joints, or rheumatic fever.",
      "Tell us about medications such as heart medicine, insulin, aspirin or blood thinners.",
      "If you are in pain or have an emergency, we will make every effort to see you the same day.",
    ],
  },
  {
    id: "sedation", label: "Before IV sedation",
    intro: "A pre-operative consultation is required for every patient having IV anesthesia.",
    items: [
      "Nothing to eat or drink for six hours before surgery.",
      "An adult (18+) must drive you home, and someone should stay with you the rest of the day.",
      "No driving for 24 hours after IV sedation.",
      "No fingernail polish or artificial nails; wear loose-fitting clothing.",
    ],
  },
  {
    id: "after", label: "After surgery",
    intro: "Most recoveries are simple. These are the practice's own after-care instructions, shortened.",
    items: [
      "Bite firmly on gauze for 45 minutes, then on a fresh pack for 45 more.",
      "No smoking, spitting or rinsing on the first day. Start warm salt-water rinses the next day.",
      "After 4 hours: soft foods and cool, non-carbonated drinks.",
      "Ice 20 minutes on, 20 off (up to five times) on day one; gentle heat from the next day.",
      "Swelling usually peaks around day two. If it keeps growing after that, call us.",
      "Bleeding that won't settle: rinse with cold water, clear loose clots and bite on folded gauze (or a clean tea bag) for 30 minutes.",
    ],
  },
];

const IN_NETWORK = ["Aetna", "Always Care", "Cigna Dental", "Delta Dental", "Guardian", "United Health Care CHIP"];
const PAYMENT = ["Cash", "Checks", "Visa", "MasterCard", "CareCredit"];

const TESTIMONIALS = [
  {
    quote: "I cannot say enough great things about Dr. Hunt and his entire staff. From start to finish, the whole wisdom teeth removal process was smooth and honestly way easier than I expected. Dr. Hunt made me feel comfortable and explained everything clearly, which helped calm my nerves. I’m 30 years old, so I was definitely worried recovery would be rough, but it was the complete opposite. I had minimal swelling, very little discomfort, and never even had to take pain medication.",
    name: "Andrea", feature: true,
  },
  { quote: "I have been in a lot of doctor’s offices, but have never been treated as nice. They treated you like you were family.", name: "" },
  { quote: ". . . accolades to all of you for your caring, kindness, professionalism, and friendship. In your capable hands, you made us feel cared for, confident and secure that we would be treated with dignity and respect.", name: "James" },
  { quote: "God has blessed you with a great talent and His spirit definitely shows through you.", name: "Jeremy" },
];

// ------------------------------------------------------------ Small pieces
function StateMark({ className = "", star = true, title }) {
  return (
    <svg className={className} viewBox="-1 -1 62.7 102" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <path d={MS_PATH} />
      {star && <Star cx={STAR[0]} cy={STAR[1]} r={4.2} className="state-star" />}
    </svg>
  );
}

function Star({ cx, cy, r, className }) {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 ? r * 0.42 : r;
    return `${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  return <polygon className={className} points={pts} />;
}

function StarBullet() {
  return <svg className="star-bullet" viewBox="0 0 10 10" aria-hidden="true"><Star cx={5} cy={5.3} r={4.8} /></svg>;
}

function useOpenStatus() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 60000); return () => clearInterval(t); }, []);
  // Office time is US Central.
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(now);
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const day = get("weekday");
  const mins = (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10);
  const weekday = !["Sat", "Sun"].includes(day);
  const open = weekday && mins >= 450 && mins < 960;
  return open ? "Office open now · until 4:00 pm" : "Office closed · opens weekdays 7:30 am";
}

// ------------------------------------------------------------ Sections
function UtilityBar({ status }) {
  return (
    <div className="utility">
      <div className="wrap utility-row">
        <span className="utility-status"><span className="pulse" aria-hidden="true" /> {status}</span>
        <span className="utility-addr"><MapPin size={14} /> {BUILDING}, Suite 952</span>
        <a href={`tel:${PHONE_TEL}`}><Phone size={14} /> {PHONE}</a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle("nav-open", open); }, [open]);
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}>
          <img src={logo} alt={`${COMPANY} logo`} width="322" height="112" />
        </a>
        <nav className={`main-nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-register" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <FileText size={16} /> Register online
          </a>
        </nav>
        <button type="button" className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-contours" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Oral & Maxillofacial Surgery · Jackson, Mississippi</span>
          <h1>Specialist surgical care, <em>close to home.</em></h1>
          <p className="hero-lede">
            {DOCTOR} is a board-certified oral and maxillofacial surgeon caring for patients across Central Mississippi since 2010:
            dental implants, wisdom teeth, jaw surgery and facial trauma, with IV sedation in the office.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer"><FileText size={18} /> Online patient registration</a>
            <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
          </div>
          <dl className="hero-facts">
            <div><dt>Board certified</dt><dd>Diplomate, ABOMS</dd></div>
            <div><dt>Hours</dt><dd>Mon–Fri · 7:30–4:00</dd></div>
            <div><dt>Urgent pain</dt><dd>Same-day when possible</dd></div>
          </dl>
        </div>
        <div className="hero-map">
          <figure className="state-photo">
            <svg viewBox="-1 -1 62.7 102" className="state-photo-svg" role="img" aria-label="River photo framed in the shape of Mississippi, with a star on Jackson">
              <defs>
                <clipPath id="ms-clip"><path d={MS_PATH} /></clipPath>
              </defs>
              <path d={MS_PATH} className="state-shadow" transform="translate(2.2 2.6)" />
              <image href={river} x="-30" y="-2" width="125" height="104" preserveAspectRatio="xMidYMid slice" clipPath="url(#ms-clip)" />
              <path d={MS_PATH} className="state-edge" />
              <circle cx={STAR[0]} cy={STAR[1]} r="7" className="star-halo" />
              <Star cx={STAR[0]} cy={STAR[1]} r={4.4} className="hero-star" />
            </svg>
            <figcaption className="pin-card">
              <span className="pin-label">You are here</span>
              <strong>Jackson</strong>
              <span>{BUILDING}<br />{ADDRESS[0]}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function RegisterBand() {
  return (
    <section className="register" aria-labelledby="register-title">
      <div className="wrap register-grid">
        <div className="register-head">
          <span className="eyebrow eyebrow-light">New patients</span>
          <h2 id="register-title">Fill out your forms before you arrive.</h2>
          <p>Preregister with the practice's secure online registration form. When you finish, press <strong>Complete and Send</strong> at the bottom and your information comes straight to the office.</p>
        </div>
        <ol className="register-steps">
          <li>
            <span className="step-no">01</span>
            <div><h3>Register online</h3><p>Secure patient registration form, about your health history and insurance.</p>
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Start registration <ArrowUpRight size={16} /></a></div>
          </li>
          <li>
            <span className="step-no">02</span>
            <div><h3>Print the office policy</h3><p>Print, complete and bring the Financial &amp; Office Policy form.</p>
              <a href={POLICY_PDF} target="_blank" rel="noopener noreferrer">Download PDF <ArrowUpRight size={16} /></a></div>
          </li>
          <li>
            <span className="step-no">03</span>
            <div><h3>Bring to your consultation</h3>
              <ul className="bring">{BRING.map((b) => <li key={b}><StarBullet />{b}</li>)}</ul></div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Procedures() {
  const [active, setActive] = useState(PROCEDURES[0].id);
  const current = PROCEDURES.find((p) => p.id === active);
  return (
    <section className="procedures section" id="procedures" aria-labelledby="proc-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Procedures</span>
          <h2 id="proc-title">The full scope of oral &amp; maxillofacial surgery.</h2>
          <p>Oral and maxillofacial surgeons are dental specialists who treat conditions, injuries and defects of the mouth, teeth, jaws and face. A referral is not always required; many patients call directly.</p>
        </div>
        <div className="proc-layout">
          <ul className="proc-list" role="tablist" aria-label="Procedures">
            {PROCEDURES.map((p, i) => (
              <li key={p.id}>
                <button type="button" role="tab" id={`tab-${p.id}`} aria-selected={active === p.id} aria-controls="proc-panel" className={active === p.id ? "is-active" : ""} onClick={() => setActive(p.id)}>
                  <span className="proc-no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="proc-name">{p.title}</span>
                  <ArrowRight size={18} className="proc-arrow" />
                </button>
              </li>
            ))}
            <li className="proc-aside">
              <strong>Not sure what you need?</strong>
              <p>Call the office and we will help you find the right consultation. If you are in pain, we will make every effort to see you the same day.</p>
              <a className="text-link" href={`tel:${PHONE_TEL}`}><Phone size={16} /> {PHONE}</a>
            </li>
          </ul>
          <article className="proc-panel" id="proc-panel" role="tabpanel" aria-labelledby={`tab-${current.id}`} key={current.id}>
            <div className="proc-photo"><img src={current.img} alt={current.alt} loading="lazy" /></div>
            <div className="proc-body">
              <h3>{current.title}</h3>
              <p>{current.summary}</p>
              <ul>{current.points.map((pt) => <li key={pt}><StarBullet />{pt}</li>)}</ul>
              <a className="text-link" href={`tel:${PHONE_TEL}`}>Ask about a consultation · {PHONE}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function DrHunt() {
  const [showHonors, setShowHonors] = useState(false);
  return (
    <section className="doctor section" id="dr-hunt" aria-labelledby="dr-title">
      <div className="wrap doctor-grid">
        <div className="doctor-portrait">
          <div className="portrait-frame">
            <img src={drHunt} alt="Portrait of Dr. Kyle T. Hunt" loading="lazy" width="300" height="375" />
          </div>
          <StateMark className="portrait-state" />
          <p className="portrait-caption">A native Mississippian. Member of Brandon Baptist Church; husband, father of five, deer hunter and youth sports coach.</p>
        </div>
        <div className="doctor-copy">
          <span className="eyebrow">Meet your surgeon</span>
          <h2 id="dr-title">Dr. Kyle T. Hunt, <em>DMD</em></h2>
          <p className="doctor-lede">Board-certified oral and maxillofacial surgeon. His practice covers the broad scope of the specialty: dental implant surgery, traumatic facial injuries, dentoalveolar and orthognathic surgery, soft and hard tissue pathology, and reconstruction.</p>
          <ol className="timeline">
            {TIMELINE.map(([year, what, where]) => (
              <li key={year}><span className="t-year">{year}</span><div><strong>{what}</strong><span>{where}</span></div></li>
            ))}
          </ol>
          <ul className="creds">
            {CREDENTIALS.map((c) => <li key={c}><ShieldCheck size={18} />{c}</li>)}
          </ul>
          <button type="button" className="honors-toggle" aria-expanded={showHonors} onClick={() => setShowHonors((v) => !v)}>
            Dental school honors &amp; awards <ChevronDown size={18} />
          </button>
          {showHonors && <ul className="honors">{HONORS.map((h) => <li key={h}>{h}</li>)}</ul>}
          <p className="referring"><Stethoscope size={18} /> <span><strong>Referring dentists:</strong> call {PHONE} to refer a patient. The office coordinates care from first contact to final follow-up.</span></p>
        </div>
      </div>
    </section>
  );
}

function Patients() {
  const [tab, setTab] = useState(VISIT_TABS[0].id);
  const current = VISIT_TABS.find((t) => t.id === tab);
  return (
    <section className="patients section" id="patients" aria-labelledby="patients-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Your visit</span>
          <h2 id="patients-title">What to expect, start to finish.</h2>
        </div>
        <div className="visit-tabs" role="tablist" aria-label="Patient information">
          {VISIT_TABS.map((t) => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} className={tab === t.id ? "is-active" : ""} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </div>
        <div className="visit-panel" role="tabpanel">
          <p className="visit-intro">{current.intro}</p>
          <ol className="visit-list">{current.items.map((it, i) => <li key={it}><span>{i + 1}</span>{it}</li>)}</ol>
          <p className="visit-note"><HeartPulse size={18} /> Questions after surgery? Call {PHONE}.</p>
        </div>
      </div>
    </section>
  );
}

function Insurance() {
  return (
    <section className="insurance section" id="insurance" aria-labelledby="ins-title">
      <div className="wrap ins-grid">
        <div>
          <span className="eyebrow">Insurance &amp; payment</span>
          <h2 id="ins-title">We file your insurance for you.</h2>
          <p>The office files all insurance as a courtesy. Co-pays are due on the day of surgery, and balances are due when services are rendered unless arranged in advance. Call to confirm your plan's in-network status.</p>
          <p className="ins-small"><ShieldCheck size={16} /> HIPAA compliant. <a href={HIPAA_URL} target="_blank" rel="noopener noreferrer">About HIPAA (HHS)</a></p>
        </div>
        <div className="ins-cards">
          <div className="ins-card">
            <h3><Building2 size={18} /> In network</h3>
            <ul className="chips">{IN_NETWORK.map((n) => <li key={n}>{n}</li>)}</ul>
            <p>The financial policy also lists Medicaid and CHIP.</p>
          </div>
          <div className="ins-card">
            <h3><CreditCard size={18} /> Payment &amp; financing</h3>
            <ul className="chips">{PAYMENT.map((n) => <li key={n}>{n}</li>)}</ul>
            <p>CareCredit financing can spread the cost of treatment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [feature, ...rest] = TESTIMONIALS;
  return (
    <section className="words section" aria-labelledby="words-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Patient words</span>
          <h2 id="words-title">“They treated you like you were family.”</h2>
          <p>Kind words from patients, quoted as they appear on the practice's current website.</p>
        </div>
        <div className="words-grid">
          <blockquote className="word word-feature">
            <p>{feature.quote}</p>
            <footer>— {feature.name}<span>Wisdom teeth patient</span></footer>
          </blockquote>
          <div className="words-stack">
            {rest.map((t) => (
              <blockquote className="word" key={t.quote}>
                <p>{t.quote}</p>
                <footer>— {t.name || "Patient"}</footer>
              </blockquote>
            ))}
          </div>
        </div>
        <a className="text-link google-link" href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">Read and leave reviews on Google <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-card">
          <span className="eyebrow eyebrow-light">Visit &amp; contact</span>
          <h2 id="contact-title">Call us today.</h2>
          <a className="contact-phone" href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          <ul className="contact-list">
            <li><MapPin size={18} /><span>{BUILDING}<br />{ADDRESS[0]}<br />{ADDRESS[1]}</span></li>
            <li><Mail size={18} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><Clock size={18} /><span>{HOURS.map(([d, h]) => <React.Fragment key={d}>{d}: {h}<br /></React.Fragment>)}</span></li>
            <li><Car size={18} /><span>Park on the same side of the campus near the emergency room entrance, or in the P2 garage under the building.</span></li>
          </ul>
          <div className="contact-ctas">
            <a className="btn btn-light" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer"><CalendarCheck size={18} /> Register online</a>
            <a className="btn btn-outline-light" href={MAP_URL} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> Directions</a>
          </div>
          <p className="serving">Serving {COUNTIES.join(", ")} counties: {TOWNS.join(", ")} and all of Central Mississippi.</p>
        </div>
        <a className="map-wrap" href={MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="Open directions in Google Maps">
          <div className="map-grid" aria-hidden="true" />
          <StateMark className="map-state" />
          <div className="map-label">
            <span className="pin-label">Jackson, MS</span>
            <strong>{BUILDING}</strong>
            <span>{ADDRESS[0]} · Open in Google Maps <ArrowUpRight size={14} /></span>
          </div>
          <ul className="map-counties">{COUNTIES.map((c) => <li key={c}>{c} County</li>)}</ul>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <StateMark className="footer-state" />
          <div>
            <strong>Central Mississippi</strong>
            <span>Oral &amp; Maxillofacial Surgery</span>
            <p>{DOCTOR}</p>
          </div>
        </div>
        <div>
          <h3>Procedures</h3>
          <ul>{PROCEDURES.map((p) => <li key={p.id}><a href="#procedures">{p.title}</a></li>)}</ul>
        </div>
        <div>
          <h3>Patients</h3>
          <ul>
            <li><a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Online registration</a></li>
            <li><a href={POLICY_PDF} target="_blank" rel="noopener noreferrer">Financial &amp; office policy (PDF)</a></li>
            <li><a href="#patients">Before &amp; after surgery</a></li>
            <li><a href="#insurance">Insurance</a></li>
            <li><a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
        <div>
          <h3>Office</h3>
          <p>{ADDRESS[0]}<br />{ADDRESS[1]}</p>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br />Mon–Fri 7:30 am – 4:00 pm</p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY}. Concept redesign by Blueprint WebStudio · Independent concept · not for official use. Current site: <a href={ORIGINAL}>kylehuntdmd.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  const status = useOpenStatus();
  return (
    <>
      <a className="skip" href="#procedures">Skip to content</a>
      <UtilityBar status={status} />
      <Header />
      <main>
        <Hero />
        <RegisterBand />
        <Procedures />
        <DrHunt />
        <Patients />
        <Insurance />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
