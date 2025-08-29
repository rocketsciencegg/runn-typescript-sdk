"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPersonLeave200Response = void 0;
var ListPersonLeave200Response = (function () {
    function ListPersonLeave200Response() {
    }
    ListPersonLeave200Response.getAttributeTypeMap = function () {
        return ListPersonLeave200Response.attributeTypeMap;
    };
    ListPersonLeave200Response.discriminator = undefined;
    ListPersonLeave200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<TimeOff>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPersonLeave200Response;
}());
exports.ListPersonLeave200Response = ListPersonLeave200Response;
//# sourceMappingURL=listPersonLeave200Response.js.map