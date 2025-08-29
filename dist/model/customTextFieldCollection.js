"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTextFieldCollection = void 0;
var CustomTextFieldCollection = (function () {
    function CustomTextFieldCollection() {
    }
    CustomTextFieldCollection.getAttributeTypeMap = function () {
        return CustomTextFieldCollection.attributeTypeMap;
    };
    CustomTextFieldCollection.discriminator = undefined;
    CustomTextFieldCollection.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomTextFieldCollection.TypeEnum"
        },
        {
            "name": "customTextId",
            "baseName": "customTextId",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return CustomTextFieldCollection;
}());
exports.CustomTextFieldCollection = CustomTextFieldCollection;
(function (CustomTextFieldCollection) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Text"] = 'text'] = "Text";
    })(TypeEnum = CustomTextFieldCollection.TypeEnum || (CustomTextFieldCollection.TypeEnum = {}));
})(CustomTextFieldCollection || (exports.CustomTextFieldCollection = CustomTextFieldCollection = {}));
//# sourceMappingURL=customTextFieldCollection.js.map