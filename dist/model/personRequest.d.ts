export declare class PersonRequest {
    'id': number;
    'personId': number;
    'projectId': number;
    'status': PersonRequest.StatusEnum;
    'requesterId': number;
    'updaterId': number;
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
export declare namespace PersonRequest {
    enum StatusEnum {
        NeedToHire,
        Requested,
        Pending
    }
}
