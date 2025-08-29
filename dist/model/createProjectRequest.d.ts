import { CreateProjectRequestAnyOf1FromTemplate } from './createProjectRequestAnyOf1FromTemplate';
import { Reference } from './reference';
export declare class CreateProjectRequest {
    'emoji'?: string;
    'name': string;
    'isConfirmed'?: boolean;
    'isTemplate'?: boolean;
    'budget'?: number;
    'expensesBudget'?: number;
    'clientId': number;
    'teamId'?: number;
    'pricingModel'?: CreateProjectRequest.PricingModelEnum;
    'rateCardId'?: number;
    'rateType'?: CreateProjectRequest.RateTypeEnum;
    'references'?: Array<Reference>;
    'managerIds'?: Set<number>;
    'fromTemplate': CreateProjectRequestAnyOf1FromTemplate;
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
export declare namespace CreateProjectRequest {
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
