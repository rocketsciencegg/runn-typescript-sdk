"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPeopleToSkillRequest = void 0;
var AddPeopleToSkillRequest = (function () {
    function AddPeopleToSkillRequest() {
    }
    AddPeopleToSkillRequest.getAttributeTypeMap = function () {
        return AddPeopleToSkillRequest.attributeTypeMap;
    };
    AddPeopleToSkillRequest.discriminator = undefined;
    AddPeopleToSkillRequest.attributeTypeMap = [
        {
            "name": "people",
            "baseName": "people",
            "type": "Array<AddPeopleToSkillRequestPeopleInner>"
        }
    ];
    return AddPeopleToSkillRequest;
}());
exports.AddPeopleToSkillRequest = AddPeopleToSkillRequest;
//# sourceMappingURL=addPeopleToSkillRequest.js.map