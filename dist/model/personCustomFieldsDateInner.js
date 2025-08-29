"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCustomFieldsDateInner = void 0;
var PersonCustomFieldsDateInner = (function () {
    function PersonCustomFieldsDateInner() {
    }
    PersonCustomFieldsDateInner.getAttributeTypeMap = function () {
        return PersonCustomFieldsDateInner.attributeTypeMap;
    };
    PersonCustomFieldsDateInner.discriminator = undefined;
    PersonCustomFieldsDateInner.attributeTypeMap = [
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
    return PersonCustomFieldsDateInner;
}());
exports.PersonCustomFieldsDateInner = PersonCustomFieldsDateInner;
//# sourceMappingURL=personCustomFieldsDateInner.js.map