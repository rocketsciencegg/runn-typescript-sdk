"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectRates200Response = void 0;
var ListProjectRates200Response = (function () {
    function ListProjectRates200Response() {
    }
    ListProjectRates200Response.getAttributeTypeMap = function () {
        return ListProjectRates200Response.attributeTypeMap;
    };
    ListProjectRates200Response.discriminator = undefined;
    ListProjectRates200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectRate>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListProjectRates200Response;
}());
exports.ListProjectRates200Response = ListProjectRates200Response;
//# sourceMappingURL=listProjectRates200Response.js.map