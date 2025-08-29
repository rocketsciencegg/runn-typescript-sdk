"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonNote = void 0;
var PersonNote = (function () {
    function PersonNote() {
    }
    PersonNote.getAttributeTypeMap = function () {
        return PersonNote.attributeTypeMap;
    };
    PersonNote.discriminator = undefined;
    PersonNote.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "createdByEmail",
            "baseName": "createdByEmail",
            "type": "string"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    return PersonNote;
}());
exports.PersonNote = PersonNote;
//# sourceMappingURL=personNote.js.map