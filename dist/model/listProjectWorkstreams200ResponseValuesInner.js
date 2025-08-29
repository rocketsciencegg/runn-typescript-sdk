"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectWorkstreams200ResponseValuesInner = void 0;
var ListProjectWorkstreams200ResponseValuesInner = (function () {
    function ListProjectWorkstreams200ResponseValuesInner() {
    }
    ListProjectWorkstreams200ResponseValuesInner.getAttributeTypeMap = function () {
        return ListProjectWorkstreams200ResponseValuesInner.attributeTypeMap;
    };
    ListProjectWorkstreams200ResponseValuesInner.discriminator = undefined;
    ListProjectWorkstreams200ResponseValuesInner.attributeTypeMap = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    return ListProjectWorkstreams200ResponseValuesInner;
}());
exports.ListProjectWorkstreams200ResponseValuesInner = ListProjectWorkstreams200ResponseValuesInner;
//# sourceMappingURL=listProjectWorkstreams200ResponseValuesInner.js.map