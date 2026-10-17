/**
 * REVA PHOENIX — Business Excellence & Lean Manufacturing Modules Dataset
 * Comprehensive Technical Specifications and 4 Specialized Tracks (Training, Consulting, Implementation, Auditing)
 * for all 9 Business Excellence frameworks:
 * 1. 5s-6s (5S / 6S Workplace Organization)
 * 2. tpm (Total Productive Maintenance)
 * 3. tqm (Total Quality Management)
 * 4. lean (Lean Manufacturing & Value Stream Mapping)
 * 5. six-sigma (Six Sigma DMAIC Methodology)
 * 6. supplier-dev (Supplier Development & Quality Management)
 * 7. tpi (Third Party Inspection)
 * 8. qc-tools (Quality Improvement Tools & Shop Floor Workshops)
 * 9. leadership-soft-skills (Leadership & Executive Soft Skills)
 */

export const EXCELLENCE_DATA = {
  "5s-6s": {
    id: "5s-6s",
    code: "5S / 6S",
    edition: "Toyota Production System (TPS) & OSHA 6S Standard",
    name: "5S / 6S Workplace Organization",
    category: "Lean Operational Excellence",
    badge: "Visual Control",
    tagline: "Visual Management, Safety Standards & Disciplined Shop Floors",
    intro: "5S / 6S is the foundational Lean manufacturing discipline engineered to eliminate waste, organize tooling, establish visual standards, and embed zero-incident safety routines across production cells and warehouses.",
    overview: "Reva Phoenix executes turnkey 5S / 6S transformations for manufacturing plants and engineering facilities across oil & gas, automotive, aerospace, and heavy engineering. By combining the 5 Japanese principles of workplace efficiency with a rigorous 6th Safety pillar, we transition cluttered, chaotic factory floors into pristine, audit-ready visual showcases that eliminate wasted operator motion, lower safety risks, and impress OEM client auditors.",
    scope: "Applicable to all manufacturing machine shops, assembly lines, fabrication bays, maintenance workshops, quality testing laboratories, tool cribs, and central warehouse facilities.",
    specifications: [
      { label: "Core Methodology", value: "Japanese 5S + Ergonomic Safety (6S)" },
      { label: "Governing Benchmark", value: "Toyota Production System (TPS) & OSHA Safety" },
      { label: "Typical Deployment", value: "4 to 8 Weeks per Cell / Plant" },
      { label: "Expected Search Reduction", value: "35% to 50% Reduction in Tool Search Time" },
      { label: "Safety Impact", value: "Drastic Drop in Slip, Trip & Handling Incidents" },
      { label: "Audit Defense Track", value: "Tiered Visual Scorecard & Radar Chart Audits" }
    ],
    applicableStandards: [
      "Toyota Production System (TPS) Workplace Standard",
      "OSHA 1910 General Industry Safety Standards",
      "ISO 45001:2018 (Occupational Health & Safety Integration)",
      "ANSI / ASSE Z244.1 (Control of Hazardous Energy)"
    ],
    industries: [
      "Precision Machining & CNC Engineering Shops",
      "Automotive Tier-1 & Tier-2 Component Manufacturers",
      "Oil & Gas Equipment Fabrication Facilities",
      "Aerospace Structure & Tooling Assembly Bays",
      "Heavy Machinery & Hydraulic Valve Plants"
    ],
    workflow: [
      { step: "01", title: "Diagnostic Gemba Walk & Zone Assignment", desc: "Plant-wide baseline photographic survey, 5S radar score assessment, and dividing the factory into assigned departmental ownership zones." },
      { step: "02", title: "Shop Floor Red-Tag Campaign (1S)", desc: "Systematic sorting campaign tagging obsolete, broken, and unneeded tooling, fixtures, WIP, and raw materials for disposal or quarantine." },
      { step: "03", title: "Visual Layout & Ergonomic Setting (2S)", desc: "Engineering shadow boards, high-durability floor epoxy zoning, color-coded boundaries, and primary point-of-use tool positioning." },
      { step: "04", title: "Daily Shine & Preventative Inspection (3S)", desc: "Turning cleaning into machine inspection to detect fluid leaks, loose bolts, vibration anomalies, and contamination sources early." },
      { step: "05", title: "Visual Standards & SOP Formulations (4S)", desc: "Establishing laminated visual standard operating sheets, shift cleaning schedules, color-coding standards, and role assignments." },
      { step: "06", title: "Tiered Audits & Sustenance Governance (5S/6S)", desc: "Daily supervisor walk-throughs, weekly cross-departmental scoring, monthly executive gemba reviews, and recognition programs." }
    ],
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
    ],
    faq: [
      { q: "What is the difference between 5S and 6S?", a: "6S explicitly integrates Safety as a dedicated, foundational pillar alongside Sort, Set in Order, Shine, Standardize, and Sustain, ensuring hazard elimination and ergonomics are embedded into daily routines." },
      { q: "How long does a typical 5S transformation take?", a: "A pilot line transformation is completed in 3–4 weeks, followed by full plant rollout over 2–3 months with institutionalized audit scorecards." },
      { q: "How does 5S impact customer and OEM audits?", a: "A world-class visual shop floor immediately reassures OEM auditors of operational discipline, high quality control, and zero risk of tool cross-contamination." }
    ],
    relatedServices: ["tpm", "lean", "qc-tools"]
  },

  "tpm": {
    id: "tpm",
    code: "TPM (JIPM)",
    edition: "JIPM Standard Framework (Japan Institute of Plant Maintenance)",
    name: "Total Productive Maintenance (TPM)",
    category: "Asset Reliability",
    badge: "Asset Reliability",
    tagline: "Zero Breakdowns, Zero Stoppages & Maximum OEE Performance",
    intro: "Total Productive Maintenance (TPM) is a plant-wide asset reliability strategy focused on maximizing Overall Equipment Effectiveness (OEE) while striving for zero breakdowns, zero minor stops, and zero defects.",
    overview: "Developed under JIPM standards, TPM transitions machinery maintenance from reactive firefighting to proactive, operator-involved asset stewardship. Reva Phoenix assists industrial operations in rolling out the 8 classic pillars of TPM, training machine operators in Autonomous Maintenance (Jishu Hozen), eliminating the 6 Big Losses, and driving OEE to world-class 85%+ levels.",
    scope: "Critical production machines, CNC centers, forging presses, heat treatment furnaces, stamping lines, paint booths, and industrial utilities across manufacturing plants.",
    specifications: [
      { label: "Origin & Framework", value: "Japan Institute of Plant Maintenance (JIPM)" },
      { label: "Core Metric", value: "Overall Equipment Effectiveness (OEE > 85%)" },
      { label: "Key Goals", value: "Zero Breakdowns, Zero Defects, Zero Accidents" },
      { label: "Typical Implementation", value: "3 to 6 Months for Core Pillars" },
      { label: "Target Downtime Drop", value: "40% to 65% Reduction in Unplanned Stoppages" },
      { label: "Operator Empowerment", value: "7-Step Autonomous Maintenance (Jishu Hozen)" }
    ],
    applicableStandards: [
      "JIPM Total Productive Maintenance Standards",
      "ISO 55001:2014 (Asset Management Systems)",
      "DIN 31051 (Fundamentals of Maintenance)",
      "VDI 2888 (Condition Monitoring of Machinery)"
    ],
    industries: [
      "Automotive Powertrain & Stamping Plants",
      "High-Pressure Valve & Forging Facilities",
      "Plastic Injection Molding & Extrusion Lines",
      "Heavy Industrial Fabrication & CNC Machine Centers",
      "Chemical Processing & Continuous Run Utilities"
    ],
    workflow: [
      { step: "01", title: "Asset Criticality Ranking & Baseline OEE Logging", desc: "Classifying all plant equipment into A/B/C criticality and deploying hourly automated or manual OEE tracking logs." },
      { step: "02", title: "Pilot Machine Initial Cleaning & Abnormality Tagging", desc: "Conducting hands-on Gemba cleaning sessions with operators to uncover hidden defects using white (operator) and red (maintenance) tags." },
      { step: "03", title: "Lubrication & Cleaning Standard Sheets (JH Steps 1–3)", desc: "Engineering visual lubrication charts, color-coded grease nipples, and standard cleaning inspection cycle times." },
      { step: "04", title: "Preventative & Predictive Maintenance Integration", desc: "Setting up MTBF/MTTR tracking, vibration analysis, thermography routes, and scheduled component changeout intervals." },
      { step: "05", title: "Kobetsu Kaizen (Focused Loss Elimination)", desc: "Forming cross-functional engineering teams to attack chronic bottlenecks and eradicate the 6 Big Losses suppressing line speed." },
      { step: "06", title: "Plant-Wide TPM Scaling & JIPM Award Readiness", desc: "Expanding autonomous maintenance across all cells and establishing permanent multi-tiered audit review rituals." }
    ],
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
    ],
    faq: [
      { q: "What does OEE measure in TPM?", a: "OEE (Overall Equipment Effectiveness) is the product of Availability, Performance Rate, and Quality Rate, measuring true asset productivity against optimal capacity." },
      { q: "How do operators participate in maintenance?", a: "Through Autonomous Maintenance (Jishu Hozen), operators perform daily inspection, cleaning, lubrication, and tightening, relieving maintenance engineers to focus on predictive reliability." }
    ],
    relatedServices: ["5s-6s", "lean", "qc-tools"]
  },

  "tqm": {
    id: "tqm",
    code: "TQM",
    edition: "Deming / Juran / Crosby Excellence Model",
    name: "Total Quality Management (TQM)",
    category: "Quality Governance",
    badge: "Quality Governance",
    tagline: "Company-Wide Continuous Improvement & Customer-Centric Culture",
    intro: "Total Quality Management (TQM) integrates leadership vision, frontline employee engagement, and process-centered thinking to cultivate an unyielding culture of zero defects and customer satisfaction.",
    overview: "Rooted in Deming, Juran, and Japanese JUSE principles, Reva Phoenix delivers comprehensive TQM institutionalization. We guide organizations in forming self-directed Quality Control (QC) Circles, implementing policy deployment (Hoshin Kanri), eliminating the Cost of Poor Quality (COPQ), and aligning every department—from R&D to procurement—toward flawless execution.",
    scope: "Entire organizational hierarchy, including executive leadership, manufacturing plants, procurement, quality assurance, engineering, and customer support divisions.",
    specifications: [
      { label: "Core Philosophy", value: "Deming 14 Points, Juran Trilogy & Kaizen" },
      { label: "Primary Objective", value: "Flawless Customer Satisfaction & Zero Defects" },
      { label: "Cultural Pillar", value: "Active Quality Control (QC) Circles" },
      { label: "Strategic Cascade", value: "Hoshin Kanri (Policy Deployment)" },
      { label: "Financial Impact", value: "Measurable Reduction in Cost of Poor Quality (COPQ)" }
    ],
    applicableStandards: [
      "ISO 9004:2018 (Quality Management — Quality of an Organization)",
      "Deming Application Prize Criteria (JUSE)",
      "Baldrige Excellence Framework (NIST)",
      "EFQM Excellence Model"
    ],
    industries: [
      "Heavy Engineering & Turbine Manufacturing",
      "Automotive OEMs & Tier-1 Systems Suppliers",
      "Electronic Instrumentation & Semiconductor Assembly",
      "Medical Device Fabrication & Packaging",
      "Chemical, Petrochemical & Process Industries"
    ],
    workflow: [
      { step: "01", title: "TQM Cultural Maturity & COPQ Diagnostic", desc: "Evaluating current quality mindset, estimating Cost of Poor Quality, and benchmarking leadership engagement." },
      { step: "02", title: "Executive Policy Deployment (Hoshin Kanri)", desc: "Cascading corporate breakthrough goals into annual departmental targets via structured X-Matrix mapping." },
      { step: "03", title: "7 Basic QC Tools & Grassroots Training", desc: "Multi-tier training of shop floor operators and engineers in Pareto, Ishikawa, histograms, and control charts." },
      { step: "04", title: "Quality Control (QC) Circle Formation & Sprints", desc: "Organizing frontline teams to systematically solve real shop floor quality defects using PDCA cycles." },
      { step: "05", title: "Customer-Centric VOC & QFD Integration", desc: "Embedding Voice of the Customer into design, manufacturing parameters, and quality gates." },
      { step: "06", title: "Annual TQM Conventions & Sustained Recognition", desc: "Plant-wide presentations, management recognition of winning QC Circles, and institutionalizing continuous improvement habits." }
    ],
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
    ],
    faq: [
      { q: "How is TQM different from ISO 9001?", a: "ISO 9001 defines mandatory quality system standards and compliance. TQM is a company-wide cultural and strategic philosophy that engages all employees in ongoing grassroots continuous improvement." },
      { q: "What is a QC Circle?", a: "A Quality Control Circle is a small voluntary group of shop floor workers who regularly meet to identify, analyze, and solve work-related quality and productivity problems." }
    ],
    relatedServices: ["qc-tools", "six-sigma", "5s-6s"]
  },

  "lean": {
    id: "lean",
    code: "LEAN / VSM",
    edition: "Toyota Lean Production System Framework",
    name: "Lean Manufacturing & Value Stream Mapping",
    category: "Waste Elimination & Flow",
    badge: "Waste Elimination",
    tagline: "Elimination of the 7 Wastes (Muda) & Seamless Flow Optimization",
    intro: "Lean Manufacturing focuses on relentlessly eradicating non-value-added activities (Muda) to establish seamless, customer-pulled flow from raw materials to shipped goods.",
    overview: "Reva Phoenix unleashes trapped working capital, cuts production lead times, and boosts operational velocity. Through Value Stream Mapping (VSM), Single-Minute Exchange of Die (SMED), Kanban pull systems, and Cellular Manufacturing redesign, we transform traditional batch-and-queue factories into agile, high-flow operations.",
    scope: "End-to-end value streams across fabrication, machining, surface finishing, assembly, packaging, and factory internal logistics.",
    specifications: [
      { label: "Core Philosophy", value: "Relentless Elimination of the 7 Wastes (Muda)" },
      { label: "Primary Tools", value: "VSM, SMED, Kanban, Poka-Yoke, Cellular Layout" },
      { label: "Lead Time Reduction", value: "40% to 60% Decrease in Order-to-Delivery Cycle" },
      { label: "Inventory Impact", value: "30% to 50% Reduction in Work-in-Progress (WIP)" },
      { label: "Space Reclaim", value: "Up to 25% Usable Factory Floor Space Reclaimed" }
    ],
    applicableStandards: [
      "Toyota Production System (TPS) Engineering Manual",
      "ISO 18404:2015 (Quantitative Methods in Process Improvement — Lean)",
      "Lean Enterprise Institute (LEI) Standards"
    ],
    industries: [
      "Automotive & Commercial Vehicle Assembly Lines",
      "High-Mix Low-Volume (HMLV) Precision Engineering",
      "Oil & Gas Downhole Tool & Valve Plants",
      "Aerospace Component Precision Machining",
      "Electrical Switchgear & Transformer Assembly"
    ],
    workflow: [
      { step: "01", title: "Current State Value Stream Mapping (CS-VSM)", desc: "Tracing full material and information flow on the gemba, measuring cycle times, changeovers, scrap, and WIP piles." },
      { step: "02", title: "Identification of the 7 Wastes (Muda)", desc: "Isolating overproduction, operator waiting, unnecessary transport, excessive processing, inventory piles, unnecessary motion, and defects." },
      { step: "03", title: "Future State VSM & Flow Engineering", desc: "Designing continuous flow cells, calculating Takt time, sizing supermarket buffers, and implementing pull signals." },
      { step: "04", title: "SMED Rapid Changeover Blitz", desc: "Converting internal setup tasks to external operations to slash machine tool changeover times by 50%–75%." },
      { step: "05", title: "Cellular Layout & Line Balancing", desc: "Reconfiguring machinery into U-shaped cells, balancing operator workloads against Takt time, and removing travel waste." },
      { step: "06", title: "Kanban Pull System & Daily Kaizen Rituals", desc: "Deploying physical/electronic Kanban signals and standardizing daily 10-minute stand-up gemba meetings." }
    ],
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
    ],
    faq: [
      { q: "What is a Value Stream Map?", a: "A Value Stream Map illustrates all steps, material flows, and information triggers required to bring a product from raw material to customer delivery, distinguishing value-added from non-value-added time." },
      { q: "What is SMED and how does it help?", a: "Single-Minute Exchange of Die (SMED) is a systematic approach to reduce equipment setup times to under 10 minutes, allowing cost-effective smaller batch sizes and rapid changeovers." }
    ],
    relatedServices: ["5s-6s", "six-sigma", "tpm"]
  },

  "six-sigma": {
    id: "six-sigma",
    code: "SIX SIGMA",
    edition: "DMAIC Statistical Engineering Standard",
    name: "Six Sigma (DMAIC Methodology)",
    category: "Statistical Defect Reduction",
    badge: "Statistical Rigor",
    tagline: "Statistical Defect Reduction, Process Capability & Rigorous Governance",
    intro: "Six Sigma is the data-driven methodology designed to eliminate process variation and minimize defects to fewer than 3.4 Defects Per Million Opportunities (DPMO).",
    overview: "Reva Phoenix deploys certified Master Black Belts and Black Belts to guide industrial teams through high-impact DMAIC projects. By combining Measurement System Analysis (Gage R&R), Design of Experiments (DOE), and Statistical Process Control (SPC), we solve chronic quality bottlenecks and deliver auditable financial savings directly to corporate balance sheets.",
    scope: "Critical manufacturing machining, heat treatment, welding, dimensional inspection, electronic assembly, and transactional supply chain workflows.",
    specifications: [
      { label: "Core Methodology", value: "DMAIC (Define, Measure, Analyze, Improve, Control)" },
      { label: "Defect Benchmark", value: "< 3.4 DPMO (Six Sigma Process Capability)" },
      { label: "Capability Target", value: "Cpk > 1.67 for Critical to Quality (CTQ) Parameters" },
      { label: "Certification Tracks", value: "Yellow Belt, Green Belt, Black Belt, Master Black Belt" },
      { label: "Typical ROI", value: "5x to 10x Financial Return per Completed Black Belt Project" }
    ],
    applicableStandards: [
      "ISO 13053-1:2011 (Quantitative Methods — Six Sigma — DMAIC)",
      "ISO 13053-2:2011 (Quantitative Methods — Six Sigma — Tools & Techniques)",
      "ASQ (American Society for Quality) Six Sigma Body of Knowledge"
    ],
    industries: [
      "Aerospace Turbine Blades & Flight Control Systems",
      "Automotive Precision Powertrain & Electronic Sensors",
      "API Oil & Gas High-Pressure Valve Manufacturing",
      "Medical Device Implants & Surgical Instrumentation",
      "Semiconductor Fabrication & Precision Optics"
    ],
    workflow: [
      { step: "01", title: "Define Phase (D)", desc: "Developing business cases, creating Project Charters, mapping SIPOC flows, and converting Voice of Customer into Critical-to-Quality (CTQ) metrics." },
      { step: "02", title: "Measure Phase (M)", desc: "Executing Measurement System Analysis (MSA / Gage R&R), establishing data collection protocols, and calculating baseline Cp, Cpk, and process sigma." },
      { step: "03", title: "Analyze Phase (A)", desc: "Conducting multi-vari studies, hypothesis testing (t-tests, ANOVA), regression analysis, and identifying statistically verified root causes." },
      { step: "04", title: "Improve Phase (I)", desc: "Designing experiments (DOE Full/Fractional Factorial), determining optimal operating windows, and running pilot validation trials." },
      { step: "05", title: "Control Phase (C)", desc: "Implementing Statistical Process Control (SPC) charts, mistake-proofing (Poka-Yoke), updated SOPs, and reaction plans." },
      { step: "06", title: "Financial Validation & Belt Sign-off", desc: "Auditing hard financial savings with finance controllers and awarding verifiable Green/Black Belt credentials." }
    ],
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
    ],
    faq: [
      { q: "What is Cpk in Six Sigma?", a: "Process capability index (Cpk) measures how close a process is running to its specification limits relative to natural variability. A Cpk of 1.67+ represents Six Sigma quality." },
      { q: "What is the difference between Green Belt and Black Belt?", a: "Green Belts lead department-level improvement projects part-time, while Black Belts lead complex cross-functional statistical projects and mentor Green Belts full-time." }
    ],
    relatedServices: ["lean", "qc-tools", "tqm"]
  },

  "supplier-dev": {
    id: "supplier-dev",
    code: "SUPPLIER QA",
    edition: "IATF 16949 / API Spec Q1 Supply Chain Protocols",
    name: "Supplier Development & Quality Management",
    category: "Supply Chain Resilience",
    badge: "Supply Chain",
    tagline: "Supply Chain Resilience, Capability Audits & Vendor Quality Partnerships",
    intro: "Supplier Development elevates Tier-1 and Tier-2 supplier capabilities through rigorous technical audits, PPAP qualification, and structured quality improvement partnerships.",
    overview: "Finished product reliability is bounded by supplier quality. Reva Phoenix acts as an extension of client procurement and quality teams to evaluate, audit, coach, and elevate tier-1 and tier-2 vendor capabilities. We enforce PPAP Level 1–5 compliance, conduct onsite special process surveillance, and implement Supplier Quality Improvement Plans (SQIP) that drastically reduce incoming PPM reject rates.",
    scope: "Raw material mills, casting foundries, forging shops, CNC machining subcontractors, heat treaters, platers, and specialized component vendors.",
    specifications: [
      { label: "Governing Standards", value: "IATF 16949 Clause 8.4, API Spec Q1 Clause 5.6" },
      { label: "Core Mandate", value: "PPAP (Production Part Approval Process) Levels 1–5" },
      { label: "Audit Benchmark", value: "VDA 6.3 Process Audit & CQI Special Process Audits" },
      { label: "Defect Target", value: "Incoming Reject PPM Slashed by > 70%" },
      { label: "Subcontractor Scope", value: "Welding, NDT, Heat Treatment, Plating & Surface Coating" }
    ],
    applicableStandards: [
      "AIAG PPAP (Production Part Approval Process) Manual",
      "VDA 6.3 Process Audit for the Automotive Supply Chain",
      "AIAG CQI-9 (Heat Treat), CQI-11 (Plating), CQI-12 (Coating)",
      "ISO 9001:2015 Clause 8.4 (Externally Provided Processes)"
    ],
    industries: [
      "Automotive OEMs & Tier-1 Systems Integrators",
      "Oil & Gas Pressure Vessel & Valve Subcontractors",
      "Aerospace Machined Forgings & Fastener Suppliers",
      "Heavy Earthmoving & Construction Equipment Sub-Suppliers",
      "Precision Electronics & Wiring Harness Fabricators"
    ],
    workflow: [
      { step: "01", title: "Supply Base Risk Stratification", desc: "Categorizing suppliers by spend, component criticality, failure history, and past audit track record." },
      { step: "02", title: "Onsite Technical & Process Audits (VDA 6.3)", desc: "Auditing factory floor quality controls, machine capability, tooling maintenance, and gauge calibration." },
      { step: "03", title: "PPAP & First Article Inspection (FAI) Approval", desc: "Rigorous verification of dimensional dossiers, material test reports, control plans, and FMEA packages." },
      { step: "04", title: "Supplier Turnaround Programs (SQIP)", desc: "Deploying Reva engineers onsite at underperforming vendors to eliminate chronic root causes via 8D methods." },
      { step: "05", title: "Special Process Auditing (CQI / API)", desc: "Evaluating welding, heat treating, NDT, and surface coating against strict metallurgical standards." },
      { step: "06", title: "Quantitative Supplier Scorecards & Recognition", desc: "Tracking on-time delivery, PPM defects, and responsiveness to govern annual contract awards." }
    ],
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
    ],
    faq: [
      { q: "What is PPAP in supplier quality?", a: "Production Part Approval Process (PPAP) demonstrates that a supplier's manufacturing process can consistently produce parts meeting all engineering design and specification requirements during an actual production run." },
      { q: "How does Reva Phoenix handle underperforming suppliers?", a: "We execute targeted Supplier Quality Improvement Plans (SQIP), placing experienced quality engineers at vendor facilities to implement 8D corrective actions, Gage R&R, and visual mistake-proofing." }
    ],
    relatedServices: ["tpi", "qc-tools", "six-sigma"]
  },

  "tpi": {
    id: "tpi",
    code: "TPI INSPECT",
    edition: "ISO 17020 / EN 10204 Type 3.2 Impartial Inspection",
    name: "Third Party Inspection (TPI)",
    category: "Independent QA",
    badge: "Independent QA",
    tagline: "Impartial Stage Witness, Pre-Shipment Inspection & Compliance Certification",
    intro: "Third Party Inspection (TPI) provides impartial, globally accredited quality assurance, stage witnessing, and compliance verification across manufacturing and fabrication plants.",
    overview: "Reva Phoenix provides independent technical inspection services by certified Level II/III NDT and API/ASME source inspectors. We verify mill test certificates (EN 10204 3.1 & 3.2), witness mandatory hold points on Inspection & Test Plans (ITPs), oversee hydrostatic pressure tests, and validate complete End-of-Manufacturing Dossiers (MDR) prior to dispatch.",
    scope: "High-pressure oil & gas equipment, structural fabrications, pipeline valves, heat exchangers, pressure vessels, forgings, and critical energy plant machinery.",
    specifications: [
      { label: "Accreditation Benchmark", value: "ISO/IEC 17020 Type A Independent Inspection" },
      { label: "Material Certification", value: "EN 10204 3.1 & 3.2 Independent Endorsement" },
      { label: "Inspector Credentials", value: "ASNT Level II/III, CSWIP, AWS CWI, API 510/570" },
      { label: "Core Deliverable", value: "Official Inspection Release Note (IRN) & Verified MDR" },
      { label: "Turnaround Time", value: "Same-Day / 24-Hour Flash Stage Witness Reports" }
    ],
    applicableStandards: [
      "ISO/IEC 17020 (Conformity Assessment — Inspection Bodies)",
      "EN 10204 (Metallic Products — Types of Inspection Documents)",
      "ASME Boiler & Pressure Vessel Code (Sections VIII, IX, V)",
      "API 6A, 6D, 16A, 17D Standards for Oilfield Equipment",
      "AWS D1.1 / ISO 9606 (Structural Welding Inspection)"
    ],
    industries: [
      "Subsea & Surface Oil & Gas Wellhead Equipment",
      "Offshore Platform Jackets, Top-sides & Pressure Vessels",
      "Refinery Pipelines, Flanges & Industrial Gate/Ball Valves",
      "Power Generation Turbines & Steam Heat Exchangers",
      "Defense & Naval Maritime Structural Steel Fabrications"
    ],
    workflow: [
      { step: "01", title: "Pre-Inspection Meeting (PIM) & ITP Review", desc: "Aligning client specifications, codes, acceptance criteria, and designating mandatory Witness (W), Hold (H), and Review (R) milestones." },
      { step: "02", title: "Raw Material Traceability & PMI Verification", desc: "Witnessing mill test certificate review (EN 10204 3.1/3.2), heat number transfer, positive material identification (XRF PMI), and chemical analysis." },
      { step: "03", title: "In-Process Fabrication & NDT Witnessing", desc: "Witnessing welding runs (WPS/PQR), fit-up tolerances, and non-destructive examinations (UT, RT, MT, PT) by qualified Level II/III personnel." },
      { step: "04", title: "Pressure & Functional Performance Testing", desc: "Witnessing hydrostatic shell tests, pneumatic seat tightness trials, PR2 qualification runs, and torque tests." },
      { step: "05", title: "Final Dimensional, Coating & Preservation Inspection", desc: "Verifying dimensional reports, DFT paint thickness, holiday testing, flange face protection, and packaging compliance." },
      { step: "06", title: "Manufacturing Data Report (MDR) & IRN Release", desc: "Auditing complete quality dossiers, stamping release notes, and issuing formal Inspection Release Notes (IRN)." }
    ],
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
    ],
    faq: [
      { q: "What is the difference between EN 10204 3.1 and 3.2?", a: "A 3.1 certificate is endorsed solely by the manufacturer's authorized inspection representative independent of production. A 3.2 certificate requires joint endorsement by both the manufacturer and an independent third-party inspector." },
      { q: "What is an Inspection Release Note (IRN)?", a: "An IRN is the official document issued by the third-party inspector confirming that equipment has met all specified tests, dimensions, and customer requirements, authorizing shipment." }
    ],
    relatedServices: ["supplier-dev", "qc-tools"]
  },

  "qc-tools": {
    id: "qc-tools",
    code: "7 QC TOOLS / 8D",
    edition: "JUSE Basic 7 Tools & Automotive Global 8D Standard",
    name: "Quality Improvement Tools & Shop Floor Workshops",
    category: "Shop Floor Mastery",
    badge: "Shop Floor Mastery",
    tagline: "7 QC Tools, Global 8D, Root Cause Problem Solving & COPQ Elimination",
    intro: "Quality Improvement Tools & Shop Floor Workshops provide hands-on, practical problem-solving capabilities directly on the manufacturing shop floor.",
    overview: "Reva Phoenix trains operators, technicians, engineers, and plant leadership in JUSE 7 QC tools, Global 8D methodology, root cause analysis (5-Why & Ishikawa), Cost of Poor Quality (COPQ) quantification, and zero-defect execution. We facilitate live Gemba sprints on factory lines to permanently solve chronic quality bottlenecks and establish error-proof Poka-Yoke interlocks.",
    scope: "Production cells, assembly lines, rework areas, incoming inspection, and cross-functional engineering problem-solving taskforces.",
    specifications: [
      { label: "Core Toolsets", value: "7 Basic QC Tools (JUSE) & Global 8D Framework" },
      { label: "Problem Solving Logic", value: "Iterative 5-Why Analysis & Fishbone Root Cause" },
      { label: "Mistake Proofing", value: "Poka-Yoke Mechanical & Sensor Interlocks" },
      { label: "Financial Integration", value: "Direct Link to Cost of Poor Quality (COPQ) Reduction" },
      { label: "Target Audience", value: "Frontline Operators, Supervisors & Quality Engineers" }
    ],
    applicableStandards: [
      "JUSE (Union of Japanese Scientists and Engineers) 7 QC Tools Standard",
      "AIAG Global 8D Problem Solving Standard",
      "Ford Motor Company 8D Guidelines",
      "ISO 9001 Clause 10.2 (Nonconformity & Corrective Action)"
    ],
    industries: [
      "Automotive Stamping, Welding & Engine Assembly",
      "Precision Valve, Actuator & Pump Manufacturing",
      "Plastic Molding & Rubber Extrusion Facilities",
      "Fabrication & Structural Heavy Machinery Plants",
      "Electronic Circuit Board (PCB) & Sensor Assembly"
    ],
    workflow: [
      { step: "01", title: "Defect Pareto Analysis & Prioritization", desc: "Stratifying defect logs to isolate the vital 20% of problems generating 80% of scrap and customer complaints." },
      { step: "02", title: "D1–D3 Team Charter & Interim Containment", desc: "Assembling a cross-functional squad and executing immediate containment actions to protect the customer within 24 hours." },
      { step: "03", title: "Gemba Root Cause Isolation (5-Why & Fishbone)", desc: "Distinguishing symptoms from root causes using Ishikawa cause-and-effect categories and 5-Why gemba verification." },
      { step: "04", title: "Poka-Yoke & Permanent Countermeasures", desc: "Designing mechanical fixtures, electronic sensors, or software interlocks to make recurrence physically impossible." },
      { step: "05", title: "Systemic Recurrence Prevention (D7)", desc: "Updating PFMEA, Control Plans, Work Instructions, and SOPs to institutionalize changes across all lines." },
      { step: "06", title: "Team Recognition & COPQ Savings Audit", desc: "Quantifying financial savings, presenting lessons learned to plant leadership, and formally closing the 8D report." }
    ],
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
    ],
    faq: [
      { q: "What are the 7 Basic QC Tools?", a: "They are Pareto Charts, Cause-and-Effect (Fishbone) Diagrams, Check Sheets, Histograms, Scatter Diagrams, Stratification, and Control Charts, recognized worldwide as practical problem-solving instruments." },
      { q: "What is an 8D report?", a: "Eight Disciplines (8D) is a structured problem-solving methodology designed to identify, contain, correct, and permanently eliminate recurring defects." }
    ],
    relatedServices: ["5s-6s", "six-sigma", "tqm"]
  },

  "leadership-soft-skills": {
    id: "leadership-soft-skills",
    code: "LEADERSHIP",
    edition: "Stephen Covey & Hoshin Kanri Executive Framework",
    name: "Leadership & Executive Soft Skills",
    category: "People & Culture",
    badge: "People & Culture",
    tagline: "Transformational Leadership, 7 Habits, TTT Mastery & Quality Culture",
    intro: "Leadership & Executive Soft Skills is an executive coaching and managerial development program engineered to transform technical plant managers into inspiring organizational leaders.",
    overview: "Technical systems only succeed when backed by committed people. Reva Phoenix bridges technical quality execution with human capability development. Our master executive coaches train management cadres in Stephen Covey's 7 Habits, Train the Trainer (TTT) mastery, conflict resolution, high-stakes negotiation, and policy cascade (Hoshin Kanri) to cultivate an enduring culture of accountability and excellence.",
    scope: "Plant managers, department heads, engineering managers, shift superintendents, internal company trainers, and high-potential technical supervisors.",
    specifications: [
      { label: "Core Curriculum", value: "Covey 7 Habits, TTT Facilitation, Hoshin Kanri" },
      { label: "Coaching Format", value: "Executive Workshops, Roleplays & Gemba Mentoring" },
      { label: "Trainer Credential", value: "Certified Train-the-Trainer (TTT) Master Instructor" },
      { label: "Culture Metric", value: "Measurable Employee Engagement & Attrition Reduction" },
      { label: "Strategic Linkage", value: "Direct Connection to Zero-Defect Operational Culture" }
    ],
    applicableStandards: [
      "Stephen Covey 7 Habits of Highly Effective People",
      "ISO 10015:2019 (Quality Management — Guidelines for Competence Development)",
      "Hoshin Kanri Policy Deployment Framework"
    ],
    industries: [
      "Energy, Oil & Gas Engineering Leadership",
      "Automotive & Aerospace Plant Management Cadres",
      "High-Tech Manufacturing & R&D Technical Teams",
      "Heavy Machinery & Turnkey Project Engineering",
      "Corporate Quality & Compliance Directorate"
    ],
    workflow: [
      { step: "01", title: "360-Degree Leadership Assessment", desc: "Evaluating leadership styles, communication gaps, delegation effectiveness, and psychological safety in teams." },
      { step: "02", title: "Executive Retreat: 7 Habits & Strategic Vision", desc: "Aligning senior directors around proactive accountability, Win-Win collaboration, and prioritizing what matters most." },
      { step: "03", title: "Train The Trainer (TTT) Certification Cohort", desc: "Equipping in-house subject matter experts with dynamic adult learning facilitation, speech, and workshop techniques." },
      { step: "04", title: "Conflict Resolution & Negotiation Drills", desc: "Hands-on roleplays simulating tense cross-departmental disputes, supplier negotiations, and union discussions." },
      { step: "05", title: "Hoshin Kanri Cascade & Managerial Delegation", desc: "Translating annual breakthrough corporate goals into daily operational deliverables using clear ownership matrices." },
      { step: "06", title: "Quality Culture Measurement & Review", desc: "Conducting pulse surveys, verifying trainer rollout numbers, and recognizing transformational leadership champions." }
    ],
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
      "Elimination of cross-departmental friction and faster execution of strategic projects"
    ],
    deliverables: [
      "Executive Leadership Competency Matrix & Individual Action Plans",
      "Internal Train-the-Trainer (TTT) Facilitator Credentials & Toolkits",
      "Hoshin Kanri Policy Deployment Strategy Cascading Blueprint",
      "Organizational Culture & Engagement Baseline Survey Report"
    ],
    faq: [
      { q: "What is the Train-the-Trainer (TTT) program?", a: "TTT equips senior engineers and managers with professional adult learning instructional design, presentation mastery, and facilitation techniques to conduct impactful in-house training." },
      { q: "How do soft skills impact manufacturing quality?", a: "Flawless technical execution requires psychological safety, cross-functional trust, clear delegation, and proactive accountability—without which quality procedures fail on the shop floor." }
    ],
    relatedServices: ["tqm", "qc-tools", "5s-6s"]
  }
};

