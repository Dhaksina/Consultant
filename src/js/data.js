/**
 * REVA PHOENIX LABS & CONSULTANTS PVT. LTD. - Data Store
 * Source of truth: Official company data, archives and verified records
 */

export const COMPANY_INFO = {
  name: "Reva Phoenix Labs & Consultants Pvt. Ltd.",
  division: "Consulting Division",
  tagline: "Quality is our way of life!",
  philosophy: "PEOPLE | PROCESS | PRODUCT | PERFECTION",
  established: 2005,
  founder: "Dr. Manikandan Venkatesan",
  founderInspiration: "Smt. Revathi Venkatesan, Founder Director, Cancer warrior & Survivor and the inspiration behind this Organization",
  address: {
    line1: "Reva Phoenix Complex, No. 14, 4th Street",
    line2: "Rajarajeswari Nagar, Madipakkam",
    city: "Chennai",
    postalCode: "600 091",
    state: "Tamilnadu",
    country: "India"
  },
  tax: {
    gst: "33AAFCR4885G1Z6",
    sac: "998313"
  },
  contacts: {
    general: {
      email: "info@revaphoenix.com",
      phone: "+91 99405 64261",
      displayPhone: "+91 99405 64261"
    },
    enquiry: {
      title: "Enquiry & Quote",
      phone: "+91 98406 72352",
      email: "enquiry@revaphoenix.com"
    },
    feedback: {
      title: "Feedback & Complaints",
      phone: "+91 99405 64261",
      email: "mani.venkatesh@revaphoenix.com"
    },
    collection: {
      title: "Collection & Delivery",
      phone: "+91 98402 96996",
      email: "reception@revaphoenix.com"
    },
    accounts: {
      title: "Accounts & Invoice",
      phone: "+91 95000 32931",
      email: "accounts@revaphoenix.com"
    }
  },
  labDivisionUrl: "https://www.revacalibration.com/",
  socials: {
    linkedin: "https://www.linkedin.com/company/reva-phoenix-consulting/",
    youtube: "https://www.youtube.com/@revaphoenix",
    facebook: "https://www.facebook.com/revaphoenix/",
    whatsapp: "https://wa.me/919940564261"
  }
};

export const HERO_DATA = {
  eyebrow: "Consulting • Training • Engineering • Auditing",
  titleLine1: "REVA PHOENIX",
  titleLine2: "LABS & CONSULTANTS",
  tagline1: "CONSULTING.",
  tagline2: "TRAINING.",
  tagline3: "ENGINEERING.",
  tagline4: "AUDITING.",
  description: "Empowering international manufacturing, energy, and aerospace leaders with verified API Monogram licenses, Integrated Management Systems (IMS), and precision quality consulting. Driving operational excellence for over two decades.",
  ctaPrimaryText: "Get A Quote",
  ctaPrimaryService: "Turnkey Management System Certification",
  ctaSecondaryText: "Explore Services",
  ctaSecondaryLink: "#services"
};

export const ABOUT_DATA = {
  subtitle: "Together We Grow!",
  headingWord1: "ABOUT",
  headingWord2: "REVA",
  headingWord3: "PHOENIX",
  founderImage: "assets/about/dr-manikandan-venkatesan-md.jpg",
  founderName: "Dr. Manikandan Venkatesan",
  founderTitle: "Founder & Managing Director",
  leadText: "It is the endeavor of Reva Phoenix Labs & Consultants Pvt. Ltd. Consulting Division to add value to our Customer's Business & Management Systems through Training, Consultation, Implementation and other Value-added services.",
  bodyText: "It has been nearly 2 decades since we started Reva Phoenix, as a modest organization. We have grown to become one of the leading service providers in the Industry.",
  tributeQuote: "Our growth is attributed to the blessings of Smt. Revathi Venkatesan, Our Founder Director, Cancer warrior & Survivor and the inspiration behind this Organization;",
  mdButtonText: "Message From MD",
  coreValuesButtonText: "Our Core Values"
};

export const STATISTICS = [
  {
    value: 500,
    suffix: "+",
    label: "Customers Worldwide",
    subtext: "Across major multinational manufacturing & oil & gas leaders"
  },
  {
    value: 40,
    suffix: "+",
    label: "Countries Served",
    subtext: "Across India, the Middle East, Asia & the US"
  },
  {
    value: 25,
    suffix: "",
    label: "Years Domain Expertise",
    subtext: "Continuous leadership in industrial quality & engineering"
  },
  {
    value: 100,
    suffix: "%",
    label: "Success Rate",
    subtext: "For committed management system & certification projects"
  }
];

export const CORE_VALUES = [
  {
    number: "01",
    title: "Integrity",
    description: "Upholding absolute moral and ethical standards in consulting, training, auditing and organizational guidance."
  },
  {
    number: "02",
    title: "Value for Money",
    description: "Delivering measurable return on investment, operational efficiency, and tangible cost savings for every client."
  },
  {
    number: "03",
    title: "Discipline at Work",
    description: "Rigorous adherence to technical procedures, international standards, timeframes, and quality benchmarks."
  },
  {
    number: "04",
    title: "Assured Confidentiality",
    description: "Strict protection and safeguarding of client proprietary data, engineering designs, and trade secrets."
  },
  {
    number: "05",
    title: "Excellence at Work",
    description: "Relentless commitment to surpass client expectations and elevate industrial benchmarks worldwide."
  }
];

export const SERVICES = [
  {
    id: "training",
    num: "01",
    name: "TRAINING",
    tagline: "Classroom & Onsite Industrial Masterclasses",
    description: "Reva Phoenix provides classroom trainings (both online and onsite trainings) coupled with industry-specific workshops to cater to the demands of manufacturing and service industries. Being Master Trainers, core areas of training include API, QMS, EMS, OHSAS, IMS, TPM, TQM, Lean and Six Sigma.",
    image: "assets/services/training-classroom.jpg",
    deliverables: [
      "API Spec Q1 & Q2 Internal Auditor Certifications",
      "ISO 9001 / 14001 / 45001 Lead Auditor & Internal Auditor",
      "IATF 16949:2016 & VDA 6.3 Process Audit Modules",
      "Lean Manufacturing & Six Sigma Green / Black Belt",
      "TPM, TQM & 5S Shop Floor Transformation Workshops"
    ]
  },
  {
    id: "consulting",
    num: "02",
    name: "CONSULTING",
    tagline: "Process Optimization & Quality System Architecture",
    description: "Reva Phoenix has process improvement specialists and quality system professionals who focus on 'value-added' auditing, consulting, training, and process documentation to help you find quantifiable cost savings and sustainable cultural change.",
    image: "assets/services/consulting-engineering.jpg",
    deliverables: [
      "Process Bottleneck Analysis & Cycle Time Reduction",
      "Standard Operating Procedures (SOP) Engineering",
      "Cost of Poor Quality (COPQ) Minimization",
      "Hoshin Kanri / Policy Deployment Systems",
      "Cross-Functional Team Mentoring & Strategic Alignment"
    ]
  },
  {
    id: "implementation",
    num: "03",
    name: "IMPLEMENTATION",
    tagline: "End-to-End 4-Level Management System Deployment",
    description: "We fully assist organizations in Management System certification, starting from Initial System Study, Gap Analysis, Documentation, Training, Implementation, Internal Audit, and Management Review until final certification audit closure.",
    image: "assets/services/implementation-methodology.jpg",
    deliverables: [
      "Level 01 – Documented Information: Quality & Operations Manuals",
      "Level 02 – Documented Information: Standard Operating Procedures",
      "Level 03 – Documented Information: SOPs, Work Instructions, Process Protocols",
      "Level 04 – Documented Information: Controlled Forms, Formats & Records",
      "Hands-on shop-floor coaching and live process run-throughs"
    ]
  },
  {
    id: "project-management",
    num: "04",
    name: "PROJECT MANAGEMENT",
    tagline: "Structured Timelines, Budgets & Strategic Execution",
    description: "Complete turnkey project governance ensuring compliance deadlines, budgetary control, technical milestone delivery, and multi-facility synchronization are met with zero project delays.",
    image: "assets/services/project-management-flow.jpg",
    deliverables: [
      "Integrated Project Master Plan & Critical Path Tracking",
      "Resource Allocation & Inter-Departmental Coordination",
      "Weekly Milestone Reviews & Executive Dashboards",
      "Risk Mitigation & Contingency Response Blueprints",
      "Multi-Site Management System Harmonization"
    ]
  },
  {
    id: "engineering",
    num: "05",
    name: "ENGINEERING",
    tagline: "API Design Review, Metallurgy & Special Process Packages",
    description: "Technical engineering consultancy addressing complex oil & gas, aerospace, and precision manufacturing requirements with certified validation packages.",
    image: "assets/api/api-spec-q1-inspection.jpg",
    deliverables: [
      "API Design Review & Complete API Design Packages",
      "Special Process – Validated Welding Documentation (WPS/PQR)",
      "Special Process – ASNT SNT TC 1A Approved Level 03 NDE Procedures",
      "Special Process – Validated Heat Treatment Packages",
      "Special Process – Coating, Plating & Surface Treatment Documentation"
    ]
  },
  {
    id: "auditing",
    num: "06",
    name: "AUDITING",
    tagline: "Zero-Compromise Compliance & Gap Assessments",
    description: "Auditing with surgical precision. Rigorous evaluations that uncover hidden process variances, prepare teams for external accreditation, and formulate airtight corrective actions.",
    image: "assets/services/auditing-precision.jpg",
    deliverables: [
      "Pre-Assessment Audits & Comprehensive Gap Analyses",
      "Independent Second-Party Supplier Audits",
      "API Spec Q1 / Q2 Mock Audits with Root Cause Analysis",
      "Technical Support for Resolving & Closing Audit Non-Conformances",
      "Management Review Facilitation & Effectiveness Verification"
    ]
  }
];

