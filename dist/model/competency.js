"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competency = void 0;
var Competency = (function () {
    function Competency() {
    }
    Competency.getAttributeTypeMap = function () {
        return Competency.attributeTypeMap;
    };
    Competency.discriminator = undefined;
    Competency.attributeTypeMap = [
        {
            "name": "level",
            "baseName": "level",
            "type": "AddPersonSkillRequestLevel"
        },
        {
            "name": "skillId",
            "baseName": "skillId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    return Competency;
}());
exports.Competency = Competency;
//# sourceMappingURL=competency.js.map