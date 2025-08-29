"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
var Skill = (function () {
    function Skill() {
    }
    Skill.getAttributeTypeMap = function () {
        return Skill.attributeTypeMap;
    };
    Skill.discriminator = undefined;
    Skill.attributeTypeMap = [
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
    return Skill;
}());
exports.Skill = Skill;
//# sourceMappingURL=skill.js.map