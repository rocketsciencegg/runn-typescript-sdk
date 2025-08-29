"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPeopleCustomFields200Response = void 0;
var ListPeopleCustomFields200Response = (function () {
    function ListPeopleCustomFields200Response() {
    }
    ListPeopleCustomFields200Response.getAttributeTypeMap = function () {
        return ListPeopleCustomFields200Response.attributeTypeMap;
    };
    ListPeopleCustomFields200Response.discriminator = undefined;
    ListPeopleCustomFields200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<PersonCustomField>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPeopleCustomFields200Response;
}());
exports.ListPeopleCustomFields200Response = ListPeopleCustomFields200Response;
//# sourceMappingURL=listPeopleCustomFields200Response.js.map