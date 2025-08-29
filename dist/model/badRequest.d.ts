export declare class BadRequest {
    'error': BadRequest.ErrorEnum;
    'message': string;
    'statusCode': BadRequest.StatusCodeEnum;
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
export declare namespace BadRequest {
    enum ErrorEnum {
        BadRequest
    }
    enum StatusCodeEnum {
        NUMBER_400
    }
}
