"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTeams200Response = void 0;
var ListTeams200Response = (function () {
    function ListTeams200Response() {
    }
    ListTeams200Response.getAttributeTypeMap = function () {
        return ListTeams200Response.attributeTypeMap;
    };
    ListTeams200Response.discriminator = undefined;
    ListTeams200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Team>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListTeams200Response;
}());
exports.ListTeams200Response = ListTeams200Response;
//# sourceMappingURL=listTeams200Response.js.map