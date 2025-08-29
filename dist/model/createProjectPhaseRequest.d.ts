export declare class CreateProjectPhaseRequest {
    'name': string;
    'startDate': string;
    'endDate': string;
    'color': CreateProjectPhaseRequest.ColorEnum;
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
export declare namespace CreateProjectPhaseRequest {
    enum ColorEnum {
        _67D0D5,
        Fdcd4F,
        F191Cc,
        B19De6,
        _9Ce277,
        Cd97Da,
        _84Dba0,
        Ffb077,
        _9Cc5Bf,
        E8C681,
        _6899F1,
        Ddae9F
    }
}
