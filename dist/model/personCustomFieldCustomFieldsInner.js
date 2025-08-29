"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCustomFieldCustomFieldsInner = void 0;
var PersonCustomFieldCustomFieldsInner = (function () {
    function PersonCustomFieldCustomFieldsInner() {
    }
    PersonCustomFieldCustomFieldsInner.getAttributeTypeMap = function () {
        return PersonCustomFieldCustomFieldsInner.attributeTypeMap;
    };
    PersonCustomFieldCustomFieldsInner.discriminator = "type";
    PersonCustomFieldCustomFieldsInner.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PersonCustomFieldCustomFieldsInner.TypeEnum"
        },
        {
            "name": "customTextId",
            "baseName": "customTextId",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<PersonCustomFieldsSelectInnerValuesInner>"
        },
        {
            "name": "customDateId",
            "baseName": "customDateId",
            "type": "number"
        },
        {
            "name": "customCheckboxId",
            "baseName": "customCheckboxId",
            "type": "number"
        },
        {
            "name": "customSelectId",
            "baseName": "customSelectId",
            "type": "number"
        }
    ];
    return PersonCustomFieldCustomFieldsInner;
}());
exports.PersonCustomFieldCustomFieldsInner = PersonCustomFieldCustomFieldsInner;
(function (PersonCustomFieldCustomFieldsInner) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Text"] = 'text'] = "Text";
        TypeEnum[TypeEnum["Date"] = 'date'] = "Date";
        TypeEnum[TypeEnum["Checkbox"] = 'checkbox'] = "Checkbox";
        TypeEnum[TypeEnum["Select"] = 'select'] = "Select";
    })(TypeEnum = PersonCustomFieldCustomFieldsInner.TypeEnum || (PersonCustomFieldCustomFieldsInner.TypeEnum = {}));
})(PersonCustomFieldCustomFieldsInner || (exports.PersonCustomFieldCustomFieldsInner = PersonCustomFieldCustomFieldsInner = {}));
//# sourceMappingURL=personCustomFieldCustomFieldsInner.js.map