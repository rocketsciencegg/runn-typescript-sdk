export declare class UpdateProjectPersonRequest200Response {
    'id': number;
    'status': UpdateProjectPersonRequest200Response.StatusEnum;
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
export declare namespace UpdateProjectPersonRequest200Response {
    enum StatusEnum {
        NeedToHire,
        Requested,
        Pending
    }
}
