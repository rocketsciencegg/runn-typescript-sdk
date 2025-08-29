import { CreatePersonRequestRosteredDays } from './createPersonRequestRosteredDays';
import { Reference } from './reference';
import { UpdatePersonRequestTagsInner } from './updatePersonRequestTagsInner';
export declare class CreatePersonRequest {
    'firstName': string;
    'lastName': string;
    'email'?: string;
    'holidaysGroupId'?: number;
    'tags'?: Array<UpdatePersonRequestTagsInner>;
    'references'?: Array<Reference>;
    'roleId': number;
    'startDate'?: string;
    'endDate'?: string;
    'employmentType'?: CreatePersonRequest.EmploymentTypeEnum;
    'costPerHour'?: number;
    'minutesPerDay'?: number;
    'rosteredDays'?: CreatePersonRequestRosteredDays;
    'jobTitle'?: string;
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
export declare namespace CreatePersonRequest {
    enum EmploymentTypeEnum {
        Employee,
        Contractor
    }
}
