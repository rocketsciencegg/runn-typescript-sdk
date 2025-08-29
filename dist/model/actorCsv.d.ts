export declare class ActorCsv {
    'type': ActorCsv.TypeEnum;
    'userId'?: number;
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
export declare namespace ActorCsv {
    enum TypeEnum {
        Csv
    }
}