export const API_SERVICES = {
  title: "API SPECIFICATION EXPERTISE",
  subtitle: "American Petroleum Institute (API) Monogram & Quality Management Consulting",
  description: "Reva Phoenix is recognized as one of the world's foremost Management System Certification Consulting organizations for the API Oil & Gas Industry, serving 500+ clients across 40 countries.",
  programs: [
    {
      id: "api-auditing",
      code: "API AUDITING SERVICES",
      edition: "Audit & Assessment",
      title: "API Auditing, Second-Party & Mock Assessments",
      badge: "Audit Precision",
      overview: "Reva Phoenix Labs & Consultants Pvt. Ltd. Consulting Division offers best-in-class second party & mock assessment services preparing organizations for final API Certification and annual surveillance audits. Our comprehensive product, process, and system audit methodology imparts robustness to your quality management systems.",
      image: "assets/services/auditing-precision.jpg",
      pillars: [
        { name: "Mock API Audits", desc: "Rigorous pre-assessment simulating official API audits to uncover hidden variances and ensure auditor approval." },
        { name: "Supplier Audits", desc: "Independent second-party and third-party supplier audits assessing technical capacity, systems, and contractual conformance." },
        { name: "Design & Verification", desc: "Design package audits, design verification services, and third-party inspection for PR2 / PR2F testing." },
        { name: "Special Processes", desc: "Comprehensive audits for special processes including Welding (WPS/PQR), NDE, Heat Treatment, Coating, and Plating." }
      ]
    },
    {
      id: "api-q1-about",
      code: "ABOUT API SPEC Q1",
      edition: "10th Edition Standard",
      title: "API Spec Q1 10th Edition Quality Management Standard",
      badge: "Manufacturing Standard",
      overview: "API Spec Q1 outlines the highest quality management standard for companies manufacturing equipment and components used in the petroleum and natural gas industries. The 10th Edition promotes the integration of a process approach, emphasizing prevention of nonconformities, contingency planning, risk assessment, and minimizing variation and waste.",
      image: "assets/api/api-spec-q1-inspection.jpg",
      pillars: [
        { name: "10th Edition Framework", desc: "Aligned with the requirements of ISO 9001:2015 while retaining stringent petroleum-specific realization mandates." },
        { name: "Risk Assessment", desc: "Systematic identification of contingency planning, risk assessments, and mitigation controls across realization." },
        { name: "Design Validation", desc: "Comprehensive design review guidelines, design verification, and design change management protocols." },
        { name: "Traceability & Control", desc: "Stringent material identification, inspection hold-points, and calibrated measurement integrity." }
      ]
    },
    {
      id: "api-q1-training",
      code: "API SPEC Q1 TRAINING",
      edition: "Internal Auditor Course",
      title: "API Spec Q1 10th Edition Internal Auditor Training",
      badge: "Auditor Masterclass",
      overview: "Comprehensive professional training course delivered by certified master auditors. Equips engineers, quality managers, and shop-floor leads with in-depth clause interpretations, audit checklist preparation, live non-conformance evaluation, and practical industrial case studies.",
      image: "assets/services/training-classroom.jpg",
      pillars: [
        { name: "Clause Breakdown", desc: "Detailed breakdown of 10th Edition sections including Management of Change, Supplier Control, and Realization." },
        { name: "Audit Execution", desc: "Hands-on techniques for objective evidence gathering, non-conformance reporting, and root-cause analysis." },
        { name: "Case Study Workshops", desc: "Real-world oil and gas manufacturing audit scenarios to develop practical audit interview skills." },
        { name: "Competence Credential", desc: "Rigorous competence evaluation leading to certified Reva Phoenix Internal Auditor credentials." }
      ]
    },
    {
      id: "api-q1-consultancy",
      code: "API SPEC Q1 CONSULTANCY",
      edition: "Turnkey Implementation",
      title: "Turnkey API Spec Q1 10th Edition Consulting & Licensing",
      badge: "100% Success Rate",
      overview: "Reva Phoenix offers a one-stop solution for API Certification and API Monogram programs. Serving 500+ clients across 40 countries, our specialists manage every stage from initial gap analysis and Level 1–4 documentation development to mock audit closure and API auditor defense.",
      image: "assets/api/api-spec-q1-inspection.jpg",
      pillars: [
        { name: "Baseline Gap Analysis", desc: "Comprehensive assessment of current shop-floor procedures against every 10th Edition requirement." },
        { name: "4-Level Documentation", desc: "Custom Quality Manuals, SOPs, Work Instructions, and Controlled Inspection Formats tailored to your culture." },
        { name: "Implementation Mentoring", desc: "Shop-floor mentoring of engineering, procurement, production, and quality inspection teams." },
        { name: "Audit Defense & NC Closure", desc: "Pre-audit verification, auditor facilitation, and rapid closure support for external API findings." }
      ]
    },
    {
      id: "api-q2-about",
      code: "ABOUT API SPEC Q2",
      edition: "2nd Edition Standard",
      title: "API Spec Q2 Quality Standard for Service Organizations",
      badge: "Upstream Services",
      overview: "API Spec Q2 from the American Petroleum Institute is the premier international quality management system standard designed specifically for oil and gas service supply organizations. It covers critical service execution, risk management, personnel competence, and contingency planning for upstream operations.",
      image: "assets/industries/oil-and-gas-facility.jpg",
      pillars: [
        { name: "Service Execution Plans", desc: "Structured controls for onshore and offshore well-site operations, drilling services, and equipment handling." },
        { name: "Critical Maintenance", desc: "Rigorous preventive maintenance and calibration schedules for mission-critical service tools." },
        { name: "Competency Verification", desc: "Field personnel qualification matrices, role assessments, and specialized training records." },
        { name: "Risk & MOC Controls", desc: "Systematic Management of Change (MOC) and risk assessments tailored to dynamic service environments." }
      ]
    },
    {
      id: "api-q2-training",
      code: "API SPEC Q2 TRAINING",
      edition: "Service Lead Auditor",
      title: "API Spec Q2 2nd Edition Service Quality Training",
      badge: "Field Competency",
      overview: "Specialized training program for upstream oilfield service suppliers, rig contractors, and service engineers. Explores service risk assessments, service design controls, supply chain evaluation, and evidence-driven compliance across field operations and offshore platforms.",
      image: "assets/gallery/training-session-group.jpg",
      pillars: [
        { name: "Upstream Service Mapping", desc: "Translating field service operations into structured, verifiable Q2-compliant processes." },
        { name: "Data & Evidence Capture", desc: "Evidence-based compliance tracking required by Super Majors and leading operators." },
        { name: "Field & Rig Audit Protocols", desc: "Techniques for evaluating field operations, tool deployment, and subcontractor performance." },
        { name: "Interactive Auditor Drills", desc: "Simulated service non-conformance reviews, corrective action formulation, and management reviews." }
      ]
    },
    {
      id: "api-q2-consultancy",
      code: "API SPEC Q2 CONSULTANCY",
      edition: "Turnkey Service QMS",
      title: "API Spec Q2 Turnkey Implementation & Registration Consulting",
      badge: "Turnkey QMS",
      overview: "Turnkey consulting guiding service entities through complete API Spec Q2 registration. Our standard experts review Level 1 to 4 documentation, map service delivery workflows, implement preventative equipment maintenance protocols, and conduct internal audits to ensure flawless certification.",
      image: "assets/industries/oil-and-gas-facility.jpg",
      pillars: [
        { name: "Service Scoping & Review", desc: "Detailed review of existing field records, logs, and procedures to establish custom project scopes." },
        { name: "Customized Documentation", desc: "Creation of service quality plans, inspection checklists, and equipment maintenance protocols." },
        { name: "Embedded Field Coaching", desc: "Hands-on mentoring of service engineers, field technicians, and quality leads at office and rig locations." },
        { name: "Pre-Assessment Audit", desc: "Full simulation of the API registration audit to confirm readiness and eliminate compliance gaps." }
      ]
    },
    {
      id: "api-monogram",
      code: "API MONOGRAM",
      edition: "Licensing & Product Specs",
      title: "API Monogram Product Licensing & Design Packages",
      badge: "Global Authority",
      overview: "Voluntary licensing program certifying that equipment conforms to official API Product Specifications. Reva Phoenix assists manufacturers in qualifying for Monogram licenses across API 5B, 5CT, 6A, 6D, 7-1, 11B, 16A and more, including full API design packages, proof testing, and NC closures.",
      image: "assets/api/api-monogram-spec.jpg",
      pillars: [
        { name: "Product Spec Coverage", desc: "Consulting for API 5B, 5CT, 6A, 6D, 7-1, 11B, 16A, 16C, 600, 602, and casing/tubing standards." },
        { name: "API Design Packages", desc: "Preparation of complete Design Review Packages, design calculations, drawings, and FMEA reports." },
        { name: "Design Validation & PR2", desc: "Validation testing support including PR2 / PR2F qualification testing with Third Party Inspection (TPI)." },
        { name: "Facility Readiness Audit", desc: "Four-month operational QMS verification, primary subcontractor audits, and licensing application defense." }
      ]
    }
  ]
};

