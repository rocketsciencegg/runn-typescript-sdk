import { Reference } from './reference';
import { UpdatePersonRequestTagsInner } from './updatePersonRequestTagsInner';
export declare class UpdateProjectRequest {
    'name'?: string;
    'isConfirmed'?: boolean;
    'isArchived'?: boolean;
    'isTemplate'?: boolean;
    'budget'?: number;
    'expensesBudget'?: number;
    'clientId'?: number;
    'teamId'?: number;
    'pricingModel'?: UpdateProjectRequest.PricingModelEnum;
    'rateType'?: UpdateProjectRequest.RateTypeEnum;
    'references'?: Array<Reference>;
    'tags'?: Array<UpdatePersonRequestTagsInner>;
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
export declare namespace UpdateProjectRequest {
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
