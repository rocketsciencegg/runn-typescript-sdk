"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldDate = void 0;
var CustomFieldDate = (function () {
    function CustomFieldDate() {
    }
    CustomFieldDate.getAttributeTypeMap = function () {
        return CustomFieldDate.attributeTypeMap;
    };
    CustomFieldDate.discriminator = undefined;
    CustomFieldDate.attributeTypeMap = [
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
            "type": "CustomFieldDate.ModelEnum"
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
    return CustomFieldDate;
}());
exports.CustomFieldDate = CustomFieldDate;
(function (CustomFieldDate) {
    var ModelEnum;
    (function (ModelEnum) {
        ModelEnum[ModelEnum["Person"] = 'PERSON'] = "Person";
        ModelEnum[ModelEnum["Project"] = 'PROJECT'] = "Project";
    })(ModelEnum = CustomFieldDate.ModelEnum || (CustomFieldDate.ModelEnum = {}));
})(CustomFieldDate || (exports.CustomFieldDate = CustomFieldDate = {}));
//# sourceMappingURL=customFieldDate.js.map