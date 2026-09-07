export interface CaseStudy {
  slug: string;
  title: string;
  heroHeadline: string;
  metaTitle: string;
  metaDescription: string;
  sector: string;
  role: string;
  timeline: string;
  methods: string[];
  featured: boolean; // Only CloseCare, BereljUFOT.hu, Mindhaven are featured on home
  summary: string;
  liveUrl?: string;
  liveLabel?: string;
  image: string;
  imageAlt: string;
  stats: { label: string; value: string }[];
  context: string;
  problem: string;
  research: {
    heading: string;
    description: string;
    points: string[];
  };
  serviceBlueprint: {
    frontstage: string[];
    backstage: string[];
    governance: string;
  };
  architecture: {
    heading: string;
    description: string;
    decisions: string[];
  };
  usabilityTesting: {
    testedWith: string;
    keyFindings: string[];
    iterationsMade: string[];
  };
  outcomes: {
    metrics: string[];
    reflection: string;
    nextSteps: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "closecare",
    title: "CloseCare",
    heroHeadline: "B2B Service Design and Resident Voting Under Scotland's Tenement Management Scheme",
    metaTitle: "CloseCare Case Study: B2B Service Design & Trust Architecture",
    metaDescription: "Service blueprinting and B2B digital trust design for a commercial stair-cleaning business using QR-code resident voting.",
    sector: "Property Operations and Commercial Facilities (Edinburgh)",
    role: "Service Designer and UX Strategist",
    timeline: "2025 (4-week design sprint)",
    methods: [
      "Service Blueprinting",
      "Frontstage and Backstage Mapping",
      "Statutory Trust Architecture",
      "QR-to-Vote Flow Design",
      "B2B Decision Journey Mapping"
    ],
    featured: true,
    summary: "Edinburgh stair and close cleaning acquisition service using QR-code resident voting under Scotland's Tenement Management Scheme (51% majority rule). B2B service design and digital trust interface for commercial property decision-makers and shared-freehold residents.",
    liveUrl: "https://closecare.co.uk",
    liveLabel: "closecare.co.uk",
    image: "/images/closecare-mockup.webp",
    imageAlt: "CloseCare mobile resident voting interface and Edinburgh tenement stair service design",
    stats: [
      { label: "Legal Framework", value: "TMS 51% Majority Rule" },
      { label: "Target Friction", value: "Shared Stair Voting" },
      { label: "Acquisition Method", value: "QR Code Physical-to-Digital" },
      { label: "Conversion Flow", value: "Under 90 Seconds" }
    ],
    context: "In Edinburgh, communal stairwells (known locally as closes) are shared across multiple private proprietors governed by the Tenement Management Scheme (Scotland) Act 2004. Organising professional communal cleaning traditionally requires tedious door-to-door paper chasing or costly property factoring. CloseCare was conceived to transform close maintenance into a frictionless, digitally facilitated communal decision.",
    problem: "Tenement cleaning proposals fail because co-proprietors distrust unsolicited flyers, lack time for physical stair meetings, and cannot track whether the statutory 51% majority consent has been reached. Traditional property cleaning services treat stair cleaning as a purely physical transaction, ignoring the human governance breakdown occurring in the stairwell.",
    research: {
      heading: "Qualitative Inquiry and Tenement Governance Mapping",
      description: "Interviews with Edinburgh tenement owners and property decision-makers revealed three core behavioural bottlenecks:",
      points: [
        "Distrust of anonymous canvassing: Residents ignore paper leaflets slipped under doors because they lack accountability and pricing transparency.",
        "Voting inertia: Even motivated owners abandon the process if tracking neighbor agreement requires contacting 8 to 16 separate flats individually.",
        "Payment accountability: Fear that one resident will be left liable for an entire stair cleaning invoice if neighbours default."
      ]
    },
    serviceBlueprint: {
      frontstage: [
        "Resident scans physical tamper-evident QR code placed on the communal noticeboard.",
        "Landing on a dedicated stair-specific voting portal displaying the exact street address and flat numbers.",
        "One-tap anonymous sentiment vote: 'Yes, I want regular professional close cleaning at £X per month'.",
        "Transparent real-time quorum bar showing progress toward the required 51% Scottish Tenement statutory threshold."
      ],
      backstage: [
        "Automated address validation checking municipal street registers against tenement boundary records.",
        "Quorum verification engine alerting the operations coordinator once the 51% threshold is achieved.",
        "Individual billing orchestration: automated direct debits split per flat, eliminating communal liability risk.",
        "Contractor dispatch scheduling synced with localized operational routes across Edinburgh postal zones."
      ],
      governance: "Scottish Tenement Management Scheme (TMS) Rule 1 compliance ensuring legally sound majority decisions without requiring 100% unanimous sign-off."
    },
    architecture: {
      heading: "Information Architecture and Trust Heuristics",
      description: "The digital interface was intentionally structured to eliminate cognitive load and provide immediate legal credibility:",
      decisions: [
        "Single-purpose mobile interface: No secondary menus or marketing distraction on the voting screen.",
        "Clear statutory notice explaining the Tenement Management Scheme in plain English without legal jargon.",
        "Instant address confirmation: Displaying the resident's specific tenement door number to confirm community relevance.",
        "Direct contact and company credentials displayed prominently to alleviate rogue-trader anxiety."
      ]
    },
    usabilityTesting: {
      testedWith: "6 Edinburgh tenement owners across Marchmont, Leith, and Bruntsfield.",
      keyFindings: [
        "Users demanded immediate reassurance that voting 'Yes' did not bind them to pay for uncooperative neighbours.",
        "QR code scanning speed on poorly lit tenement landings required higher visual contrast on physical print collateral."
      ],
      iterationsMade: [
        "Added explicit micro-copy above the submit button: 'You are only billed if 51% of flats confirm, and each flat pays individually.'",
        "Redesigned the physical stair notices with high-contrast typography and clear step-by-step instructions."
      ]
    },
    outcomes: {
      metrics: [
        "Service blueprint mapped 100% of frontstage touchpoints to backstage billing and cleaning dispatch.",
        "Voting funnel completion time reduced to under 90 seconds on mobile devices.",
        "Full regulatory compliance achieved with Scottish statutory tenement guidelines."
      ],
      reflection: "Designing for communal services requires prioritizing trust architecture over visual ornament. The primary barrier was not the price of the cleaning service, but the fear of social conflict between neighbours.",
      nextSteps: "Conducting longitudinal usability testing on recurring billing notifications and digital proof-of-service photo reports sent to residents after each clean."
    }
  },
  {
    slug: "bereljufot",
    title: "BereljUFOT.hu",
    heroHeadline: "Two-Sided Trailer Rental Marketplace: Friction Reduction and Deposit Trust",
    metaTitle: "BereljUFOT.hu Case Study: Two-Sided Marketplace UX",
    metaDescription: "Search, booking flow, and trust design for a live Hungarian trailer rental marketplace.",
    sector: "Logistics and Commercial Mobility Marketplace",
    role: "Product and Interaction Designer",
    timeline: "2024 to 2025",
    methods: [
      "Two-Sided Journey Mapping",
      "Marketplace Information Architecture",
      "Dynamic Pricing Presentation",
      "Deposit Assurance UX",
      "Rapid Prototype Validation"
    ],
    featured: true,
    summary: "Two-sided trailer rental marketplace (TrailerGuru / BereljUFOT.hu) connecting commercial providers and private owners with renters. Search and filtering, localized booking flows, and dynamic pricing presentation designed to resolve deposit hesitation.",
    liveUrl: "https://bereljufot.hu",
    liveLabel: "bereljufot.hu",
    image: "/images/bereljufot-mockup.webp",
    imageAlt: "BereljUFOT trailer rental marketplace interface with vehicle towing category verification",
    stats: [
      { label: "Marketplace Type", value: "Two-Sided Rental" },
      { label: "Core Challenge", value: "Deposit Risk & Technical Specs" },
      { label: "Search Flow", value: "Location & Weight Category" },
      { label: "Live Deployment", value: "Production Web Platform" }
    ],
    context: "Renting commercial utility trailers (utility trailers, vehicle transporters, enclosed box trailers) in Hungary has long been fragmented across offline pen-and-paper petrol stations, unregulated social media groups, and outdated local classifieds. Customers struggle with vehicle compatibility, unclear deposit requirements, and uncertain availability.",
    problem: "The marketplace suffered from high drop-off during checkout due to three factors: confusion regarding driving licence towing weight limits (Category B vs B96 vs B+E), anxiety over cash deposit handoffs, and cumbersome pickup scheduling between private equipment hosts and commercial renters.",
    research: {
      heading: "Dual-Audience Discovery (Renters vs Equipment Hosts)",
      description: "Conducted contextual interviews with both rental customers and private equipment owners to map operational friction points:",
      points: [
        "Technical specification confusion: 65% of renters were unsure whether their vehicle towing capacity matched trailer gross vehicle weight (GVW).",
        "Deposit anxiety: Renters feared unwarranted deposit withholding upon trailer return; hosts feared uncompensated equipment damage.",
        "Pickup logistics: Unclear pickup location coordinates and flexible handoff times created continuous phone tag."
      ]
    },
    serviceBlueprint: {
      frontstage: [
        "Faceted search allowing renters to filter by location, trailer dimensions, weight class, and specific hitch type.",
        "Interactive weight compatibility indicator verifying vehicle towing capability before booking commitment.",
        "Transparent deposit breakdown showing exact return conditions and secure payment holding.",
        "Step-by-step mobile pickup checklist with photo condition logging at handover."
      ],
      backstage: [
        "Real-time host inventory availability synchronization.",
        "Automated identity verification and driving licence category validation.",
        "Escrow deposit security layer with automated release upon mutual handover sign-off.",
        "SMS and email notification dispatch for host acceptance within 30 minutes."
      ],
      governance: "Standardized equipment rental contracts complying with Hungarian consumer protection laws and commercial transport standards."
    },
    architecture: {
      heading: "Search, Booking Flow, and Transparent Pricing",
      description: "Information architecture prioritized reassurance and technical clarity before asking for user commitment:",
      decisions: [
        "Progressive disclosure in search filters: Basic location and dates upfront, expanding into technical payload capacity and ramp requirements.",
        "All-inclusive pricing summary: Daily rate, insurance premium, and deposit displayed together without hidden fees.",
        "Host trust indicators: Verified badge, pickup response time, and equipment maintenance history.",
        "Mobile-first checkout designed for on-the-go booking near pickup points."
      ]
    },
    usabilityTesting: {
      testedWith: "8 active renters (tradespeople, hobbyists, furniture movers) and 3 commercial equipment owners.",
      keyFindings: [
        "Users repeatedly overlooked trailer weight limitations when displayed in small text, risking illegal driving infractions.",
        "Equipment owners requested clearer damage-logging photo steps to protect themselves against disputed returns."
      ],
      iterationsMade: [
        "Introduced a high-visibility badge displaying 'Drive with Standard B Licence' or 'Requires B+E Licence' directly on search cards.",
        "Structured a 4-photo mandatory check-in flow (front, rear, hitch, tyres) into the mobile pickup sequence."
      ]
    },
    outcomes: {
      metrics: [
        "Comprehensive marketplace flow deployed to production on bereljufot.hu.",
        "Booking drop-off reduced by resolving licence compatibility questions upfront.",
        "Deposit friction minimized through clear conditional escrow terms."
      ],
      reflection: "In heavy-duty equipment marketplaces, technical precision is the foundation of user trust. If the user cannot immediately confirm legal vehicle towing limits, no amount of marketing polish will close the transaction.",
      nextSteps: "Designing automated fleet-management dashboards for commercial rental depots managing more than 10 trailers simultaneously."
    }
  },
  {
    slug: "mindhaven",
    title: "Mindhaven",
    heroHeadline: "Counselling Practice Trust Architecture: Designing Within Ethical Boundaries",
    metaTitle: "Mindhaven Case Study: Counselling Practice Trust Architecture",
    metaDescription: "Digital rebuild of a counselling practice's website, redesigning trust architecture around a no-testimonials constraint.",
    sector: "Private Healthcare and Psychological Wellbeing (UK)",
    role: "UX Researcher and Product Designer",
    timeline: "2024 (3-week redesign)",
    methods: [
      "Ethical Trust Architecture",
      "Information Hierarchy Redesign",
      "Vulnerability Journey Mapping",
      "Tone and Language Calibration",
      "Accessibility Review"
    ],
    featured: true,
    summary: "Digital rebuild of a friend's counselling practice website. Corrected AI-drafted positioning drift, redesigned trust architecture around a hard regulatory constraint (no client testimonials permitted under ethical healthcare codes), and built the experience around the practitioner's authentic portrait and clinical grounding.",
    liveUrl: "https://mindhaven.uk",
    liveLabel: "mindhaven.uk",
    image: "/images/mindhaven-mockup.webp",
    imageAlt: "Mindhaven counselling practice website trust architecture with authentic practitioner layout",
    stats: [
      { label: "Product Type", value: "Counselling Practice Website" },
      { label: "Regulatory Rule", value: "Zero Testimonials Permitted" },
      { label: "Primary Anchor", value: "Practitioner Portrait & Ethics" },
      { label: "Conversion Target", value: "Initial Consultation Booking" }
    ],
    context: "A qualified private therapist launched a counselling practice, but the initial AI-generated website suffered from generic wellness clichés, clinical detachment, and corporate positioning drift. The practice needed a clean, grounded website that communicated professional safety and therapeutic rapport.",
    problem: "Standard commercial website playbooks rely heavily on client testimonials, review widgets, and aggressive sales funnels. In professional UK counselling (BACP/COSCA ethical frameworks), soliciting or publishing client testimonials is strictly prohibited to prevent client exploitation. The site needed to generate profound trust and encourage vulnerable inquiries without using standard social proof.",
    research: {
      heading: "Understanding the Vulnerable Inquiry Journey",
      description: "Research focused on how people in psychological distress seek, evaluate, and choose an individual counsellor:",
      points: [
        "Fear of judgment: Prospective clients scan therapist profiles primarily to answer: 'Will this specific human understand and judge me?'",
        "Overwhelm from clinical jargon: Explaining modalities (psychodynamic, CBT, humanistic) in academic terms alienates clients seeking immediate emotional relief.",
        "First step paralysis: Ambiguous contact forms with open-ended fields cause high abandonment from users who do not know how to articulate their crisis."
      ]
    },
    serviceBlueprint: {
      frontstage: [
        "Clean, calming hero section anchored by the practitioner's warm, professional portrait and human introduction.",
        "Straightforward explanation of therapeutic approaches translated into lived everyday experiences.",
        "Clear, unhurried explanation of what happens in the first 50-minute introductory consultation.",
        "Three-step friction-free inquiry form with gentle prompt choices."
      ],
      backstage: [
        "Confidential inquiry routing directly to encrypted practitioner email.",
        "Automated boundary-safe holding response setting clear expectations for reply times (within 24 hours).",
        "Clinical intake calendar synchronization preventing overbooking and fatigue.",
        "GDPR-compliant personal data retention schedule for inquiry notes."
      ],
      governance: "Full alignment with UK professional counselling ethical codes regarding confidentiality, boundary maintenance, and prohibited client endorsements."
    },
    architecture: {
      heading: "Trust Architecture Without Social Proof",
      description: "When reviews are ethically barred, trust must be established through radical clarity, calm pacing, and transparent professional boundaries:",
      decisions: [
        "Practitioner portrait as primary trust anchor: Authentic photographic presence replacing anonymous stock wellness illustrations.",
        "Predictable process walkthrough: Outlining the exact physical or online setting, cancellation policy, and confidentiality boundaries.",
        "Low-pressure inquiry pathways: Providing both direct email and a structured three-question inquiry box.",
        "High-contrast, distraction-free typographic hierarchy with soothing neutral color tones."
      ]
    },
    usabilityTesting: {
      testedWith: "5 individuals who had previously engaged with private therapy services.",
      keyFindings: [
        "Stock photos of stacked Zen stones and yoga poses immediately degraded professional credibility.",
        "Users wanted to know session fees and exact consultation structure before filling out any personal details."
      ],
      iterationsMade: [
        "Completely stripped all generic stock wellness photography in favour of honest practitioner portraits and quiet typography.",
        "Moved session fees, consultation duration, and scheduling availability to a prominent position above the contact form."
      ]
    },
    outcomes: {
      metrics: [
        "Successful launch on mindhaven.uk with corrected professional positioning.",
        "Eliminated AI-generated wellness drift in favour of direct, grounded clinical communication.",
        "Inquiry form conversion improved by clarifying what happens in the first session."
      ],
      reflection: "When traditional marketing levers like review badges are ethically prohibited, design must work twice as hard. Radical transparency, calm typography, and authentic human presence become the primary tools of trust.",
      nextSteps: "Developing an accessible downloadable preparation sheet for clients attending their very first therapy session."
    }
  },
  {
    slug: "vote",
    title: "Scottish Election Party Matcher",
    heroHeadline: "48-Hour Civic Tech UX Sprint: Neutral Policy Matching Under Time Constraints",
    metaTitle: "Scottish Election Party Matcher: Civic Tech UX Sprint",
    metaDescription: "48-hour UX sprint matching voters to political platforms; 366 unique visitors, 6 countries.",
    sector: "Civic Technology and Digital Democracy",
    role: "UX Researcher and Rapid Prototyper",
    timeline: "48-hour sprint (7-day measurement window)",
    methods: [
      "Rapid Heuristic Prototyping",
      "Information Architecture for Civic Tech",
      "Cognitive Load Reduction",
      "Neutral Framing Usability",
      "Public Analytics Tracking"
    ],
    featured: false,
    summary: "48-hour civic tech UX sprint matching voters to Scottish political party manifestos. Reached 366 unique visitors across 6 countries in 7 days, demonstrating rapid problem framing, bias-free interaction design, and swift execution under a live election cycle.",
    liveUrl: "https://vote.sandorkardos.com",
    liveLabel: "vote.sandorkardos.com",
    image: "/images/vote-mockup.webp",
    imageAlt: "Scottish Election Party Matcher mobile civic tech quiz interface with manifesto quote drawer",
    stats: [
      { label: "Unique Visitors", value: "366 in 7 Days" },
      { label: "Geographic Reach", value: "6 Countries" },
      { label: "Sprint Duration", value: "48 Hours" },
      { label: "Completion Rate", value: "84% of Started Sessions" }
    ],
    context: "During the Scottish parliamentary election cycle, voter manifestos ran hundreds of dense pages. Young and first-time voters faced significant information overload, leading to voter apathy and reliance on sensationalist social media headlines.",
    problem: "Existing political quiz tools were heavily biased, cluttered with partisan advertising, or required lengthy 40-question questionnaires that caused high drop-off before presenting results. The challenge was building an accessible, neutral matching tool in a 48-hour sprint.",
    research: {
      heading: "Civic Engagement Heuristics and Cognitive Fatigue",
      description: "Reviewed existing voter advice tools (VAA) and identified three critical drop-off points:",
      points: [
        "Survey fatigue: Drop-off rates spike dramatically after question 12 in mobile civic quizzes.",
        "Perceived bias: Leading questions cause users to abandon tools when they feel steered toward a political agenda.",
        "Complex scoring: Giving raw percentages without clear manifesto policy citations undermines user faith in the outcome."
      ]
    },
    serviceBlueprint: {
      frontstage: [
        "Zero-friction entry: No signup or personal data collection required to begin.",
        "10 carefully curated, policy-specific questions on housing, education, healthcare, and economy.",
        "Neutral 5-point agreement scale with plain-language policy explanations.",
        "Dynamic breakdown showing manifesto alignment with direct policy quote citations."
      ],
      backstage: [
        "Lightweight algorithmic scoring weighing party manifesto positions against user answers.",
        "Privacy-preserving edge delivery with zero tracking cookies or voter profiling.",
        "Fast serverless response ensuring instant calculation upon the final question tap.",
        "Anonymous aggregate analytics logging completion rate and geographic spread."
      ],
      governance: "Strict political neutrality: Manifesto data extracted directly from officially published party election documents without editorial commentary."
    },
    architecture: {
      heading: "Information Architecture and Mobile Interaction Flow",
      description: "Prioritized speed, touch ergonomics, and uncompromised neutrality:",
      decisions: [
        "One question per screen to prevent visual overwhelm on mobile devices.",
        "Touch targets exceeding 48x48px for rapid, confident thumb interaction.",
        "Progress indicator showing immediate time-to-finish (under 3 minutes).",
        "Results card formatted for transparent inspection, allowing users to see why a party matched their answers."
      ]
    },
    usabilityTesting: {
      testedWith: "Continuous live observation during the 7-day election window across 366 unique visitors.",
      keyFindings: [
        "Mobile users on slow cellular connections abandoned quizzes if question transitions lagged.",
        "Users actively checked the source links verifying party manifesto statements."
      ],
      iterationsMade: [
        "Optimized client-side state transitions to render questions instantaneously with 0ms transition delay.",
        "Added expandable 'View Official Manifesto Citation' drawer below each result."
      ]
    },
    outcomes: {
      metrics: [
        "366 unique visitors across 6 countries in 7 days during a live political election.",
        "84% survey completion rate from first question to final results card.",
        "Zero server downtime or performance degradation during election week."
      ],
      reflection: "Rapid prototyping in civic technology proves that complex public data can be made accessible within days when unnecessary decorative bloat is discarded in favour of lean, user-centred clarity.",
      nextSteps: "Adapting the open-source matching engine for local municipal council elections across Scotland."
    }
  },
  {
    slug: "maskoca",
    title: "MaSkoca",
    heroHeadline: "Service Automation and Content Operations: 75% Cycle Time Reduction",
    metaTitle: "MaSkoca: Service Automation & Content Ops",
    metaDescription: "n8n-driven news curation pipeline design; 75% cycle time reduction.",
    sector: "Community Media and Automated Content Operations",
    role: "Service Designer and Automation Architect",
    timeline: "2024 to 2025",
    methods: [
      "Service Blueprinting",
      "Backstage Process Automation",
      "Human-in-the-Loop Content Ops",
      "Cognitive Workload Analysis",
      "Editorial Interface Design"
    ],
    featured: false,
    summary: "Automated Scottish news pipeline for the Hungarian community in Scotland. Designed a dual-LLM n8n service pipeline turning 300+ daily RSS items into 10 structured summaries, cutting manual editorial cycle time by 75%.",
    liveUrl: "https://www.facebook.com/MaSkocia/",
    liveLabel: "facebook.com/MaSkocia",
    image: "/images/maskoca-mockup.webp",
    imageAlt: "MaSkoca automated Scottish news pipeline n8n service workflow and mobile approval card",
    stats: [
      { label: "Daily Input Volume", value: "300+ Raw RSS Items" },
      { label: "Curated Output", value: "10 Structured Summaries" },
      { label: "Cycle Time Reduction", value: "75% Time Saved" },
      { label: "Editorial Quality", value: "Human-in-the-Loop" }
    ],
    context: "Thousands of Hungarian nationals living across Scotland rely on timely local news regarding Scottish legislation, immigration changes, municipal council decisions, and public services. Previously, translating and synthesizing Scottish news feeds into digestible community posts required hours of daily manual monitoring.",
    problem: "A solo editorial volunteer was overwhelmed by monitoring dozens of Scottish news outlets, council bulletins, and government notices. The manual process of searching, cross-referencing, translating, and formatting was unsustainable, resulting in delayed community alerts and editorial burnout.",
    research: {
      heading: "Editorial Workflow Audit and Friction Mapping",
      description: "Mapped the existing end-to-end editorial routine to isolate where time and mental energy were leaking:",
      points: [
        "Information sorting fatigue: 70% of editorial time was spent skimming irrelevant local crime reports and UK-wide stories that had no Scottish relevance.",
        "Repetitive translation: Copy-pasting text into translation software resulted in unnatural Hungarian idioms that required sentence-by-sentence manual correction.",
        "Formatting overhead: Manually generating social post layouts, source attribution links, and hashtags consumed 20 minutes per post."
      ]
    },
    serviceBlueprint: {
      frontstage: [
        "Community readers receive scannable, accurate morning and evening news roundups in clear Hungarian.",
        "Every post includes original Scottish government / news outlet verification links.",
        "Standardized category tags (Housing, Healthcare, Immigration, Scottish Culture) for rapid scanning."
      ],
      backstage: [
        "n8n workflow orchestrator ingesting 300+ daily RSS items from BBC Scotland, Scottish Government, and local councils.",
        "First-stage LLM evaluation: Filtering out duplicate stories and rating relevance to migrant residents in Scotland.",
        "Second-stage LLM synthesis: Producing concise, culturally natural Hungarian summaries with verified source citations.",
        "Human-in-the-loop review dashboard where the editor reviews, edits, and approves posts with one tap before publication."
      ],
      governance: "Editorial safety guidelines: Automated content is never published without human-in-the-loop verification, preventing hallucination or inaccurate legal advice."
    },
    architecture: {
      heading: "Backstage Architecture and Human Review Ergonomics",
      description: "Designed the backstage pipeline to treat the human editor as a director rather than a data-entry operator:",
      decisions: [
        "Structured telegram review channel: Delivering formatted previews with two quick-action buttons ('Approve' / 'Reject').",
        "Source provenance tracking: Automatically linking original source text directly beside generated summaries for instant fact-checking.",
        "Error handling fallback: Graceful alerting when RSS feeds timeout or change structure."
      ]
    },
    usabilityTesting: {
      testedWith: "Live weekly editorial runs over a 6-month operational period.",
      keyFindings: [
        "Full automation without human oversight risked subtle translation errors regarding Scots legal terms (e.g., 'Sheriff Court', 'Council Tax bands').",
        "Mobile-first approval allowed the editor to curate news on the go during transit."
      ],
      iterationsMade: [
        "Hardcoded an Edinburgh and Scottish institutional glossary into the prompt pipeline to guarantee legal translation accuracy.",
        "Added automated character count checks preventing social media truncation."
      ]
    },
    outcomes: {
      metrics: [
        "Reduced daily editorial time from 120 minutes to under 30 minutes (75% reduction).",
        "Consistent daily delivery of 10 structured community updates across Scotland.",
        "Zero catastrophic publishing errors due to strict human-in-the-loop validation."
      ],
      reflection: "True service design extends deep into backstage operations. Automating the mechanical translation and filtering work allowed the human operator to focus entirely on editorial judgment, empathy, and community dialogue.",
      nextSteps: "Integrating automated sentiment analysis to identify which public policy issues cause the most anxiety among community members."
    }
  },
  {
    slug: "mesenet",
    title: "Mesenet.hu",
    heroHeadline: "Human-Centred AI Storytelling: Zero-Noise Utility for Bedtime Moments",
    metaTitle: "Mesenet.hu Case Study: Human-Centred AI Storytelling",
    metaDescription: "Zero-noise storytelling utility designed around a single real user moment.",
    sector: "Family Technology and Accessible Web Applications",
    role: "Product Designer and Frontend Prototyper",
    timeline: "2024 (Rapid prototype to production)",
    methods: [
      "Contextual Inquiry",
      "Single-Moment UX Design",
      "OCR-to-Publish Pipeline",
      "Dark-Room Ergonomics",
      "Progressive Web App Architecture"
    ],
    featured: false,
    summary: "AI Hungarian children's bedtime story Progressive Web App with OCR-to-publish pipeline. Zero-noise storytelling utility designed around a single real user moment: a tired parent with five minutes and a phone in a dark room.",
    liveUrl: "https://mesenet.hu",
    liveLabel: "mesenet.hu",
    image: "/images/mesenet-mockup.webp",
    imageAlt: "Mesenet bedtime story progressive web app in dark room night mode with warm amber typography",
    stats: [
      { label: "Target Context", value: "Darkened Bedroom at Bedtime" },
      { label: "Time-to-Story", value: "Under 15 Seconds" },
      { label: "App Architecture", value: "Progressive Web App (PWA)" },
      { label: "Visual Noise", value: "Zero Ads or Popups" }
    ],
    context: "Bedtime storytelling is one of the most critical bonding routines between parents and young children, but modern parents frequently face exhaustion, repetitive book fatigue, or travel without physical storybooks.",
    problem: "Existing digital storytelling apps are overloaded with gamification, bright animated flashing screens, intrusive subscription popups, and complex character creation trees. In a dark children's bedroom, these apps overstimulate the child and frustrate the tired parent who just needs a calm five-minute story.",
    research: {
      heading: "Contextual Inquiry into the Bedtime Routine",
      description: "Interviewed parents and observed real bedtime storytelling contexts to isolate environmental constraints:",
      points: [
        "Light sensitivity: Bright white screens instantly disrupt melatonin production and wake the child.",
        "One-handed mobile use: Parents usually hold a child with one arm, requiring complete single-thumb phone navigation.",
        "Cognitive exhaustion: Parents have zero patience for selecting 10 different story parameters (genre, age, conflict, moral) before generating a tale."
      ]
    },
    serviceBlueprint: {
      frontstage: [
        "Single-screen interface defaulted to dark-mode warm amber typography.",
        "One simple text input: 'What should tonight's story be about?' with three gentle preset chips.",
        "One tap generation producing an age-appropriate 3 to 5 minute calming story.",
        "OCR utility allowing parents to snap a photo of an old physical book page and continue the story dynamically."
      ],
      backstage: [
        "Fast LLM generation pipeline tuned for Hungarian nursery cadence, gentle pacing, and peaceful resolution.",
        "Child-safe content guardrails blocking scary themes or hyperactive cliffhangers.",
        "Local device caching enabling offline reading once story generation completes.",
        "PWA service worker ensuring instant loading even in bedrooms with weak Wi-Fi."
      ],
      governance: "Absolute child privacy: Zero personal identifiers, zero biometric data, and zero advertising trackers."
    },
    architecture: {
      heading: "Zero-Noise Interface and Night-Mode Typography",
      description: "Engineered specifically for the sensory realities of a dark room:",
      decisions: [
        "Warm OLED black background with deep amber text (#f59e0b on #0a0a0a) to minimize blue-light exposure.",
        "Large readable serif typography (20px body font) preventing eye strain in low-light environments.",
        "Generous line spacing (1.8 line height) so a parent can read aloud smoothly without losing their place.",
        "Complete omission of notification badges, audio alerts, or upsell banners."
      ]
    },
    usabilityTesting: {
      testedWith: "4 parents with children aged 3 to 7 over two weeks of bedtime routines.",
      keyFindings: [
        "Stories exceeding 600 words caused children to lose focus or parents to skip paragraphs.",
        "Parents loved the ability to incorporate the child's real day (e.g., 'a lost blue teddy at the park') into the narrative."
      ],
      iterationsMade: [
        "Calibrated prompt length constraints to guarantee stories complete within 450 to 550 words.",
        "Added a quick toggle for 'Quick 3-min story' versus 'Detailed 7-min story'."
      ]
    },
    outcomes: {
      metrics: [
        "Successfully deployed to production at mesenet.hu as an installable PWA.",
        "Average time from app opening to active storytelling under 15 seconds.",
        "Demonstrated that AI utility is highest when wrapped in radical environmental restraint."
      ],
      reflection: "Good product design often means removing what technology makes possible in order to preserve human presence. A bedtime story app should disappear into the background so the parent and child remain the centre of the room.",
      nextSteps: "Exploring local on-device voice narration for moments when a parent has lost their voice."
    }
  },
  {
    slug: "what-if-arena",
    title: "What If Arena",
    heroHeadline: "Multi-Persona AI Debate Simulator: Structured Dialectic Logic for Stress-Testing Ideas",
    metaTitle: "What If Arena: Multi-Perspective AI Debate UX",
    metaDescription: "Interactive dialectic interface for stress-testing ideas.",
    sector: "Decision Support and Cognitive Simulation",
    role: "UX and Interaction Designer",
    timeline: "2024 to 2025",
    methods: [
      "Dialectic Interface Design",
      "Multi-Persona Interaction Flow",
      "Mental Model Alignment",
      "Information Density Calibration",
      "Rapid Prototype Validation"
    ],
    featured: false,
    summary: "Multi-persona AI debate simulator with structured dialectic logic for stress-testing ideas before committing resources. Designed an interactive forum interface where contrasting historical and domain perspectives challenge assumptions.",
    liveUrl: "https://arena.sandorkardos.com",
    liveLabel: "arena.sandorkardos.com",
    image: "/images/what-if-arena-mockup.webp",
    imageAlt: "What If Arena multi-persona AI debate simulator interface for decision stress-testing",
    stats: [
      { label: "Product Type", value: "Decision Stress-Testing Simulator" },
      { label: "Logic Framework", value: "Multi-Persona Dialectic" },
      { label: "Interface Style", value: "Interactive Multi-Agent Arena" },
      { label: "Primary Use Case", value: "Risk Discovery Before Launch" }
    ],
    context: "Product managers, founders, and policy designers frequently suffer from confirmation bias and echo chambers when validating new initiatives. Traditional stakeholder workshops are slow and expensive to coordinate.",
    problem: "Single-prompt AI chat interfaces (like standard ChatGPT) tend toward sycophancy, uncritically agreeing with the user's premise. Users needed a structured tool that actively pit opposing viewpoints against one another to surface hidden risks and blind spots.",
    research: {
      heading: "Cognitive Bias and Intellectual Stress-Testing",
      description: "Investigated how decision-makers evaluate complex dilemmas under uncertainty:",
      points: [
        "Sycophancy frustration: Users recognized that standard LLM chatbots validate bad ideas rather than challenging flaws.",
        "Perspective fatigue: Reading long walls of conversational text from multiple personas causes cognitive overload.",
        "Need for actionable synthesis: Users wanted debates to conclude with concrete trade-off matrixes, not endless debate loops."
      ]
    },
    serviceBlueprint: {
      frontstage: [
        "User inputs a core hypothesis, project concept, or controversial business decision.",
        "Selection of 2 to 4 opposing personas (e.g., Risk-Averse CFO, Radical Innovator, End-User Advocate).",
        "Visual debate arena showing round-by-round point, counter-point, and cross-examination.",
        "Automated synthesis report summarizing identified risks, unexpected opportunities, and decisive trade-offs."
      ],
      backstage: [
        "Orchestrated multi-agent prompt chaining with strict adversarial character prompts.",
        "Turn-taking moderator agent ensuring debate focus remains locked on the user's core dilemma.",
        "Argument extraction pipeline compiling key points into structured consensus and friction lists.",
        "Cost-effective API token optimization using compact context window pass-through."
      ],
      governance: "Epistemic humility: System explicitly reminds users that simulations are thinking aids, not predictive truth engines."
    },
    architecture: {
      heading: "Dialectic Interface and Conversational Layout",
      description: "Structured the UI to make complex philosophical and strategic clashes instantly legible:",
      decisions: [
        "Split-column conversational cards: Visual distinction between opposing personas using subtle color accents.",
        "Round-by-round progress navigation: Allowing users to jump between Opening Arguments, Cross-Examination, and Final Verdict.",
        "Instant takeaway highlights: Extracting core critiques into bullet points beside the main dialogue.",
        "Exportable decision memo format for team review."
      ]
    },
    usabilityTesting: {
      testedWith: "6 product designers and startup founders testing early product hypotheses.",
      keyFindings: [
        "Users valued the simulator most when an agent explicitly challenged an assumption they had taken for granted.",
        "Unmoderated agent debates quickly descended into repetitive circular arguments."
      ],
      iterationsMade: [
        "Implemented a strict 3-round debate limit (Thesis, Antithesis, Synthesis) enforced by an automated referee agent.",
        "Added a 'Challenge this specific point' button allowing the user to inject themselves into the debate."
      ]
    },
    outcomes: {
      metrics: [
        "Production deployment on arena.sandorkardos.com.",
        "Provides an intuitive sandbox for discovering edge-case flaws in product thinking.",
        "Demonstrated how structured multi-agent logic can serve human decision-making."
      ],
      reflection: "AI interfaces are most valuable when they disagree with us productively. Designing for tension and debate requires completely different interaction heuristics than designing for frictionless agreement.",
      nextSteps: "Allowing users to upload their own service blueprints to let AI personas stress-test operational failure points."
    }
  }
];
