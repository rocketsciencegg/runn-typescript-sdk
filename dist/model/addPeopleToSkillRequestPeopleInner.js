"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPeopleToSkillRequestPeopleInner = void 0;
var AddPeopleToSkillRequestPeopleInner = (function () {
    function AddPeopleToSkillRequestPeopleInner() {
    }
    AddPeopleToSkillRequestPeopleInner.getAttributeTypeMap = function () {
        return AddPeopleToSkillRequestPeopleInner.attributeTypeMap;
    };
    AddPeopleToSkillRequestPeopleInner.discriminator = undefined;
    AddPeopleToSkillRequestPeopleInner.attributeTypeMap = [
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "AddPersonSkillRequestLevel"
        }
    ];
    return AddPeopleToSkillRequestPeopleInner;
}());
exports.AddPeopleToSkillRequestPeopleInner = AddPeopleToSkillRequestPeopleInner;
//# sourceMappingURL=addPeopleToSkillRequestPeopleInner.js.map