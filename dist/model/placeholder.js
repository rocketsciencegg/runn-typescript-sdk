"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placeholder = void 0;
var Placeholder = (function () {
    function Placeholder() {
    }
    Placeholder.getAttributeTypeMap = function () {
        return Placeholder.attributeTypeMap;
    };
    Placeholder.discriminator = undefined;
    Placeholder.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "isArchived",
            "baseName": "isArchived",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
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
    return Placeholder;
}());
exports.Placeholder = Placeholder;
//# sourceMappingURL=placeholder.js.map