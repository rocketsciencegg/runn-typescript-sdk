import { UpdateContractRequestRosteredDays } from './updateContractRequestRosteredDays';
export declare class UpdateContractRequest {
    'roleId'?: number;
    'startDate'?: string;
    'endDate'?: string;
    'employmentType'?: UpdateContractRequest.EmploymentTypeEnum;
    'costPerHour'?: number;
    'minutesPerDay'?: number;
    'rosteredDays'?: UpdateContractRequestRosteredDays;
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
export declare namespace UpdateContractRequest {
    enum EmploymentTypeEnum {
        Employee,
        Contractor
    }
}
