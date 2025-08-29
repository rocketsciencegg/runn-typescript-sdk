import { ActualInput } from './actualInput';
export declare class CreateActualsBulkRequest {
    'actuals': Array<ActualInput>;
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
