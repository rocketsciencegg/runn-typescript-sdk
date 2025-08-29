import { RateCardRatesInnerRole } from './rateCardRatesInnerRole';
export declare class RateCardRatesInner {
    'role': RateCardRatesInnerRole;
    'rateHourly': number;
    'rateDaily': number;
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
