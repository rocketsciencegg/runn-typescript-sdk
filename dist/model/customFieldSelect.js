"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldSelect = void 0;
var CustomFieldSelect = (function () {
    function CustomFieldSelect() {
    }
    CustomFieldSelect.getAttributeTypeMap = function () {
        return CustomFieldSelect.attributeTypeMap;
    };
    CustomFieldSelect.discriminator = undefined;
    CustomFieldSelect.attributeTypeMap = [
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
            "type": "CustomFieldSelect.ModelEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<UpdateSelectCustomFieldOption200ResponseOption>"
        },
        {
            "name": "singleSelect",
            "baseName": "singleSelect",
            "type": "boolean"
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
    return CustomFieldSelect;
}());
exports.CustomFieldSelect = CustomFieldSelect;
(function (CustomFieldSelect) {
    var ModelEnum;
    (function (ModelEnum) {
        ModelEnum[ModelEnum["Person"] = 'PERSON'] = "Person";
        ModelEnum[ModelEnum["Project"] = 'PROJECT'] = "Project";
    })(ModelEnum = CustomFieldSelect.ModelEnum || (CustomFieldSelect.ModelEnum = {}));
})(CustomFieldSelect || (exports.CustomFieldSelect = CustomFieldSelect = {}));
//# sourceMappingURL=customFieldSelect.js.map