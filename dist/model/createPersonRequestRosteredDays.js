"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonRequestRosteredDays = void 0;
var CreatePersonRequestRosteredDays = (function () {
    function CreatePersonRequestRosteredDays() {
    }
    CreatePersonRequestRosteredDays.getAttributeTypeMap = function () {
        return CreatePersonRequestRosteredDays.attributeTypeMap;
    };
    CreatePersonRequestRosteredDays.discriminator = undefined;
    CreatePersonRequestRosteredDays.attributeTypeMap = [
        {
            "name": "monday",
            "baseName": "monday",
            "type": "number"
        },
        {
            "name": "tuesday",
            "baseName": "tuesday",
            "type": "number"
        },
        {
            "name": "wednesday",
            "baseName": "wednesday",
            "type": "number"
        },
        {
            "name": "thursday",
            "baseName": "thursday",
            "type": "number"
        },
        {
            "name": "friday",
            "baseName": "friday",
            "type": "number"
        }
    ];
    return CreatePersonRequestRosteredDays;
}());
exports.CreatePersonRequestRosteredDays = CreatePersonRequestRosteredDays;
//# sourceMappingURL=createPersonRequestRosteredDays.js.map