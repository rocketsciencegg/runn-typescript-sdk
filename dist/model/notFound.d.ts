export declare class NotFound {
    'error': NotFound.ErrorEnum;
    'message': string;
    'statusCode': NotFound.StatusCodeEnum;
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
export declare namespace NotFound {
    enum ErrorEnum {
        NotFound
    }
    enum StatusCodeEnum {
        NUMBER_404
    }
}
