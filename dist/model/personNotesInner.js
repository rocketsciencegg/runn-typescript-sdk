"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonNotesInner = void 0;
var PersonNotesInner = (function () {
    function PersonNotesInner() {
    }
    PersonNotesInner.getAttributeTypeMap = function () {
        return PersonNotesInner.attributeTypeMap;
    };
    PersonNotesInner.discriminator = undefined;
    PersonNotesInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        }
    ];
    return PersonNotesInner;
}());
exports.PersonNotesInner = PersonNotesInner;
//# sourceMappingURL=personNotesInner.js.map