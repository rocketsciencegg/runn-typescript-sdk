"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var Tag = (function () {
    function Tag() {
    }
    Tag.getAttributeTypeMap = function () {
        return Tag.attributeTypeMap;
    };
    Tag.discriminator = undefined;
    Tag.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        }
    ];
    return Tag;
}());
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map