export declare class ProjectBudgetRole {
    'projectId': number;
    'roleId': number;
    'estimatedMinutes': number;
    'estimatedBudget': number;
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
