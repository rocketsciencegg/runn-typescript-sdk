"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInvitations200Response = void 0;
var ListInvitations200Response = (function () {
    function ListInvitations200Response() {
    }
    ListInvitations200Response.getAttributeTypeMap = function () {
        return ListInvitations200Response.attributeTypeMap;
    };
    ListInvitations200Response.discriminator = undefined;
    ListInvitations200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Invitation>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListInvitations200Response;
}());
exports.ListInvitations200Response = ListInvitations200Response;
//# sourceMappingURL=listInvitations200Response.js.map