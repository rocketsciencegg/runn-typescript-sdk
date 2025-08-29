export declare class UnprocessableEntity {
    'error': UnprocessableEntity.ErrorEnum;
    'message': string;
    'statusCode': UnprocessableEntity.StatusCodeEnum;
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
export declare namespace UnprocessableEntity {
    enum ErrorEnum {
        UnprocessableEntity
    }
    enum StatusCodeEnum {
        NUMBER_422
    }
}