export const IMS_SERVICES = {
  title: "MANAGEMENT SYSTEM SERVICES",
  subtitle: "Integrated Management Systems (IMS), ISO Certifications & Business Excellence",
  description: "End-to-end consulting, documentation, training, and auditing across international ISO management standards and industrial business excellence frameworks.",
  certifications: [
    { id: "api-spec-q1", code: "API Spec Q1", name: "API Spec Q1, 10th Edition", category: "API Standard", focus: "Quality Management System for Manufacturing Organizations in the petroleum & natural gas industry." },
    { id: "api-spec-q2", code: "API Spec Q2", name: "API Spec Q2, 3rd Edition", category: "API Standard", focus: "Quality Management System for Service Supply Organizations for the petroleum & natural gas industry." },
    { id: "api-monogram", code: "API Monogram", name: "API Product Monogram Programs", category: "API Licensing", focus: "Licensing and quality compliance for API-marked petroleum industry products and equipment." },
    { id: "iso-9001", code: "ISO 9001:2026", name: "Quality Management System (QMS)", category: "Certification", focus: "Customer satisfaction, process governance, risk-based thinking, organizational resilience." },
    { id: "iso-14001", code: "ISO 14001:2026", name: "Environmental Management System (EMS)", category: "Certification", focus: "Resource efficiency, waste reduction, legal environmental compliance, sustainability." },
    { id: "iso-45001", code: "ISO 45001:2018", name: "Occupational Health & Safety (OH&S MS)", category: "Certification", focus: "Hazard identification, workplace risk mitigation, employee well-being, incident prevention." },
    { id: "iso-50001", code: "ISO 50001:2018", name: "Energy Management System (EnMS)", category: "Certification", focus: "Energy performance, energy efficiency, energy use reduction, carbon footprint minimization." },
    { id: "iatf-16949", code: "IATF 16949:2016", name: "Automotive Quality Management System", category: "Certification", focus: "Defect prevention, supply chain variation reduction, APQP, PPAP, FMEA, MSA, SPC." },
    { id: "as-9100", code: "AS9100 D:2016", name: "Aerospace Quality Management System", category: "Certification", focus: "Aviation, space, and defense standards, product safety, counterfeit parts prevention." },
    { id: "iso-17025", code: "ISO/IEC 17025:2017", name: "Laboratory Quality Management System", category: "Accreditation", focus: "NABL accreditation, technical competence, measurement uncertainty, traceability." },
    { id: "iso-27001", code: "ISO/IEC 27001:2022", name: "Information Security Management System (ISMS)", category: "Certification", focus: "Information security, cybersecurity risk, data protection, access control governance." },
    { id: "iso-22000", code: "ISO 22000:2018", name: "Food Safety Management System (FSMS)", category: "Certification", focus: "Food safety hazard control, HACCP, prerequisite programs, supply chain food safety." },
    { id: "iso-13485", code: "ISO 13485:2016", name: "Medical Device Quality Management System", category: "Certification", focus: "Medical device regulatory compliance, product safety, risk management, clinical traceability." },
    { id: "iso-14064", code: "ISO 14064-1:2018", name: "Greenhouse Gas (GHG) — All 3 Parts", category: "Certification", focus: "GHG quantification, monitoring, reporting, verification, and carbon neutrality programs." },
    { id: "vda-6-3", code: "VDA 6.3", name: "German Automotive Process Audit Standard", category: "Certification", focus: "Process lifecycle audit from product development to series production and customer care." },
    { id: "quality-core-tools", code: "Quality Core Tools", name: "Quality Core Tools", category: "Training Program", focus: "APQP, FMEA (AIAG-VDA), MSA, SPC, PPAP — automotive and manufacturing quality essentials." },
    { id: "lean-six-sigma", code: "Lean / Six Sigma", name: "Lean Manufacturing & Six Sigma", category: "Excellence Program", focus: "Waste elimination, flow optimization, DMAIC defect reduction, and Green/Black Belt certification." },
    { id: "tpm-tqm", code: "TPM / TQM", name: "TPM, TQM & Business Excellence", category: "Excellence Program", focus: "Total Productive Maintenance, Total Quality Management, OEE improvement, and Deming-based business excellence." }
  ],
  businessExcellence: [
    {
      id: "5s-6s",
      name: "5S / 6S Workplace Organization",
      tagline: "Visual Management, Safety Standards & Disciplined Shop Floors",
      badge: "Visual Control",
      icon: "🧹",
      desc: "Sort, Set in order, Shine, Standardize, Sustain, Safety – establishing world-class visual shop floors.",
      overview: "5S / 6S is a foundational Lean methodology engineered to organize, clean, standardize, and sustain a high-performance workplace environment. Reva Phoenix assists manufacturing plants and engineering facilities in executing full-scale 5S/6S transformations that eliminate waste, optimize ergonomics, and instill a disciplined culture of zero clutter and maximum safety across production lines and warehouses.",
      pillars: [
        { title: "1S – Seiri (Sort)", text: "Identify essential vs non-essential items using systematic red-tag campaigns. Eliminate scrap, obsolete tooling, and excess WIP from shop floors." },
        { title: "2S – Seiton (Set In Order)", text: "Establish a designated place for everything and everything in its place. Implement shadow boards, visual floor striping, color-coded boundaries, and ergonomic tool placements." },
        { title: "3S – Seiso (Shine)", text: "Clean and inspect machinery during cleaning. Identify root causes of leaks, dust, and contamination, turning daily cleaning into preventative maintenance inspection." },
        { title: "4S – Seiketsu (Standardize)", text: "Create visual standard operating procedures (SOPs), 5S schedules, color-coding standards, and clear ownership matrices across shifts." },
        { title: "5S – Shitsuke (Sustain)", text: "Establish daily gemba walks, tiered audit scorecards, visual 5S radar charts, and recognition programs to cement long-term operational habits." },
        { title: "6S – Safety (The 6th S)", text: "Embed proactive hazard identification, emergency egress clearance, PPE demarcation, and ergonomics into every daily operational routine." }
      ],
      benefits: [
        "30%–45% reduction in operator tool and material search time",
        "Drastic reduction in workplace slips, trips, and safety incidents",
        "Rapid identification of machine leaks, defects, and fluid anomalies",
        "Audit-ready visual appeal for customer audits and OEM inspections"
      ],
      deliverables: [
        "Baseline 5S Diagnostic Scorecard & Gap Analysis",
        "Shop Floor Red-Tag Campaign Execution & Disposition Matrix",
        "Visual Management Guidelines (Shadow boards, floor zoning, signage)",
        "Tier-1 & Tier-2 5S Internal Audit Protocols and Radar Charts"
      ]
    },
    {
      id: "tpm",
      name: "Total Productive Maintenance (TPM)",
      tagline: "Zero Breakdowns, Zero Stoppages & Maximum OEE Performance",
      badge: "Asset Reliability",
      icon: "⚙️",
      desc: "Autonomous maintenance, planned maintenance, and zero unplanned downtime strategies.",
      overview: "Total Productive Maintenance (TPM) is an organization-wide physical asset management strategy focused on maximizing Overall Equipment Effectiveness (OEE) while striving for zero unplanned breakdowns, zero minor stops, and zero defects. Originated by JIPM, TPM empowers operators to take co-ownership of machine health through structured maintenance pillars.",
      pillars: [
        { title: "Pillar 1: Jishu Hozen (Autonomous Maintenance)", text: "Train machine operators to perform daily cleaning, lubrication, bolting, and early detection of equipment abnormalities." },
        { title: "Pillar 2: Planned Maintenance (PM)", text: "Transition from reactive firefighting to predictive and preventive maintenance schedules based on Mean Time Between Failures (MTBF)." },
        { title: "Pillar 3: Kobetsu Kaizen (Focused Improvement)", text: "Deploy cross-functional small groups to eliminate the 6 Big Losses that suppress equipment speed and availability." },
        { title: "Pillar 4: Quality Maintenance (Hinshitsu Hozen)", text: "Set zero-defect conditions on machines to ensure that equipment variations cannot produce defective parts." },
        { title: "Pillar 5: Early Equipment Management", text: "Design for reliability and maintainability, ensuring that new machinery reaches full production speed rapidly." },
        { title: "Pillar 6: Education & Training", text: "Multi-skilling operators and maintenance engineers in technical diagnostics and machine condition monitoring." },
        { title: "Pillar 7: Office TPM", text: "Streamline administrative, logistics, and supply chain processes to eliminate bottlenecks supporting shop floor production." },
        { title: "Pillar 8: Safety, Health & Environment (SHE)", text: "Guarantee zero workplace accidents, ergonomic equipment operation, and environmental compliance." }
      ],
      benefits: [
        "Significant boost in Overall Equipment Effectiveness (OEE) up to world-class 85%+",
        "Up to 60% reduction in unexpected machine breakdowns and emergency downtime",
        "Prolonged machinery lifespan and substantial reduction in replacement capital costs",
        "Shared operator ownership leading to heightened pride and job satisfaction"
      ],
      deliverables: [
        "Plant-wide OEE Measurement & Loss Tree Classification System",
        "Autonomous Maintenance (JH) Step 1–Step 7 Rollout Roadmap",
        "Preventative & Predictive Maintenance (PPM) Master Calendar",
        "Autonomous Maintenance Inspection Checklists & Tagging Systems"
      ]
    },
    {
      id: "tqm",
      name: "Total Quality Management (TQM)",
      tagline: "Company-Wide Continuous Improvement & Customer-Centric Culture",
      badge: "Quality Governance",
      icon: "🏆",
      desc: "Organization-wide continuous improvement culture engaging all hierarchical levels.",
      overview: "Total Quality Management (TQM) is a holistic management philosophy focused on integrating all organizational functions—from executive leadership and design to manufacturing and sales—around the relentless pursuit of customer satisfaction and continuous process improvement. Reva Phoenix builds resilient quality cultures based on Deming, Juran, and Crosby methodologies.",
      pillars: [
        { title: "Customer-Focused Quality", text: "Direct alignment of quality benchmarks with customer requirements and voice-of-the-customer (VOC) metrics." },
        { title: "Total Employee Involvement", text: "Empowering every employee through Quality Control (QC) Circles and grassroots improvement initiatives." },
        { title: "Process-Centered Thinking", text: "Rigorous focus on process inputs, controls, transformation steps, and outputs rather than merely inspecting final goods." },
        { title: "Systemic Strategic Integration", text: "Connecting long-term corporate vision with daily operational quality targets via policy deployment (Hoshin Kanri)." },
        { title: "Continual Improvement (Kaizen / PDCA)", text: "Institutionalizing Plan-Do-Check-Act cycles to continuously refine workflows and operational performance." },
        { title: "The 7 Basic Quality Tools", text: "Equipping teams with Pareto charts, Ishikawa fishbones, histograms, control charts, check sheets, and scatter plots." }
      ],
      benefits: [
        "Substantial reduction in Cost of Poor Quality (COPQ) and warranty claims",
        "Higher cross-departmental collaboration and elimination of functional silos",
        "Institutionalized problem-solving capability across junior and senior staff",
        "Enhanced brand reputation and elevated customer loyalty indices"
      ],
      deliverables: [
        "TQM Organizational Maturity Assessment & Strategy Blueprint",
        "QC Circle Formation, Problem-Solving Workshops & Facilitation",
        "7 Basic Tools of Quality Training & Hands-on Implementation Guides",
        "Internal Quality Governance Steering Committee Charters"
      ]
    },
    {
      id: "lean",
      name: "Lean Manufacturing & Value Stream Mapping",
      tagline: "Elimination of the 7 Wastes (Muda) & Seamless Flow Optimization",
      badge: "Waste Elimination",
      icon: "⚡",
      desc: "Elimination of 7 wastes (Muda), Value Stream Mapping (VSM), Kanban, Kaizen implementation.",
      overview: "Lean Manufacturing is centered on the relentless elimination of non-value-adding activities (Muda) to create smooth, rapid flow from raw material receipt to finished goods delivery. Utilizing Value Stream Mapping (VSM), Kanban pull mechanisms, and Single-Minute Exchange of Die (SMED), Reva Phoenix accelerates production velocity and unleashes trapped working capital.",
      pillars: [
        { title: "Value Stream Mapping (VSM)", text: "Mapping Current State material and information flows to identify bottlenecks, followed by engineering the Future State ideal flow." },
        { title: "Elimination of 7 Wastes (Muda)", text: "Targeting Overproduction, Waiting, Transport, Over-processing, Excess Inventory, Motion, and Product Defects." },
        { title: "Kanban & Pull Systems", text: "Replacing push scheduling with customer demand-driven pull signals, slashing WIP and holding costs." },
        { title: "Quick Changeover (SMED)", text: "Converting internal setup operations to external ones to drastically reduce changeover times for high-mix production." },
        { title: "Cellular Manufacturing & Line Balancing", text: "Re-engineering equipment layouts into U-shaped manufacturing cells that eliminate transfer travel." },
        { title: "Poka-Yoke (Mistake Proofing)", text: "Designing mechanical and electronic interlocks that make it impossible to produce or pass an assembly error." }
      ],
      benefits: [
        "40%–60% reduction in total order-to-delivery lead times",
        "30%–50% decrease in Work-in-Progress (WIP) and warehouse inventory",
        "Up to 25% reclaim of usable factory floor space through cellular redesign",
        "Agile responsiveness to fluctuating customer order sizes and mix"
      ],
      deliverables: [
        "Current State & Future State Value Stream Mapping (VSM) Diagrams",
        "Kanban Sizing & Supermarket Buffer Inventory Design",
        "SMED Setup Reduction Video Analysis & Rapid Changeover Matrix",
        "Cellular Workflow Layout Designs & Work Balance Charts"
      ]
    },
    {
      id: "six-sigma",
      name: "Six Sigma (DMAIC Methodology)",
      tagline: "Statistical Defect Reduction, Process Capability & Rigorous Governance",
      badge: "Statistical Rigor",
      icon: "🎯",
      desc: "Define, Measure, Analyze, Improve, Control – statistical defect minimization and process capability.",
      overview: "Six Sigma is a disciplined, data-driven methodology designed to virtually eliminate defects and process variability, achieving less than 3.4 Defects Per Million Opportunities (DPMO). Reva Phoenix deploys certified Master Black Belts and Black Belts to guide engineering teams through high-impact DMAIC projects that deliver auditable bottom-line financial savings.",
      pillars: [
        { title: "Phase 1: Define (D)", text: "Draft comprehensive Project Charters, map high-level SIPOC processes, and capture the Voice of Customer (VOC) to identify Critical-to-Quality (CTQ) parameters." },
        { title: "Phase 2: Measure (M)", text: "Validate measurement reliability through Gage R&R studies, establish data collection plans, and calculate baseline Cp, Cpk, and process sigma." },
        { title: "Phase 3: Analyze (A)", text: "Perform rigorous statistical root-cause analysis using hypothesis testing, regression analysis, ANOVA, and multi-vari studies." },
        { title: "Phase 4: Improve (I)", text: "Design experiments (DOE), develop breakthrough countermeasures, optimize process parameters, and conduct pilot validations." },
        { title: "Phase 5: Control (C)", text: "Institutionalize Statistical Process Control (SPC) charts, mistake-proofing mechanisms, reaction plans, and updated SOPs to sustain permanent gains." }
      ],
      benefits: [
        "Substantial reduction in scrap, rework, and machining tolerance variances",
        "Verifiable ROI and direct bottom-line financial savings per completed project",
        "Predictable, repeatable manufacturing processes with elevated Cpk capability (>1.67)",
        "Internal engineering capability building via Green & Black Belt mentoring"
      ],
      deliverables: [
        "High-Impact DMAIC Project Charter & Financial Validation Template",
        "Measurement System Analysis (MSA / Gage R&R) Verification Dossiers",
        "DOE (Design of Experiments) Statistical Modeling & Analysis Reports",
        "Process Control Plans (PCP) & Live Statistical Process Control (SPC) Charts"
      ]
    },
    {
      id: "supplier-dev",
      name: "Supplier Development & Quality Management",
      tagline: "Supply Chain Resilience, Capability Audits & Vendor Quality Partnerships",
      badge: "Supply Chain",
      icon: "🤝",
      desc: "Supplier evaluation, capability auditing, quality enhancement, and vendor partnership programs.",
      overview: "In today's complex manufacturing and energy ecosystems, overall product quality is fundamentally bounded by supplier performance. Reva Phoenix acts as an extension of your procurement and quality teams to evaluate, audit, coach, and elevate tier-1 and tier-2 vendor capabilities to meet stringent ISO, IATF 16949, and API Q1 supply chain benchmarks.",
      pillars: [
        { title: "Supplier Qualification Audits", text: "Conduct comprehensive onsite technical capability, quality management, and capacity verification audits." },
        { title: "PPAP & FAI Verification", text: "Validate Production Part Approval Process (PPAP Level 1–5) and First Article Inspection (AS9102 / API) submissions." },
        { title: "Supplier Quality Improvement Plans (SQIP)", text: "Institute structured turnaround programs for underperforming vendors with clear performance milestones." },
        { title: "8D Root Cause & Corrective Action", text: "Enforce disciplined 8D problem-solving methodologies for supplier-induced defects and systemic recurrence prevention." },
        { title: "Vendor Performance Scorecards", text: "Deploy quantitative supplier rating metrics tracking Parts Per Million (PPM), on-time delivery, and responsiveness." },
        { title: "Subcontractor Special Process Auditing", text: "Evaluate welding, heat treatment, NDT, and surface coating subcontractors against AMS, ASTM, and API standards." }
      ],
      benefits: [
        "Dramatic reduction in incoming inspection reject rates and line stoppages",
        "Mitigation of supply chain disruption and high-risk subcontractor failure",
        "Accelerated supplier onboarding and new product introduction (NPI) cycles",
        "Seamless compliance with ISO 9001 Clause 8.4 and IATF 16949 supplier requirements"
      ],
      deliverables: [
        "Customized Supplier Audit Checklist & Risk Assessment Protocols",
        "Vendor Scorecard & Performance Rating KPI Dashboard",
        "Supplier 8D Root Cause Corrective Action Tracking Matrix",
        "PPAP Verification & Special Process Evaluation Reports"
      ]
    },
    {
      id: "tpi",
      name: "Third Party Inspection (TPI)",
      tagline: "Impartial Stage Witness, Pre-Shipment Inspection & Compliance Certification",
      badge: "Independent QA",
      icon: "🔍",
      desc: "Impartial inspection, stage witness, expediting, and compliance verification across manufacturing plants.",
      overview: "Third Party Inspection (TPI) provides impartial, globally recognized quality assurance and compliance verification for critical industrial, energy, and engineering components. Reva Phoenix certified inspectors (ASNT / ISO 9712 / API) witness crucial fabrication stages, review mill test certificates, and ensure unyielding conformity prior to dispatch.",
      pillars: [
        { title: "Quality Control Plan (QCP / ITP) Review", text: "Review Inspection and Test Plans to establish mandatory Witness, Hold, and Review milestones." },
        { title: "Raw Material Traceability & MTR Verification", text: "Verify mill test certificates (EN 10204 3.1 / 3.2), chemical composition, and mechanical test results against specifications." },
        { title: "In-Process Stage Witness", text: "Witness critical manufacturing stages including forging, machining tolerances, welding, and heat treatment cycles." },
        { title: "Non-Destructive Testing (NDT) Witness", text: "Oversee and verify UT, RT, MPI, and DPI examinations performed by certified Level II/III specialists." },
        { title: "Pressure & Performance Testing", text: "Witness hydrostatic shell tests, pneumatic seat leakage tests, and functional PR2 qualification trials." },
        { title: "Final Inspection & Pre-Shipment Release (PSI)", text: "Confirm final coating thickness, dimensional verification, preservation, packaging, and issue formal Release Certificates." }
      ],
      benefits: [
        "Guaranteed compliance with API 6A, API 6D, ASME Section VIII, and customer specifications",
        "Complete elimination of cross-border shipment rejections and offshore delivery disputes",
        "Unbiased, objective third-party inspection documentation protecting buyer and seller",
        "Faster customs clearance and client sign-off with accredited inspection dossiers"
      ],
      deliverables: [
        "Official Inspection Release Note (IRN) and Certificate of Inspection",
        "Stage Witness & Non-Conformance Reports (NCR) with photographic evidence",
        "Comprehensive End-of-Manufacturing Dossier (MDR) verification",
        "EN 10204 3.2 Impartial Third-Party Endorsement"
      ]
    },
    {
      id: "qc-tools",
      name: "Quality Improvement Tools & Shop Floor Workshops",
      tagline: "7 QC Tools, Global 8D, Root Cause Problem Solving & COPQ Elimination",
      badge: "Shop Floor Mastery",
      icon: "🎯",
      desc: "Practical shop floor program covering 7 QC tools, 8D problem solving, root cause analysis (5-Why, Ishikawa), CAPA systems, and COPQ reduction.",
      overview: "Quality Improvement Tools & Shop Floor Workshops provide hands-on, practical problem-solving capabilities directly on the manufacturing shop floor. Reva Phoenix trains operators, engineers, and plant leadership in JUSE 7 QC tools, Global 8D methodology, root cause analysis (5-Why & Ishikawa), Cost of Poor Quality (COPQ) quantification, and zero-defect execution through live Gemba workshops.",
      pillars: [
        { title: "The 7 Basic QC Tools (JUSE)", text: "Mastery of Pareto charts, Cause-and-Effect (Ishikawa) diagrams, Check Sheets, Histograms, Scatter Diagrams, Stratification, and Control Charts for real-time defect containment." },
        { title: "Global 8D Problem Solving Methodology", text: "Disciplined 8-Discipline framework: D1 team charter, D2 problem description, D3 interim containment, D4/D5 root cause identification and verification, D6 permanent corrective actions, D7 systemic recurrence prevention, and D8 team recognition." },
        { title: "Root Cause Analysis (5-Why & Fishbone)", text: "Rigorous root-cause isolation distinguishing symptoms from systemic causes using iterative 5-Why analysis, fault tree logic, and multi-disciplinary Gemba verification." },
        { title: "Cost of Quality & COPQ Quantification", text: "Quantifying Prevention, Appraisal, Internal Failure, and External Failure costs to translate manufacturing defect reduction directly into financial ROI on corporate balance sheets." },
        { title: "CAPA Systems & Mistake-Proofing (Poka-Yoke)", text: "Designing robust Corrective and Preventive Action architectures with mechanical/electronic Poka-Yoke interlocks that permanently eliminate human and procedural error." },
        { title: "Kaizen Blitz & Shop Floor Gemba Sprints", text: "Facilitating 3-to-5 day rapid improvement workshops on live production lines to solve chronic quality bottlenecks, streamline cycle times, and standardize visual work instructions." }
      ],
      benefits: [
        "Rapid elimination of chronic shop-floor defects and customer line rejects",
        "Empowerment of frontline operators and cross-functional teams to solve quality problems at source",
        "Measurable reduction in Cost of Poor Quality (COPQ), scrap, and rework expenses",
        "Audit-ready CAPA documentation satisfying API Spec Q1/Q2, IATF 16949, and ISO 9001 mandates"
      ],
      deliverables: [
        "Shop Floor 7 QC Tools Diagnostic Toolkit & Calculation Templates",
        "Standardized Global 8D Report Dossier & CAPA Verification Protocols",
        "Plant-wide Cost of Poor Quality (COPQ) Accounting Model",
        "Live Gemba Kaizen Project Charters & Standard Operating Procedures (SOPs)"
      ]
    },
    {
      id: "leadership-soft-skills",
      name: "Leadership & Executive Soft Skills",
      tagline: "Transformational Leadership, 7 Habits, TTT Mastery & Quality Culture",
      badge: "People & Culture",
      icon: "👥",
      desc: "Executive leadership masterclass covering 7 Habits, Train the Trainer (TTT), conflict resolution, managerial skills, and culture transformation.",
      overview: "Leadership & Executive Soft Skills is an executive coaching and managerial capability development program engineered to transform technical managers into inspiring organizational leaders. Reva Phoenix bridges the gap between technical quality systems and human performance, cultivating visionary leaders capable of leading cultural change, driving accountability, and sustaining operational excellence.",
      pillars: [
        { title: "Transformational Leadership & 7 Habits", text: "Instilling Covey's 7 Habits of Highly Effective Leaders, proactive accountability, empathetic communication, and visionary leadership across management cadres." },
        { title: "Train The Trainer (TTT) Certification", text: "Developing internal master trainers equipped with adult learning methodologies, dynamic instructional design, platform presentation mastery, and interactive workshop facilitation." },
        { title: "Hoshin Kanri & Strategic Alignment", text: "Cascading corporate vision, policy deployment, and annual breakthrough objectives down to daily team deliverables using structured X-Matrix frameworks." },
        { title: "Conflict Resolution & Negotiation", text: "Mastering cross-functional dispute mediation, assertiveness, stakeholder management, and win-win negotiation strategies in high-pressure plant environments." },
        { title: "Managerial Delegation & Coaching", text: "Equipping department heads with structured feedback mechanisms, situational leadership models, performance appraisal excellence, and talent mentoring habits." },
        { title: "Culture of Quality Transformation", text: "Overcoming institutional resistance to change, fostering psychological safety, and embedding a permanent 'Zero Defect' mindset throughout all company ranks." }
      ],
      benefits: [
        "Elevated employee engagement, morale, and long-term talent retention across engineering teams",
        "Self-sustaining internal training capability through certified Train-the-Trainer (TTT) instructors",
        "Clear alignment of corporate executive KPIs with shop floor operational priorities",
        "Decisive reduction in inter-departmental friction and communication silos"
      ],
      deliverables: [
        "Executive Leadership Diagnostic & 360-Degree Competency Assessment",
        "Train-the-Trainer (TTT) Accreditation Dossier & Instructional Facilitation Guides",
        "Hoshin Kanri Policy Deployment Roadmap & X-Matrix Strategic Template",
        "Corporate Quality Culture Blueprint & Change Management Playbook"
      ]
    }
  ]
};

