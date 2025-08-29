import { CreateRateCardRequestReferencesInner } from './createRateCardRequestReferencesInner';
export declare class CreateRateCardRequest {
    'name': string;
    'description': string;
    'references': Array<CreateRateCardRequestReferencesInner>;
    'isBlendedRateCard': boolean;
    'blendedRate': number;
    'rateType': CreateRateCardRequest.RateTypeEnum;
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
export declare namespace CreateRateCardRequest {
    enum RateTypeEnum {
        Hours,
        Days
    }
}
