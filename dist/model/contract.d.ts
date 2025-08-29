import { RosteredDays } from './rosteredDays';
export declare class Contract {
    'id': number;
    'costPerHour': number;
    'employmentType': string;
    'minutesPerDay': number;
    'rosteredDays': RosteredDays;
    'startDate': string;
    'endDate': string;
    'roleId': number;
    'personId': number;
    'jobTitle': string;
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
