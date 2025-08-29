import { PersonCustomFields } from './personCustomFields';
import { Reference } from './reference';
import { Tag } from './tag';
export declare class Project {
    'id': number;
    'name': string;
    'isTemplate': boolean;
    'isArchived': boolean;
    'isConfirmed': boolean;
    'pricingModel': Project.PricingModelEnum;
    'rateType': Project.RateTypeEnum;
    'teamId': number;
    'budget': number;
    'expensesBudget': number;
    'references': Array<Reference>;
    'clientId': number;
    'rateCardId': number;
    'customFields': PersonCustomFields;
    'managerIds': Array<number>;
    'tags': Array<Tag>;
    'createdAt': Date;
    'updatedAt': Date;
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
export declare namespace Project {
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
