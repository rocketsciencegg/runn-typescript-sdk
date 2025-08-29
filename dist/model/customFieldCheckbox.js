"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldCheckbox = void 0;
var CustomFieldCheckbox = (function () {
    function CustomFieldCheckbox() {
    }
    CustomFieldCheckbox.getAttributeTypeMap = function () {
        return CustomFieldCheckbox.attributeTypeMap;
    };
    CustomFieldCheckbox.discriminator = undefined;
    CustomFieldCheckbox.attributeTypeMap = [
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
            "type": "CustomFieldCheckbox.ModelEnum"
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
    return CustomFieldCheckbox;
}());
exports.CustomFieldCheckbox = CustomFieldCheckbox;
(function (CustomFieldCheckbox) {
    var ModelEnum;
    (function (ModelEnum) {
        ModelEnum[ModelEnum["Person"] = 'PERSON'] = "Person";
        ModelEnum[ModelEnum["Project"] = 'PROJECT'] = "Project";
    })(ModelEnum = CustomFieldCheckbox.ModelEnum || (CustomFieldCheckbox.ModelEnum = {}));
})(CustomFieldCheckbox || (exports.CustomFieldCheckbox = CustomFieldCheckbox = {}));
//# sourceMappingURL=customFieldCheckbox.js.map