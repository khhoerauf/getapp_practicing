export const domain = Cypress.config().baseUrl;

// No canonical // Robot content=`noindex,follow`
export const noCanonicalNoIndexFollow = [
    // Pricing models > Subscription based & One time license
    `education-childcare-software/learning-management-system-lms/p/subscription/`,
    `customer-service-support-software/live-chat/p/one-time-license/`,
  
    // Geogrpahies > United States, UK and Canada
    `nonprofit-software/nonprofit/geo/united-states/`,
    `nonprofit-software/nonprofit/geo/united-kingdom/`,
    `nonprofit-software/nonprofit/geo/canada/`,
  
    // Less than 5 results
    `collaboration-software/remote-work/w/alooma/`,
  
    // More than 1 filter but less than 4
    `security-software/anti-spam/?typecustomers_slug%5B%5D=public-administrations&oses_slug=mac&sort=relevance`,
  
    // With Pages
    `hr-employee-management-software/human-resources/geo/united-states/?page=2`
  ];
  
  // Yes canonical // Doesnt have Robot content
  export const yesCanonicalNoRobot = [
    // Unfiltered
    `security-software/anti-spam/`,
  
    // One filter > EXCEPT for Pricing models, Geographies and Integrated with. These ones have specific cases.
    `business-intelligence-analytics-software/data-analysis/p/free/`,
    `business-intelligence-analytics-software/data-analysis/p/free-trial/`,
    `customer-management-software/crm/org/freelancers/`,
    `real-estate-property-software/property-management/f/api/`,
  
    // Geographies: except US, UK and Canada
    `collaboration-software/remote-work/geo/brazil/`,
    `business-intelligence-analytics-software/business-intelligence/geo/germany/`,
    `collaboration-software/remote-work/geo/australia/`,
    `collaboration-software/remote-work/geo/china/`,
    `collaboration-software/remote-work/geo/india/`,
    `collaboration-software/remote-work/geo/japan/`,
    `collaboration-software/remote-work/geo/mexico/`,
  
    // Integrated with >=5 results
    `collaboration-software/remote-work/w/quickbooks-online-edition/`,
  
    // With Pages
    `education-childcare-software/learning-management-system-lms/page-2/`,
    `collaboration-software/remote-work/os/mac/?page=2`,
    `collaboration-software/remote-work/geo/china/?page=2`
  ];
  
  // No Canonical, Robot=noindex,nofollow
  export const noCanonicalNoIndexNoFollow = [
    // = 4 filter
    `collaboration-software/remote-work/?typecustomers_slug%5B%5D=large-enterprises&pricingcategories_slug%5B%5D=free-trial&tag_slug%5B%5D=api&integrated_with_slug=microsoft-outlook&sort=relevance`,
    // > 4 filter
    `collaboration-software/remote-work/?geographies_slug%5B%5D=germany&typecustomers_slug%5B%5D=large-enterprises&pricingcategories_slug%5B%5D=free-trial&tag_slug%5B%5D=api&integrated_with_slug=microsoft-outlook&sort=relevance`
  ];
  

/*
`

Pricing models
`marketing-software/campaign-management/p/free/`,
`marketing-software/campaign-management/?pricingcategories_slug%5B%5D=free&pricingcategories_slug%5B%5D=subscription&sort=relevance`,
`marketing-software/campaign-management/?pricingcategories_slug%5B%5D=free&pricingcategories_slug%5B%5D=subscription&pricingcategories_slug%5B%5D=open-source&pricingcategories_slug%5B%5D=one-time-license&pricingcategories_slug%5B%5D=free-trial&sort=relevance`

Devices supported


Organization types

Geographies served

Customer rating

Integarted with

Features

*/