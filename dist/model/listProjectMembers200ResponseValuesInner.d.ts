export declare class ListProjectMembers200ResponseValuesInner {
    'id': number;
    'personId': number;
    'projectId': number;
    'roleId': number;
    'createdAt': Date;
    'isPlaceholder': boolean;
    'workstreamId': number;
    'updatedAt': Date;
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
