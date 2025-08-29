"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPeopleSkills200Response = void 0;
var ListPeopleSkills200Response = (function () {
    function ListPeopleSkills200Response() {
    }
    ListPeopleSkills200Response.getAttributeTypeMap = function () {
        return ListPeopleSkills200Response.attributeTypeMap;
    };
    ListPeopleSkills200Response.discriminator = undefined;
    ListPeopleSkills200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<PersonCompetency>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPeopleSkills200Response;
}());
exports.ListPeopleSkills200Response = ListPeopleSkills200Response;
//# sourceMappingURL=listPeopleSkills200Response.js.map