export const TRAINING_SERVICES_DATA = {
  title: "TRAINING & CONSULTING DIVISION",
  subtitle: "Training, Consulting, Implementation, Audit Assistance, Greenfield Plant Setup",
  description: "A leading Asia and Middle East provider of API training, consulting, and audit support. It is the endeavor of Reva Phoenix Labs & Consultants Pvt. Ltd. to add value to our Customer's Business & Management Systems through Training, Consultation, Implementation, Audit Assistance, Greenfield Plant Setup, and other Value-added services.",
  tabs: [
    {
      id: "training",
      num: "01",
      name: "Training",
      tagline: "Classroom, Onsite & Online Industrial Masterclasses",
      badge: "Master Trainers",
      description: "Reva Phoenix provides classroom trainings (both online and onsite trainings) coupled with industry-specific workshops to cater to the demands of manufacturing and service industries. Being Master Trainers, core areas of training include API, QMS, EMS, OHSAS, IMS, TPM, TQM, Lean, Six Sigma, and Soft Skills.",
      image: "assets/services/training-classroom.jpg",
      trainingTables: [
        {
          id: "cert-topics",
          title: "CERTIFICATION BASED TRAINING TOPICS",
          subtitle: "Standard durations across Awareness, Detailed, Internal Auditor, Lead Auditor & Lead Implementer",
          badge: "Accredited ISO & Industry Standards",
          columns: ["S.No", "Training Topic", "Awareness", "Detailed", "Internal Auditing", "Lead Auditor", "Lead Implementer"],
          rows: [
            { sno: "1", topic: "API Spec Q1, 10th Edition", awareness: "1 Day", detailed: "2-3 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "2", topic: "API Spec Q2, 3rd Edition", awareness: "1 Day", detailed: "2-3 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "3", topic: "API Product Monogram Programs", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "4", topic: "ISO 9001: 2026 QMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "5", topic: "ISO 14001: 2026 EMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "6", topic: "ISO 45001: 2018 OH&S MS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "7", topic: "ISO 50001: 2018 EnMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "8", topic: "IATF 16949: 2016 Automotive QMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "9", topic: "AS9100 D: 2016 Aerospace QMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "10", topic: "ISO/IEC 17025: 2017 Laboratory QMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "11", topic: "ISO/IEC 27001: 2022 ISMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "12", topic: "ISO 22000: 2018 FSMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "13", topic: "ISO 13485: 2016 Medical QMS", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "14", topic: "ISO 14064-1: 2018 - All 3 Parts (GHG)", awareness: "1 Day", detailed: "2-3 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "15", topic: "ISO 14001 & ISO 45001 (EOHS Combined)", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "16", topic: "VDA 6.3 (German Automotive Process Audit)", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" },
            { sno: "17", topic: "ISO 22716 (Cosmetics GMP)", awareness: "1 Day", detailed: "2 Days", internal: "2 Days", leadAuditor: "5 Days", leadImpl: "5 Days" }
          ]
        },
        {
          id: "quality-topics",
          title: "QUALITY RELATED TRAINING TOPICS",
          subtitle: "Core Tools, Engineering Problem-Solving & Process Quality Control",
          badge: "Automotive Core Tools & Methods",
          columns: ["S.No", "Training Topic", "Awareness", "Detailed"],
          rows: [
            { sno: "1", topic: "Core Tools Combined (APQP, FMEA, MSA, SPC, PPAP)", awareness: "—", detailed: "3 Days" },
            { sno: "2", topic: "Statistical Process Control (SPC)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "3", topic: "Measurement System Analysis (MSA)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "4", topic: "Potential Failure Mode Effect Analysis (FMEA / AIAG-VDA)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "5", topic: "Advanced Product Quality Planning (APQP)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "6", topic: "Production Part Approval Process (PPAP)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "7", topic: "3C & 5S Workplace Discipline", awareness: "1 Day", detailed: "2 Days" },
            { sno: "8", topic: "8D Problem Solving Techniques", awareness: "1 Day", detailed: "2 Days" },
            { sno: "9", topic: "7 QC Tools (Ishikawa, Pareto, Histogram, Control Charts...)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "10", topic: "Root Cause Problem Solving Techniques", awareness: "1 Day", detailed: "2 Days" },
            { sno: "11", topic: "Corrective and Preventive Actions (CAPA)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "12", topic: "Process Audit (VDA 6.3 & AIAG)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "13", topic: "Industrial Benchmarking", awareness: "1 Day", detailed: "2 Days" },
            { sno: "14", topic: "New 7 Quality Management Tools", awareness: "1 Day", detailed: "2 Days" }
          ]
        },
        {
          id: "quality-improvement",
          title: "QUALITY IMPROVEMENT TOPICS",
          subtitle: "Cost Reduction, Six Sigma Green Belt, Kaizen & Lean Systems",
          badge: "Business Excellence",
          columns: ["S.No", "Training Topic", "Awareness", "Detailed"],
          rows: [
            { sno: "1", topic: "Cost of Quality (COQ)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "2", topic: "Cost of Poor Quality (COPQ)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "3", topic: "Continual Improvement Techniques (PDCA / Kaizen)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "4", topic: "ACHIEVE 100 PPM Quality Target", awareness: "1 Day", detailed: "2 Days" },
            { sno: "5", topic: "ACHIEVE SQ MARK (Supplier Quality Certification)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "6", topic: "Customer Specific Requirements (CSR Deployment)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "7", topic: "Poka-Yoke (Mistake Proofing Mechanisms)", awareness: "1 Day", detailed: "2 Days" },
            { sno: "8", topic: "Kaizen Blitz & Shop Floor Workshops", awareness: "1 Day", detailed: "2 Days" },
            { sno: "9", topic: "6 Sigma – Green Belt Certification", awareness: "1 Day", detailed: "5 Days" },
            { sno: "10", topic: "Lean Six Sigma Integration", awareness: "1 Day", detailed: "5 Days" },
            { sno: "11", topic: "Lean Manufacturing (VSM, SMED, Kanban)", awareness: "1 Day", detailed: "5 Days" },
            { sno: "12", topic: "Total Quality Management (TQM – Deming Framework)", awareness: "1 Day", detailed: "3 Days" },
            { sno: "13", topic: "Business Process Re-engineering (BPR)", awareness: "1 Day", detailed: "3 Days" }
          ]
        },
        {
          id: "eohs-topics",
          title: "ENVIRONMENT, OCCUPATIONAL HEALTH & SAFETY (EOHS)",
          subtitle: "Statutory EOHS Frameworks & Workplace Hazard Mitigation",
          badge: "EHS Compliance",
          columns: ["S.No", "Training Topic", "Awareness", "Detailed"],
          rows: [
            { sno: "1", topic: "Legal Requirements Related to EOHS", awareness: "1 Day", detailed: "2 Days" },
            { sno: "2", topic: "Risk Assessment & Hazard Identification (HIRA)", awareness: "1 Day", detailed: "2 Days" }
          ]
        },
        {
          id: "other-topics",
          title: "OTHER KEY INDUSTRIAL TOPICS",
          subtitle: "Total Productive Maintenance & Visual Workplace Organization",
          badge: "Plant Maintenance",
          columns: ["S.No", "Training Topic", "Awareness", "Detailed"],
          rows: [
            { sno: "1", topic: "Total Productive Maintenance (TPM – 8 Pillars & OEE)", awareness: "1 Day", detailed: "3 Days" },
            { sno: "2", topic: "5S Visual Workplace Organization & Sustenance", awareness: "1 Day", detailed: "3 Days" }
          ]
        }
      ],
      courseCategories: [
        {
          category: "Quality Management System – ISO 9001",
          modules: [
            "ISO 9001:2015 – Internal Auditor Training",
            "ISO 9001:2015 – Lead Auditor Training (IRCA Registered)",
            "ISO 9001:2015 – Implementers Training Course"
          ]
        },
        {
          category: "API QMS Training – API Spec Q1 & API Spec Q2",
          modules: [
            "Internal Auditor Course – API Spec Q1 (10th Edition)",
            "Internal Auditor Course – API Spec Q2 (2nd Edition)",
            "Practitioner Course – API Spec Q1 with Supply Chain Management (SCM)",
            "Practitioner Course – API Spec Q2 with Service Quality Plan (SQP)",
            "Lead Auditor Course – ISO 9001:2015 & API Spec Q1 Requirements",
            "API Monogram Specific Design Package Training & Product Auditing"
          ]
        },
        {
          category: "Automotive QMS & Core Tools – IATF 16949",
          modules: [
            "IATF 16949:2016 – Lead Auditor & Internal Auditor Training",
            "VDA 6.3 Process Audit Masterclass",
            "Automotive Six Pack: APQP, FMEA (DFMEA/PFMEA/MFMEA), Control Plan, PPAP, MSA & SPC",
            "Dynamic Control Planning (DCP) & Process Flow Charting Methodology",
            "FORD Q1 Requirements, MMOG & Global 8D Problem Solving Approach"
          ]
        },
        {
          category: "Environmental & Safety – ISO 14001 & ISO 45001",
          modules: [
            "ISO 14001:2015 – Environmental Management System (IRCA Lead Auditor)",
            "ISO 45001:2018 – Occupational Health & Safety (Lead & Internal Auditor)",
            "HIRA (Hazard Identification & Risk Assessment) Workshops"
          ]
        },
        {
          category: "Integrated Management System (IMS)",
          modules: [
            "IMS (ISO 9001, ISO 14001, ISO 45001) Internal & Lead Auditor",
            "Multi-Standard Audit Integration & Compliance Harmonization"
          ]
        },
        {
          category: "Laboratory Management – ISO/IEC 17025",
          modules: [
            "ISO/IEC 17025:2017 – Testing & Calibration Laboratory Competence",
            "Uncertainty of Measurement (MU) Calculation & NABL Audit Preparation"
          ]
        },
        {
          category: "Lean Manufacturing & Six Sigma",
          modules: [
            "Six Sigma Green Belt & Black Belt Certification Programs",
            "Master Black Belt Program – 108 Tools of Lean Six Sigma",
            "SMED (Single Minute Exchange of Dies) & Visual Factory Workshops",
            "Value Stream Mapping (VSM – Current State & Future State)",
            "Poka Yoke (Mistake Proofing) & Overall Equipment Effectiveness (OEE)"
          ]
        },
        {
          category: "TQM & Total Productive Maintenance (TPM)",
          modules: [
            "Total Quality Management (TQM) – Deming Application Prize Roadmap",
            "Hoshin Kanri – Policy Deployment & Daily Work Management",
            "8 Pillars of TPM, TPM Kick Off & Shop Floor Model Machine Excellence"
          ]
        },
        {
          category: "Quality Improvement Tools & Shop Floor Workshops",
          modules: [
            "7 QC Tools & 7 New QC Tools (JUSE Problem Solving Methodology)",
            "Global 8D, Root Cause Analysis, 3M, 5S, 5G, 7 Waste, 16 Loss Workshops",
            "Cost of Quality & Cost of Poor Quality (COPQ) Quantification"
          ]
        },
        {
          category: "Leadership & Executive Soft Skills",
          modules: [
            "7 Habits of Highly Effective Leaders & Transformational Leadership",
            "Conflict Resolution, Assertiveness, Negotiation & Managerial Skills",
            "Train the Trainer (TTT) Certification & Performance Appraisal"
          ]
        }
      ]
    },
    {
      id: "consulting",
      num: "02",
      name: "Consulting",
      tagline: "Process Optimization & Quality System Architecture",
      badge: "Value Added Services",
      description: "Reva Phoenix has process improvement specialists and quality system professionals who focus on 'value added' auditing, consulting, training, and process documentation to help you find cost savings.",
      image: "assets/services/consulting-engineering.jpg",
      modules: [
        {
          title: "Business Improvement Assessments",
          tag: "Profit & Cost Savings",
          icon: "📈",
          desc: "Improvement is the name of the game. Getting more using fewer resources. Providing a better product or service to reduce your costs and increase customer satisfaction and market share. Why wait for an economic downturn or for your customer to ask for a price decrease to find your profit leaks? Our toolbox includes Lean, Visual Factory, 5S, Poka Yoke, DMAIC, Root Cause Analysis, Data Collection & Analysis, Six Sigma, and Kaizen.",
          deliverables: ["Profit Leak Identification Report", "Process Capability Baseline", "Custom Action Prioritization Matrix"]
        },
        {
          title: "Internal Audit Services (Outsourced / Augmented)",
          tag: "Expert Assessment",
          icon: "🛡️",
          desc: "Internal audits require a staff that is well trained in auditing techniques and knowledgeable in effective cost reduction methods. Most companies certified to QMS standards use internal auditors on an as-needed basis, leading to skill decay and turnover. Our full-time professional auditors undergo annual rigorous training, ensuring every audit delivers quantifiable improvement opportunities and risk reduction.",
          deliverables: ["Independent Internal Auditing", "Risk & Non-Conformance Identification", "Audit Skill Upgrading for Internal Teams"]
        },
        {
          title: "Best-in-Class Gap Assessments",
          tag: "Diagnostic Review",
          icon: "🔍",
          desc: "Before launching countless hours on trying to meet QMS standards—including ISO 9001, ISO 14001, ISO 45001, AS 9100, IATF 16949, ISO 50001, ISO 17025, or Company/Customer Specific Requirements—let us review your current business processes and practices to highlight exact compliance deltas.",
          deliverables: ["Clause-by-Clause Gap Matrix", "Resource Allocation Plan", "Readiness Timeframe Estimation"]
        },
        {
          title: "Management System Readiness Assessment / Audit",
          tag: "Registrar Pre-Audit",
          icon: "📋",
          desc: "Want to know if your Management system is ready for the Registrar, your customer, or regulatory agency? Our experienced staff provides an assessment of your implementation with a written report of strengths and weaknesses, including opportunities for improvements and preventive actions.",
          deliverables: ["Comprehensive Readiness Dossier", "Mock Audit Scorecards", "Pre-Registrar Corrective Actions"]
        },
        {
          title: "Supplier Assessment & Audits",
          tag: "Supply Chain Assurance",
          icon: "🤝",
          desc: "Our Supplier Auditing / Assessment Services assist you in managing your supply chain to ensure low risk and high quality. We provide experienced auditors to visit your suppliers, freeing up your valuable resources. Every audit provides information on opportunities for improvements, corrective and preventive actions.",
          deliverables: ["Onsite Supplier Audit Dossiers", "Vendor Risk Classification", "Supplier Quality Improvement Plans (SQIP)"]
        },
        {
          title: "Online & On-Site Training Delivery",
          tag: "Custom Workforce Upskilling",
          icon: "🎓",
          desc: "Training is conducted online & at your site, tailored to your company, unique processes, and specific applications. Whether for 1 or 500+ employees, we teach how to conduct value-added audits, audit suppliers, develop effective Process Control Plans, author FMEAs, and lead Kaizen events.",
          deliverables: ["Tailored Course Materials", "Interactive Gemba Workshops", "Pre & Post Assessment Competency Tracking"]
        },
        {
          title: "QMS Documentation Development, Refinement & Redevelopment",
          tag: "Documentation Architecture",
          icon: "📑",
          desc: "We assist in authoring suitable and effective QMS documentation. When documentation doesn't spell out the process, we refine it for consistent quality. If your system became unwieldy and bloated over the years with multiple overlapping documents, we streamline and redevelop it to reduce documents while maximizing operational clarity.",
          deliverables: ["Streamlined Lean Manuals", "Standard Operating Procedures (SOPs)", "Version-Controlled Formats & Work Instructions"]
        },
        {
          title: "QMS Improvement & Risk Mitigation",
          tag: "Operational Mastery",
          icon: "⚡",
          desc: "Developing effective Process Control Plans to ensure all key steps, verification hold-points, and acceptance criteria are locked down. Formulating FMEAs to systematically uncover and reduce underlying risks. Facilitating Kaizen sprint events to eliminate waste and recover Cost of Poor Quality (COPQ).",
          deliverables: ["Dynamic Process Control Plans", "Comprehensive FMEA Registries", "Facilitated Kaizen Sprints"]
        },
        {
          title: "Greenfield Plant Setup & Quality Infrastructure",
          tag: "Greenfield Deployment",
          icon: "🏭",
          desc: "End-to-end plant layout planning, process flow optimization, quality testing lab setup, machinery calibration, and comprehensive ISO/API management system architecture for new greenfield manufacturing facilities across Asia and the Middle East.",
          deliverables: ["Factory Floor Layout & Ergonomic Flow Planning", "Quality Control & Calibration Lab Commissioning", "Machine Tooling & Process Qualification Protocols", "Turnkey API & ISO Certification Handholding"]
        }
      ]
    },
    {
      id: "implementation",
      num: "03",
      name: "Implementation",
      tagline: "Turnkey 6-Step Management System Deployment",
      badge: "Turnkey Roadmap",
      description: "Implementing a Management System Standard (ISO 9001, ISO 14001, ISO 45001, API Spec Q1, API Spec Q2, API Monogram, IATF 16949, AS 9100, Greenfield Setup) into a business requires structured input at all levels. Reva Phoenix guides organizations through a proven 6-step turnkey implementation methodology.",
      image: "assets/services/implementation-methodology.jpg",
      steps: [
        {
          step: "01",
          title: "Analyze & Segment Business Areas",
          desc: "Analyze your business by breaking it down into key functional areas crucial to your customers' satisfaction. Senior staff determines organizational needs and designs the system architecture around these vital operational hubs."
        },
        {
          step: "02",
          title: "Resource Planning & Gap Analysis",
          desc: "Plan your approach by deciding which resources you need and discussing the effectiveness of existing processes with staff. Conduct an exhaustive Gap Analysis comparing current processes against standard mandates. Assemble your team and develop an implementation plan (Master Gantt Chart)."
        },
        {
          step: "03",
          title: "Inform and Train Employees",
          desc: "Decide if new processes are necessary and inform staff across all operational levels. Provide role-specific training and explain how the new system benefits both staff and customers, ensuring grassroots buy-in and eliminating friction."
        },
        {
          step: "04",
          title: "Supporting Documentation Hierarchy",
          desc: "Develop supporting documentation, such as quality policies, standard operating procedures, training materials, work instructions, and controlled forms. Implement rigorous document version control to maintain airtight compliance and traceability."
        },
        {
          step: "05",
          title: "Deploy System & Monitor Outputs",
          desc: "Deploy the documented system on the shop floor. Assign clear responsibility for each process and ensure that proper procedures are followed. Set targets for how each process contributes to business goals, and control, measure, and monitor outputs."
        },
        {
          step: "06",
          title: "Review, Audit & Continual Improvement",
          desc: "Schedule routine product or process audits to monitor compliance with policies, procedures, and certification requirements. Conduct structured Management Reviews and continue to audit and review regularly to ensure permanent continual improvement."
        }
      ]
    },
    {
      id: "auditing",
      num: "04",
      name: "Auditing",
      tagline: "Best-in-Class Value-Added Management System Audits",
      badge: "Surgical Precision",
      description: "Internal Auditing is a crucial element of your Quality Management System (QMS). Consistent and effective internal audits assure continual effectiveness, compliance, and improvement of your QMS. Reva Phoenix serves as your independent eyes and ears.",
      image: "assets/services/auditing-precision.jpg",
      standardsCovered: [
        "API Spec Q1, 10th Edition",
        "API Spec Q2, 3rd Edition",
        "API Product Monogram Programs",
        "ISO 9001: 2026 QMS",
        "ISO 14001: 2026 EMS",
        "ISO 45001: 2018 OH&S MS",
        "ISO 50001: 2018 EnMS",
        "IATF 16949: 2016 Automotive QMS",
        "AS9100 D: 2016 Aerospace QMS",
        "ISO/IEC 17025: 2017 Laboratory QMS",
        "ISO/IEC 27001: 2022 ISMS",
        "ISO 22000: 2018 FSMS",
        "ISO 13485: 2016 Medical QMS",
        "ISO 14064-1: 2018 - All 3 Parts (GHG)",
        "Customer Specific Requirements"
      ],
      obstaclesSolved: [
        {
          title: "Part-Time Auditor Skill Decay",
          desc: "Companies tackling internal audits alone struggle with developing and maintaining skills for part-time internal auditors whose primary job is production or engineering."
        },
        {
          title: "Lack of Objectivity & Independence",
          desc: "Internal staff often find it uncomfortable or impossible to objectively audit peer departments, whereas known problem areas might be overlooked or avoided."
        },
        {
          title: "Resource Strains & Disruption",
          desc: "Pulling internal managers away from production to conduct multi-day audits disrupts daily operations and costs thousands of dollars without positive ROI."
        }
      ],
      advantages: [
        "Reduction or elimination of costly time and training of internal auditors",
        "Reduction or elimination of internal resources and overhead needed to perform audits",
        "Minimal disruption of daily operations and internal engineering resources",
        "Expert assessments and actionable advice through seasoned objectivity and independence",
        "Increased efficiency and higher quality results through consistent business process focus",
        "Continual evolution, risk mitigation, and sustainable improvement of your QMS"
      ],
      processAuditWorkflow: [
        {
          stage: "01. On-Site Facility Tour",
          desc: "A Reva Phoenix expert visits your facility. Customization is established when we jointly decide on priority areas, audit objectives, and schedules."
        },
        {
          stage: "02. Advanced Internal Audit Plan",
          desc: "Prepared and provided well in advance with detailed schedules of activities, assuring your staff has ample preparation time and disruption is minimized."
        },
        {
          stage: "03. Exclusive Process Auditing Guide",
          desc: "Audits are conducted using customized checklists and Reva Phoenix's proprietary Process Auditing Guide, assuring rigorous compliance and business process focus."
        },
        {
          stage: "04. Skill Upgrading & Shadowing",
          desc: "We recommend one or two of your internal auditors accompany our expert during audits to hone their professional auditing techniques."
        },
        {
          stage: "05. Formal Report & Executive Briefing",
          desc: "Comprehensive documentation of deviations, non-conformances, observations, and recommendations, followed by an executive briefing for leadership."
        }
      ],
      deliverables: [
        "QMS documentation review",
        "Program customizations and set-up",
        "At least two customized Internal Audits per year",
        "Annual Internal Audit Schedule",
        "Tailored Internal Audit Plans",
        "Formal Internal Audit Reports with photographic evidence",
        "Executive Briefings for Management",
        "Certification Maintenance Program (Surveillance management, CAPA closure, unlimited technical support)"
      ]
    }
  ]
};

export const INDUSTRIES = [
  {
    id: "automotive",
    name: "AUTOMOTIVE",
    title: "Zero-Defect Automotive Engineering & Compliance",
    image: "assets/industries/automotive-manufacturing.jpg",
    description: "Empowering automotive Tier 1, Tier 2, and OEM manufacturers to meet rigorous global standards. From precision machining to electronic assemblies, we build robust management systems.",
    standards: ["IATF 16949:2016", "VDA 6.3 Process Audit", "Core Tools (APQP/PPAP/FMEA/MSA/SPC)", "ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"],
    highlights: "Proven track record with automotive giants including LUK India, Flowserve, and precision component manufacturers."
  },
  {
    id: "aerospace",
    name: "AEROSPACE",
    title: "Mission-Critical Aerospace & Defense Precision",
    image: "assets/industries/aerospace-precision.jpg",
    description: "Supporting aerospace component manufacturers and defense contractors in achieving rigorous aerospace quality management certification and special process compliance.",
    standards: ["AS 9100 Rev D", "NADCAP Preparation", "First Article Inspection (FAI)", "Special Process Validation (Welding/NDE/HT)", "ISO 9001:2015"],
    highlights: "Consulting excellence trusted by leading aerospace manufacturing innovators including Aequs and BHEL."
  },
  {
    id: "oil-gas",
    name: "OIL & GAS",
    title: "World-Class API Spec Q1, Q2 & Monogram Execution",
    image: "assets/industries/oil-and-gas-facility.jpg",
    description: "One of the undisputed leaders in API oil and gas quality management systems, assisting drilling, exploration, valve, and oil tool manufacturers across 40 countries.",
    standards: ["API Spec Q1 (10th Edition)", "API Spec Q2 (2nd Edition)", "API Monogram Licensing", "API Master Gauge Calibration", "TPI Services"],
    highlights: "Global client engagements across India, UAE, Oman, Saudi Arabia, Kuwait, Qatar, Singapore, and USA."
  },
  {
    id: "business-excellence",
    name: "BUSINESS EXCELLENCE",
    title: "Shop Floor Transformation & Productivity Maximization",
    image: "assets/industries/business-excellence.jpg",
    description: "Transforming organizational culture through systematic Lean, Six Sigma, TPM, and TQM deployments that generate quantifiable cost reductions and ROI.",
    standards: ["5S / 6S Workplace Organization", "Total Productive Maintenance", "Lean Manufacturing & VSM", "Six Sigma Green & Black Belt", "Hoshin Kanri"],
    highlights: "Implemented across large manufacturing plants, process industries, and multi-location engineering enterprises."
  }
];

export const CLIENTS = [
  { name: "Bharat Heavy Electricals Limited", location: "HPBP Tiruchirapalli, India", logo: "assets/clients/bhel.svg" },
  { name: "Dalmia Bharat Limited", location: "Dalmiapuram, India", logo: "assets/clients/dalmia-cement.svg" },
  { name: "Chiltern TMC", location: "Dubai, UAE", logo: "assets/clients/chiltern-tmc.png" },
  { name: "Anglo Eastern Industries", location: "UAE", logo: "assets/clients/anglo-eastern.svg" },
  { name: "BOTIL Oil Tools India", location: "Delhi, India", logo: "assets/clients/botil-oil-tools.png" },
  { name: "Aequs Private Limited", location: "Belgaum, India", logo: "assets/clients/aequs.svg" },
  { name: "Nordic Energy FZC", location: "Dubai, UAE", logo: "assets/clients/nordic-energy.png" },
  { name: "Megha Engineering & Infrastructures", location: "Hyderabad, India", logo: "assets/clients/megha-engineering.png" },
  { name: "Flowserve India Controls", location: "Bangalore, India", logo: "assets/clients/flowserve.svg" },
  { name: "Apex Energy", location: "Kuwait", logo: "assets/clients/apex-energy.png" },
  { name: "Severn Glocon", location: "Chennai, India", logo: "assets/clients/severn-glocon.svg" },
  { name: "BSM Engineering Works & Trading", location: "Singapore", logo: "assets/clients/bsm-engineering.svg" },
  { name: "Vajra Rubber Products", location: "Kerala, India", logo: "assets/clients/vajra-rubber.png" },
  { name: "Larsen & Toubro Limited", location: "TENGL, India", logo: "assets/clients/larsen-toubro.svg" },
  { name: "Wood Group Engineering Services", location: "Middle East, Dubai", logo: "assets/clients/wood-group.svg" },
  { name: "LUK India Private Limited", location: "Bangalore, India", logo: "assets/clients/luk-india.svg" },
  { name: "NorthLab SEAMS Pte Ltd", location: "Singapore", logo: "assets/clients/northlab-seams.svg" },
  { name: "SRA Systems Limited", location: "Chennai, India", logo: "assets/clients/sra-systems.png" }
];

export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Reva+Phoenix+Labs+%26+Consultants+Private+Limited+Reviews";

export const TESTIMONIALS = [
  {
    quote: "One of the best calibration lab with advanced technology. Customer service is really good. Lab and office area 5S well maintained. Workmanship and customer focus are upto the mark. Keep it up all and All the best to the team!",
    author: "ANBU SEKAR",
    initials: "AS",
    company: "Emerson Process Management",
    rating: 5.0,
    tag: "INSTRUMENTATION & PROCESS CALIBRATION",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  },
  {
    quote: "Well equipped testing and calibration center with availability of both offsite and on-site equipment calibration as per customer requirements, at reasonable price. NABL certified test reports was given. Excellent customer handling team for their immediate response.",
    author: "RAHINI S.",
    initials: "RS",
    company: "Manufacturing & Industrial Testing",
    rating: 4.9,
    tag: "ON-SITE & PERMANENT LAB CALIBRATION",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  },
  {
    quote: "One of the Best and Biggest Metrology Lab in the City... High Class Calibrating Equipments are used for Calibration... Excellent 3C 5S Practices being followed... They are striving to Exceed Customer Expectations!",
    author: "MUTHU KUMAR",
    initials: "MK",
    company: "Metrology Infrastructure Auditor",
    rating: 5.0,
    tag: "PRECISION DIMENSIONAL CALIBRATION",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  },
  {
    quote: "The calibration of Reva team service is wonderful and special thanks for the coordination and support from Ms. Manasi, operations executive. Prompt delivery and high metrological accuracy across all equipment.",
    author: "VIJAYAKUMAR KANDHASAMY",
    initials: "VK",
    company: "Industrial Operations Division",
    rating: 5.0,
    tag: "THERMAL & ELECTROTECHNICAL TESTING",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  },
  {
    quote: "Training session was very good and much informative. He was very patient to explain all our queries effectively. I was wondering on seeing your Laboratory with neat and clean way. Going forward will always suggest your lab for training and testing. Awaiting to meet you again to gain more knowledge.",
    author: "KARTHICK S.",
    initials: "KS",
    company: "Engineering & Quality Assurance",
    rating: 5.0,
    tag: "LABORATORY CALIBRATION & TRAINING",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  },
  {
    quote: "I visited JRPM for training purpose on dimensional calibration. I was trained by Mr. Karthick Ganapathy, his explanation has a high level of clarity and easily understandable. Lab and office area 5S maintenance is extremely good. Outstanding experience.",
    author: "THEJASHWINI C.",
    initials: "TC",
    company: "Aerospace & Precision Metrology",
    rating: 4.9,
    tag: "DIMENSIONAL METROLOGY & CMM",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  },
  {
    quote: "Great learning experience, Dr. Manikandan is very seasoned and experienced professional trainer, really enjoyed the training with his practical examples and in-depth knowledge on API specifications, pressure calibration, and ISO/IEC 17025 standards.",
    author: "KESAVARAM K.",
    initials: "KK",
    company: "API & Flow Control Engineering",
    rating: 4.8,
    tag: "API SPEC Q1 & PRESSURE STANDARDS",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  },
  {
    quote: "We had a very good experience in the calibration training course as per ISO/IEC 17025. Overall it was like a technical institution for the knowledge seekers. Highly recommend Reva Phoenix for calibration standards and compliance.",
    author: "GOKUL KRISHNAN",
    initials: "GK",
    company: "Quality Management Systems",
    rating: 4.9,
    tag: "ISO/IEC 17025 COMPLIANCE",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  },
  {
    quote: "Excellent Laboratory for Calibration and Testing. Metrological Calibration Laboratory is one of the best in Chennai. Strict 5S standards, high-precision reference calibrators, and very professional team. Great experience during calibration!",
    author: "MUTHU GANESAN",
    initials: "MG",
    company: "Mechanical & Metrology Testing",
    rating: 4.9,
    tag: "NABL ACCREDITED CALIBRATION",
    googleReviewUrl: GOOGLE_REVIEWS_URL
  }
];

export const INFRASTRUCTURE_DATA = {
  title: "STATE-OF-THE-ART INFRASTRUCTURE",
  subtitle: "20+ Accredited Laboratories Under One Roof & Headquarters",
  description: "Reva Phoenix operates from its dedicated complex in Chennai, Tamilnadu, housing India's largest integrated calibration and metrology facility alongside corporate training auditoriums.",
  features: [
    { title: "20+ Integrated Calibration Labs", desc: "Thermal, Mechanical, Electro-Technical, Dimensional, Pressure, Mass, Fluid Flow, and API Gauge laboratories." },
    { title: "API Gauge Center of Excellence", desc: "Dedicated high-accuracy inspection instruments for API Spec 5B, Spec 5CT, Spec 7-2, and Spec 11B thread gauges." },
    { title: "Modern Audio-Visual Auditoriums", desc: "Fully equipped executive training rooms supporting hybrid onsite and live global masterclasses." },
    { title: "Controlled Environmental Enclosures", desc: "Precision temperature and humidity regulated testing suites meeting stringent ISO/IEC 17025 standards." }
  ],
  images: [
    { src: "assets/infrastructure/reva-calibration-lab-1.jpg", caption: "Precision Metrology & Dimensional Measurement Facility", tag: "Laboratory Division" },
    { src: "assets/infrastructure/reva-calibration-lab-2.jpg", caption: "Advanced Calibration Standards Suite", tag: "Testing Environment" },
    { src: "assets/infrastructure/reva-calibration-lab-3.jpg", caption: "API Gauge & High-Tolerance Inspection Wing", tag: "API Standards" },
    { src: "assets/about/reva-phoenix-headquarters.jpg", caption: "Reva Phoenix Complex, Rajarajeswari Nagar, Madipakkam", tag: "Corporate Headquarters" }
  ]
};

export const EVENT_GALLERY_URL = "https://revaphoenix.com/event-gallery/";

export const GALLERY_ITEMS = [
  { id: 1, src: "assets/gallery/training-session-group.jpg", title: "API Spec Q1 / Q2 Master Training Cohort", category: "Training" },
  { id: 2, src: "assets/gallery/gallery-event-1.jpg", title: "Executive Management Review & Certification Audit", category: "Audit" },
  { id: 3, src: "assets/gallery/gallery-event-2.jpg", title: "Industrial Workshop on Shop Floor Excellence", category: "Excellence" },
  { id: 4, src: "assets/gallery/gallery-event-3.jpg", title: "Technical Calibration & Inspection Demonstration", category: "Laboratory" },
  { id: 5, src: "assets/gallery/gallery-event-4.jpg", title: "Cross-Functional Quality Systems Seminar", category: "Corporate" },
  { id: 6, src: "assets/gallery/gallery-event-5.jpg", title: "Lead Auditor Certification Felicitation", category: "Certification" }
];

export const VIDEOS = [
  {
    id: "ki2GdYTqp2E",
    title: "Reva Phoenix Corporate Overview",
    subtitle: "2 Decades of Excellence in Quality & Consulting",
    duration: "Corporate Film",
    category: "Corporate Video",
    thumbnail: "https://img.youtube.com/vi/ki2GdYTqp2E/maxresdefault.jpg"
  },
  {
    id: "khYBWO56eP4",
    title: "Automotive Quality & IATF 16949 Masterclass",
    subtitle: "Process Auditing & Core Tools Implementation",
    duration: "Technical Session",
    category: "Automotive Training",
    thumbnail: "https://img.youtube.com/vi/khYBWO56eP4/maxresdefault.jpg"
  },
  {
    id: "lNjo4ZoRF0w",
    title: "ISO & IMS Professional Training Courses",
    subtitle: "Comprehensive Auditor Development Pathways",
    duration: "Training Program",
    category: "Training Courses",
    thumbnail: "https://img.youtube.com/vi/lNjo4ZoRF0w/maxresdefault.jpg"
  },
  {
    id: "UsfIL2BU7ao",
    title: "Oil & Gas API Certification & Auditing",
    subtitle: "API Spec Q1 / Q2 & Monogram Compliance",
    duration: "Industry Masterclass",
    category: "Oil & Gas Training",
    thumbnail: "https://img.youtube.com/vi/UsfIL2BU7ao/maxresdefault.jpg"
  }
];

export const DOWNLOADS = [
  {
    id: "corporate-brochure",
    title: "Reva Phoenix Corporate Brochure",
    description: "Complete guide to Consulting, Training, Implementation, Auditing, and Oil & Gas API solutions.",
    fileType: "PDF Document",
    size: "1.6 MB",
    filePath: "assets/documents/reva-phoenix-corporate-brochure.pdf",
    verified: "Official Publication"
  },
  {
    id: "iso-certificate",
    title: "ISO 9001:2015 Certificate",
    description: "Official Management System Certificate of Reva Phoenix Labs & Consultants Pvt. Ltd.",
    fileType: "PDF Document",
    size: "775 KB",
    filePath: "assets/documents/iso-9001-2015-certificate.pdf",
    verified: "Accredited Certificate"
  }
];

export const CAREERS = [
  {
    title: "Calibration Engineer | Calibration Manager",
    experience: "2 to 10 years in NABL Accredited Calibration Lab",
    qualification: "B.E / B.Tech in Mechanical, Mechatronics, EEE, ECE, ICE or equivalent",
    location: "Chennai / PAN India & Middle East",
    responsibilities: [
      "Technical Calibration & Testing at our 20+ NABL accredited laboratories",
      "Handling high-precision thermal, mechanical, dimensional, and API gauge calibrations",
      "Calculation of measurement uncertainty and preparing test reports compliant with ISO/IEC 17025",
      "Customer technical coordination and continuous laboratory quality adherence"
    ],
    submissionEmail: "info@revaphoenix.com"
  },
  {
    title: "Graduate Trainee Engineer",
    experience: "Freshers can apply; 1–2 years in NABL lab is an added advantage",
    qualification: "B.E / B.Tech in Mechanical, Automobile, Mechatronics, EEE, ECE, ICE",
    location: "Chennai HQ",
    responsibilities: [
      "Rigorous hands-on training across all 20+ laboratory divisions on a job rotation basis",
      "Learning standard operating procedures for calibration and measurement equipment",
      "Assisting senior engineers during technical documentation and calibration audits",
      "High level of commitment and professional conduct in laboratory operations"
    ],
    submissionEmail: "info@revaphoenix.com"
  },
  {
    title: "Customer Support Executive | Business Development Executive",
    experience: "2 to 10 years in Customer Support / Business Development (NABL lab exp. preferred)",
    qualification: "Graduate with fluent professional communication skills",
    location: "Chennai HQ",
    responsibilities: [
      "Lead generation, client relationship management, and consulting service inquiries",
      "Customer coordination for sample receipt, scheduling calibration, and certificate delivery",
      "Drafting commercial proposals for training, consulting, and calibration contracts",
      "Fixed salary plus attractive performance-based monthly incentives"
    ],
    submissionEmail: "info@revaphoenix.com"
  },
  {
    title: "Documentation Executive",
    experience: "1 to 5 years in quality management system documentation",
    qualification: "Graduate with high proficiency in MS Office and document control",
    location: "Chennai HQ",
    responsibilities: [
      "Managing controlled master lists of manuals, procedures, work instructions, and records",
      "Ensuring documentation compliance with ISO 9001, API Spec Q1, and ISO/IEC 17025",
      "Auditing format revision status, archiving historical records, and client report formatting"
    ],
    submissionEmail: "info@revaphoenix.com"
  }
];

export const MD_MESSAGE = {
  title: "MESSAGE FROM MANAGING DIRECTOR",
  tagline: "Together We Grow!",
  author: "Dr. Manikandan Venkatesan",
  designation: "Managing Director • Reva Phoenix Labs & Consultants Pvt. Ltd.",
  motto: "Remind you – Quality is our way of life and we shall commit to remain so!",
  paragraphs: [
    "It is the endeavor of Reva Phoenix Labs & Consultants Pvt. Ltd. Consulting Division to add value to our Customer's Business & Management Systems through Training, Consultation, Implementation and other Value-added services.",
    "It has been nearly 2 decades since we started Reva Phoenix, as a modest organization. We have grown to become one of the leading service providers in the Industry.",
    "Our growth is attributed to the blessings of Smt. Revathi Venkatesan, Our Founder Director, Cancer warrior & Survivor and the inspiration behind this Organization;",
    "Our unwavering focus to learning and advancement of our knowledge, sharing them with our Customers, operational performance, and the value-added sessions that we deliver to our clients. In our ever-changing and challenging world of business, we are committed to keeping our Engineers, Trainers & Consultants in a leadership position in our chosen areas of work.",
    "We continue to live the mission we started in 2005, and we have stayed the course. Using tough benchmarks, Reva Phoenix has delivered great results that have been sustained for years, and has provided new standards for others consulting agencies & our competitors to follow.",
    "Every day, we make productive contributions to Management Systems, across various Sectors and Industries, through our services in QMS, EMS, OHSAS, NDT, TPI & related Business Excellence services through talent, real-world knowledge, and the capability to implement and fulfill our promise.",
    "As an Organization, we work together organizing our resources to develop ways to advance performance.",
    "We value and focus on quality measures as a commitment to integrity and quality.",
    "Our pledge at Reva Phoenix is to deliver the best Quality services and to continue to advance our offerings so that our Customers can reach their highest potential.",
    "We at Reva Phoenix realize that performance isn't the only measure, because at the end of the day, the outcome of our client & his business success is what really matters."
  ]
};
