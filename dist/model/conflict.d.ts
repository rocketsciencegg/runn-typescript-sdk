export declare class Conflict {
    'error': Conflict.ErrorEnum;
    'message': string;
    'statusCode': Conflict.StatusCodeEnum;
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
export declare namespace Conflict {
    enum ErrorEnum {
        Conflict
    }
    enum StatusCodeEnum {
        NUMBER_409
    }
}
