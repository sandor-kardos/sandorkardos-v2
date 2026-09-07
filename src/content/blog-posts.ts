export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  metaDescription: string;
  summary: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "service-blueprints-vs-user-journey-maps",
    title: "Service Blueprints vs User Journey Maps: Why the Backstage Matters",
    date: "2025-11-12",
    readingTime: "3 min read",
    metaDescription: "Why customer journey maps fail without backstage service blueprints, drawn from 3rd-year interaction design practice in Edinburgh.",
    summary: "Journey maps show how a customer feels when a service breaks. Service blueprints show the broken database, missing handover, or forgotten courier that broke it.",
    content: [
      "In design school, we spend weeks polishing user journey maps. We plot emotional highs and lows with curved lines. We note that a user feels 'frustrated' at minute four because their confirmation email hasn't arrived.",
      "Plotting frustration does not fix frustration.",
      "As a delivery driver in Edinburgh before studying Interaction Design at Edinburgh Napier University, I learned that customer complaints on the doorstep rarely start on the doorstep. They start when a warehouse scanner drops an item, or when a dispatch system misreads a Scottish tenement staircase number.",
      "That is why I care deeply about the line of visibility. Above the line is frontstage: what the user touches, reads, and clicks. Below the line is backstage: the internal APIs, the human handoffs, the physical logistics, and the administrative policies that either support the interface or make it a lie.",
      "If you only design the frontstage, you are just decorating promises. A solid junior or mid service designer spends at least half their time mapping what happens behind the screen so the promise actually holds."
    ]
  },
  {
    slug: "using-ai-as-a-prototyping-crutch-vs-accelerator",
    title: "Using AI as a Prototyping Accelerator, Not a Thinking Substitute",
    date: "2025-10-04",
    readingTime: "3 min read",
    metaDescription: "An honest look at how AI tools (Claude, Gemini, n8n) should support UX research rather than replace human understanding.",
    summary: "AI can generate a plausible interface in thirty seconds. It cannot sit on an Edinburgh bus and watch a passenger struggle with a ticketing app.",
    content: [
      "I am transparent about using AI tools: Claude API, Gemini API, and n8n workflows. I use them constantly to build prototypes, automate content pipelines, and test edge cases in public on GitHub.",
      "However, AI is a prototyping tool, not a designer.",
      "The danger for design students right now is confusing generation with validation. It is very easy to ask an LLM to generate 'a modern mental health app for students' and receive five beautiful screens filled with serene illustrations. But that output skips the real design work entirely: identifying ethical constraints, discovering why people abandon therapy apps after day three, and testing whether users even want another digital notification.",
      "My approach is simple: use AI to write boilerplate code, test API feasibility, and synthesize large text datasets in minutes. Then take the saved hours and spend them talking to real humans, running usability tests, and refining the service architecture.",
      "Speed is only an advantage if you are running in the right direction."
    ]
  },
  {
    slug: "designing-for-the-tenement-management-scheme",
    title: "Designing for Scottish Tenement Laws: Trust Over Aesthetics",
    date: "2025-08-20",
    readingTime: "4 min read",
    metaDescription: "How Scotland's Tenement Management Scheme shaped the digital trust architecture for CloseCare.",
    summary: "When Scottish law requires a 51% majority vote among neighbours who do not talk to each other, typography must do the heavy lifting of legal credibility.",
    content: [
      "Anyone who has lived in an Edinburgh tenement knows the quiet tension of the communal stairwell. Eight to sixteen flats share a roof, a front door, and a staircase, but rarely share phone numbers.",
      "When designing CloseCare, the technical challenge was minor: generating QR codes and connecting them to a mobile voting form. The service design challenge was massive: navigating the Tenement Management Scheme (Scotland) Act 2004.",
      "Under Scottish statutory rules, a 51% majority vote allows proprietors to approve communal repairs and maintenance. However, proprietors are terrified of being stuck with the whole bill if a neighbour defaults.",
      "Our usability testing proved that visual polish did not persuade owners. What persuaded them was radical legal transparency: showing the specific door numbers, explaining Rule 1 of the Tenement Management Scheme in plain English, and guaranteeing individual direct-debit billing.",
      "Service design is often about solving the social and legal fear that prevents people from cooperating. The screen is just the meeting room."
    ]
  }
];
