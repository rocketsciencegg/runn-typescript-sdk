"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectRequestAnyOf1 = void 0;
var CreateProjectRequestAnyOf1 = (function () {
    function CreateProjectRequestAnyOf1() {
    }
    CreateProjectRequestAnyOf1.getAttributeTypeMap = function () {
        return CreateProjectRequestAnyOf1.attributeTypeMap;
    };
    CreateProjectRequestAnyOf1.discriminator = undefined;
    CreateProjectRequestAnyOf1.attributeTypeMap = [
        {
            "name": "fromTemplate",
            "baseName": "fromTemplate",
            "type": "CreateProjectRequestAnyOf1FromTemplate"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "number"
        }
    ];
    return CreateProjectRequestAnyOf1;
}());
exports.CreateProjectRequestAnyOf1 = CreateProjectRequestAnyOf1;
//# sourceMappingURL=createProjectRequestAnyOf1.js.map