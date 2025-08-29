"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCustomField = void 0;
var PersonCustomField = (function () {
    function PersonCustomField() {
    }
    PersonCustomField.getAttributeTypeMap = function () {
        return PersonCustomField.attributeTypeMap;
    };
    PersonCustomField.discriminator = undefined;
    PersonCustomField.attributeTypeMap = [
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "customFields",
            "baseName": "customFields",
            "type": "Array<PersonCustomFieldCustomFieldsInner>"
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
    return PersonCustomField;
}());
exports.PersonCustomField = PersonCustomField;
//# sourceMappingURL=personCustomField.js.map