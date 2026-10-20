# SEO Optimization Mapping & Google Search Console Blueprint
**Company:** DM Lifts & Escalators  
**Canonical Domain:** `https://dmliftsandesclators.com`  
**Target Region:** Bengaluru, Karnataka & Pan-India  
**Primary Industry:** Vertical Mobility Engineering (Elevators, Escalators, Modernization, 24/7 AMC Maintenance)

---

## 1. Google Search Console (GSC) Setup & Verification Guide

### Step 1: Property Creation in Google Search Console
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** in the top-left dropdown.
3. You will be prompted with two choices:
   - **Domain Property (Recommended):** Enter `dmliftsandesclators.com`. Covers all subdomains (`www`, non-www, `http`, `https`).
   - **URL Prefix Property:** Enter `https://dmliftsandesclators.com/`.

---

### Step 2: Verification Methods

#### Method A: HTML Meta Tag (Instant - Already Configured in Code)
In [index.html](file:///c:/Users/gowda/OneDrive/Desktop/DM/index.html#L17), a verified placeholder has been implemented:
```html
<meta name="google-site-verification" content="ENTER_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE" />
```
* **Action:** When GSC generates your verification string (e.g. `google-site-verification=abc123xyz...`), replace `ENTER_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE` with the token, push/deploy, and click **Verify** in GSC.

#### Method B: DNS TXT Record (Best for Hostinger Domain Management)
1. In Hostinger hPanel, go to **Domains** &rarr; `dmliftsandesclators.com` &rarr; **DNS / Nameservers**.
2. Add a new **TXT Record**:
   - **Type:** `TXT`
   - **Name:** `@`
   - **TXT Value:** `google-site-verification=YOUR_UNIQUE_CODE`
   - **TTL:** `14400`
3. Click **Add Record** and hit **Verify** in GSC.

#### Method C: Google HTML Verification File
If you select the HTML File method in GSC (e.g. `google123456789.html`), simply download the file and save it in the [public/](file:///c:/Users/gowda/OneDrive/Desktop/DM/public) directory. It will be served at `https://dmliftsandesclators.com/google123456789.html`.

---

## 2. Sitemap Submission & Indexing Strategy

### The Hash Fragment Fix
> **Important Note:** Search engines do not index URLs with `#` hash fragments (e.g., `/#elevators-explore`). 
> The codebase has been upgraded with a dual-routing layer:
> 1. Clean canonical paths: `/elevators`, `/escalators`, `/installation`, `/modernization`, `/maintenance`, `/services`, `/about`, `/solutions`, `/contact`.
> 2. Apache `.htaccess` SPA fallback routes all subpaths to `index.html` with a `200 OK` status.
> 3. Dynamic client-side SEO updates title, canonical URL, and meta descriptions automatically upon page change.

### Submitting Sitemap to GSC
1. In Google Search Console, go to **Indexing** &rarr; **Sitemaps**.
2. Enter the sitemap URL:
   ```text
   sitemap.xml
   ```
   (Full URL: `https://dmliftsandesclators.com/sitemap.xml`)
3. Click **Submit**. Status will show **Success**.

---

## 3. Master SEO Keyword & URL Mapping Matrix

| Page URL | Primary Focus Keyword | Secondary / Long-Tail Keywords | Search Intent | Meta Title (< 60 chars) | Target H1 / H2 | Schema.org Type |
|---|---|---|---|---|---|---|
| **`/`** (Home) | DM Lifts & Escalators | elevator manufacturers Bangalore, commercial lift company, vertical mobility Karnataka | Commercial / Navigational | DM Lifts & Escalators \| Advanced Vertical Mobility & AMC Solutions | H1: DM LIFTS & ESCALATORS<br>H2: Precision Vertical Mobility | LocalBusiness, Organization, WebSite |
| **`/elevators`** | passenger elevators Bangalore | residential elevators, glass capsule lifts, commercial elevators, hospital bed lifts, MRL passenger lifts | Commercial / Transactional | Passenger, Residential & Commercial Elevators \| DM Lifts | H1: PASSENGER & ARCHITECTURAL ELEVATORS<br>H2: Premium Cabin Finishes | Service, Offer |
| **`/escalators`** | commercial escalators Bangalore | shopping mall escalators, moving walkways, transit autowalks, heavy duty escalators India | Commercial / Transactional | Commercial Escalators & Moving Walkways \| DM Lifts | H1: COMMERCIAL ESCALATORS & AUTOWALKS<br>H2: Heavy-Duty Transit Engineering | Service, Offer |
| **`/installation`** | elevator installation Bangalore | turnkey lift erection, elevator shaft civil planning, IS 14665 elevator compliance, lift commissioning | Transactional | Turnkey Elevator Installation & Shaft Engineering \| DM Lifts | H1: TURNKEY ELEVATOR INSTALLATION<br>H2: Structural Shaft & Laser Rail Alignment | Service |
| **`/modernization`** | elevator modernization Bangalore | lift controller retrofit, VVVF energy saving elevator upgrade, elevator cabin renovation, COP LOP replacement | Transactional / Problem Solving | Elevator Modernization & Controller Retrofit \| DM Lifts | H1: ELEVATOR MODERNIZATION & RETROFIT<br>H2: 40% Energy Efficiency & Microprocessor Controllers | Service |
| **`/maintenance`** | elevator AMC Bangalore | lift maintenance contract, 24/7 elevator breakdown service, emergency lift rescue, OEM elevator spare parts | Commercial / High-Intent | 24/7 Elevator AMC Maintenance & Emergency Rescue \| DM Lifts | H1: 24/7 ELEVATOR AMC MAINTENANCE<br>H2: Preventive Safety Inspections & Certified Spares | Service |
| **`/services`** | elevator engineering services | lift installation and maintenance, vertical transportation consulting, elevator safety audit | Informational / Commercial | Elevator & Escalator Engineering Services \| DM Lifts | H1: COMPREHENSIVE VERTICAL MOBILITY SERVICES<br>H2: Lifecycle Equipment Support | ServiceCatalog |
| **`/solutions`** | machine room less elevator | MRL lift specifications, gearless permanent magnet motor, smart elevator IoT dispatch, energy efficient lifts | Informational / Technical | Vertical Transportation Solutions & Tech Specs \| DM Lifts | H1: ADVANCED ENGINEERING SPECIFICATIONS<br>H2: Spatial Efficiency & Whisper-Quiet Drives | Product / TechArticle |
| **`/about`** | elevator company Bangalore | DM Lifts heritage, vertical mobility engineers Karnataka, elevator safety certification India | Informational / Brand Trust | About DM Lifts & Escalators \| Bengaluru's Premier Engineers | H1: ABOUT DM LIFTS & ESCALATORS<br>H2: Decades of Engineering Precision | AboutPage, Organization |
| **`/contact`** | elevator quote Bangalore | elevator price enquiry Bengaluru, lift installation cost estimate, emergency elevator service number | Transactional / High Conversion | Contact DM Lifts & Escalators \| Get a Free Engineering Quote | H1: LET'S BUILD VERTICAL POSSIBILITIES<br>H2: Direct Engineering Consultation & RFPs | ContactPage |

---

## 4. Structured Data (JSON-LD) Validation

The website includes Schema.org markup in `index.html` configured for Google Rich Results:
- `@type: ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"]`
- Complete NAP (Name, Address, Phone) consistency:
  - **Phone Lines:** `+91 93436 34318`, `+91 97432 32654`, `+91 63611 05490`
  - **Email:** `dmliftsescalators@gmail.com`
  - **Address:** No. 40, 3rd Floor, 4th Cross, 1st Main Rd, Anjanappa Layout, K. Narayanapura, Bengaluru - 560077
  - **Coordinates:** `13.0624, 77.6534`
  - **OfferCatalog:** 5 distinct Service Offers (Passenger Elevators, Commercial Escalators, AMC Maintenance, Modernization, Turnkey Installation)

### Testing Structured Data
1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Enter `https://dmliftsandesclators.com/` or paste code from `index.html`.
3. Verify that zero errors and zero warnings are returned.

---

## 5. Ongoing Google Search Console Monitoring (30-60-90 Day Plan)

### Days 1–14: Indexing & Inspection
- **Inspect Top URLs:** In GSC's top search bar, enter each key URL:
  - `https://dmliftsandesclators.com/`
  - `https://dmliftsandesclators.com/elevators`
  - `https://dmliftsandesclators.com/escalators`
  - `https://dmliftsandesclators.com/maintenance`
  - `https://dmliftsandesclators.com/installation`
  - `https://dmliftsandesclators.com/modernization`
- Click **Request Indexing** for each priority URL.
- Check the **Page Indexing** report to confirm pages transition from *Discovered - currently not indexed* to *Crawled - currently indexed*.

### Days 15–45: Query Mining & CTR Optimization
- Open **Performance** &rarr; **Search Results** in GSC.
- Filter by **Page = `/elevators`** or **`/maintenance`**.
- Identify search queries where Average Position is between 5 and 15 (page 1–2).
- Update page content headings or text to incorporate these exact search phrases.

### Days 45–90: Core Web Vitals & Experience
- Review **Core Web Vitals** under Experience:
  - **LCP (Largest Contentful Paint):** Target `< 2.5s`
  - **INP (Interaction to Next Paint):** Target `< 200ms`
  - **CLS (Cumulative Layout Shift):** Target `< 0.1`
- Review **Mobile Usability / Page Experience** to ensure responsive accessibility.
