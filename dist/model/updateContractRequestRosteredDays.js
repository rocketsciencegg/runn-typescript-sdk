"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContractRequestRosteredDays = void 0;
var UpdateContractRequestRosteredDays = (function () {
    function UpdateContractRequestRosteredDays() {
    }
    UpdateContractRequestRosteredDays.getAttributeTypeMap = function () {
        return UpdateContractRequestRosteredDays.attributeTypeMap;
    };
    UpdateContractRequestRosteredDays.discriminator = undefined;
    UpdateContractRequestRosteredDays.attributeTypeMap = [
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
    return UpdateContractRequestRosteredDays;
}());
exports.UpdateContractRequestRosteredDays = UpdateContractRequestRosteredDays;
//# sourceMappingURL=updateContractRequestRosteredDays.js.map