"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldText = void 0;
var CustomFieldText = (function () {
    function CustomFieldText() {
    }
    CustomFieldText.getAttributeTypeMap = function () {
        return CustomFieldText.attributeTypeMap;
    };
    CustomFieldText.discriminator = undefined;
    CustomFieldText.attributeTypeMap = [
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "CustomFieldText.ModelEnum"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "showInPlanner",
            "baseName": "showInPlanner",
            "type": "boolean"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        },
        {
            "name": "filterableInPlanner",
            "baseName": "filterableInPlanner",
            "type": "boolean"
        }
    ];
    return CustomFieldText;
}());
exports.CustomFieldText = CustomFieldText;
(function (CustomFieldText) {
    var ModelEnum;
    (function (ModelEnum) {
        ModelEnum[ModelEnum["Person"] = 'PERSON'] = "Person";
        ModelEnum[ModelEnum["Project"] = 'PROJECT'] = "Project";
    })(ModelEnum = CustomFieldText.ModelEnum || (CustomFieldText.ModelEnum = {}));
})(CustomFieldText || (exports.CustomFieldText = CustomFieldText = {}));
//# sourceMappingURL=customFieldText.js.map