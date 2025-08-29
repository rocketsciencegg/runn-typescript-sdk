"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCustomFieldsTextInner = void 0;
var PersonCustomFieldsTextInner = (function () {
    function PersonCustomFieldsTextInner() {
    }
    PersonCustomFieldsTextInner.getAttributeTypeMap = function () {
        return PersonCustomFieldsTextInner.attributeTypeMap;
    };
    PersonCustomFieldsTextInner.discriminator = undefined;
    PersonCustomFieldsTextInner.attributeTypeMap = [
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
            "type": "string"
        }
    ];
    return PersonCustomFieldsTextInner;
}());
exports.PersonCustomFieldsTextInner = PersonCustomFieldsTextInner;
//# sourceMappingURL=personCustomFieldsTextInner.js.map