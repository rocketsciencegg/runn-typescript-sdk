"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClients200Response = void 0;
var ListClients200Response = (function () {
    function ListClients200Response() {
    }
    ListClients200Response.getAttributeTypeMap = function () {
        return ListClients200Response.attributeTypeMap;
    };
    ListClients200Response.discriminator = undefined;
    ListClients200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Client>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListClients200Response;
}());
exports.ListClients200Response = ListClients200Response;
//# sourceMappingURL=listClients200Response.js.map