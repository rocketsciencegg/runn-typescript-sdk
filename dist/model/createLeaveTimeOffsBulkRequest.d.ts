import { TimeOffLeaveInput } from './timeOffLeaveInput';
export declare class CreateLeaveTimeOffsBulkRequest {
    'timeOffs': Array<TimeOffLeaveInput>;
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
