"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSkills200Response = void 0;
var ListSkills200Response = (function () {
    function ListSkills200Response() {
    }
    ListSkills200Response.getAttributeTypeMap = function () {
        return ListSkills200Response.attributeTypeMap;
    };
    ListSkills200Response.discriminator = undefined;
    ListSkills200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Skill>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListSkills200Response;
}());
exports.ListSkills200Response = ListSkills200Response;
//# sourceMappingURL=listSkills200Response.js.map