export declare class ActorApi {
    'type': ActorApi.TypeEnum;
    'tokenId': number;
    'tokenName': string;
    'apiVersion': string;
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
export declare namespace ActorApi {
    enum TypeEnum {
        Api
    }
}
