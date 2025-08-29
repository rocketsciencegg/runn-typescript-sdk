"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCheckboxFieldCollection = void 0;
var CustomCheckboxFieldCollection = (function () {
    function CustomCheckboxFieldCollection() {
    }
    CustomCheckboxFieldCollection.getAttributeTypeMap = function () {
        return CustomCheckboxFieldCollection.attributeTypeMap;
    };
    CustomCheckboxFieldCollection.discriminator = undefined;
    CustomCheckboxFieldCollection.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomCheckboxFieldCollection.TypeEnum"
        },
        {
            "name": "customCheckboxId",
            "baseName": "customCheckboxId",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "boolean"
        }
    ];
    return CustomCheckboxFieldCollection;
}());
exports.CustomCheckboxFieldCollection = CustomCheckboxFieldCollection;
(function (CustomCheckboxFieldCollection) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Checkbox"] = 'checkbox'] = "Checkbox";
    })(TypeEnum = CustomCheckboxFieldCollection.TypeEnum || (CustomCheckboxFieldCollection.TypeEnum = {}));
})(CustomCheckboxFieldCollection || (exports.CustomCheckboxFieldCollection = CustomCheckboxFieldCollection = {}));
//# sourceMappingURL=customCheckboxFieldCollection.js.map