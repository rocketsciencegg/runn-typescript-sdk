"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBudgetRoles200Response = void 0;
var ListBudgetRoles200Response = (function () {
    function ListBudgetRoles200Response() {
    }
    ListBudgetRoles200Response.getAttributeTypeMap = function () {
        return ListBudgetRoles200Response.attributeTypeMap;
    };
    ListBudgetRoles200Response.discriminator = undefined;
    ListBudgetRoles200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectBudgetRole>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListBudgetRoles200Response;
}());
exports.ListBudgetRoles200Response = ListBudgetRoles200Response;
//# sourceMappingURL=listBudgetRoles200Response.js.map