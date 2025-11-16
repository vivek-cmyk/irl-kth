import { DimensionId, LevelDefinition } from "@/types/irl";

export const DIMENSION_LABELS: Record<DimensionId, string> = {
  CRL: "Customer Readiness (CRL)",
  TRL: "Technology Readiness (TRL)",
  BRL: "Business Readiness (BRL)",
  IPRL: "IP Readiness (IPRL)",
  TMRL: "Team Readiness (TMRL)",
  FRL: "Funding Readiness (FRL)",
};

export const DIMENSION_SUMMARY: Record<DimensionId, string> = {
  CRL: "How well the problem, customers, and value proposition are defined and validated.",
  TRL: "How mature and validated the core technology or solution is.",
  BRL: "How clear and workable the business model and go-to-market are.",
  IPRL: "How thought-through IP protection and freedom-to-operate are.",
  TMRL: "How capable and aligned the core team is.",
  FRL: "How ready the startup is to secure and manage funding.",
};

export const IRL_DEFINITIONS: Record<DimensionId, LevelDefinition[]> = {
  CRL: [
    {
      level: 1,
      shortTitle: "Market need hypothesis",
      description: "Thinking that a possible need/problem or opportunity might exist in a market. No clear hypotheses on who customers are, what problems exist, etc. Limited or non-existing knowledge of the market and customers/users.",
      indicators: [
        "Vague or unclear hypotheses about customers and problems",
        "No proof or analysis to support assumptions",
        "Limited knowledge of market and customers"
      ]
    },
    {
      level: 2,
      shortTitle: "Initial market understanding",
      description: "Some market research performed from secondary sources. Brief familiarity with possible customers and their problems/needs. First reasonably clear description of the problem/need hypothesis.",
      indicators: [
        "Market research from secondary sources completed",
        "Basic familiarity with possible customers and problems",
        "Clear problem/need hypothesis described"
      ]
    },
    {
      level: 3,
      shortTitle: "First market feedback",
      description: "Initial primary market research completed with direct contacts. More developed understanding of possible customers and customer segments. Problem hypothesis is clearer and updated after customer/user/expert feedback.",
      indicators: [
        "Primary market research with direct customer contacts",
        "Developed understanding of customer segments",
        "Problem hypothesis refined based on feedback"
      ]
    },
    {
      level: 4,
      shortTitle: "Problem confirmed by customers",
      description: "Customer segmentation with basic profiles in place. Product/service hypothesis with clear positioning defined based on customer feedback. Identified who the user, paying customer, and decision maker is.",
      indicators: [
        "Customer segmentation with basic profiles exists",
        "Product hypothesis defined and positioned against alternatives",
        "Feedback from a few possible users/customers received",
        "User, paying customer, and decision maker identified"
      ]
    },
    {
      level: 5,
      shortTitle: "Customer relationships established",
      description: "Established relationships with target customers providing ongoing input. Decided target customers/segments to focus on first. First sales pitch and value proposition defined. Problem/need confirmed by multiple customers.",
      indicators: [
        "Relationships with potential customers established",
        "Target customer segments decided",
        "First sales pitch and value proposition defined",
        "Problem importance confirmed by 5-10 customers (B2B) or more for B2C"
      ]
    },
    {
      level: 6,
      shortTitle: "Customer testing confirms benefits",
      description: "Customers have expressed interest and confirmed the solution can solve their problems (initial problem-solution fit). Updated sales pitch based on feedback. First sales process defined.",
      indicators: [
        "Customers express interest in the solution",
        "Initial problem-solution fit validated",
        "Sales pitch updated based on customer feedback",
        "First sales/user acquisition process defined",
        "Possible partners or key stakeholders identified"
      ]
    },
    {
      level: 7,
      shortTitle: "Extended testing with users",
      description: "Small number of active users testing early versions. Customer value and benefits confirmed through testing. Discussions with partners initiated.",
      indicators: [
        "Small number of active users testing product/service",
        "Customer value and benefits confirmed by testing",
        "Discussions with partners initiated",
        "Early versions being used by customers"
      ]
    },
    {
      level: 8,
      shortTitle: "First commercial sales",
      description: "Sales process implemented with first commercial sales or substantial number of active users. CRM and support systems in place. Customer agreements signed.",
      indicators: [
        "Substantial number of active users",
        "Sales/user acquisition process implemented",
        "Support systems (CRM, etc.) in place",
        "First commercial sales or customer agreements completed",
        "Agreements with first partners in place"
      ]
    },
    {
      level: 9,
      shortTitle: "Widespread scalable sales",
      description: "Large and substantially growing number of active users with strong customer traction. Sales to multiple customers in a repeatable and scalable way. Focus on growth and customer acquisition.",
      indicators: [
        "Large and growing number of active users",
        "Repeatable and scalable sales process",
        "Sales to multiple customers (including through partners)",
        "Strong customer traction demonstrated",
        "Market ready product/service at target price"
      ]
    },
  ],
  TRL: [
    {
      level: 1,
      shortTitle: "Initial technology idea",
      description: "Research results with potential benefits identified. Vague idea of a technology to be developed. Very early stage with no proof of concept yet.",
      indicators: [
        "Research results with potential applications identified",
        "Initial technology concept emerging",
        "No detailed proof or analysis yet"
      ]
    },
    {
      level: 2,
      shortTitle: "Technology concept formulated",
      description: "Technology concept and potential application formulated. Practical applications can be defined but are speculative, with no proof the technology will work.",
      indicators: [
        "Technology concept clearly defined",
        "Potential applications described",
        "Applications remain speculative without proof"
      ]
    },
    {
      level: 3,
      shortTitle: "Proof of concept in lab",
      description: "Active R&D initiated. Potential technology concept defined and described. First idea of end-user requirements. Analytical or experimental proof-of-concept of critical functions demonstrated in laboratory.",
      indicators: [
        "Proof-of-concept of critical functions in lab",
        "Active R&D development initiated",
        "First end-user requirements/use cases identified",
        "Technology concept clearly described"
      ]
    },
    {
      level: 4,
      shortTitle: "Technology validated in lab",
      description: "Laboratory tests show that important parameters and functions work. Tests indicate the technology concept could work and be feasible.",
      indicators: [
        "Lab tests of important parameters successful",
        "Technology concept appears feasible",
        "Evidence that key functions work"
      ]
    },
    {
      level: 5,
      shortTitle: "Validation in relevant environment",
      description: "Basic components integrated and shown to work together in laboratory. More defined end-user requirements based on user feedback. Initial validation that technology concept will work.",
      indicators: [
        "Basic components integrated and working together",
        "Test results in relevant (simulated) environment",
        "End-user requirements defined based on feedback",
        "Initial evidence technology concept will work"
      ]
    },
    {
      level: 6,
      shortTitle: "Prototype in relevant environment",
      description: "Representative prototype demonstrated in relevant environment. Components integrated and tested in realistic form. Evidence indicating technology will work.",
      indicators: [
        "Representative prototype demonstrated",
        "Testing in relevant environment completed",
        "Components integrated in realistic form",
        "Evidence that technology will meet requirements"
      ]
    },
    {
      level: 7,
      shortTitle: "Prototype in operational environment",
      description: "Representative prototype demonstrated in actual operational environment with complete end-user requirements in place. Shown to actually work and meet performance requirements.",
      indicators: [
        "Prototype tested in operational environment",
        "Complete end-user requirements/specifications in place",
        "Demonstration meets important performance requirements",
        "Operational environment conditions addressed"
      ]
    },
    {
      level: 8,
      shortTitle: "Complete technology demonstrated",
      description: "Complete, functional technology shown to work in actual operations. Prototype near or at complete technology demonstrated. Near production-ready.",
      indicators: [
        "Complete technology demonstrated in operations",
        "Technology is complete, functional, compatible, and producible",
        "Proven to meet performance requirements",
        "Near production-ready state"
      ]
    },
    {
      level: 9,
      shortTitle: "Technology proven at scale",
      description: "Complete technology scalable and proven by several users over time. Continuous development and optimization ongoing. Proven in actual operations.",
      indicators: [
        "Technology proven by multiple users over time",
        "Scalable and production-ready",
        "Continuous improvement and optimization ongoing",
        "Meets all performance specifications at scale"
      ]
    },
  ],
  BRL: [
    {
      level: 1,
      shortTitle: "Limited business insight",
      description: "Little insight into market potential, competition, or sustainability. Business model vague or unspecified. No clear description of business idea.",
      indicators: [
        "No or unclear business idea description",
        "Limited understanding of market potential",
        "Little awareness of competition",
        "Vague business model"
      ]
    },
    {
      level: 2,
      shortTitle: "Initial business overview",
      description: "Initial overview of market size and potential. Some competitors listed and basic sustainability considerations. Description of possible business concept and market opportunity.",
      indicators: [
        "Market size and potential identified",
        "Some competitors identified",
        "Possible business concept described",
        "Basic sustainability awareness exists"
      ]
    },
    {
      level: 3,
      shortTitle: "First business model draft",
      description: "First description of target markets with size estimates. Competition mapped and SDG targets identified. Business concept described in structured form (e.g., Business Model Canvas).",
      indicators: [
        "Target market described with size estimates",
        "Competition mapped",
        "SDG targets identified",
        "Business model in structured format (canvas)"
      ]
    },
    {
      level: 4,
      shortTitle: "Defined business model",
      description: "Well-defined target market with competitive positioning. SDG assessment completed. Draft business model with first cost and revenue calculations.",
      indicators: [
        "Clear target market descriptions",
        "Competitive positioning defined",
        "SDG assessment completed",
        "First calculations indicate possible viability"
      ]
    },
    {
      level: 5,
      shortTitle: "Economic viability indicated",
      description: "Market descriptions updated based on feedback. Competitive positioning refined. First cost and revenue calculations show possible economic viability.",
      indicators: [
        "Market feedback incorporated",
        "Competitive positioning refined",
        "Cost and revenue calculations completed",
        "Economic viability indicated"
      ]
    },
    {
      level: 6,
      shortTitle: "Business model validated",
      description: "Complete business model with pricing strategy. All hypotheses tested with customers. Detailed cost structure and revenue projections. Key sustainability metrics proposed.",
      indicators: [
        "Complete business model with pricing",
        "All hypotheses tested with customers",
        "Detailed cost structure and revenue projections",
        "Key sustainability metrics defined"
      ]
    },
    {
      level: 7,
      shortTitle: "Go-to-market execution started",
      description: "Marketing and sales strategy implemented. Early customer acquisition activities underway. Processes for business development established. Business model validated by commercial sales.",
      indicators: [
        "Marketing and sales strategy implemented",
        "Customer acquisition activities ongoing",
        "Business development processes established",
        "Business model validated by commercial activity"
      ]
    },
    {
      level: 8,
      shortTitle: "Proven business model",
      description: "Business model validated through customer transactions. Clear unit economics. Systems for scaling customer acquisition operational. Sustainability integrated and creating business value.",
      indicators: [
        "Business model validated by sales",
        "Clear unit economics demonstrated",
        "Scalable customer acquisition systems",
        "Sustainability integrated and valued"
      ]
    },
    {
      level: 9,
      shortTitle: "Scalable business operations",
      description: "Proven business model executing at scale. Strong market position with growing revenues. Efficient operations and clear path to profitability. Operations, growth and sustainability balanced.",
      indicators: [
        "Business model proven and scalable",
        "Meets/exceeds expectations on profit and growth",
        "Strong market position established",
        "Sustainability and growth balanced"
      ]
    },
  ],
  IPRL: [
    {
      level: 1,
      shortTitle: "Initial IP awareness",
      description: "Basic understanding that IP might be relevant. No clear strategy or analysis of IP landscape yet.",
      indicators: [
        "Basic awareness of IP relevance",
        "No IP strategy defined",
        "No IP landscape analysis"
      ]
    },
    {
      level: 2,
      shortTitle: "IP landscape understood",
      description: "Freedom-to-operate analysis initiated. Understanding of relevant IP in the field and potential protection strategies emerging.",
      indicators: [
        "Freedom-to-operate analysis started",
        "Relevant IP landscape researched",
        "Protection strategies being considered"
      ]
    },
    {
      level: 3,
      shortTitle: "Draft IP strategy exists",
      description: "Draft IP strategy in place outlining how IP will create business value. Key IP assets identified.",
      indicators: [
        "Draft IP strategy documented",
        "Key IP assets identified",
        "Business value of IP understood"
      ]
    },
    {
      level: 4,
      shortTitle: "First IP applications filed",
      description: "First formal IP applications or registrations filed. Positive initial responses received.",
      indicators: [
        "First IP applications filed",
        "Positive initial responses received",
        "Formal protection process initiated"
      ]
    },
    {
      level: 5,
      shortTitle: "Complete IP strategy defined",
      description: "Comprehensive IP strategy covering different types of IP protection appropriate for business. Freedom-to-operate confirmed.",
      indicators: [
        "Comprehensive IP strategy defined",
        "Multiple IP protection types considered",
        "Freedom-to-operate confirmed",
        "IP strategy aligned with business model"
      ]
    },
    {
      level: 6,
      shortTitle: "Key IP formally protected",
      description: "Formal applications filed for key IP in relevant markets according to strategy. Core IP protection underway.",
      indicators: [
        "Key IP applications filed in relevant markets",
        "Core IP protection in process",
        "IP portfolio development initiated"
      ]
    },
    {
      level: 7,
      shortTitle: "Complementary IP filed",
      description: "Additional complementary IP applications filed to strengthen protection. Portfolio building according to strategy.",
      indicators: [
        "Complementary IP applications filed",
        "IP portfolio strengthening",
        "Strategic portfolio development ongoing"
      ]
    },
    {
      level: 8,
      shortTitle: "IP management implemented",
      description: "IP strategy and management practices fully implemented. Processes for ongoing IP development and protection in place.",
      indicators: [
        "IP management practices implemented",
        "Ongoing IP development processes",
        "Regular IP portfolio reviews",
        "IP protection systematically managed"
      ]
    },
    {
      level: 9,
      shortTitle: "Strong IP position",
      description: "Strong IP portfolio provides significant business support and protection. IP actively managed and leveraged for competitive advantage.",
      indicators: [
        "Strong IP portfolio established",
        "IP provides competitive advantage",
        "IP actively leveraged for business value",
        "Comprehensive IP management system"
      ]
    },
  ],
  TMRL: [
    {
      level: 1,
      shortTitle: "Limited team structure",
      description: "Little insight into needed competencies and resources. Typically an individual with lack of necessary competencies to verify idea.",
      indicators: [
        "Individual or very small group",
        "Little understanding of needed competencies",
        "No clear team structure",
        "Limited capacity to verify idea"
      ]
    },
    {
      level: 2,
      shortTitle: "Initial team awareness",
      description: "First idea of needed competencies to verify concept. Overall project goals emerging. Limited competencies in place but awareness growing.",
      indicators: [
        "Limited competencies present",
        "First idea of needed competencies",
        "Project goals emerging",
        "Additional persons may be needed"
      ]
    },
    {
      level: 3,
      shortTitle: "Team gaps identified",
      description: "Necessary competencies to verify/develop idea identified. Competency needs and gaps clearly defined. Initial plan for finding needed skills.",
      indicators: [
        "Some necessary competencies in place",
        "Competency gaps clearly identified",
        "Plan to find additional competencies defined",
        "Growing team awareness"
      ]
    },
    {
      level: 4,
      shortTitle: "Team building initiated",
      description: "Multiple individuals with needed competencies present. Champion with clear direction. Plan to complement team. Discussions on roles and commitment started.",
      indicators: [
        "Champion present with clear direction",
        "Several needed competencies in place",
        "Plan to find additional capacity",
        "Discussions on roles and commitment ongoing"
      ]
    },
    {
      level: 5,
      shortTitle: "Committed core team",
      description: "Initial founding team with main competencies. Team agrees on ownership, roles, goals and visions. Signed ownership agreements. Knowledge sharing systems in place.",
      indicators: [
        "Founding team with main competencies",
        "Ownership shares agreed and signed",
        "Roles and goals aligned",
        "Knowledge sharing systems established"
      ]
    },
    {
      level: 6,
      shortTitle: "Founding team aligned",
      description: "Complementary and diverse founding team with necessary competencies. Roles clarified with shared goals. Working together significantly. Board and advisors being built.",
      indicators: [
        "Complementary founding team in place",
        "All necessary competencies present",
        "Clear commitment and shared goals",
        "Board and advisors being established"
      ]
    },
    {
      level: 7,
      shortTitle: "Complete founding team",
      description: "Well-functioning team capable of building the business. Clear CEO in place. Board and advisors operational. Long-term organizational plan exists. Culture documented.",
      indicators: [
        "Complementary and diverse founding team",
        "Clear CEO identified",
        "Board and advisors operational",
        "Growth plan for expanding team",
        "Culture and values documented"
      ]
    },
    {
      level: 8,
      shortTitle: "Growing organization",
      description: "Professional organization established (board, CEO, management, staff). HR policies and processes in place. Ongoing recruitment according to plan.",
      indicators: [
        "Professional organization structure",
        "HR policies and processes implemented",
        "Recruitment ongoing according to plan",
        "Well-functioning team culture"
      ]
    },
    {
      level: 9,
      shortTitle: "Mature organization",
      description: "High performing, well-structured organization maintained and developed over time. Complete leadership team. Professional board engaged. Strong culture supporting growth.",
      indicators: [
        "High performing organization",
        "All levels engaged in continuous learning",
        "Management team maintained and performs well",
        "Strong organizational culture",
        "Incentives aligned to motivate performance"
      ]
    },
  ],
  FRL: [
    {
      level: 1,
      shortTitle: "No funding plan",
      description: "Little insight into funding needs or options. No funding secured and no clear plan for validation activities.",
      indicators: [
        "No clear funding plan",
        "Little understanding of funding needs",
        "No funding secured",
        "No plan for validation funding"
      ]
    },
    {
      level: 2,
      shortTitle: "Funding needs identified",
      description: "Funding needs and options for validation identified. Efforts to secure initial validation funding begun.",
      indicators: [
        "Validation funding needs identified",
        "Funding options researched",
        "Efforts to secure funding initiated"
      ]
    },
    {
      level: 3,
      shortTitle: "Initial validation funding",
      description: "Initial funding secured for validation activities. Understanding of overall funding options and requirements emerging.",
      indicators: [
        "Initial validation funding secured",
        "Funding options understood",
        "Requirements for funding known"
      ]
    },
    {
      level: 4,
      shortTitle: "Development funding secured",
      description: "Funding secured to initiate development. Pitch for next-stage funding prepared and ready.",
      indicators: [
        "Development funding secured",
        "Next-stage funding pitch prepared",
        "Funding roadmap emerging"
      ]
    },
    {
      level: 5,
      shortTitle: "Funding pitch tested",
      description: "Funding pitch tested with relevant audiences. Possible funding roadmap and first financial projections created.",
      indicators: [
        "Funding pitch tested with audiences",
        "Feedback incorporated",
        "Funding roadmap drafted",
        "First financial projections created"
      ]
    },
    {
      level: 6,
      shortTitle: "Active funding discussions",
      description: "Pitch improved based on feedback. Active discussions with relevant funding sources underway.",
      indicators: [
        "Improved pitch based on feedback",
        "Active discussions with funding sources",
        "Multiple funding options being explored"
      ]
    },
    {
      level: 7,
      shortTitle: "Term sheet stage",
      description: "Term sheet level discussions ongoing with funding sources. All materials in place to pass due diligence.",
      indicators: [
        "Term sheet discussions ongoing",
        "Due diligence materials prepared",
        "Close to securing funding"
      ]
    },
    {
      level: 8,
      shortTitle: "Funding secured (12+ months)",
      description: "Secured funding for at least 12 months of operations. Financial monitoring and forecasting systems in place.",
      indicators: [
        "Funding for 12+ months secured",
        "Financial monitoring systems operational",
        "Forecasting capabilities established",
        "Clear runway for operations"
      ]
    },
    {
      level: 9,
      shortTitle: "Long-term funding strategy",
      description: "Long-term funding strategy covering scale-up. Next funding prepared with established interest from suitable sources.",
      indicators: [
        "Long-term funding strategy defined",
        "Next funding round prepared",
        "Established interest from funding sources",
        "Clear scale-up funding path"
      ]
    },
  ],
};

export const DIMENSION_ORDER: DimensionId[] = ["CRL", "TRL", "BRL", "IPRL", "TMRL", "FRL"];
