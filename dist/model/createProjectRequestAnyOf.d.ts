import { Reference } from './reference';
export declare class CreateProjectRequestAnyOf {
    'emoji'?: string;
    'name': string;
    'isConfirmed'?: boolean;
    'isTemplate'?: boolean;
    'budget'?: number;
    'expensesBudget'?: number;
    'clientId': number;
    'teamId'?: number;
    'pricingModel'?: CreateProjectRequestAnyOf.PricingModelEnum;
    'rateCardId'?: number;
    'rateType'?: CreateProjectRequestAnyOf.RateTypeEnum;
    'references'?: Array<Reference>;
    'managerIds'?: Set<number>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CreateProjectRequestAnyOf {
    enum PricingModelEnum {
        Fp,
        Tm,
        Nb
    }
    enum RateTypeEnum {
        Hours,
        Days
    }
}
