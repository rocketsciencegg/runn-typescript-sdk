"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOtherExpenses200Response = void 0;
var ListOtherExpenses200Response = (function () {
    function ListOtherExpenses200Response() {
    }
    ListOtherExpenses200Response.getAttributeTypeMap = function () {
        return ListOtherExpenses200Response.attributeTypeMap;
    };
    ListOtherExpenses200Response.discriminator = undefined;
    ListOtherExpenses200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectOtherExpense>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListOtherExpenses200Response;
}());
exports.ListOtherExpenses200Response = ListOtherExpenses200Response;
//# sourceMappingURL=listOtherExpenses200Response.js.map