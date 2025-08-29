"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonSkillRequest = void 0;
var UpdatePersonSkillRequest = (function () {
    function UpdatePersonSkillRequest() {
    }
    UpdatePersonSkillRequest.getAttributeTypeMap = function () {
        return UpdatePersonSkillRequest.attributeTypeMap;
    };
    UpdatePersonSkillRequest.discriminator = undefined;
    UpdatePersonSkillRequest.attributeTypeMap = [
        {
            "name": "level",
            "baseName": "level",
            "type": "AddPersonSkillRequestLevel"
        }
    ];
    return UpdatePersonSkillRequest;
}());
exports.UpdatePersonSkillRequest = UpdatePersonSkillRequest;
//# sourceMappingURL=updatePersonSkillRequest.js.map