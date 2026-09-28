export interface CompanyInfo {
  legalName: string;
  brandName: string;
  roleTitle: string;
  arn: string;
  owner: string;
  email: string;
  mobile: string;
  whatsapp: string;
  displayPhone: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  team: Array<{
    name: string;
    role: string;
    title: string;
  }>;
  disclosures: {
    marketRiskNotice: string;
    generalDisclosure: string;
    distributorRoleNotice: string;
    calculatorNotice: string;
    educationalNotice: string;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  legalName: "ATTITUDE FINANCIAL SERVICES PVT. LTD.",
  brandName: "ATTITUDE",
  roleTitle: "AMFI-Registered Mutual Fund Distributor",
  arn: "362861",
  owner: "PRASHANT GURUBASU KEMPWAD",
  email: "prashant@attitudefinancialservices.com",
  mobile: "9322230255",
  whatsapp: "919322230255",
  displayPhone: "+91 93222 30255",
  address: {
    line1: "Flat No. 201, Adityasai Landmark",
    line2: "2nd Floor, Near Ram-Mandir",
    area: "Near Ram-Mandir",
    city: "Sangli",
    state: "Maharashtra",
    country: "India",
    full: "Flat No. 201, Adityasai Landmark, 2nd Floor, Near Ram-Mandir, Sangli, Maharashtra, India"
  },
  team: [
    {
      name: "PRASHANT GURUBASU KEMPWAD",
      role: "Principal / Owner",
      title: "Owner & Principal Distributor"
    },
    {
      name: "FIROJ SUTAR",
      role: "Manager",
      title: "Operations & Distribution Manager"
    },
    {
      name: "CHIDANAND SHIRASHYAD",
      role: "Assistant",
      title: "Investor Support & Transaction Assistant"
    }
  ],
  disclosures: {
    marketRiskNotice: "Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.",
    generalDisclosure: "ATTITUDE FINANCIAL SERVICES PVT. LTD. operates as an AMFI-Registered Mutual Fund Distributor holding ARN 362861. All content, tools, and calculators on this website are provided strictly for investor awareness and educational purposes. The company functions solely in a distribution and execution support capacity without outcome representations. Investors must independently review applicable Scheme Information Documents (SID) and Key Information Memorandums (KIM) before transacting.",
    distributorRoleNotice: "As an AMFI-Registered Mutual Fund Distributor (ARN-362861), ATTITUDE FINANCIAL SERVICES PVT. LTD. facilitates mutual fund scheme transactions and provides general investor support. Services are strictly execution-oriented in regular plans of mutual fund schemes.",
    calculatorNotice: "Calculations and visualizations shown are purely illustrative and intended to help investors understand the mechanics of compounding, systematic investing, and inflation factors. They do not constitute promises, forecasts, or assurances of future returns.",
    educationalNotice: "All articles and educational guides are designed for general investor literacy and category awareness in accordance with AMFI guidelines."
  }
};
