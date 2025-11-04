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
export interface IPrivacyPolicy {
  content1: string;
  content2: string;
  imageUrl: string;
  section1: string;
  section2: string;
  tiltleImage: string;
  title: string;
}
