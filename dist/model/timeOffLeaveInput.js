"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffLeaveInput = void 0;
var TimeOffLeaveInput = (function () {
    function TimeOffLeaveInput() {
    }
    TimeOffLeaveInput.getAttributeTypeMap = function () {
        return TimeOffLeaveInput.attributeTypeMap;
    };
    TimeOffLeaveInput.discriminator = undefined;
    TimeOffLeaveInput.attributeTypeMap = [
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "minutesPerDay",
            "baseName": "minutesPerDay",
            "type": "number"
        }
    ];
    return TimeOffLeaveInput;
}());
exports.TimeOffLeaveInput = TimeOffLeaveInput;
//# sourceMappingURL=timeOffLeaveInput.js.map