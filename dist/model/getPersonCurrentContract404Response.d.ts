export declare class GetPersonCurrentContract404Response {
    'error': GetPersonCurrentContract404Response.ErrorEnum;
    'message': string;
    'statusCode': GetPersonCurrentContract404Response.StatusCodeEnum;
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
export declare namespace GetPersonCurrentContract404Response {
    enum ErrorEnum {
        NotFound
    }
    enum StatusCodeEnum {
        NUMBER_404
    }
}
