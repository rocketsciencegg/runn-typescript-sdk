"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workstream = void 0;
var Workstream = (function () {
    function Workstream() {
    }
    Workstream.getAttributeTypeMap = function () {
        return Workstream.attributeTypeMap;
    };
    Workstream.discriminator = undefined;
    Workstream.attributeTypeMap = [
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
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
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
    return Workstream;
}());
exports.Workstream = Workstream;
//# sourceMappingURL=workstream.js.map