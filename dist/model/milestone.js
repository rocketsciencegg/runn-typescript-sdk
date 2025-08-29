"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Milestone = void 0;
var Milestone = (function () {
    function Milestone() {
    }
    Milestone.getAttributeTypeMap = function () {
        return Milestone.attributeTypeMap;
    };
    Milestone.discriminator = undefined;
    Milestone.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
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
    return Milestone;
}());
exports.Milestone = Milestone;
//# sourceMappingURL=milestone.js.map