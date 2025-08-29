import { CreatePersonRequestRosteredDays } from './createPersonRequestRosteredDays';
export declare class ContractInput {
    'roleId': number;
    'startDate'?: string;
    'endDate'?: string;
    'employmentType'?: ContractInput.EmploymentTypeEnum;
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
export declare namespace ContractInput {
    enum EmploymentTypeEnum {
        Employee,
        Contractor
    }
}
