"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPersonToProjectRequest = void 0;
var AddPersonToProjectRequest = (function () {
    function AddPersonToProjectRequest() {
    }
    AddPersonToProjectRequest.getAttributeTypeMap = function () {
        return AddPersonToProjectRequest.attributeTypeMap;
    };
    AddPersonToProjectRequest.discriminator = undefined;
    AddPersonToProjectRequest.attributeTypeMap = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        }
    ];
    return AddPersonToProjectRequest;
}());
exports.AddPersonToProjectRequest = AddPersonToProjectRequest;
//# sourceMappingURL=addPersonToProjectRequest.js.map