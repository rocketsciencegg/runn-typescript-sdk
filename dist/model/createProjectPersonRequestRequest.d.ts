export declare class CreateProjectPersonRequestRequest {
    'personId': number;
    'status': CreateProjectPersonRequestRequest.StatusEnum;
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
export declare namespace CreateProjectPersonRequestRequest {
    enum StatusEnum {
        NeedToHire,
        Requested,
        Pending
    }
}
