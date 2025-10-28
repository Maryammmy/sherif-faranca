export interface ILanguage {
  code: string;
  label: string;
  flag: string;
}
export interface ISubscription {
  afterPrice: number;
  beforePrice: number;
  discountPercentage: number;
  features: string[];
  description: string;
  freeTrialDays: number;
  hasFreeTrial: boolean;
  id: number;
  isOriginalPrice: boolean;
  isSpecialOffer: boolean;
  isTimeLimited: boolean;
  planName: string;
  timeEnd: string;
}
