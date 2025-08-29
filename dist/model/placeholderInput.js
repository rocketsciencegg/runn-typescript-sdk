"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderInput = void 0;
var PlaceholderInput = (function () {
    function PlaceholderInput() {
    }
    PlaceholderInput.getAttributeTypeMap = function () {
        return PlaceholderInput.attributeTypeMap;
    };
    PlaceholderInput.discriminator = undefined;
    PlaceholderInput.attributeTypeMap = [
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
            "name": "costPerHour",
            "baseName": "costPerHour",
            "type": "number"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>"
        }
    ];
    return PlaceholderInput;
}());
exports.PlaceholderInput = PlaceholderInput;
//# sourceMappingURL=placeholderInput.js.map