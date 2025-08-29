"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPeopleNotes200Response = void 0;
var ListPeopleNotes200Response = (function () {
    function ListPeopleNotes200Response() {
    }
    ListPeopleNotes200Response.getAttributeTypeMap = function () {
        return ListPeopleNotes200Response.attributeTypeMap;
    };
    ListPeopleNotes200Response.discriminator = undefined;
    ListPeopleNotes200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<PersonNote>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPeopleNotes200Response;
}());
exports.ListPeopleNotes200Response = ListPeopleNotes200Response;
//# sourceMappingURL=listPeopleNotes200Response.js.map