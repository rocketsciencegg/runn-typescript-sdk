"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSelectFieldCollection = void 0;
var CustomSelectFieldCollection = (function () {
    function CustomSelectFieldCollection() {
    }
    CustomSelectFieldCollection.getAttributeTypeMap = function () {
        return CustomSelectFieldCollection.attributeTypeMap;
    };
    CustomSelectFieldCollection.discriminator = undefined;
    CustomSelectFieldCollection.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomSelectFieldCollection.TypeEnum"
        },
        {
            "name": "customSelectId",
            "baseName": "customSelectId",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<PersonCustomFieldsSelectInnerValuesInner>"
        }
    ];
    return CustomSelectFieldCollection;
}());
exports.CustomSelectFieldCollection = CustomSelectFieldCollection;
(function (CustomSelectFieldCollection) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Select"] = 'select'] = "Select";
    })(TypeEnum = CustomSelectFieldCollection.TypeEnum || (CustomSelectFieldCollection.TypeEnum = {}));
})(CustomSelectFieldCollection || (exports.CustomSelectFieldCollection = CustomSelectFieldCollection = {}));
//# sourceMappingURL=customSelectFieldCollection.js.map