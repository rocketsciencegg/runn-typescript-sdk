"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSelectCustomFieldRequest = void 0;
var CreateSelectCustomFieldRequest = (function () {
    function CreateSelectCustomFieldRequest() {
        this['singleSelect'] = false;
        this['required'] = false;
        this['showInPlanner'] = false;
        this['filterableInPlanner'] = true;
    }
    CreateSelectCustomFieldRequest.getAttributeTypeMap = function () {
        return CreateSelectCustomFieldRequest.attributeTypeMap;
    };
    CreateSelectCustomFieldRequest.discriminator = undefined;
    CreateSelectCustomFieldRequest.attributeTypeMap = [
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
            "type": "CreateSelectCustomFieldRequest.ModelEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<CreateSelectCustomFieldRequestOptionsInner>"
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
            "name": "filterableInPlanner",
            "baseName": "filterableInPlanner",
            "type": "boolean"
        }
    ];
    return CreateSelectCustomFieldRequest;
}());
exports.CreateSelectCustomFieldRequest = CreateSelectCustomFieldRequest;
(function (CreateSelectCustomFieldRequest) {
    var ModelEnum;
    (function (ModelEnum) {
        ModelEnum[ModelEnum["Person"] = 'PERSON'] = "Person";
        ModelEnum[ModelEnum["Project"] = 'PROJECT'] = "Project";
    })(ModelEnum = CreateSelectCustomFieldRequest.ModelEnum || (CreateSelectCustomFieldRequest.ModelEnum = {}));
})(CreateSelectCustomFieldRequest || (exports.CreateSelectCustomFieldRequest = CreateSelectCustomFieldRequest = {}));
//# sourceMappingURL=createSelectCustomFieldRequest.js.map