"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCustomFields = void 0;
var PersonCustomFields = (function () {
    function PersonCustomFields() {
    }
    PersonCustomFields.getAttributeTypeMap = function () {
        return PersonCustomFields.attributeTypeMap;
    };
    PersonCustomFields.discriminator = undefined;
    PersonCustomFields.attributeTypeMap = [
        {
            "name": "select",
            "baseName": "select",
            "type": "Array<PersonCustomFieldsSelectInner>"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "Array<PersonCustomFieldsTextInner>"
        },
        {
            "name": "checkbox",
            "baseName": "checkbox",
            "type": "Array<PersonCustomFieldsCheckboxInner>"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Array<PersonCustomFieldsDateInner>"
        }
    ];
    return PersonCustomFields;
}());
exports.PersonCustomFields = PersonCustomFields;
//# sourceMappingURL=personCustomFields.js.map