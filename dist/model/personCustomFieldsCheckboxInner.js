"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCustomFieldsCheckboxInner = void 0;
var PersonCustomFieldsCheckboxInner = (function () {
    function PersonCustomFieldsCheckboxInner() {
    }
    PersonCustomFieldsCheckboxInner.getAttributeTypeMap = function () {
        return PersonCustomFieldsCheckboxInner.attributeTypeMap;
    };
    PersonCustomFieldsCheckboxInner.discriminator = undefined;
    PersonCustomFieldsCheckboxInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "boolean"
        }
    ];
    return PersonCustomFieldsCheckboxInner;
}());
exports.PersonCustomFieldsCheckboxInner = PersonCustomFieldsCheckboxInner;
//# sourceMappingURL=personCustomFieldsCheckboxInner.js.map