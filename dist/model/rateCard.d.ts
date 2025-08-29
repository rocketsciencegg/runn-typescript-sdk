import { CreateRateCardRequestReferencesInner } from './createRateCardRequestReferencesInner';
import { RateCardRatesInner } from './rateCardRatesInner';
export declare class RateCard {
    'id': number;
    'name': string;
    'description': string;
    'isArchived': boolean;
    'references': Array<CreateRateCardRequestReferencesInner>;
    'isBlendedRateCard': boolean;
    'blendedRate': number;
    'rateType': RateCard.RateTypeEnum;
    'projectIds': Array<number>;
    'rates': Array<RateCardRatesInner>;
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
export declare namespace RateCard {
    enum RateTypeEnum {
        Hours,
        Days
    }
}
