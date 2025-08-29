"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectMembers200ResponseValuesInner = void 0;
var ListProjectMembers200ResponseValuesInner = (function () {
    function ListProjectMembers200ResponseValuesInner() {
    }
    ListProjectMembers200ResponseValuesInner.getAttributeTypeMap = function () {
        return ListProjectMembers200ResponseValuesInner.attributeTypeMap;
    };
    ListProjectMembers200ResponseValuesInner.discriminator = undefined;
    ListProjectMembers200ResponseValuesInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "isPlaceholder",
            "baseName": "isPlaceholder",
            "type": "boolean"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    return ListProjectMembers200ResponseValuesInner;
}());
exports.ListProjectMembers200ResponseValuesInner = ListProjectMembers200ResponseValuesInner;
//# sourceMappingURL=listProjectMembers200ResponseValuesInner.js.map