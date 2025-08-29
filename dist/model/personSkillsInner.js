"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonSkillsInner = void 0;
var PersonSkillsInner = (function () {
    function PersonSkillsInner() {
    }
    PersonSkillsInner.getAttributeTypeMap = function () {
        return PersonSkillsInner.attributeTypeMap;
    };
    PersonSkillsInner.discriminator = undefined;
    PersonSkillsInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "number"
        }
    ];
    return PersonSkillsInner;
}());
exports.PersonSkillsInner = PersonSkillsInner;
//# sourceMappingURL=personSkillsInner.js.map