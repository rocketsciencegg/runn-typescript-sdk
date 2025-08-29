"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDateFieldCollection = void 0;
var CustomDateFieldCollection = (function () {
    function CustomDateFieldCollection() {
    }
    CustomDateFieldCollection.getAttributeTypeMap = function () {
        return CustomDateFieldCollection.attributeTypeMap;
    };
    CustomDateFieldCollection.discriminator = undefined;
    CustomDateFieldCollection.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomDateFieldCollection.TypeEnum"
        },
        {
            "name": "customDateId",
            "baseName": "customDateId",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return CustomDateFieldCollection;
}());
exports.CustomDateFieldCollection = CustomDateFieldCollection;
(function (CustomDateFieldCollection) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Date"] = 'date'] = "Date";
    })(TypeEnum = CustomDateFieldCollection.TypeEnum || (CustomDateFieldCollection.TypeEnum = {}));
})(CustomDateFieldCollection || (exports.CustomDateFieldCollection = CustomDateFieldCollection = {}));
//# sourceMappingURL=customDateFieldCollection.js.map