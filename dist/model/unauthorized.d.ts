export declare class Unauthorized {
    'error': Unauthorized.ErrorEnum;
    'message': Unauthorized.MessageEnum;
    'statusCode': Unauthorized.StatusCodeEnum;
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
export declare namespace Unauthorized {
    enum ErrorEnum {
        Unauthorized
    }
    enum MessageEnum {
        Unauthorized
    }
    enum StatusCodeEnum {
        NUMBER_401
    }
}
