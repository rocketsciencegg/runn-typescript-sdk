export declare class ActorIntegration {
    'type': ActorIntegration.TypeEnum;
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
export declare namespace ActorIntegration {
    enum TypeEnum {
        Integration
    }
}
