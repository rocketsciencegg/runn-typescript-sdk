"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualInput = void 0;
var ActualInput = (function () {
    function ActualInput() {
        this['billableMinutes'] = 0;
        this['nonbillableMinutes'] = 0;
    }
    ActualInput.getAttributeTypeMap = function () {
        return ActualInput.attributeTypeMap;
    };
    ActualInput.discriminator = undefined;
    ActualInput.attributeTypeMap = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "billableMinutes",
            "baseName": "billableMinutes",
            "type": "number"
        },
        {
            "name": "nonbillableMinutes",
            "baseName": "nonbillableMinutes",
            "type": "number"
        },
        {
            "name": "billableNote",
            "baseName": "billableNote",
            "type": "string"
        },
        {
            "name": "nonbillableNote",
            "baseName": "nonbillableNote",
            "type": "string"
        },
        {
            "name": "phaseId",
            "baseName": "phaseId",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        }
    ];
    return ActualInput;
}());
exports.ActualInput = ActualInput;
//# sourceMappingURL=actualInput.js.map