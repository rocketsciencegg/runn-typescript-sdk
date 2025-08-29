export declare class Actor {
    'type': Actor.TypeEnum;
    'userId': number;
    'userEmail'?: string;
    'tokenId': number;
    'tokenName': string;
    'apiVersion': string;
    'id': number;
    'name': string;
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
export declare namespace Actor {
    enum TypeEnum {
        User,
        RunnSupport,
        Api,
        Csv,
        Integration,
        System
    }
}
