// src/types/locales.d.ts
export interface LocaleTranslations {
    benefitsSlider: {
      title: string;
      description: string;
      descriptionButton: string;
      benefits: Array<{
        name: string;
        description: string;
      }>;
    };
    pricing: {
      title: string;
      description: string;
      perYear: string;
      joinWaitlist: string;
      tiers: Array<{
        name: string;
        description: string;
        features: string[];
      }>;
    };
    nav: {
      rollingOutSoon: string;
      dallasFortWorth: string;
      joinWaitlist: string;
      forTradespeople: string;
    };
    cookieConsent: {
      message: string;
      noThirdParty: string;
      accept: string;
      decline: string;
    };
    footer: {
      anyQuestions: string;
      contactUs: string;
      copyright: string;
      privacyPolicy: string;
      termsOfUse: string;
      legal: string;
    };
    professionals: {
      hero: {
        title: string;
        titleHighlight: string;
        description: string;
        waitlist: string;
      };
    };
    howTo: {
      title: string;
      description: string;
      descriptionButton: string;
    };
    stepOne: {
      title: string;
      description: string;
    };
    stepTwo: {
      title: string;
      description: string;
    };
    stepThree: {
      title: string;
      description: string;
    };
    [key: string]:
      | string
      | ({ [key: string]: string } & {})
      | (() => Promise<Record<string, unknown>>); // Using unknown and not any
  }