"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCheckboxCustomFieldRequest = void 0;
var CreateCheckboxCustomFieldRequest = (function () {
    function CreateCheckboxCustomFieldRequest() {
        this['required'] = false;
        this['showInPlanner'] = false;
        this['filterableInPlanner'] = true;
    }
    CreateCheckboxCustomFieldRequest.getAttributeTypeMap = function () {
        return CreateCheckboxCustomFieldRequest.attributeTypeMap;
    };
    CreateCheckboxCustomFieldRequest.discriminator = undefined;
    CreateCheckboxCustomFieldRequest.attributeTypeMap = [
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
            "type": "CreateCheckboxCustomFieldRequest.ModelEnum"
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
    return CreateCheckboxCustomFieldRequest;
}());
exports.CreateCheckboxCustomFieldRequest = CreateCheckboxCustomFieldRequest;
(function (CreateCheckboxCustomFieldRequest) {
    var ModelEnum;
    (function (ModelEnum) {
        ModelEnum[ModelEnum["Person"] = 'PERSON'] = "Person";
        ModelEnum[ModelEnum["Project"] = 'PROJECT'] = "Project";
    })(ModelEnum = CreateCheckboxCustomFieldRequest.ModelEnum || (CreateCheckboxCustomFieldRequest.ModelEnum = {}));
})(CreateCheckboxCustomFieldRequest || (exports.CreateCheckboxCustomFieldRequest = CreateCheckboxCustomFieldRequest = {}));
//# sourceMappingURL=createCheckboxCustomFieldRequest.js.map