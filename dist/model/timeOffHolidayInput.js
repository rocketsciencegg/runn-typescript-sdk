"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffHolidayInput = void 0;
var TimeOffHolidayInput = (function () {
    function TimeOffHolidayInput() {
    }
    TimeOffHolidayInput.getAttributeTypeMap = function () {
        return TimeOffHolidayInput.attributeTypeMap;
    };
    TimeOffHolidayInput.discriminator = undefined;
    TimeOffHolidayInput.attributeTypeMap = [
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "holidayId",
            "baseName": "holidayId",
            "type": "number"
        }
    ];
    return TimeOffHolidayInput;
}());
exports.TimeOffHolidayInput = TimeOffHolidayInput;
//# sourceMappingURL=timeOffHolidayInput.js.map