/**
 * 4 Dedicated Tracks for All 9 Business Excellence Modules:
 * 1. training: Industrial Masterclasses & Workshops (Teal #00d4aa)
 * 2. consulting: Advisory & System Architecture (Blue #4a9eff)
 * 3. implementation: Turnkey Factory Execution & Gemba Deployment (Purple #a855f7)
 * 4. auditing: Diagnostic Scorecards & Audit Defense (Orange #f59e0b)
 */
export const EXCELLENCE_TRACKS = {
  "5s-6s": {
    training: {
      title: "5S / 6S Workplace Organization — Specialized Industrial Training Programs",
      intro: "Hands-on Gemba masterclasses and certified internal auditor training delivered by accredited Lean Senseis with deep domain authority in shop floor visual control and industrial safety.",
      desc: "Designed for plant managers, shift supervisors, maintenance engineers, and shop floor operators seeking mastery in workplace organization. Courses cover systematic red-tag campaigns, visual demarcation, shadow board fabrication, daily shine inspection routines, and tiered audit scorecards.",
      programs: [
        { name: "Executive & Plant Leadership Awareness", duration: "1 Day", audience: "Plant Directors & Operations Heads", desc: "Strategic briefing on visual workplace ROI, cultural discipline, safety hazard mitigation, and leadership gemba walk routines." },
        { name: "5S / 6S Champion & Implementation Lead", duration: "3 Days", audience: "Manufacturing Engineers & Section Leads", desc: "Deep dive into 1S-6S rollout methodologies, red-tag quarantine management, visual factory standard creation, and operator coaching." },
        { name: "Certified Gemba 5S Internal Auditor Course", duration: "2 Days", audience: "Quality & Safety Auditors", desc: "Systematic auditing techniques, objective scoring rubrics, 5S radar charts formulation, and constructive feedback delivery." },
        { name: "Shop Floor Visual Facilitator & Operator Drill", duration: "1 Day", audience: "Frontline Operators & Team Leads", desc: "Hands-on Gemba cleaning-as-inspection drills, shadow board maintenance, 3S check sheets, and daily 5-minute upkeep habits." }
      ],
      topics: [
        "1S Seiri: Systematic Red-Tag Campaigns & Scrap Disposition Criteria",
        "2S Seiton: Visual Ergonomics, Shadow Boards, Color-Coded Demarcation & POU (Point of Use)",
        "3S Seiso: Cleaning-as-Inspection Protocols & Equipment Anomaly Detection",
        "4S Seiketsu: Visual Standard Operating Procedures (SOPs) & Responsibilities Matrix",
        "5S Shitsuke: Sustaining Habits, Tiered Audits, Radar Scorecards & Recognition",
        "6S Safety: Integrating Hazard Identification, PPE Zoning & Ergonomic Clearance"
      ],
      process: [
        { step: "01", name: "Diagnostic Pre-Assessment", desc: "Baseline evaluation of the target manufacturing cell, current search times, and operator clutter habits." },
        { step: "02", name: "Interactive Gemba Classroom", desc: "Visual principles walkthrough integrating real-world manufacturing benchmarks and plant photographic case studies." },
        { step: "03", name: "Live Shop Floor Red-Tag Drill", desc: "Hands-on Gemba simulation: sorting a live workstation, discarding unneeded tools, and building prototype shadow boards." },
        { step: "04", name: "Auditor Certification & Scorecard Toolkit", desc: "Practical examination followed by issuance of accredited 5S/6S internal auditor credentials." }
      ],
      benefits: [
        "35%–50% reduction in operator search times for tools, fixtures, and documentation",
        "Drastic drop in workplace slips, trips, falls, and ergonomic strain injuries",
        "Immediate detection of machine oil leaks, bolt looseness, and fluid contamination",
        "Audit-ready factory floor guaranteed to impress visiting OEM client delegations"
      ],
      ctaText: "Enquire for 5S/6S Training",
      ctaService: "5S / 6S Workplace Organization — Industrial Training"
    },
    consulting: {
      title: "5S / 6S Workplace Organization — Strategic Consulting & Shop Floor Architecture",
      intro: "Senior Lean advisory delivering comprehensive diagnostic gap analysis, red-tag campaign governance, and standardized visual factory architecture.",
      desc: "Reva Phoenix consultants partner directly with plant management to engineer clutter-free manufacturing environments. We formulate bespoke Visual Factory Manuals, specify epoxy floor zoning standards, design shadow boards, and establish sustaining multi-tier audit governance without halting ongoing production lines.",
      services: [
        { name: "Plant-Wide 5S/6S Diagnostic Gap Analysis", desc: "Exhaustive Gemba photographic survey and quantitative radar score benchmarking across all production, maintenance, and warehouse zones." },
        { name: "Visual Factory Manual & Standards Architecture", desc: "Formulation of plant-wide standards for aisle widths, floor epoxy color-coding, machinery zoning, shadow boards, and signage." },
        { name: "Red-Tag Campaign Governance & Scrap Disposition", desc: "Setting up quarantined red-tag holding areas, disposition matrices, and clear accounting rules to remove obsolete plant assets." },
        { name: "Tiered Audit & Sustenance Governance Design", desc: "Architecting Tier-1 (Daily Operator), Tier-2 (Weekly Supervisor), and Tier-3 (Monthly Executive) audit cycles and recognition systems." }
      ],
      deliverables: [
        "Comprehensive 5S/6S Baseline Diagnostic Scorecard & Radar Charts",
        "Customized Plant Visual Factory Standards Manual",
        "Red-Tag Campaign Governance Protocol & Logbook",
        "Tiered Gemba Audit Scorecards & Action Tracking Matrix"
      ],
      process: [
        { step: "01", name: "Gemba Diagnostic Survey", desc: "Comprehensive onsite evaluation of physical layouts, tool access points, and safety hazards." },
        { step: "02", name: "Visual Architecture Blueprint", desc: "Developing plant color-coding, shadow board specs, and zone ownership matrices." },
        { step: "03", name: "Pilot Zone Demonstration", desc: "Executing complete 1S–6S transformation on a high-visibility pilot cell within 2 weeks." },
        { step: "04", name: "Plant-Wide Scaling & Governance", desc: "Rolling out standards across all bays and establishing executive monthly audit routines." }
      ],
      benefits: [
        "Elimination of tons of obsolete scrap, unused tooling, and excess work-in-progress",
        "World-class visual appeal supporting customer audits and ISO/IATF certifications",
        "Heightened shop floor morale and pride of ownership among machine operators",
        "Permanent institutionalization of daily maintenance and safety inspection habits"
      ],
      ctaText: "Request 5S/6S Consulting",
      ctaService: "5S / 6S Workplace Organization — Strategic Consulting"
    },
    implementation: {
      title: "5S / 6S Workplace Organization — Turnkey Shop Floor Execution",
      intro: "End-to-end, boots-on-the-ground factory implementation transforming cluttered production cells into disciplined, audit-ready visual centers of excellence.",
      desc: "Reva Phoenix implementation engineers work side-by-side with your shop floor workforce. We physically lead red-tag campaigns, demarcate production aisles, install custom tool shadow boards, draft visual SOPs, and establish self-sustaining daily cleaning and audit rituals.",
      phases: [
        { phase: "Phase 1", name: "Zone Demarcation & Pre-Assessment", duration: "Week 1", desc: "Assigning dedicated zone owners, baseline radar scoring, and setting up the central Red-Tag quarantine zone." },
        { phase: "Phase 2", name: "Gemba Red-Tag Sorting Blitz", duration: "Weeks 2–3", desc: "Executing full-scale 1S sorting across all cells, red-tagging hundreds of items, and disposing of obsolete tooling and WIP." },
        { phase: "Phase 3", name: "Visual Layout, Shadow Boards & Striping", duration: "Weeks 4–6", desc: "Painting high-durability floor epoxy lines, installing custom shadow boards, labelling every shelf, and ergonomic tool staging." },
        { phase: "Phase 4", name: "Daily Shine Standards & Visual SOPs", duration: "Weeks 7–8", desc: "Drafting laminated one-point lessons (OPLs), cleaning schedules, and assigning 5-minute end-of-shift shine routines." },
        { phase: "Phase 5", name: "Tiered Audit Launch & Sustenance Handover", duration: "Weeks 9–12", desc: "Deploying weekly scorecards, monthly management gemba walks, radar chart displays, and performance awards." }
      ],
      milestones: [
        "100% Factory Zones Assigned to Clear Departmental Owners",
        "Red-Tag Holding Area Established and Cleared with Accounting Approval",
        "All Production Cells Equipped with Custom Tool Shadow Boards",
        "Tiered 5S Audit Scorecards Operating Self-Sufficiently Across All Shifts"
      ],
      process: [
        { step: "01", name: "Pilot Zone Selection & Setup", desc: "Selecting the highest-impact manufacturing cell for benchmark demonstration." },
        { step: "02", name: "Hands-on Gemba Transformation", desc: "Physical sorting, discarding, striping, shadow board mounting, and deep cleaning." },
        { step: "03", name: "Standardization & Visual SOPs", desc: "Laminating visual instructions and establishing shift changeover checklists." },
        { step: "04", name: "Full Plant Cascade & Handover", desc: "Systematic replication across remaining bays, tool cribs, and warehouses." }
      ],
      benefits: [
        "Turnkey execution with zero burden on internal engineering management",
        "Verifiable reduction in cycle times through minimized operator travel and searching",
        "Immediate elimination of trip, fall, and mechanical hazards across walkways",
        "Pristine, disciplined factory floor ready for high-stakes OEM qualification audits"
      ],
      ctaText: "Deploy 5S/6S Implementation",
      ctaService: "5S / 6S Workplace Organization — Turnkey Implementation"
    },
    auditing: {
      title: "5S / 6S Workplace Organization — Comprehensive Gemba Auditing & Assessment",
      intro: "Independent baseline diagnostics, tiered visual audit scorecards, and customer audit defense preparation.",
      desc: "Our master auditors conduct rigorous evaluations of workplace organization, visual standards, and safety discipline across all manufacturing cells, providing quantitative radar scorecards, gap closure roadmaps, and certification.",
      auditTypes: [
        { name: "Baseline 5S/6S Diagnostic Gap Audit", duration: "1–2 Days", desc: "Photographic survey and quantitative scoring across all 6S dimensions to establish pre-transformation benchmark." },
        { name: "Tier-1 & Tier-2 Internal Audit Calibration", duration: "1 Day", desc: "Calibrating internal supervisors and quality leads on objective scoring criteria to eliminate audit grading inflation." },
        { name: "Customer & OEM Pre-Audit Verification", duration: "1 Day", desc: "Rigorous simulation of stringent OEM client visual shop floor evaluations to guarantee audit clearance." },
        { name: "Annual 5S/6S Sustenance & Re-Certification Audit", duration: "1–2 Days", desc: "Comprehensive plant-wide assessment to ensure standards have not slipped and award official 5S excellence certification." }
      ],
      checklists: [
        "1S Sort: Absence of Unused Tooling, Obsolete Paperwork & Excess WIP",
        "2S Set in Order: 100% Shadow Board Adherence, Clear Floor Demarcation & Labeling",
        "3S Shine: Machine Cleanliness, Absence of Leaks & Clean Lighting/Floor Status",
        "4S & 5S Standardize / Sustain: Visual SOPs Displayed, Daily Checklists Filled & Radar Trends",
        "6S Safety: Unblocked Fire Extinguishers & Eye Wash Stations, PPE Compliance & Ergonomics"
      ],
      process: [
        { step: "01", name: "Document & Scorecard Review", desc: "Reviewing existing visual SOPs, audit logs, and past non-conformance action items." },
        { step: "02", name: "Physical Gemba Walkthrough", desc: "Clause-by-clause inspection of every cell, tool crib, maintenance room, and walkway." },
        { step: "03", name: "Radar Scoring & Photographic Dossier", desc: "Compiling quantitative scores and high-resolution before/after photographic evidence." },
        { step: "04", name: "Executive Debrief & Action Plan", desc: "Presenting findings to plant leadership with targeted 30-day corrective action roadmaps." }
      ],
      benefits: [
        "Unbiased, objective quantitative rating of plant visual management maturity",
        "Elimination of complacency and drift back to cluttered shop floor habits",
        "Audit-ready status for high-profile customer tours and registrar inspections",
        "Official Reva Phoenix 5S/6S Workplace Excellence Certification"
      ],
      ctaText: "Schedule Gemba Audit",
      ctaService: "5S / 6S Workplace Organization — Auditing & Assessment"
    }
  },

  "tpm": {
    training: {
      title: "Total Productive Maintenance (TPM) — Specialized Industrial Training Programs",
      intro: "JIPM-aligned asset reliability and Overall Equipment Effectiveness (OEE) masterclasses delivered by certified reliability engineers.",
      desc: "Designed for maintenance managers, reliability engineers, and machine operators seeking mastery in eliminating breakdowns. Courses cover JIPM 8 pillars, OEE calculations, 6 Big Losses, Autonomous Maintenance (Jishu Hozen Steps 1–7), condition monitoring, and PM scheduling.",
      programs: [
        { name: "TPM Leadership & OEE Maximization Masterclass", duration: "1 Day", audience: "Plant Directors & Maintenance Heads", desc: "Strategic briefing on OEE economics, breakdown elimination, and asset lifecycle extension." },
        { name: "Autonomous Maintenance (Jishu Hozen) Masterclass", duration: "2 Days", audience: "Machine Operators & Cell Supervisors", desc: "Hands-on training in daily cleaning-as-inspection, lubrication standards, and abnormality tagging." },
        { name: "Planned & Predictive Maintenance (PM/PdM) Workshop", duration: "3 Days", audience: "Maintenance Engineers & Technicians", desc: "MTBF/MTTR analytics, vibration diagnostics, thermography routes, and PM master calendars." },
        { name: "Certified TPM Internal Auditor & Pillar Leader", duration: "2 Days", audience: "Quality & Reliability Auditors", desc: "JIPM audit criteria, pillar progress evaluation, and loss tree verification." }
      ],
      topics: [
        "The 8 Classic Pillars of Total Productive Maintenance (JIPM Framework)",
        "OEE Calculation: Availability × Performance × Quality Rate Analysis",
        "Elimination of the 6 Big Equipment Losses Suppressing Productivity",
        "Autonomous Maintenance (JH) Step 1–Step 7 Detailed Roadmap",
        "Visual Lubrication & Cleaning Inspection Cycle Time Standards",
        "Condition Monitoring: Vibration, Oil Analysis, Thermography & Ultrasound"
      ],
      process: [
        { step: "01", name: "Asset Baseline Diagnostic", desc: "Benchmarking current machine breakdown frequency, MTBF, MTTR, and baseline OEE." },
        { step: "02", name: "Interactive Pillar Delivery", desc: "Comprehensive technical walkthrough of maintenance pillars and equipment loss trees." },
        { step: "03", name: "Gemba Abnormality Tagging Drill", desc: "Hands-on machine cleaning on a live line, tagging defects with red and white tags." },
        { step: "04", name: "Reliability Certification", desc: "Examination and awarding of certified Jishu Hozen / TPM Pillar Leader credentials." }
      ],
      benefits: [
        "Elevation of Overall Equipment Effectiveness (OEE) toward world-class 85%+",
        "Up to 60% reduction in unexpected machine breakdowns and emergency downtime",
        "Multi-skilling operators to perform primary diagnostics and preventative servicing",
        "Substantial reduction in spare parts consumption and emergency repair overtime"
      ],
      ctaText: "Enquire for TPM Training",
      ctaService: "Total Productive Maintenance — Industrial Training"
    },
    consulting: {
      title: "Total Productive Maintenance (TPM) — Strategic Reliability Consulting",
      intro: "Senior reliability advisory delivering diagnostic loss tree classification, Autonomous Maintenance roadmaps, and predictive asset management.",
      desc: "Reva Phoenix consultants partner with manufacturing plants to eliminate unplanned stoppages. We design plant-wide OEE measurement architectures, formulate 7-step Autonomous Maintenance standards, establish PM calendars, and mentor cross-functional Kobetsu Kaizen teams.",
      services: [
        { name: "Plant-Wide OEE & Loss Tree Diagnostic", desc: "Exhaustive evaluation of equipment downtime history, classifying chronic losses into availability, speed, and quality categories." },
        { name: "Autonomous Maintenance (JH) Roadmap Design", desc: "Engineering tailored Step 1–Step 7 rollout plans, visual lubrication charts, and abnormality handling procedures." },
        { name: "Preventative & Predictive Maintenance (PM/PdM) Master Architecture", desc: "Formulating MTBF-based maintenance schedules, spare parts criticality registers, and condition monitoring protocols." },
        { name: "Kobetsu Kaizen (Focused Improvement) Taskforce Setup", desc: "Structuring cross-functional engineering squads to eradicate chronic speed losses and micro-stoppages." }
      ],
      deliverables: [
        "Plant OEE Measurement Architecture & Real-Time Tracking Dashboards",
        "Autonomous Maintenance Step 1–Step 7 Standards & Tagging Manual",
        "Equipment Criticality Matrix & Preventative Maintenance Master Schedules",
        "6 Big Losses Reduction Strategy & Kobetsu Kaizen Project Charters"
      ],
      process: [
        { step: "01", name: "Criticality Ranking & OEE Audit", desc: "Ranking all equipment (A/B/C) and establishing baseline OEE measurement." },
        { step: "02", name: "Pilot Machine Reliability Sprint", desc: "Executing complete initial cleaning, abnormality tagging, and restorative maintenance." },
        { step: "03", name: "PM & Lubrication Standard Architecture", desc: "Designing visual standards, inspection checklists, and lube routes." },
        { step: "04", name: "Plant-Wide TPM Scaling", desc: "Cascading autonomous maintenance across all lines with monthly steering committee governance." }
      ],
      benefits: [
        "Elimination of catastrophic machine failures on high-value CNC and forging assets",
        "Measurable boost in manufacturing capacity without additional capital expenditure",
        "Clear division of responsibility between operators (JH) and maintenance technicians (PM)",
        "Extended useful machinery lifespan saving millions in premature capital replacements"
      ],
      ctaText: "Request TPM Consulting",
      ctaService: "Total Productive Maintenance — Strategic Consulting"
    },
    implementation: {
      title: "Total Productive Maintenance (TPM) — Turnkey Asset Reliability Execution",
      intro: "Boots-on-the-ground factory implementation converting reactive maintenance into proactive, operator-engaged reliability.",
      desc: "Our reliability engineers work on the factory floor alongside machine operators and maintenance personnel. We physically execute initial machine cleaning, uncover hundreds of latent defects, build lubrication standard sheets, and institute daily autonomous maintenance routines.",
      phases: [
        { phase: "Phase 1", name: "Machine Criticality & Baseline OEE Logging", duration: "Weeks 1–2", desc: "Classifying plant equipment and deploying automated/manual hourly OEE tracking logs." },
        { phase: "Phase 2", name: "Pilot Machine Deep Clean & Abnormality Tagging", duration: "Weeks 3–4", desc: "Leading operators and mechanics through deep cleaning, placing white and red tags, and repairing defects." },
        { phase: "Phase 3", name: "Cleaning & Lubrication Standard Sheets", duration: "Weeks 5–6", desc: "Developing one-point lessons (OPLs), color-coded lubrication points, and daily inspection routes." },
        { phase: "Phase 4", name: "Kobetsu Kaizen & 6 Big Losses Blitz", duration: "Weeks 7–9", desc: "Eliminating minor stops, speed throttling, and startup reject spikes on critical bottleneck assets." },
        { phase: "Phase 5", name: "Plant-Wide Rollout & JIPM Audit Readiness", duration: "Weeks 10–16", desc: "Scaling autonomous maintenance across remaining production lines and training internal pillar heads." }
      ],
      milestones: [
        "Pilot Equipment Baseline OEE Measured and Documented",
        "100% Abnormality Tags Cleared on Target Machine Lines",
        "Operator Autonomous Maintenance (JH) Routines Active on All Shifts",
        "Zero Unplanned Breakdowns Sustained for 90 Days on Key Bottlenecks"
      ],
      process: [
        { step: "01", name: "Pilot Selection & Deep Clean", desc: "Selecting a critical bottleneck machine and conducting initial restorative deep cleaning." },
        { step: "02", name: "Tag Resolution & Countermeasures", desc: "Eliminating hard-to-access areas and sources of contamination." },
        { step: "03", name: "Provisional Standards Creation", desc: "Formulating daily operator cleaning, lubrication, and inspection standard operating times." },
        { step: "04", name: "Plant-Wide Cascade", desc: "Replicating validated reliability templates across all production cells." }
      ],
      benefits: [
        "Direct jump in machine availability and overall plant production volume",
        "Elimination of chronic micro-stops that frustrate operators and suppress output",
        "Pride of equipment ownership reflected in pristine machine aesthetics and zero leaks",
        "Turnkey rollout with full hands-on coaching of your maintenance and operator crews"
      ],
      ctaText: "Deploy TPM Implementation",
      ctaService: "Total Productive Maintenance — Turnkey Implementation"
    },
    auditing: {
      title: "Total Productive Maintenance (TPM) — JIPM Maturity Auditing & OEE Verification",
      intro: "Independent reliability diagnostics, JIPM pillar maturity scoring, and OEE integrity verification.",
      desc: "Our certified reliability auditors evaluate equipment physical conditions, maintenance log veracity, autonomous maintenance compliance, and OEE calculation integrity across manufacturing plants.",
      auditTypes: [
        { name: "TPM Maturity Diagnostic Audit (JIPM-Aligned)", duration: "2 Days", desc: "Comprehensive evaluation across all 8 TPM pillars, scoring plant maturity against global JIPM benchmarks." },
        { name: "Autonomous Maintenance (JH) Step Certification Audit", duration: "1 Day", desc: "Evaluating operator competence, tag closure rates, and machine cleanliness before step advancement." },
        { name: "OEE Calculation & Loss Tree Veracity Audit", duration: "1 Day", desc: "Auditing downtime classification records to eliminate hidden loss reporting errors and data tampering." },
        { name: "Preventative & Predictive Maintenance (PM) Compliance Audit", duration: "1–2 Days", desc: "Verifying PM schedule adherence, vibration/oil analysis routes, and spare parts inventory accuracy." }
      ],
      checklists: [
        "Machine Condition: Absence of Oil/Coolant Leaks, Clean Guards, Proper Fastener Tightness",
        "Autonomous Maintenance: JH Step Checklists Displayed, Filled & Signed Daily",
        "Lubrication Control: Correct Lubricant Grade Used, Clean Dispensers & Labeled Grease Points",
        "OEE Veracity: Logged Downtime Corroborates with Production Counts and Scrap Tickets",
        "Safety Interlocks: Emergency Stops Tested, Light Curtains Functioning & Interlocks Intact"
      ],
      process: [
        { step: "01", name: "Reliability Data Analysis", desc: "Reviewing 12 months of breakdown history, MTBF/MTTR trends, and PM work order completion rates." },
        { step: "02", name: "Gemba Machine Inspections", desc: "Physical condition and cleanliness inspection of 20+ randomly sampled plant machines." },
        { step: "03", name: "Operator Competency Interviews", desc: "Interviewing machine operators on their JH checklists, abnormal sound identification, and tag procedures." },
        { step: "04", name: "Audit Report & Radar Chart Delivery", desc: "Delivering executive scoring, loss classification heat maps, and prioritized reliability action items." }
      ],
      benefits: [
        "Unvarnished diagnostic appraisal of true machine health and maintenance efficiency",
        "Discovery of latent equipment failure risks before catastrophic catastrophic breakdowns occur",
        "Validated OEE metrics trusted by corporate leadership and institutional investors",
        "Formal Reva Phoenix Asset Reliability & TPM Excellence Certificate"
      ],
      ctaText: "Schedule TPM Audit",
      ctaService: "Total Productive Maintenance — Auditing & Assessment"
    }
  },

  "tqm": {
    training: {
      title: "Total Quality Management (TQM) — Specialized Industrial Training Programs",
      intro: "Deming and JUSE-based quality leadership, grassroots problem-solving, and policy deployment masterclasses.",
      desc: "Designed for executive directors, department heads, quality engineers, and QC Circle leaders. Courses cover Deming 14 points, 7 Basic QC Tools, PDCA cycles, Quality Control Circle facilitation, Hoshin Kanri, and Cost of Poor Quality (COPQ) reduction.",
      programs: [
        { name: "TQM Executive Leadership Briefing", duration: "1 Day", audience: "C-Suite & Managing Directors", desc: "Strategic alignment around customer satisfaction, culture of quality, and Deming leadership principles." },
        { name: "7 QC Tools & Grassroots Problem-Solving Workshop", duration: "3 Days", audience: "Engineers, Supervisors & Technicians", desc: "Hands-on Pareto, Ishikawa, histogram, scatter, and control chart data analysis on live factory defects." },
        { name: "Quality Control (QC) Circle Facilitator Masterclass", duration: "2 Days", audience: "Section Leads & QC Circle Facilitators", desc: "Circle formation, brainstorming rules, project presentation preparation, and team dynamics." },
        { name: "Policy Deployment (Hoshin Kanri) Masterclass", duration: "2 Days", audience: "Department Heads & Plant Managers", desc: "Cascading corporate vision, policy deployment matrices, and annual breakthrough target deployment." }
      ],
      topics: [
        "Deming 14 Points for Management & Plan-Do-Check-Act (PDCA) Institutionalization",
        "The 7 Basic QC Tools: Pareto, Fishbone, Check Sheets, Histograms, Scatter & Control Charts",
        "Quality Control Circle (QCC) Structure, Problem Solving & National Convention Preparation",
        "Hoshin Kanri (Policy Deployment) & Cross-Functional Quality Management",
        "Cost of Poor Quality (COPQ) Quantification: Internal, External, Appraisal & Prevention Costs",
        "Voice of the Customer (VOC) & Quality Function Deployment (QFD) House of Quality"
      ],
      process: [
        { step: "01", name: "Quality Mindset Diagnostic", desc: "Evaluating current quality awareness and problem-solving practices across departments." },
        { step: "02", name: "Interactive Tool & Case Study Delivery", desc: "Practical workshops using real plant defect datasets and Deming management paradigms." },
        { step: "03", name: "Simulated QC Circle Project Sprint", desc: "Forming small teams to solve live manufacturing case studies using the 7 QC tools." },
        { step: "04", name: "Certification & Project Presentation", desc: "Project evaluations and awarding of accredited TQM / QC Circle Leader credentials." }
      ],
      benefits: [
        "Eradication of departmental silos and creation of a shared culture of quality excellence",
        "Substantial reduction in scrap, rework, and customer warranty claim expenditures",
        "Empowerment of frontline workforce to independently solve daily operational defects",
        "Elevation of customer satisfaction scores and qualification for prestigious quality awards"
      ],
      ctaText: "Enquire for TQM Training",
      ctaService: "Total Quality Management — Industrial Training"
    },
    consulting: {
      title: "Total Quality Management (TQM) — Strategic Quality Governance Consulting",
      intro: "Senior advisory delivering organizational quality maturity assessment, Hoshin Kanri policy deployment, and COPQ accounting.",
      desc: "Reva Phoenix consultants guide industrial leadership in establishing company-wide quality governance. We architect Quality Control Circle frameworks, establish Hoshin Kanri policy deployment cascades, quantify Cost of Poor Quality, and embed Deming continuous improvement habits.",
      services: [
        { name: "TQM Cultural Maturity & COPQ Diagnostic", desc: "Comprehensive assessment of leadership quality philosophy, employee engagement, and calculating true Cost of Poor Quality." },
        { name: "Hoshin Kanri Strategic Cascade & X-Matrix Formulation", desc: "Aligning executive breakthrough goals with annual departmental targets and resource allocations." },
        { name: "QC Circle Framework Architecture & Facilitation", desc: "Designing charter rules, recognition systems, scoring rubrics, and mentoring the first cohort of QC Circles." },
        { name: "Customer-Centric VOC & QFD Integration", desc: "Deploying Quality Function Deployment (QFD) matrices linking customer voice directly to technical design tolerances." }
      ],
      deliverables: [
        "TQM Organizational Maturity Diagnostic Report & Strategy Roadmap",
        "Corporate & Departmental Hoshin Kanri X-Matrices",
        "Quality Control Circle (QCC) Standard Operating Manual & Toolkits",
        "Cost of Poor Quality (COPQ) Accounting Model & Financial Tracking Dashboard"
      ],
      process: [
        { step: "01", name: "Executive Quality Alignment", desc: "Workshops with leadership to define strategic quality vision and breakthrough priorities." },
        { step: "02", name: "Hoshin Kanri Cascade", desc: "Drafting X-matrices cascading corporate goals to plant departments." },
        { step: "03", name: "QC Circle Launch & Coaching", desc: "Forming pilot QC circles on production lines with weekly coaching." },
        { step: "04", name: "Governance Institutionalization", desc: "Setting up quarterly executive reviews and annual plant-wide quality conventions." }
      ],
      benefits: [
        "Clear alignment of corporate executive vision with daily frontline operational priorities",
        "Measurable reduction in Cost of Poor Quality (COPQ) improving corporate profitability",
        "Cross-functional synergy breaking down communication barriers between sales, design, and production",
        "Preparation for world-class quality recognition (Deming Prize / Baldrige Award criteria)"
      ],
      ctaText: "Request TQM Consulting",
      ctaService: "Total Quality Management — Strategic Consulting"
    },
    implementation: {
      title: "Total Quality Management (TQM) — Turnkey Company-Wide Execution",
      intro: "Hands-on rollout embedding continuous improvement, QC Circles, and quality governance across all operational levels.",
      desc: "Our TQM specialists work directly inside your facilities to launch self-sustaining quality circles, conduct shop floor problem-solving sprints, deploy Hoshin Kanri tracking dashboards, and organize plant-wide continuous improvement showcases.",
      phases: [
        { phase: "Phase 1", name: "Leadership Steering Committee & TQM Charter", duration: "Weeks 1–2", desc: "Forming the executive TQM steering committee and publishing the corporate quality manifesto." },
        { phase: "Phase 2", name: "Plant-Wide 7 QC Tools Training & Circle Launch", duration: "Weeks 3–6", desc: "Training 100+ operators and supervisors, establishing 10+ active Quality Control Circles." },
        { phase: "Phase 3", name: "Hoshin Kanri Cascade & Monthly Reviews", duration: "Weeks 7–10", desc: "Finalizing departmental X-matrices, setting up visual management boards in all offices and bays." },
        { phase: "Phase 4", name: "First Cohort QC Circle Project Completion", duration: "Weeks 11–14", desc: "Guiding circles through PDCA root-cause elimination on chronic defects with financial verification." },
        { phase: "Phase 5", name: "Annual Quality Convention & Sustenance Handover", duration: "Weeks 15–18", desc: "Organizing an internal quality convention, presenting awards, and handing over self-sustaining governance." }
      ],
      milestones: [
        "TQM Executive Steering Committee Established and Charter Published",
        "100% Target Supervisors and Engineers Trained in 7 Basic QC Tools",
        "Initial Cohort of 10+ QC Circles Completes Problem-Solving Projects",
        "First Annual Reva-Facilitated TQM Convention Successfully Executed"
      ],
      process: [
        { step: "01", name: "Steering Committee Setup", desc: "Forming the governance team and publishing clear project charters." },
        { step: "02", name: "Mass Training & Circle Mobilization", desc: "Training teams and launching frontline Quality Control Circles." },
        { step: "03", name: "Project Coaching & Facilitation", desc: "Weekly Gemba mentoring ensuring rigorous statistical tool application." },
        { step: "04", name: "Convention & Recognition", desc: "Celebrating successes, rewarding winning circles, and institutionalizing habits." }
      ],
      benefits: [
        "Permanent cultural shift from blame-oriented firefighting to data-driven problem solving",
        "Immediate financial return from the first wave of completed QC Circle defect reduction projects",
        "Enhanced frontline morale, employee engagement, and long-term retention of technical talent",
        "Turnkey execution handled by experienced advisors with minimal management overhead"
      ],
      ctaText: "Deploy TQM Implementation",
      ctaService: "Total Quality Management — Turnkey Implementation"
    },
    auditing: {
      title: "Total Quality Management (TQM) — Organizational Excellence & Maturity Auditing",
      intro: "Independent TQM maturity diagnostics, QC Circle effectiveness audits, and quality culture assessments.",
      desc: "Our senior quality auditors evaluate organizational adherence to Deming and TQM principles, reviewing QC circle rigor, policy deployment alignment, COPQ tracking accuracy, and customer satisfaction metrics.",
      auditTypes: [
        { name: "TQM Organizational Maturity Diagnostic", duration: "2 Days", desc: "Evaluating plant-wide quality culture against Deming Application Prize and EFQM criteria." },
        { name: "QC Circle Project Rigor & Tool Application Audit", duration: "1 Day", desc: "Auditing circle dossiers to ensure proper mathematical use of Pareto, Ishikawa, and control charts." },
        { name: "Hoshin Kanri Goal Alignment & Cascade Audit", duration: "1 Day", desc: "Verifying whether departmental KPIs accurately reflect executive breakthrough priorities." },
        { name: "Cost of Poor Quality (COPQ) Integrity Audit", duration: "1 Day", desc: "Auditing scrap accounting, rework tracking, and warranty claim ledgers against financial records." }
      ],
      checklists: [
        "Leadership Commitment: Executive Participation in Gemba Walks and Quality Reviews",
        "Employee Engagement: Percentage of Workforce Actively Participating in QC Circles",
        "Tool Application: Accurate 7 QC Tools Data Construction without Guesswork",
        "Hoshin Kanri: Visual Metrics Boards Maintained and Updated Monthly across Departments",
        "Customer VOC: Direct Integration of Customer Feedback into Corrective Actions"
      ],
      process: [
        { step: "01", name: "Documentation & Metric Review", desc: "Reviewing Hoshin Kanri X-matrices, QC circle minutes, and scrap financial logs." },
        { step: "02", name: "Cross-Functional Interviews", desc: "Interviewing directors, engineers, supervisors, and shop floor operators." },
        { step: "03", name: "Live Circle Project Review", desc: "Attending QC circle presentations and evaluating statistical rigor." },
        { step: "04", name: "Maturity Scoring & Roadmap Delivery", desc: "Delivering quantitative maturity spider charts and strategic recommendations." }
      ],
      benefits: [
        "Objective benchmark of where your organization stands on the global quality maturity curve",
        "Identification of cultural blind spots and neglected quality opportunities",
        "Verification that corporate quality investments are generating verifiable financial returns",
        "Official Reva Phoenix Total Quality Management Excellence Certificate"
      ],
      ctaText: "Schedule TQM Audit",
      ctaService: "Total Quality Management — Auditing & Assessment"
    }
  },

  "lean": {
    training: {
      title: "Lean Manufacturing & Value Stream Mapping — Specialized Industrial Training",
      intro: "Toyota Production System (TPS) masterclasses delivering waste elimination, Value Stream Mapping (VSM), SMED, and Kanban pull scheduling.",
      desc: "Designed for industrial engineers, plant managers, production supervisors, and logistics planners. Courses cover the 7+1 wastes (Muda), Current & Future State VSM, Takt time calculations, line balancing, SMED quick changeover, and cellular workflow design.",
      programs: [
        { name: "Value Stream Mapping (VSM) Masterclass", duration: "2 Days", audience: "Industrial & Manufacturing Engineers", desc: "Hands-on Current State mapping, bottleneck identification, and Future State flow engineering on live production lines." },
        { name: "Lean Practitioner & Waste Elimination Workshop", duration: "3 Days", audience: "Operations Leads & Supervisors", desc: "Deep dive into the 7+1 wastes (Muda), 5S integration, Poka-Yoke mistake-proofing, and daily Kaizen stand-ups." },
        { name: "Quick Changeover (SMED) & Cellular Design Clinic", duration: "2 Days", audience: "Tooling & Machine Setup Specialists", desc: "Converting internal to external changeover elements, video setup analysis, and U-shaped cell balancing." },
        { name: "Kanban & Pull Production Scheduling Course", duration: "2 Days", audience: "Production Planners & Supply Chain Leads", desc: "Kanban sizing formulas, supermarket buffer design, pull signals, and inventory optimization." }
      ],
      topics: [
        "The 7+1 Wastes of Manufacturing: Overproduction, Waiting, Transport, Over-processing, Inventory, Motion, Defects & Unused Talent",
        "Value Stream Mapping (VSM): Takt Time, Cycle Time, Changeover Time, Pack Size & Lead Time Ladder",
        "Single-Minute Exchange of Die (SMED): 4-Step Methodology for Sub-10-Minute Machine Setup",
        "Cellular Manufacturing Layouts: U-Shaped Flow, Multi-Skilled Operator Work Balancing & Ergonomics",
        "Kanban Pull Systems: Sizing Supermarkets, Safety Buffers, Two-Bin Systems & Visual Replenishment",
        "Poka-Yoke Mistake-Proofing: Mechanical Guides, Optical Sensors & Limit Switches for Zero Defects"
      ],
      process: [
        { step: "01", name: "Shop Floor Flow Diagnostic", desc: "Evaluating current order-to-delivery lead times, WIP buffers, and changeover bottlenecks." },
        { step: "02", name: "Live VSM Gemba Workshop", desc: "Walking the actual production flow, measuring processing times, and drawing the Current State map." },
        { step: "03", name: "Hands-on SMED / Kaizen Sprint", desc: "Videotaping an actual machine changeover, categorizing waste, and prototyping fast-clamping fixtures." },
        { step: "04", name: "Lean Practitioner Certification", desc: "Examination and awarding of accredited Reva Phoenix Lean Practitioner credentials." }
      ],
      benefits: [
        "40%–60% reduction in total manufacturing order-to-delivery lead times",
        "30%–50% decrease in Work-in-Progress (WIP) and finished goods warehouse inventory",
        "Up to 25% reclaim of usable factory floor space through cellular redesign",
        "Significant agility to satisfy high-mix, low-volume customer orders profitably"
      ],
      ctaText: "Enquire for Lean Training",
      ctaService: "Lean Manufacturing — Industrial Training"
    },
    consulting: {
      title: "Lean Manufacturing & Value Stream Mapping — Strategic Operations Consulting",
      intro: "Senior Lean Sensei advisory delivering Value Stream Mapping, factory flow re-engineering, and working capital optimization.",
      desc: "Reva Phoenix consultants transform sluggish batch-and-queue factories into rapid continuous flow operations. We map end-to-end value streams, engineer Future State continuous flow blueprints, slash setup times with SMED, and implement demand-driven pull mechanisms.",
      services: [
        { name: "Value Stream Mapping Diagnostic (Current & Future State)", desc: "Exhaustive Gemba mapping of material and information flow, isolating hidden bottlenecks and trapped working capital." },
        { name: "Cellular Layout & Line Balancing Engineering", desc: "Reconfiguring scattered machine layouts into U-shaped manufacturing cells balanced against customer Takt time." },
        { name: "SMED Rapid Changeover Redesign Advisory", desc: "Engineering rapid-lock tooling, pre-heating stations, and standardized setup toolkits to cut changeovers by >50%." },
        { name: "Pull System & Supermarket Inventory Design", desc: "Establishing customer-demand pull triggers, Kanban sizing algorithms, and raw material supermarket buffers." }
      ],
      deliverables: [
        "Current State & Future State Value Stream Mapping (VSM) Dossiers",
        "Line Balancing Charts & Operator Work Balance Diagrams",
        "SMED Setup Reduction Video Analysis & Rapid Changeover Matrix",
        "Kanban Sizing Calculations & Supermarket Buffer Inventory Design"
      ],
      process: [
        { step: "01", name: "Value Stream Scoping", desc: "Selecting the highest-volume / highest-margin product family for end-to-end optimization." },
        { step: "02", name: "Current State VSM Gemba Sprint", desc: "Gathering live operational data and mapping current bottlenecks and lead time ladders." },
        { step: "03", name: "Future State Flow Engineering", desc: "Designing continuous flow cells, pull supermarkets, and Takt-paced scheduling." },
        { step: "04", name: "Implementation Kaizen Execution", desc: "Facilitating 3-to-5 day Kaizen events to implement physical changes on the floor." }
      ],
      benefits: [
        "Liberation of trapped working capital previously tied up in excess warehouse and shop floor WIP",
        "Dramatic improvement in On-Time Delivery (OTD) rates exceeding 98%+",
        "Significant factory footprint consolidation enabling business expansion without new real estate",
        "Elimination of costly expediting fees, emergency freight, and excessive production overtime"
      ],
      ctaText: "Request Lean Consulting",
      ctaService: "Lean Manufacturing — Strategic Consulting"
    },
    implementation: {
      title: "Lean Manufacturing & Value Stream Mapping — Turnkey Shop Floor Execution",
      intro: "Turnkey factory flow transformation physically restructuring manufacturing bays into synchronized continuous flow cells.",
      desc: "Our industrial engineers work on the floor alongside your production teams. We physically relocate machinery into U-cells, fabricate shadow boards, install Kanban bins, standardize setup changeovers, and implement daily visual management boards.",
      phases: [
        { phase: "Phase 1", name: "Current State Mapping & Bottleneck Sizing", duration: "Weeks 1–2", desc: "Mapping the value stream on the gemba and calculating Takt time and inventory buffers." },
        { phase: "Phase 2", name: "Future State Engineering & Kaizen Charters", duration: "Weeks 3–4", desc: "Designing new cell layouts and obtaining management approval for machine relocations." },
        { phase: "Phase 3", name: "SMED Changeover Blitz on Bottlenecks", duration: "Weeks 5–6", desc: "Executing setup reduction on target machines, slashing changeovers from hours to minutes." },
        { phase: "Phase 4", name: "Cellular Layout Relocation & Commissioning", duration: "Weeks 7–10", desc: "Physically re-laying machines into U-cells, balancing operator cycles, and connecting lines." },
        { phase: "Phase 5", name: "Kanban Pull Rollout & Sustenance Stand-ups", duration: "Weeks 11–14", desc: "Launching supermarket bins, visual pull cards, and daily 10-minute stand-up gemba rituals." }
      ],
      milestones: [
        "Future State VSM Approved by Operations Leadership",
        "Bottleneck Machine Setup Time Reduced by > 50% via SMED",
        "U-Shaped Continuous Flow Cell Commissioned and Operating",
        "Work-in-Progress (WIP) Slashed by > 30% across the Value Stream"
      ],
      process: [
        { step: "01", name: "Value Stream Selection & Kickoff", desc: "Selecting target product family and aligning operations leadership." },
        { step: "02", name: "Kaizen Events Execution", desc: "Hands-on rapid improvement workshops executed on the live shop floor." },
        { step: "03", name: "Physical Layout & Tooling Optimization", desc: "Relocating equipment, installing gravity racks, and setting up Kanban supermarkets." },
        { step: "04", name: "Operator Training & Standardization", desc: "Training multi-skilled operators on standardized work combinations." }
      ],
      benefits: [
        "Turnkey factory transformation delivered on-time with zero disruption to active customer orders",
        "Immediate capacity boost and cycle time reduction visible from the first week of cell commissioning",
        "Flawless product flow minimizing handling damages, scratches, and lost parts",
        "High-performance manufacturing showcase ready for customer qualification audits"
      ],
      ctaText: "Deploy Lean Implementation",
      ctaService: "Lean Manufacturing — Turnkey Implementation"
    },
    auditing: {
      title: "Lean Manufacturing & Value Stream Mapping — Flow & Waste Maturity Auditing",
      intro: "Independent Lean maturity diagnostics, flow efficiency evaluations, and waste elimination assessments.",
      desc: "Our master Lean auditors evaluate shop floor material flow, inventory turns, changeover adherence, and waste presence across manufacturing plants, providing quantitative maturity scores and targeted improvement roadmaps.",
      auditTypes: [
        { name: "Lean Maturity & Waste Diagnostic Audit", duration: "2 Days", desc: "Plant-wide evaluation of flow efficiency, 7 wastes presence, and visual management maturity." },
        { name: "Value Stream Flow & Takt Time Alignment Audit", duration: "1 Day", desc: "Auditing line balance charts against live operator cycle times to detect bottleneck drift." },
        { name: "SMED Rapid Changeover Compliance Audit", duration: "1 Day", desc: "Auditing actual setup execution against standardized SMED sheets to ensure setup times have not crept up." },
        { name: "Kanban & Pull System Discipline Audit", duration: "1 Day", desc: "Verifying buffer levels, supermarket card discipline, and absence of unauthorized batch pushing." }
      ],
      checklists: [
        "Flow Efficiency: Ratio of Value-Adding Processing Time to Total Manufacturing Lead Time",
        "WIP Control: Absence of Unofficial WIP Piles between Workstations and Clean Buffers",
        "SMED Adherence: Standardized Setup Toolkits Present, External Tasks Done Pre-Stoppage",
        "Cellular Balance: Operators Adhering to Standardized Work Combination Sheets",
        "Visual Management: Production Tracking Boards Updated Hourly with Action Items Noted"
      ],
      process: [
        { step: "01", name: "Lead Time & Inventory Data Review", desc: "Analyzing ERP lead time trends, inventory turn metrics, and OTD records." },
        { step: "02", name: "Gemba Flow Walkthrough", desc: "Walking the value stream backwards from shipping dock to raw material receiving." },
        { step: "03", name: "Time Studies & Workstation Observations", desc: "Conducting cycle time audits and observing changeovers on active equipment." },
        { step: "04", name: "Maturity Scoring & Executive Debrief", desc: "Presenting findings with quantitative spider charts and high-ROI Kaizen recommendations." }
      ],
      benefits: [
        "Unbiased measurement of true manufacturing flow efficiency vs theoretical ERP targets",
        "Detection of hidden bottlenecks and inventory accumulation before order delays occur",
        "Validation of return on investment from past Lean events and equipment relocations",
        "Official Reva Phoenix Lean Manufacturing Excellence Certification"
      ],
      ctaText: "Schedule Lean Audit",
      ctaService: "Lean Manufacturing — Auditing & Assessment"
    }
  },

  "six-sigma": {
    training: {
      title: "Six Sigma (DMAIC) — Specialized Industrial Training Programs",
      intro: "Rigorous data-driven DMAIC certification delivered by certified Master Black Belts with deep manufacturing engineering authority.",
      desc: "Designed for quality engineers, process specialists, plant managers, and R&D leads seeking mathematical mastery over defect elimination. Courses cover the 5 DMAIC phases, SIPOC, Gage R&R, Cpk process capability, hypothesis testing, ANOVA, DOE, and Statistical Process Control (SPC).",
      programs: [
        { name: "Six Sigma Yellow Belt Fundamentals", duration: "1 Day", audience: "Shop Floor Supervisors & Technicians", desc: "Foundational awareness of DMAIC logic, basic data gathering, and variance elimination." },
        { name: "Six Sigma Green Belt Certification", duration: "5 Days", audience: "Quality & Manufacturing Engineers", desc: "Comprehensive training in statistical hypothesis testing, Gage R&R, ANOVA, regression, and leading projects." },
        { name: "Six Sigma Black Belt Advanced Analytics", duration: "10 Days (2 Weeks)", audience: "Senior Engineers & Technical Leads", desc: "Advanced Full/Fractional Factorial DOE, non-normal capability analysis, multi-vari analytics, and mentoring." },
        { name: "Design of Experiments (DOE) & SPC Masterclass", duration: "3 Days", audience: "R&D Specialists & Process Engineers", desc: "Mathematical parameter optimization, response surface methodology, and live control chart design." }
      ],
      topics: [
        "The DMAIC Roadmap: Define, Measure, Analyze, Improve, Control Phase Requirements",
        "Measurement System Analysis (MSA): Gage R&R ANOVA Method, Linearity, Bias & Stability",
        "Process Capability Analytics: Calculating Cp, Cpk, Pp, Ppk and Z-Scores for Normal & Non-Normal Data",
        "Hypothesis Testing: 1-Sample/2-Sample t-Tests, Paired t-Tests, ANOVA, Chi-Square & Mood's Median",
        "Design of Experiments (DOE): Full Factorial, Fractional Factorial, Response Surface & Taguchi Methods",
        "Statistical Process Control (SPC): X-bar & R Charts, I-MR Charts, p-Charts, u-Charts & Western Electric Rules"
      ],
      process: [
        { step: "01", name: "Project Scoping & Charter Validation", desc: "Selecting a live factory defect problem with confirmed management financial backing." },
        { step: "02", name: "Intensive Classroom & Software Training", desc: "In-depth statistical instruction integrating Minitab / Excel data analysis on plant datasets." },
        { step: "03", name: "Gemba Project Execution & Mentoring", desc: "Applying DMAIC steps to the live project with bi-weekly Master Black Belt coaching." },
        { step: "04", name: "Financial Verification & Credentialing", desc: "Project defense, verified financial savings sign-off by finance, and belt certification." }
      ],
      benefits: [
        "Process defect rates driven down toward mathematical Six Sigma levels (<3.4 DPMO)",
        "Verified, audited hard financial savings delivered to the company's bottom-line P&L",
        "Internal engineering team equipped with rigorous scientific problem-solving capability",
        "Certified Green / Black Belt credentials recognized by global OEMs and registrars"
      ],
      ctaText: "Enquire for Six Sigma Training",
      ctaService: "Six Sigma — Industrial Training"
    },
    consulting: {
      title: "Six Sigma (DMAIC) — Strategic Statistical Engineering Consulting",
      intro: "Master Black Belt advisory delivering high-impact defect eradication, DOE parameter optimization, and statistical governance.",
      desc: "Reva Phoenix Master Black Belts partner with technical leadership to tackle chronic, high-cost manufacturing quality problems that have resisted conventional troubleshooting. We formulate Project Charters, validate measurement systems, conduct statistical multi-vari analyses, and optimize operating windows through DOE.",
      services: [
        { name: "Plant-Wide Scrap & Defect Opportunity Diagnostic", desc: "Analyzing 12–24 months of scrap, rework, and warranty data to identify high-ROI candidate Six Sigma projects." },
        { name: "Six Sigma Project Portfolio & Financial Validation", desc: "Structuring rigorous Project Charters with validated problem statements, CTQ parameters, and financial hurdles." },
        { name: "Master Black Belt Project Mentoring & Co-Execution", desc: "Serving as external technical leads guiding internal engineering teams through complex statistical milestones." },
        { name: "Advanced Design of Experiments (DOE) Formulation", desc: "Designing multi-factor screening and optimization experiments on live CNC, welding, or molding operations." }
      ],
      deliverables: [
        "High-Impact Six Sigma Project Charter Portfolio & ROI Tracking Model",
        "Measurement System Analysis (MSA / Gage R&R) Verification Dossiers",
        "Full Statistical Modeling, Hypothesis Testing & DOE Optimization Reports",
        "Process Control Plans (PCP) & Live Statistical Process Control (SPC) Architecture"
      ],
      process: [
        { step: "01", name: "Scrap Financial Mining", desc: "Analyzing financial ledgers to locate chronic variance opportunities (> $50K annual loss)." },
        { step: "02", name: "Charter Formulation & MSA", desc: "Validating measurement system reliability before drawing conclusions." },
        { step: "03", name: "Statistical Root Cause Isolation", desc: "Isolating critical inputs (vital X's) through multi-vari and hypothesis testing." },
        { step: "04", name: "DOE Optimization & Control Institutionalization", desc: "Setting optimal process parameters and locking gains with automated SPC control charts." }
      ],
      benefits: [
        "Definitive scientific resolution of chronic manufacturing defects previously blamed on operator error",
        "Direct bottom-line savings typically yielding 5x–10x return on consulting investment",
        "Repeatable manufacturing processes operating at elevated capability (Cpk > 1.67)",
        "Deep capability transfer leaving your engineering team proficient in data-driven methodologies"
      ],
      ctaText: "Request Six Sigma Consulting",
      ctaService: "Six Sigma — Strategic Consulting"
    },
    implementation: {
      title: "Six Sigma (DMAIC) — Turnkey High-Impact Project Execution",
      intro: "Hands-on Master Black Belt deployment executing critical DMAIC projects to slash scrap, boost yield, and lock in savings.",
      desc: "Our Master Black Belts take direct technical responsibility for executing high-stakes variance reduction projects. We gather data, run Gage R&R studies, execute DOE optimization trials on your production line, and build robust SPC control mechanisms.",
      phases: [
        { phase: "Phase 1", name: "Define: Charter & CTQ Alignment", duration: "Weeks 1–2", desc: "Finalizing problem statement, defining Critical-to-Quality metrics, and getting finance controller sign-off." },
        { phase: "Phase 2", name: "Measure: Gage R&R & Baseline Capability", duration: "Weeks 3–4", desc: "Executing 10-part 3-operator Gage R&R, establishing data collection plans, and calculating baseline Cpk." },
        { phase: "Phase 3", name: "Analyze: Hypothesis Testing & Root Cause", duration: "Weeks 5–8", desc: "Running multi-vari studies, regression, and ANOVA to mathematically prove root causes." },
        { phase: "Phase 4", name: "Improve: Design of Experiments & Pilot Runs", duration: "Weeks 9–12", desc: "Conducting factorial DOE trials, validating optimal parameter settings, and verifying defect drop." },
        { phase: "Phase 5", name: "Control: SPC Charts & Financial Sign-off", duration: "Weeks 13–16", desc: "Deploying live control charts, updating control plans and SOPs, and securing finance sign-off on hard savings." }
      ],
      milestones: [
        "DMAIC Project Charter Approved by Operations VP and Finance Controller",
        "Measurement System Qualified (<10% Gage R&R on Critical Dimensions)",
        "Vital X Root Causes Statistically Proven at 95% Confidence Level (p < 0.05)",
        "Cpk Boosted to > 1.67 and Hard Financial Cost Savings Formally Certified"
      ],
      process: [
        { step: "01", name: "Charter Validation & Gate 1 Tollgate", desc: "Scoping boundary conditions and obtaining executive sponsorship." },
        { step: "02", name: "Measurement Reliability Verification", desc: "Qualifying physical gages and optical sensors to ensure trusted data." },
        { step: "03", name: "Experimental Optimization", desc: "Running controlled factory floor trials to find optimal parameter recipes." },
        { step: "04", name: "Control Plan Institutionalization", desc: "Integrating automated SPC alarms and mistake-proofing into daily production." }
      ],
      benefits: [
        "Guaranteed financial ROI backed by formal finance controller audit verification",
        "Permanent elimination of costly scrap, machining defects, and component rework",
        "Elimination of product variability across shifts, operators, and raw material batches",
        "Turnkey delivery where Reva Master Black Belts bear technical accountability for project outcomes"
      ],
      ctaText: "Deploy Six Sigma Project",
      ctaService: "Six Sigma — Turnkey Implementation"
    },
    auditing: {
      title: "Six Sigma (DMAIC) — Statistical Process Capability & Tollgate Auditing",
      intro: "Independent process capability (Cpk) audits, DMAIC project tollgate verification, and SPC system assessments.",
      desc: "Our Master Black Belt auditors review plant measurement reliability, inspect statistical process control chart governance, verify DMAIC tollgate completion integrity, and audit reported project savings ledgers.",
      auditTypes: [
        { name: "Process Capability (Cp/Cpk) Compliance Audit", duration: "1–2 Days", desc: "Auditing critical machining and assembly dimensions against design tolerances to verify true Cpk capability." },
        { name: "Measurement System Analysis (Gage R&R) Veracity Audit", duration: "1 Day", desc: "Evaluating calibration procedures, inspector reproducibility, and gage resolution across quality labs." },
        { name: "DMAIC Project Tollgate Rigor Audit", duration: "1 Day", desc: "Auditing internal Green/Black Belt project dossiers against ASQ criteria before certification sign-off." },
        { name: "Statistical Process Control (SPC) Operational Audit", duration: "1 Day", desc: "Auditing shop floor control charts, out-of-control reaction plans, and operator tampering tendencies." }
      ],
      checklists: [
        "Measurement Reliability: Gage R&R < 10% for Critical Dimensions, Clean Calibration Records",
        "Normality & Sample Size: Proper Goodness-of-Fit Testing Conducted Before Calculating Cpk",
        "Root Cause Proof: Statistical Evidence (p-values, R-squared) Documented Without Flawed Assumptions",
        "SPC Governance: Control Limits Calculated from Natural Variation, Not Specification Limits",
        "Financial Savings Veracity: Hard Savings Corroborated by Plant Accounting Ledgers"
      ],
      process: [
        { step: "01", name: "Statistical Data Dossier Review", desc: "Reviewing raw inspection logs, Minitab worksheets, and project charter tollgate reports." },
        { step: "02", name: "Shop Floor Gage & Inspection Spot Checks", desc: "Witnessing live measurement runs and verifying gage resolution on the floor." },
        { step: "03", name: "SPC Chart Live Evaluation", desc: "Inspecting live production control charts for out-of-control run rules and reaction plans." },
        { step: "04", name: "Executive Audit Debrief", desc: "Presenting capability gap heat maps, risk registers, and corrective action items." }
      ],
      benefits: [
        "Guaranteed assurance that manufacturing processes meet critical customer Cpk tolerances (>1.67)",
        "Elimination of fraudulent or mathematically flawed internal Six Sigma project claims",
        "Audit-ready statistical dossiers supporting high-stakes aerospace and automotive audits",
        "Official Reva Phoenix Statistical Process Capability Excellence Certificate"
      ],
      ctaText: "Schedule Six Sigma Audit",
      ctaService: "Six Sigma — Auditing & Assessment"
    }
  },

  "supplier-dev": {
    training: {
      title: "Supplier Development & Quality Management — Specialized Training",
      intro: "Comprehensive supply chain quality masterclasses covering VDA 6.3 audits, PPAP Level 1–5, Global 8D, and supplier coaching.",
      desc: "Designed for procurement managers, supplier quality engineers (SQE), incoming quality leads, and supply chain directors. Courses cover ISO 9001 Clause 8.4, IATF 16949 supplier mandates, onsite technical capability audits, PPAP elements, and supplier performance scorecards.",
      programs: [
        { name: "Certified Supplier Quality Auditor (SQA) Course", duration: "3 Days", audience: "Supplier Quality Engineers & Auditors", desc: "VDA 6.3-aligned process auditing, technical capability verification, and non-conformance grading." },
        { name: "PPAP & APQP Supply Chain Masterclass", duration: "2 Days", audience: "Supply Chain & Procurement Leads", desc: "Deep dive into 18 PPAP elements, First Article Inspection (AS9102), and control plan verification." },
        { name: "Global 8D Root Cause Analysis for Suppliers", duration: "2 Days", audience: "SQEs & Vendor Quality Managers", desc: "Rigorous 8D problem-solving discipline for vendor defects and preventing recurrence." },
        { name: "Supplier Relationship Management (SRM) Masterclass", duration: "1 Day", audience: "Procurement Directors & Purchasing Heads", desc: "Strategic vendor rating, scorecard metrics, supplier risk mitigation, and commercial partnerships." }
      ],
      topics: [
        "ISO 9001 Clause 8.4 & IATF 16949 Supply Chain Quality Management Mandates",
        "VDA 6.3 Process Auditing Across Potential, Project Planning & Series Production",
        "Production Part Approval Process (PPAP): 18 Elements & Level 1–5 Submission Packages",
        "First Article Inspection (FAI) Verification: AS9102 & API Product Conformance",
        "Supplier Quality Improvement Plans (SQIP): Rapid Turnaround for Underperforming Vendors",
        "Subcontractor Special Process Surveillance: Heat Treatment (CQI-9), Plating & Welding"
      ],
      process: [
        { step: "01", name: "Supply Base Risk Stratification", desc: "Categorizing suppliers by critical part risk, failure history, and past audit scores." },
        { step: "02", name: "Interactive SQA Classroom Delivery", desc: "Comprehensive technical walkthrough of supplier audit standards and PPAP requirements." },
        { step: "03", name: "Simulated Supplier Onsite Audit Drill", desc: "Hands-on audit simulation reviewing actual supplier PPAP packages and defect reports." },
        { step: "04", name: "SQA Lead Auditor Certification", desc: "Examination and awarding of accredited Supplier Quality Auditor credentials." }
      ],
      benefits: [
        "Drastic reduction in incoming inspection reject rates and production line stoppages",
        "Internal supplier quality engineering team equipped to conduct rigorous audits",
        "Faster new product introduction (NPI) through streamlined supplier PPAP clearances",
        "Full compliance with stringent OEM automotive, aerospace, and energy client mandates"
      ],
      ctaText: "Enquire for Supplier QA Training",
      ctaService: "Supplier Development — Industrial Training"
    },
    consulting: {
      title: "Supplier Development & Quality Management — Strategic Supply Chain Consulting",
      intro: "Senior advisory delivering supplier risk assessments, customized audit protocols, and supplier turnaround programs (SQIP).",
      desc: "Reva Phoenix consultants serve as an external extension of your supplier quality department. We evaluate critical vendors, formulate customized audit checklists, manage high-risk supplier turnaround programs, and qualify special process subcontractors.",
      services: [
        { name: "Critical Vendor Risk Assessment & Diagnostic", desc: "Systematic evaluation of tier-1 and tier-2 suppliers covering financial, capacity, quality, and technical risks." },
        { name: "Customized Supplier Audit Protocols & Manuals", desc: "Developing tailored supplier audit checklists aligned with your specific engineering drawings and customer requirements." },
        { name: "Supplier Turnaround Programs (SQIP)", desc: "Deploying Reva engineers onsite at underperforming vendors to eradicate chronic defect root causes." },
        { name: "Special Process Subcontractor Qualification", desc: "Auditing and qualifying critical welding, heat treating, NDT, and surface coating subcontractors." }
      ],
      deliverables: [
        "Tailored Supplier Technical Capability Audit Manual & Scoring Matrix",
        "Vendor Performance Scorecard (PPM, On-Time Delivery, Responsiveness)",
        "Supplier 8D Root Cause Corrective Action Tracking Dossier",
        "Subcontractor Special Process Qualification & Surveillance Reports"
      ],
      process: [
        { step: "01", name: "Supply Base Segmentation", desc: "Profiling high-risk, high-spend, and single-source component suppliers." },
        { step: "02", name: "Audit Protocol Architecture", desc: "Formulating customized technical audit checklists and PPAP guidelines." },
        { step: "03", name: "Onsite Vendor Capability Auditing", desc: "Conducting audits across priority supplier manufacturing facilities." },
        { step: "04", name: "SQIP Remediation & Governance", desc: "Overseeing supplier corrective action plans and monthly scorecard reviews." }
      ],
      benefits: [
        "Mitigation of catastrophic supply chain disruptions and unexpected single-source failures",
        "Significant reduction in incoming receiving inspection costs and quarantine warehouse space",
        "Acceleration of supplier component readiness for critical new product launches",
        "Deep alignment of vendor capabilities with your long-term manufacturing growth roadmap"
      ],
      ctaText: "Request Supplier QA Consulting",
      ctaService: "Supplier Development — Strategic Consulting"
    },
    implementation: {
      title: "Supplier Development & Quality Management — Turnkey Onsite Vendor Execution",
      intro: "Boots-on-the-ground supplier turnaround: our engineers go onsite to supplier plants to fix quality, qualify PPAP, and stabilize supply.",
      desc: "When critical suppliers fail, line shutdowns follow. Reva Phoenix deploys experienced quality engineers directly into vendor manufacturing facilities. We diagnose root causes, supervise tooling repairs, institute mistake-proofing, and qualify PPAP packages.",
      phases: [
        { phase: "Phase 1", name: "Supplier Rapid Diagnostic & Containment", duration: "Weeks 1–2", desc: "Deploying onsite to contain defects, implement 100% sorting, and protect your assembly line." },
        { phase: "Phase 2", name: "Gemba Root Cause Isolation & 8D", duration: "Weeks 3–4", desc: "Leading vendor engineers through 5-Why and Ishikawa to uncover the true mechanical root cause." },
        { phase: "Phase 3", name: "Tooling, Fixture & Process Hardening", duration: "Weeks 5–7", desc: "Supervising tooling refurbishments, machine parameter optimization, and Poka-Yoke installations." },
        { phase: "Phase 4", name: "PPAP Level 3 Resubmission & Run-at-Rate", duration: "Weeks 8–10", desc: "Witnessing formal production run-at-rate trials and auditing complete PPAP 18 elements." },
        { phase: "Phase 5", name: "Scorecard Stabilization & Exit Handover", duration: "Weeks 11–12", desc: "Monitoring 30 consecutive defect-free shipments and handing over stable vendor management." }
      ],
      milestones: [
        "Immediate Defect Containment Active with Zero Defective Parts Escaping to Client Plant",
        "Root Cause Statistically Proven and Permanent Tooling Countermeasures Installed",
        "Formal PPAP Level 3 Submission Approved by Client Quality Engineering",
        "Supplier Incoming Reject Rate Driven from Thousands to < 50 PPM"
      ],
      process: [
        { step: "01", name: "Emergency Containment", desc: "Establishing certified sorting walls to halt defect flow immediately." },
        { step: "02", name: "Onsite Process Engineering", desc: "Debugging supplier tooling, machine settings, and handling methods." },
        { step: "03", name: "PPAP Run-at-Rate Witness", desc: "Overseeing full-speed production runs to prove quality and capacity." },
        { step: "04", name: "Governance & Scorecards", desc: "Instituting automated supplier KPI tracking and executive escalation rules." }
      ],
      benefits: [
        "Immediate rescue of critical supplier relationships without the delay and expense of re-sourcing",
        "Total elimination of incoming component defects causing assembly line downtime",
        "Permanent capability transfer ensuring the vendor never repeats the defect",
        "Turnkey execution handled completely by Reva specialists with daily status reporting"
      ],
      ctaText: "Deploy Supplier Turnaround",
      ctaService: "Supplier Development — Turnkey Implementation"
    },
    auditing: {
      title: "Supplier Development & Quality Management — Independent Supplier Auditing",
      intro: "Independent third-party supplier audits, VDA 6.3 process evaluations, and PPAP compliance verification.",
      desc: "Our accredited supplier quality auditors evaluate tier-1 and tier-2 vendor manufacturing facilities worldwide. We provide comprehensive technical capability audits, special process evaluations, and objective risk ratings.",
      auditTypes: [
        { name: "Supplier Initial Qualification Audit", duration: "1–2 Days", desc: "Evaluating potential new suppliers' technical capacity, QMS maturity, machine capability, and financial stability." },
        { name: "VDA 6.3 Process Audit for Manufacturing", duration: "2 Days", desc: "Comprehensive German automotive benchmark audit across project management, process realization, and customer care." },
        { name: "Subcontractor Special Process Audit (CQI / API)", duration: "1–2 Days", desc: "Technical evaluation of heat treatment (CQI-9), plating (CQI-11), coating (CQI-12), and welding." },
        { name: "PPAP & First Article Inspection (FAI) Verification Audit", duration: "1 Day", desc: "Witnessing production part approval runs, dimensional layouts, and material test certificate authenticity." }
      ],
      checklists: [
        "Raw Material Control: Mill Test Certificate Traceability (EN 10204 3.1/3.2) & PMI Verification",
        "Machine Capability: Documented Preventive Maintenance, Calibration & Cpk Studies > 1.67",
        "In-Process Quality: Inspection and Test Plans (ITP) Followed, First-Piece Approval Recorded",
        "Packaging & Preservation: Proper Rust Prevention, Bubble Wrapping & Barcode Labeling",
        "Sub-Tier Surveillance: Evidence of Vendor Performing Structured Audits on Their Own Suppliers"
      ],
      process: [
        { step: "01", name: "Pre-Audit Scope & Drawing Review", desc: "Reviewing critical engineering drawings, GD&T requirements, and historical PPM logs." },
        { step: "02", name: "Onsite Gemba Audit Walkthrough", desc: "Comprehensive physical audit of vendor warehouse, machine shop, quality lab, and packing." },
        { step: "03", name: "Non-Conformance & Risk Grading", desc: "Categorizing findings into Major, Minor, and Opportunity for Improvement with photos." },
        { step: "04", name: "Audit Dossier Delivery", desc: "Delivering objective audit reports, quantitative scores, and corrective action roadmaps." }
      ],
      benefits: [
        "Objective, third-party technical evaluation free from internal procurement bias",
        "Uncovering hidden quality, capacity, and counterfeit material risks before contract awards",
        "Global audit capability deploying local Reva auditors across major industrial manufacturing hubs",
        "Official Reva Phoenix Qualified Supplier Assessment Certificate"
      ],
      ctaText: "Schedule Supplier Audit",
      ctaService: "Supplier Development — Auditing & Assessment"
    }
  },

  "tpi": {
    training: {
      title: "Third Party Inspection (TPI) — Specialized Industrial Inspection Training",
      intro: "Accredited source inspector masterclasses covering ITP hold points, EN 10204 certification, NDT witness, and MDR compilation.",
      desc: "Designed for QC inspectors, expeditors, procurement specialists, and quality managers seeking mastery in third-party inspection protocols. Courses cover ASME Boiler & Pressure Vessel codes, API specifications, NDT evaluation (UT, RT, MT, PT), pressure testing, and IRN issuance.",
      programs: [
        { name: "Industrial Source Inspector & Stage Witness Masterclass", duration: "3 Days", audience: "QC Inspectors & Quality Engineers", desc: "Inspection and Test Plan (ITP) witness points, dimensional verification, and stage inspection." },
        { name: "Mill Test Certificate (EN 10204 3.1 & 3.2) Verification", duration: "2 Days", audience: "Material Engineers & Procurement Leads", desc: "Deciphering chemical/mechanical test reports, heat number traceability, and positive material identification (PMI)." },
        { name: "Non-Destructive Testing (NDT) Witness & Evaluation", duration: "3 Days", audience: "QC Leads & Inspection Coordinators", desc: "Witnessing ultrasonic, radiographic, magnetic particle, and dye penetrant inspections to ASME Sec V." },
        { name: "Pre-Shipment Inspection (PSI) & MDR Compilation", duration: "2 Days", audience: "Dispatch & Documentation Engineers", desc: "Final paint DFT verification, preservation, packaging, and Manufacturing Data Report dossier sign-off." }
      ],
      topics: [
        "Inspection and Test Plans (ITP / QCP): Hold (H), Witness (W), Review (R) & Surveillance Milestones",
        "EN 10204 Metallic Inspection Documents: Legal Requirements for Type 2.1, 2.2, 3.1 & 3.2 Certificates",
        "ASME Section VIII, Section IX & Section V Pressure Vessel Code Requirements for Inspectors",
        "Hydrostatic & Pneumatic Pressure Testing: Safety Protocols, Gauge Calibration & Seat Leakage Criteria",
        "Surface Preparation & Protective Coating Inspection: SSPC / NACE Standards, Blast Profiles & DFT Testing",
        "Inspection Release Notes (IRN) Protocol, Non-Conformance Reports (NCR) & MDR Verification"
      ],
      process: [
        { step: "01", name: "Code & Engineering Specification Review", desc: "Reviewing applicable ASME, API, ASTM, and customer specific quality requirements." },
        { step: "02", name: "Interactive Inspection Classroom", desc: "Comprehensive technical walkthrough of stage inspection techniques and mill test certifications." },
        { step: "03", name: "Hands-on Workshop & Pressure Witness Simulation", desc: "Live simulation of hydro-testing verification, NDT flaw evaluation, and dimensional checks." },
        { step: "04", name: "Source Inspector Certification", desc: "Examination and issuance of accredited Reva Phoenix Industrial Source Inspector credentials." }
      ],
      benefits: [
        "Internal inspection workforce equipped to witness critical hold points with unyielding rigor",
        "Total elimination of documentation errors on Mill Test Certificates and MDR dossiers",
        "Flawless compliance with international customer inspection standards and registrar requirements",
        "Substantial reduction in dispatch delays and dispute-driven payment retentions"
      ],
      ctaText: "Enquire for TPI Training",
      ctaService: "Third Party Inspection — Industrial Training"
    },
    consulting: {
      title: "Third Party Inspection (TPI) — Inspection Engineering & Quality Oversight",
      intro: "Senior inspection advisory delivering Inspection and Test Plan (ITP) optimization, vendor surveillance management, and MDR auditing.",
      desc: "Reva Phoenix provides comprehensive inspection engineering advisory for major capital projects in oil & gas, petrochemical, and power generation. We draft robust ITP/QCP plans, manage third-party vendor surveillance programs, and review End-of-Manufacturing Data Reports (MDR).",
      services: [
        { name: "Inspection and Test Plan (ITP / QCP) Architecture", desc: "Formulating comprehensive Quality Control Plans establishing mandatory Hold, Witness, and Review milestones." },
        { name: "Vendor Surveillance & Resident Inspector Management", desc: "Managing resident source inspector teams deployed across domestic and international fabrication yards." },
        { name: "Manufacturing Data Report (MDR) Auditing & Verification", desc: "Auditing complex multi-volume manufacturing dossiers for 100% code and customer conformity." },
        { name: "Technical Dispute Mediation & Failure Witnessing", desc: "Serving as independent technical arbiters during material rejection disputes and pressure test failures." }
      ],
      deliverables: [
        "Project-Specific Inspection and Test Plans (ITP) with Mandatory Witness Gates",
        "Stage Witness Protocols, Inspection Notification Forms & IRN Templates",
        "Turnkey Manufacturing Data Report (MDR) Compilation Architecture",
        "Third-Party Quality Surveillance Reports & Non-Conformance Dossiers"
      ],
      process: [
        { step: "01", name: "Project Specification Review", desc: "Reviewing client purchase orders, API/ASME specifications, and delivery schedules." },
        { step: "02", name: "ITP Engineering & Sign-off", desc: "Establishing clear Hold, Witness, and Review points with manufacturer and buyer." },
        { step: "03", name: "Surveillance Program Management", desc: "Deploying certified inspectors to witness fabrication milestones." },
        { step: "04", name: "Final Dossier Clearance & IRN", desc: "Reviewing all stage reports, stamping final MDRs, and issuing formal Release Notes." }
      ],
      benefits: [
        "Complete certainty that delivered equipment complies strictly with engineering specifications",
        "Zero risk of costly field installation failures or dangerous high-pressure leaks on site",
        "Unbiased, objective third-party documentation protecting both procurement and technical teams",
        "Streamlined project closeouts without documentation bottlenecks delaying final billing"
      ],
      ctaText: "Request TPI Consulting",
      ctaService: "Third Party Inspection — Strategic Consulting"
    },
    implementation: {
      title: "Third Party Inspection (TPI) — Turnkey Global Inspection Deployment",
      intro: "Certified source inspectors deployed directly to your suppliers' plants to witness fabrication, testing, and pre-shipment release.",
      desc: "Reva Phoenix deploys certified ASNT Level II/III, CSWIP, AWS CWI, and API source inspectors directly to vendor manufacturing plants worldwide. We witness raw material receipt, welding, NDT, pressure testing, final dimensions, painting, and issue official Inspection Release Notes (IRN).",
      phases: [
        { phase: "Phase 1", name: "Pre-Inspection Meeting (PIM) & Alignment", duration: "Day 1", desc: "Attending formal PIM with vendor to agree on ITP hold points, notification timelines, and acceptance criteria." },
        { phase: "Phase 2", name: "Raw Material Receipt & Heat Number Transfer", duration: "Week 1", desc: "Verifying mill certificates (EN 10204 3.1/3.2), chemical composition, mechanical tests, and stamping heat transfers." },
        { phase: "Phase 3", name: "In-Process Fabrication & NDT Witnessing", duration: "Weeks 2–4", desc: "Witnessing welding fit-ups, WPS/PQR adherence, and 100% of specified UT, RT, MT, and PT examinations." },
        { phase: "Phase 4", name: "Pressure & Functional Testing Witnessing", duration: "Weeks 4–5", desc: "Witnessing hydrostatic shell tests, pneumatic seat leakage trials, and PR2 operational cycles." },
        { phase: "Phase 5", name: "Final Inspection, Painting & IRN Release", duration: "Week 6", desc: "Checking dimensional reports, paint DFT, preservation, packaging, and issuing formal Release Notes." }
      ],
      milestones: [
        "Pre-Inspection Meeting Formally Documented and ITP Endorsed by All Parties",
        "Raw Material Traceability & EN 10204 3.2 Impartial Certification Verified",
        "Hydrostatic & Functional Testing Successfully Witnessed with Zero Leakage",
        "Official Inspection Release Note (IRN) Issued and Equipment Released for Shipping"
      ],
      process: [
        { step: "01", name: "Inspector Dispatch", desc: "Deploying certified inspectors to the vendor facility upon receipt of inspection call." },
        { step: "02", name: "Stage Witness Execution", desc: "Physical witness of specified fabrication, welding, NDT, or pressure test operations." },
        { step: "03", name: "Flash Report Issuance", desc: "Submitting written inspection report with high-resolution photos within 24 hours." },
        { step: "04", name: "Final IRN Endorsement", desc: "Endorsing final inspection documents, verifying packaging, and authorizing release." }
      ],
      benefits: [
        "Total confidence that equipment dispatched from suppliers meets 100% of contractual requirements",
        "Complete elimination of cross-border shipment rejections and costly overseas site returns",
        "Rapid 24-hour flash reporting keeping your project procurement team informed in real time",
        "Global network of certified inspectors available for rapid deployment across key industrial regions"
      ],
      ctaText: "Deploy TPI Inspector",
      ctaService: "Third Party Inspection — Turnkey Implementation"
    },
    auditing: {
      title: "Third Party Inspection (TPI) — ISO 17020 Inspection Surveillance & QA Audits",
      intro: "Independent inspection body audits, laboratory gauge surveillance, and Pre-Shipment Inspection (PSI) verification.",
      desc: "Our senior quality specialists audit inspection processes, calibration validity, test bench compliance, and packaging standards across manufacturing plants to verify conformity to ISO 17020 and customer specifications.",
      auditTypes: [
        { name: "Pre-Shipment Inspection (PSI) Compliance Audit", duration: "1 Day", desc: "Comprehensive final verification of finished goods, quantity counts, preservation, packaging, and labeling." },
        { name: "Testing Bench & Pressure Gauge Surveillance Audit", duration: "1 Day", desc: "Verifying hydrostatic test manifold accuracy, deadweight calibration certificates, and pressure relief valves." },
        { name: "NDT Subcontractor Quality & Darkroom Audit", duration: "1 Day", desc: "Auditing radiographic film density, viewing conditions, ultrasonic probe calibration, and Level II/III qualifications." },
        { name: "Manufacturing Data Report (MDR) Conformity Audit", duration: "1–2 Days", desc: "Comprehensive page-by-page audit of complete multi-volume manufacturing record books prior to client handover." }
      ],
      checklists: [
        "Traceability: Heat Numbers Stamped on Components Match Certified Mill Test Reports",
        "Test Validity: Pressure Gauges Calibrated Within Last 6 Months by NABL/ISO 17025 Labs",
        "NDT Integrity: Procedure Complies with ASME Sec V, Flaw Interpretation Accurately Graded",
        "Surface Coating: Environmental Temperature/Humidity Monitored Pre-Painting, DFT Meets Spec",
        "Preservation & Packaging: Flange Faces Greased and Fitted with Wood/Plastic Protectors, Dessicant Active"
      ],
      process: [
        { step: "01", name: "Test Dossier Review", desc: "Reviewing ITPs, WPS/PQRs, NDT procedures, and gauge calibration logs." },
        { step: "02", name: "Onsite Equipment & Testing Inspection", desc: "Physical inspection of test apparatus, calibration seals, and storage conditions." },
        { step: "03", name: "Finished Product Sampling", desc: "Random sampling of finished components for dimensional and preservation verification." },
        { step: "04", name: "Inspection Audit Report & IRN", desc: "Delivering formal audit findings, photographic evidence, and final inspection release." }
      ],
      benefits: [
        "Legally defensible, impartial verification of product conformity to international standards",
        "Elimination of counterfeit mill certificates and unauthorized raw material substitutions",
        "Accelerated customer sign-off and immediate progress billing release upon MDR approval",
        "Official Reva Phoenix Certificate of Third-Party Inspection Conformance"
      ],
      ctaText: "Schedule TPI Audit",
      ctaService: "Third Party Inspection — Auditing & Assessment"
    }
  },

  "qc-tools": {
    training: {
      title: "Quality Improvement Tools & Shop Floor Workshops — Industrial Training",
      intro: "JUSE-based 7 Basic QC Tools, Global 8D problem-solving, and root cause analysis masterclasses for manufacturing workforces.",
      desc: "Designed for machine operators, line supervisors, quality technicians, and manufacturing engineers. Courses cover Pareto charts, Ishikawa diagrams, 5-Why analysis, check sheets, histograms, control charts, 8D methodologies, and Poka-Yoke error-proofing.",
      programs: [
        { name: "The 7 Basic QC Tools (JUSE) Hands-on Masterclass", duration: "2 Days", audience: "Shop Floor Operators & Technicians", desc: "Constructing and interpreting Pareto charts, fishbone diagrams, histograms, and check sheets on live defect data." },
        { name: "Global 8D Problem Solving Methodology", duration: "2 Days", audience: "Quality & Manufacturing Engineers", desc: "Disciplined 8-Discipline framework: D1 team charter, D3 containment, D4/D5 root cause verification, and D7 recurrence prevention." },
        { name: "Root Cause Analysis (5-Why, Ishikawa & Fault Tree)", duration: "1–2 Days", audience: "Production Supervisors & Section Leads", desc: "Gemba-proven root cause isolation distinguishing symptoms from systemic failures using iterative 5-Why logic." },
        { name: "Mistake-Proofing (Poka-Yoke) & CAPA Architecture", duration: "2 Days", audience: "Tooling, Design & Quality Engineers", desc: "Designing mechanical and optical interlocks, limit switches, and robust Corrective & Preventive Action workflows." }
      ],
      topics: [
        "The 7 Basic QC Tools: Pareto Analysis (80/20 Rule), Cause-and-Effect (Fishbone), Check Sheets & Histograms",
        "Scatter Diagrams, Stratification Techniques, and Statistical Run & Process Control Charts",
        "Global 8D Problem-Solving: D1 to D8 Step-by-Step Practical Execution on Active Line Defects",
        "Root Cause Analysis: Iterative 5-Why Drilldowns with Gemba Physical Evidence Verification",
        "Cost of Poor Quality (COPQ): Quantifying Scrap, Rework, Warranty & Quarantine Overhead",
        "Mistake-Proofing (Poka-Yoke): Contact, Fixed-Value & Motion-Step Error-Proofing Interlocks"
      ],
      process: [
        { step: "01", name: "Defect Baseline Diagnostic", desc: "Analyzing current shop floor scrap logs and defect Pareto charts across target production lines." },
        { step: "02", name: "Hands-on Classroom Delivery", desc: "Practical workshops constructing 7 QC tools using actual plant non-conformance datasets." },
        { step: "03", name: "Gemba Root Cause Sprint", desc: "Walking to the production line to execute 5-Why drilldowns and identify physical mechanical causes." },
        { step: "04", name: "Quality Problem Solver Certification", desc: "Examination and awarding of accredited Reva Phoenix Quality Problem Solver credentials." }
      ],
      benefits: [
        "Rapid elimination of chronic shop floor defects and customer assembly line rejects",
        "Empowerment of frontline operators to solve quality bottlenecks without waiting for management",
        "Measurable reduction in Cost of Poor Quality (COPQ), rework scrap, and sorting overtime",
        "Audit-ready CAPA documentation satisfying API Spec Q1, IATF 16949, and ISO 9001 requirements"
      ],
      ctaText: "Enquire for QC Tools Training",
      ctaService: "Quality Improvement Tools — Industrial Training"
    },
    consulting: {
      title: "Quality Improvement Tools & Shop Floor Workshops — Problem Solving Consulting",
      intro: "Senior advisory delivering defect hotspot diagnostics, standardized 8D architecture, and COPQ quantification models.",
      desc: "Reva Phoenix consultants partner with plant management to eliminate chronic quality defects that erode profitability. We analyze scrap Pareto distributions, establish standardized Global 8D systems, design Poka-Yoke error-proofing mechanisms, and quantify Cost of Poor Quality.",
      services: [
        { name: "Shop Floor Defect Hotspot Diagnostic", desc: "Exhaustive analysis of scrap tickets, customer return records, and rework logs to isolate high-cost failure hotspots." },
        { name: "Global 8D Process Architecture & CAPA Standardization", desc: "Formulating standardized 8D reporting templates, escalation timelines, and root-cause verification criteria." },
        { name: "Cost of Poor Quality (COPQ) Quantification & Balance Sheet Linkage", desc: "Building accounting models that translate scrap reductions directly into verified financial P&L gains." },
        { name: "Poka-Yoke Engineering Advisory & Fixture Redesign", desc: "Engineering mechanical stops, guide pins, optical sensors, and interlocks to make assembly defects impossible." }
      ],
      deliverables: [
        "Plant 7 QC Tools Custom Excel & Calculation Toolkit",
        "Standardized Global 8D Problem-Solving Dossier & CAPA Protocols",
        "Plant-Wide Cost of Poor Quality (COPQ) Financial Model",
        "Poka-Yoke Mistake-Proofing Design Catalog & Implementation Guidelines"
      ],
      process: [
        { step: "01", name: "Scrap Pareto Diagnostic", desc: "Isolating the top 3 chronic defects driving 80% of manufacturing losses." },
        { step: "02", name: "8D & RCA Protocol Standardization", desc: "Drafting standardized problem-solving templates and escalation rules." },
        { step: "03", name: "Poka-Yoke Solution Prototyping", desc: "Designing and testing mechanical/sensor mistake-proofing on the line." },
        { step: "04", name: "Governance Institutionalization", desc: "Establishing weekly quality clinic reviews to track CAPA closure rates." }
      ],
      benefits: [
        "Definitive elimination of recurring defects that cause customer friction and late delivery penalties",
        "Establishment of a disciplined, scientific problem-solving culture across engineering teams",
        "Direct financial return through reduction in scrap bins, sorting personnel, and warranty claims",
        "Seamless compliance with OEM customer audit requirements for robust corrective action systems"
      ],
      ctaText: "Request QC Tools Consulting",
      ctaService: "Quality Improvement Tools — Strategic Consulting"
    },
    implementation: {
      title: "Quality Improvement Tools & Shop Floor Workshops — Gemba Kaizen Sprints",
      intro: "Hands-on 3-to-5 day rapid improvement workshops on live production lines to solve chronic defects and install Poka-Yoke.",
      desc: "Our quality engineers lead cross-functional frontline squads in intensive Gemba Kaizen sprints. We physically trace defects on the machine line, conduct 5-Why root cause isolation, build prototype mistake-proofing fixtures, and lock in zero-defect performance.",
      phases: [
        { phase: "Phase 1", name: "Defect Pareto Isolation & Team Charter", duration: "Week 1", desc: "Selecting the top chronic defect and assembling a cross-functional squad (operator, mechanic, quality engineer)." },
        { phase: "Phase 2", name: "Gemba 5-Why & Fishbone Sprint", duration: "Week 2", desc: "Conducting intensive floor investigations to isolate the true mechanical/procedural root cause." },
        { phase: "Phase 3", name: "Poka-Yoke Prototype Fabrication", duration: "Weeks 3–4", desc: "Designing and machining mechanical guide pins, installing optical sensors, or modifying software interlocks." },
        { phase: "Phase 4", name: "Pilot Validation & 8D Verification", duration: "Weeks 5–6", desc: "Running 1,000 production cycles with the new Poka-Yoke installed to confirm zero defect recurrence." },
        { phase: "Phase 5", name: "PFMEA Update, SOP Lamination & Sign-off", duration: "Weeks 7–8", desc: "Updating control plans, laminating visual work instructions, and securing management closure sign-off." }
      ],
      milestones: [
        "Top Chronic Defect Isolated with Documented Baseline Scrap Frequency",
        "Root Cause Confirmed by Controlled Simulation on the Production Line",
        "Poka-Yoke Mistake-Proofing Device Installed and Operating Effectively",
        "Zero Defect Recurrence Confirmed over 60 Consecutive Production Days"
      ],
      process: [
        { step: "01", name: "Kaizen Sprint Kickoff", desc: "Scoping the defect problem and chartering the cross-functional sprint squad." },
        { step: "02", name: "Floor Investigation & Data Logging", desc: "Gathering live dimensional and operational data at the machine interface." },
        { step: "03", name: "Fixture Fabrication & Installation", desc: "Machining and mounting physical error-proofing fixtures directly on the tooling." },
        { step: "04", name: "Standardization & Handover", desc: "Documenting revised SOPs and training all shift operators on new procedures." }
      ],
      benefits: [
        "Immediate, measurable drop in scrap and rework on the target manufacturing line",
        "High frontline morale as operators see their ideas directly implemented in physical fixtures",
        "Permanent elimination of human error through mechanical and optical interlocks",
        "Turnkey delivery with Reva specialists physically working on the line alongside your crew"
      ],
      ctaText: "Deploy Gemba Kaizen Sprint",
      ctaService: "Quality Improvement Tools — Turnkey Implementation"
    },
    auditing: {
      title: "Quality Improvement Tools & Shop Floor Workshops — Problem Solving Rigor Audits",
      intro: "Independent audits of 8D problem solving quality, Poka-Yoke integrity, and CAPA effectiveness.",
      desc: "Our quality auditors evaluate the rigor of internal problem-solving records, ensuring 8D reports reflect true root-cause isolation rather than superficial symptoms, and inspecting physical Poka-Yoke devices for bypass risks.",
      auditTypes: [
        { name: "8D Report Quality & RCA Rigor Audit", duration: "1 Day", desc: "Auditing closed 8D dossiers to ensure 5-Why drilldowns were verified by physical evidence rather than assumptions." },
        { name: "Poka-Yoke Integrity & Bypass Prevention Audit", duration: "1 Day", desc: "Physical inspection of all floor mistake-proofing sensors and fixtures to ensure operators cannot bypass them." },
        { name: "Cost of Poor Quality (COPQ) Verification Audit", duration: "1 Day", desc: "Auditing scrap tracking bins, rework logs, and financial ledger postings to verify true COPQ accuracy." },
        { name: "CAPA System Recurrence & Effectiveness Audit", duration: "1–2 Days", desc: "Auditing 12 months of customer and internal corrective actions to verify zero recurrence across similar lines." }
      ],
      checklists: [
        "8D Discipline: D2 Contains 5W2H Problem Description, D3 Containment Verified at 100%",
        "Root Cause Proof: 5-Why Root Cause Successfully Reproduced Under Controlled Conditions",
        "Poka-Yoke Functionality: Device Actively Halts the Machine or Ejects the Defective Part",
        "Standardization: PFMEA and Control Plan Updated with Revised Occurrence/Detection Ratings",
        "Zero Recurrence: No Recorded Defect Incidents Since Implementation of Permanent Action"
      ],
      process: [
        { step: "01", name: "8D Dossier Sampling", desc: "Reviewing 20+ randomly selected internal and customer corrective action reports." },
        { step: "02", name: "Gemba Physical Verification", desc: "Inspecting machines on the floor to verify physical presence of declared countermeasures." },
        { step: "03", name: "Poka-Yoke Challenge Testing", desc: "Testing mistake-proofing fixtures with intentionally defective parts to verify interception." },
        { step: "04", name: "Audit Scoring & Executive Report", desc: "Delivering quantitative problem-solving effectiveness scores and gap roadmaps." }
      ],
      benefits: [
        "Guaranteed protection against superficial 'operator re-trained' excuses in 8D reports",
        "Verification that physical mistake-proofing interlocks cannot be disabled or bypassed",
        "Audit-ready corrective action dossiers satisfying the most demanding customer auditors",
        "Official Reva Phoenix Quality Problem Solving Excellence Certificate"
      ],
      ctaText: "Schedule QC Tools Audit",
      ctaService: "Quality Improvement Tools — Auditing & Assessment"
    }
  },

  "leadership-soft-skills": {
    training: {
      title: "Leadership & Executive Soft Skills — Specialized Industrial Training",
      intro: "Executive coaching, Stephen Covey's 7 Habits, Train-the-Trainer (TTT) mastery, and conflict resolution masterclasses.",
      desc: "Designed for plant directors, engineering managers, shift superintendents, and internal company trainers. Courses cover Covey 7 Habits, adult learning instructional design, Train-the-Trainer (TTT) certification, high-stakes negotiation, situational leadership, and quality culture transformation.",
      programs: [
        { name: "Transformational Leadership & Covey's 7 Habits", duration: "2 Days", audience: "Plant Directors & Senior Managers", desc: "Instilling proactive accountability, Win-Win collaboration, empathic listening, and visionary leadership." },
        { name: "Train The Trainer (TTT) Certified Master Facilitator", duration: "3 Days", audience: "Internal Trainers & Technical Leads", desc: "Adult learning methodologies, dynamic instructional design, platform presentation mastery, and facilitation." },
        { name: "Conflict Resolution, Emotional Intelligence & Negotiation", duration: "2 Days", audience: "Department Heads & Section Leads", desc: "Cross-functional dispute mediation, assertiveness, stakeholder management, and high-pressure plant negotiation." },
        { name: "Situational Leadership, Coaching & Delegation", duration: "2 Days", audience: "Frontline & Middle Managers", desc: "Structured developmental feedback, delegation frameworks, performance appraisals, and mentoring habits." }
      ],
      topics: [
        "Stephen Covey's 7 Habits of Highly Effective Leaders: Proactive Accountability, Begin with the End in Mind & Synergy",
        "Train The Trainer (TTT): Adult Learning Principles, Dynamic Presentation Mastery & Workshop Design",
        "Cross-Functional Conflict Mediation: De-escalation Techniques, Assertive Communication & Win-Win Negotiation",
        "Hoshin Kanri Strategic Alignment: Cascading Executive Strategy down to Frontline Operational Deliverables",
        "Situational Leadership: Directing, Coaching, Supporting & Delegating Based on Follower Readiness",
        "Building a Culture of Quality: Overcoming Resistance to Change, Psychological Safety & Zero-Defect Habits"
      ],
      process: [
        { step: "01", name: "Leadership Competency Pre-Assessment", desc: "Assessing current management styles, communication patterns, and departmental friction points." },
        { step: "02", name: "Interactive Experiential Workshops", desc: "Intensive classroom instruction integrating live leadership case studies, roleplays, and behavioral drills." },
        { step: "03", name: "Live Facilitation & Coaching Showcase", desc: "Participants deliver live instructional presentations and conduct simulated managerial coaching sessions." },
        { step: "04", name: "Leadership Certification & Action Plans", desc: "Evaluation and awarding of accredited Reva Phoenix Executive Leadership / TTT credentials." }
      ],
      benefits: [
        "Elevated managerial accountability, emotional intelligence, and cross-departmental collaboration",
        "Self-sustaining internal training capability through certified Train-the-Trainer (TTT) instructors",
        "Drastic reduction in friction between production, quality, maintenance, and sales divisions",
        "Substantial improvement in employee morale, psychological safety, and technical talent retention"
      ],
      ctaText: "Enquire for Leadership Training",
      ctaService: "Leadership & Executive Soft Skills — Industrial Training"
    },
    consulting: {
      title: "Leadership & Executive Soft Skills — Strategic Organizational Consulting",
      intro: "Senior advisory delivering organizational culture diagnostics, Hoshin Kanri strategic alignment, and internal corporate academy design.",
      desc: "Reva Phoenix executive advisors partner with industrial leadership to bridge technical operational systems with human behavioral performance. We design leadership competency matrices, establish internal corporate training academies, facilitate executive offsites, and guide cultural change.",
      services: [
        { name: "Organizational Culture & Leadership Diagnostic", desc: "Comprehensive evaluation of leadership effectiveness, employee engagement, psychological safety, and cultural roadblocks." },
        { name: "Policy Deployment (Hoshin Kanri) Strategic Alignment", desc: "Facilitating executive retreats to translate long-term corporate vision into clear departmental breakthrough targets." },
        { name: "Internal Corporate Academy & TTT Curriculum Architecture", desc: "Designing structured onboarding, multi-skilling, and technical qualification curriculums for internal trainers." },
        { name: "Change Management & Quality Culture Transformation Advisory", desc: "Guiding plant leadership through major restructuring, automation transitions, or digital transformation." }
      ],
      deliverables: [
        "Executive Leadership Competency Matrix & Individual Development Plans",
        "Corporate Hoshin Kanri Strategic Cascade & X-Matrix Blueprint",
        "Internal Train-the-Trainer (TTT) Instructional Design & Evaluation Manual",
        "Organizational Culture & Employee Engagement Assessment Dossier"
      ],
      process: [
        { step: "01", name: "Leadership & Culture Assessment", desc: "Conducting confidential 360-degree interviews with directors and managers." },
        { step: "02", name: "Executive Strategic Retreat", desc: "Facilitating 2-day leadership retreat to establish shared vision and leadership behaviors." },
        { step: "03", name: "TTT Academy & Curriculum Rollout", desc: "Training internal trainers and launching standardized corporate training modules." },
        { step: "04", name: "Ongoing Coaching & Culture Review", desc: "Conducting bi-monthly executive coaching and monitoring employee engagement metrics." }
      ],
      benefits: [
        "Creation of a unified executive leadership team speaking with a single, clear voice across the organization",
        "Significant cost savings by building self-sustaining in-house training capabilities via certified TTT leads",
        "Seamless alignment of daily shop floor behaviors with executive strategic business objectives",
        "Permanent institutionalization of a resilient, customer-focused 'Zero Defect' company culture"
      ],
      ctaText: "Request Leadership Consulting",
      ctaService: "Leadership & Executive Soft Skills — Strategic Consulting"
    },
    implementation: {
      title: "Leadership & Executive Soft Skills — Turnkey Culture & Coaching Rollout",
      intro: "Turnkey cultural transformation: executive coaching, cascading departmental workshops, and certifying in-house trainers.",
      desc: "Our executive coaches deploy inside your organization to implement lasting cultural change. We coach senior managers 1-on-1, facilitate interactive cross-departmental workshops, certify your first cohort of in-house master trainers, and establish permanent coaching rituals.",
      phases: [
        { phase: "Phase 1", name: "360-Degree Diagnostics & Executive Alignment", duration: "Weeks 1–2", desc: "Conducting leadership evaluations and securing executive director alignment on target leadership behaviors." },
        { phase: "Phase 2", name: "Executive Offsite & Core Competency Launch", duration: "Weeks 3–4", desc: "Facilitating 2-day offsite training top 25 leaders in Covey's 7 Habits and strategic accountability." },
        { phase: "Phase 3", name: "Train-the-Trainer (TTT) Master Certification", duration: "Weeks 5–7", desc: "Training and certifying 10 internal master facilitators equipped with full training toolkits." },
        { phase: "Phase 4", name: "Cascaded Departmental Workshops & Drills", duration: "Weeks 8–12", desc: "Certified internal trainers roll out modules across all shifts, coached in real-time by Reva leads." },
        { phase: "Phase 5", name: "Mentoring Rituals & Culture Survey Handover", duration: "Weeks 13–16", desc: "Establishing monthly 1-on-1 coaching rituals and conducting post-transformation culture pulse surveys." }
      ],
      milestones: [
        "Executive Leadership Alignment Offsite Completed with Signed Cultural Charter",
        "Cohort of 10 Certified Train-the-Trainer (TTT) Instructors Formally Graduated",
        "100% Supervisory Personnel Complete Situational Leadership and Conflict Modules",
        "Employee Engagement Index Shows > 20% Measurable Improvement on Pulse Survey"
      ],
      process: [
        { step: "01", name: "Executive Coaching & Vision", desc: "1-on-1 coaching with managing directors to establish personal leadership targets." },
        { step: "02", name: "Cohort Selection & Training", desc: "Selecting and training high-potential internal master facilitators." },
        { step: "03", name: "Floor Cascade & Facilitation", desc: "Rolling out frontline leadership workshops across all production departments." },
        { step: "04", name: "Measurement & Handover", desc: "Tracking cultural change metrics and handing over self-sustaining academy toolkits." }
      ],
      benefits: [
        "Measurable boost in leadership capability with zero disruption to daily manufacturing deliverables",
        "Internal training academy capable of onboarding and upskilling new hires without external consultants",
        "Dramatic improvement in employee morale, cross-functional communication, and team trust",
        "Turnkey delivery where Reva coaches manage all aspects of curriculum, materials, and evaluations"
      ],
      ctaText: "Deploy Leadership Program",
      ctaService: "Leadership & Executive Soft Skills — Turnkey Implementation"
    },
    auditing: {
      title: "Leadership & Executive Soft Skills — Leadership Competency & Culture Audits",
      intro: "Independent leadership competency audits, training program effectiveness evaluations, and culture assessments.",
      desc: "Our organizational development auditors evaluate leadership practices, internal training effectiveness, employee engagement, and culture alignment across industrial facilities.",
      auditTypes: [
        { name: "Executive Leadership Competency & Goal Cascade Audit", duration: "1–2 Days", desc: "Evaluating leadership behavior adherence, managerial delegation, and goal cascade alignment." },
        { name: "Internal Training Program & TTT Effectiveness Audit", duration: "1 Day", desc: "Auditing internal training records, Kirkpatrick 4-level evaluation metrics, and instructor competence." },
        { name: "Employee Engagement & Psychological Safety Culture Audit", duration: "1–2 Days", desc: "Evaluating cross-functional friction, psychological safety, and frontline feedback mechanisms." },
        { name: "Performance Coaching & 1-on-1 Governance Audit", duration: "1 Day", desc: "Verifying whether managers regularly conduct structured developmental coaching and appraisals." }
      ],
      checklists: [
        "Goal Alignment: Individual Manager KPIs Directly Connect to Corporate Annual Breakthrough Targets",
        "Training Governance: L&D Matrix Tracks Skill Gaps with Documented Pre/Post Assessments",
        "TTT Competence: Certified Internal Trainers Actively Delivering Standardized Curriculums",
        "Psychological Safety: Absence of Blame Culture, Near-Miss and Quality Defects Openly Reported",
        "Managerial Cadence: Documented Bi-Weekly or Monthly 1-on-1 Coaching Sessions Between Leads and Teams"
      ],
      process: [
        { step: "01", name: "Training & Appraisal Record Review", desc: "Reviewing training attendance logs, skill matrices, and performance appraisal documents." },
        { step: "02", name: "Confidential Multi-Level Interviews", desc: "Conducting structured interviews across executives, supervisors, and frontline operators." },
        { step: "03", name: "Live Training Session Observation", desc: "Observing an internal training workshop delivered by certified company instructors." },
        { step: "04", name: "Culture Audit Report & Radar Chart Delivery", desc: "Delivering quantitative culture maturity scoring and prioritized developmental roadmaps." }
      ],
      benefits: [
        "Objective appraisal of your organization's human performance and managerial capability",
        "Verification that corporate investments in training are translating into tangible behavioral change",
        "Early warning detection of employee discontent, disengagement, and impending key talent attrition",
        "Official Reva Phoenix Organizational Leadership & Culture Excellence Certificate"
      ],
      ctaText: "Schedule Leadership Audit",
      ctaService: "Leadership & Executive Soft Skills — Auditing & Assessment"
    }
  }
};
