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
      description: "A possible need or opportunity in the market has been identified, but there's limited knowledge of customers or market reality.",
    },
    {
      level: 2,
      shortTitle: "Initial market understanding",
      description: "Some market research performed from secondary sources. Basic familiarity with possible customers and their problems exists.",
    },
    {
      level: 3,
      shortTitle: "First market feedback",
      description: "Initial primary market research completed with direct contacts. The problem hypothesis is clearer and updated based on feedback.",
    },
    {
      level: 4,
      shortTitle: "Problem confirmed by customers",
      description: "Customer segmentation exists with basic profiles. A product hypothesis is defined and validated with a few potential users or customers.",
    },
    {
      level: 5,
      shortTitle: "Customer relationships established",
      description: "Target customer segments decided. Relationships with potential customers provide ongoing input. The problem and its importance are confirmed by multiple customers.",
    },
    {
      level: 6,
      shortTitle: "Customer testing confirms benefits",
      description: "Customers have expressed interest and confirmed the solution can solve their problems. Initial problem-solution fit is validated.",
    },
    {
      level: 7,
      shortTitle: "Extended testing with users",
      description: "Small number of active users testing early versions. Customer value and benefits confirmed through testing. Discussions with partners initiated.",
    },
    {
      level: 8,
      shortTitle: "First commercial sales",
      description: "Sales process implemented with first commercial sales or substantial number of active users. CRM and support systems in place.",
    },
    {
      level: 9,
      shortTitle: "Widespread scalable sales",
      description: "Large and substantially growing number of active users. Sales to multiple customers in a repeatable and scalable way. Strong customer traction.",
    },
  ],
  TRL: [
    {
      level: 1,
      shortTitle: "Initial technology idea",
      description: "Interesting research results or an initial technology concept has been identified. Very early stage with no proof of concept yet.",
    },
    {
      level: 2,
      shortTitle: "Technology concept formulated",
      description: "The technology concept and potential application have been formulated. Practical applications are still speculative.",
    },
    {
      level: 3,
      shortTitle: "Proof of concept in lab",
      description: "Analytical or experimental proof-of-concept of critical functions has been demonstrated in a laboratory setting.",
    },
    {
      level: 4,
      shortTitle: "Technology validated in lab",
      description: "Laboratory tests show that important parameters and functions work. The technology concept appears feasible based on early validation.",
    },
    {
      level: 5,
      shortTitle: "Validation in relevant environment",
      description: "Basic components integrated and shown to work together in a simulated environment that reflects key operational stresses.",
    },
    {
      level: 6,
      shortTitle: "Prototype in relevant environment",
      description: "Representative prototype demonstrated in a relevant environment. Test results provide evidence the technology will work.",
    },
    {
      level: 7,
      shortTitle: "Prototype in operational environment",
      description: "Representative prototype demonstrated in an actual operational environment with complete end-user requirements in place.",
    },
    {
      level: 8,
      shortTitle: "Complete technology demonstrated",
      description: "Complete, functional technology has been shown to work in actual operations. Near production-ready.",
    },
    {
      level: 9,
      shortTitle: "Technology proven at scale",
      description: "Complete technology is scalable and proven to work in actual operations by several users over time. Continuous optimization ongoing.",
    },
  ],
  BRL: [
    {
      level: 1,
      shortTitle: "Limited business insight",
      description: "Little insight into the market potential, competition, or sustainability aspects. Business model is vague or unspecified.",
    },
    {
      level: 2,
      shortTitle: "Initial business overview",
      description: "Initial overview of market size and potential. Some competitors listed and basic awareness of sustainability considerations.",
    },
    {
      level: 3,
      shortTitle: "First business model draft",
      description: "First description of target markets with size estimates. Competition mapped and SDG targets identified. Business concept described in structured form.",
    },
    {
      level: 4,
      shortTitle: "Defined business model",
      description: "Well-defined target market descriptions with competitive positioning. SDG assessment completed. Draft business model in canvas format.",
    },
    {
      level: 5,
      shortTitle: "Economic viability indicated",
      description: "Market descriptions updated based on feedback. Competitive positioning refined. First cost and revenue calculations show possible viability.",
    },
    {
      level: 6,
      shortTitle: "Business model validated",
      description: "Complete business model with pricing strategy. All business model hypotheses tested with customers. Detailed cost structure and revenue projections exist.",
    },
    {
      level: 7,
      shortTitle: "Go-to-market execution started",
      description: "Marketing and sales strategy implemented. Early customer acquisition activities underway. Processes for business development established.",
    },
    {
      level: 8,
      shortTitle: "Proven business model",
      description: "Business model validated through customer transactions. Clear unit economics. Systems for scaling customer acquisition operational.",
    },
    {
      level: 9,
      shortTitle: "Scalable business operations",
      description: "Proven business model executing at scale. Strong market position with growing revenues. Efficient operations and clear path to profitability.",
    },
  ],
  IPRL: [
    {
      level: 1,
      shortTitle: "Initial IP awareness",
      description: "Basic understanding that IP might be relevant. No clear strategy or analysis of IP landscape yet.",
    },
    {
      level: 2,
      shortTitle: "IP landscape understood",
      description: "Freedom-to-operate analysis initiated. Understanding of relevant IP in the field and potential protection strategies emerging.",
    },
    {
      level: 3,
      shortTitle: "Draft IP strategy exists",
      description: "Draft IP strategy in place outlining how IP will create business value. Key IP assets identified.",
    },
    {
      level: 4,
      shortTitle: "First IP applications filed",
      description: "First formal IP applications or registrations filed. Positive initial responses received.",
    },
    {
      level: 5,
      shortTitle: "Complete IP strategy defined",
      description: "Comprehensive IP strategy covering different types of IP protection appropriate for the business. Freedom-to-operate confirmed.",
    },
    {
      level: 6,
      shortTitle: "Key IP formally protected",
      description: "Formal applications filed for key IP in relevant markets according to strategy. Core IP protection underway.",
    },
    {
      level: 7,
      shortTitle: "Complementary IP filed",
      description: "Additional complementary IP applications filed to strengthen protection. Portfolio building according to strategy.",
    },
    {
      level: 8,
      shortTitle: "IP management implemented",
      description: "IP strategy and management practices fully implemented. Processes for ongoing IP development and protection in place.",
    },
    {
      level: 9,
      shortTitle: "Strong IP position",
      description: "Strong IP portfolio provides significant business support and protection. IP actively managed and leveraged for competitive advantage.",
    },
  ],
  TMRL: [
    {
      level: 1,
      shortTitle: "Limited team structure",
      description: "Little insight into needed competencies and resources. Typically an individual or small group without clear roles.",
    },
    {
      level: 2,
      shortTitle: "Initial team awareness",
      description: "First idea of needed competencies to verify the concept. Overall project goals emerging. Additional persons may be needed.",
    },
    {
      level: 3,
      shortTitle: "Team gaps identified",
      description: "Competency needs and gaps clearly identified. Initial plan for finding needed skills. Limited capacity but growing awareness.",
    },
    {
      level: 4,
      shortTitle: "Team building initiated",
      description: "Multiple individuals with some necessary competencies present. Plan in place to find additional capacity. Discussions on roles and commitment started.",
    },
    {
      level: 5,
      shortTitle: "Committed core team",
      description: "At least one champion present. Team agreed on ownership shares with signed agreements. Systems for knowledge sharing in place.",
    },
    {
      level: 6,
      shortTitle: "Founding team aligned",
      description: "Founding team with main competencies working together significantly. Roles clarified with shared goals and clear commitment. Started building advisors and board.",
    },
    {
      level: 7,
      shortTitle: "Complete founding team",
      description: "Complementary and diverse founding team capable of building the business. Clear CEO in place. Board and advisors operational. Long-term organizational plan exists.",
    },
    {
      level: 8,
      shortTitle: "Growing organization",
      description: "HR policies and processes in place. Ongoing recruitment according to plan. Well-functioning team with clear culture and values documented.",
    },
    {
      level: 9,
      shortTitle: "Mature organization",
      description: "Complete leadership team with clear roles. Professional board actively engaged. Strong organizational culture supporting rapid growth.",
    },
  ],
  FRL: [
    {
      level: 1,
      shortTitle: "No funding plan",
      description: "Little insight into funding needs or options. No funding secured and no clear plan for validation activities.",
    },
    {
      level: 2,
      shortTitle: "Funding needs identified",
      description: "Funding needs and options for validation identified. Efforts to secure initial validation funding have begun.",
    },
    {
      level: 3,
      shortTitle: "Initial validation funding",
      description: "Initial funding secured for validation activities. Understanding of overall funding options and their requirements emerging.",
    },
    {
      level: 4,
      shortTitle: "Development funding secured",
      description: "Funding secured to initiate development. Pitch for next-stage funding prepared and ready.",
    },
    {
      level: 5,
      shortTitle: "Funding pitch tested",
      description: "Funding pitch tested with relevant audiences. Possible funding roadmap and first financial projections created.",
    },
    {
      level: 6,
      shortTitle: "Active funding discussions",
      description: "Pitch improved based on feedback. Active discussions with relevant funding sources underway.",
    },
    {
      level: 7,
      shortTitle: "Term sheet stage",
      description: "Term sheet level discussions ongoing with funding sources. All materials in place to pass due diligence.",
    },
    {
      level: 8,
      shortTitle: "Funding secured (12+ months)",
      description: "Secured funding for at least 12 months of operations. Financial monitoring and forecasting systems in place.",
    },
    {
      level: 9,
      shortTitle: "Long-term funding strategy",
      description: "Long-term funding strategy covering scale-up. Next funding prepared with established interest from suitable sources.",
    },
  ],
};

export const DIMENSION_ORDER: DimensionId[] = ["CRL", "TRL", "BRL", "IPRL", "TMRL", "FRL"];
