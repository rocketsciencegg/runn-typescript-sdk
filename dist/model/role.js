"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var Role = (function () {
    function Role() {
    }
    Role.getAttributeTypeMap = function () {
        return Role.attributeTypeMap;
    };
    Role.discriminator = undefined;
    Role.attributeTypeMap = [
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
            "name": "isArchived",
            "baseName": "isArchived",
            "type": "boolean"
        },
        {
            "name": "defaultHourCost",
            "baseName": "defaultHourCost",
            "type": "number"
        },
        {
            "name": "standardRate",
            "baseName": "standardRate",
            "type": "number"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        },
        {
            "name": "personIds",
            "baseName": "personIds",
            "type": "Array<number>"
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
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=role.js.map