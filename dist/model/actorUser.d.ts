export declare class ActorUser {
    'type': ActorUser.TypeEnum;
    'userId': number;
    'userEmail'?: string;
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
export declare namespace ActorUser {
    enum TypeEnum {
        User
    }
}
