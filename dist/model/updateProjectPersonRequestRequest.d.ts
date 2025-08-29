export declare class UpdateProjectPersonRequestRequest {
    'status': UpdateProjectPersonRequestRequest.StatusEnum;
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
export declare namespace UpdateProjectPersonRequestRequest {
    enum StatusEnum {
        NeedToHire,
        Requested,
        Pending
    }
}
