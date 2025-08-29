"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDateCustomFieldRequest = void 0;
var CreateDateCustomFieldRequest = (function () {
    function CreateDateCustomFieldRequest() {
        this['required'] = false;
        this['showInPlanner'] = false;
        this['filterableInPlanner'] = true;
    }
    CreateDateCustomFieldRequest.getAttributeTypeMap = function () {
        return CreateDateCustomFieldRequest.attributeTypeMap;
    };
    CreateDateCustomFieldRequest.discriminator = undefined;
    CreateDateCustomFieldRequest.attributeTypeMap = [
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
            "type": "CreateDateCustomFieldRequest.ModelEnum"
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
    return CreateDateCustomFieldRequest;
}());
exports.CreateDateCustomFieldRequest = CreateDateCustomFieldRequest;
(function (CreateDateCustomFieldRequest) {
    var ModelEnum;
    (function (ModelEnum) {
        ModelEnum[ModelEnum["Person"] = 'PERSON'] = "Person";
        ModelEnum[ModelEnum["Project"] = 'PROJECT'] = "Project";
    })(ModelEnum = CreateDateCustomFieldRequest.ModelEnum || (CreateDateCustomFieldRequest.ModelEnum = {}));
})(CreateDateCustomFieldRequest || (exports.CreateDateCustomFieldRequest = CreateDateCustomFieldRequest = {}));
//# sourceMappingURL=createDateCustomFieldRequest.js.map