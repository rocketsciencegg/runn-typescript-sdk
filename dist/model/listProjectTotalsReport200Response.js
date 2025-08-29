"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectTotalsReport200Response = void 0;
var ListProjectTotalsReport200Response = (function () {
    function ListProjectTotalsReport200Response() {
    }
    ListProjectTotalsReport200Response.getAttributeTypeMap = function () {
        return ListProjectTotalsReport200Response.attributeTypeMap;
    };
    ListProjectTotalsReport200Response.discriminator = undefined;
    ListProjectTotalsReport200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectAggregate>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListProjectTotalsReport200Response;
}());
exports.ListProjectTotalsReport200Response = ListProjectTotalsReport200Response;
//# sourceMappingURL=listProjectTotalsReport200Response.js.map