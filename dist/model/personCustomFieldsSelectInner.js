"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCustomFieldsSelectInner = void 0;
var PersonCustomFieldsSelectInner = (function () {
    function PersonCustomFieldsSelectInner() {
    }
    PersonCustomFieldsSelectInner.getAttributeTypeMap = function () {
        return PersonCustomFieldsSelectInner.attributeTypeMap;
    };
    PersonCustomFieldsSelectInner.discriminator = undefined;
    PersonCustomFieldsSelectInner.attributeTypeMap = [
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
            "name": "values",
            "baseName": "values",
            "type": "Array<PersonCustomFieldsSelectInnerValuesInner>"
        }
    ];
    return PersonCustomFieldsSelectInner;
}());
exports.PersonCustomFieldsSelectInner = PersonCustomFieldsSelectInner;
//# sourceMappingURL=personCustomFieldsSelectInner.js.map