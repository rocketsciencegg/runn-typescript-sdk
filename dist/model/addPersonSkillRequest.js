"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPersonSkillRequest = void 0;
var AddPersonSkillRequest = (function () {
    function AddPersonSkillRequest() {
    }
    AddPersonSkillRequest.getAttributeTypeMap = function () {
        return AddPersonSkillRequest.attributeTypeMap;
    };
    AddPersonSkillRequest.discriminator = undefined;
    AddPersonSkillRequest.attributeTypeMap = [
        {
            "name": "skillId",
            "baseName": "skillId",
            "type": "number"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "AddPersonSkillRequestLevel"
        }
    ];
    return AddPersonSkillRequest;
}());
exports.AddPersonSkillRequest = AddPersonSkillRequest;
//# sourceMappingURL=addPersonSkillRequest.js.map