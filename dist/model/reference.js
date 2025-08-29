"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reference = void 0;
var Reference = (function () {
    function Reference() {
    }
    Reference.getAttributeTypeMap = function () {
        return Reference.attributeTypeMap;
    };
    Reference.discriminator = undefined;
    Reference.attributeTypeMap = [
        {
            "name": "referenceName",
            "baseName": "referenceName",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        }
    ];
    return Reference;
}());
exports.Reference = Reference;
//# sourceMappingURL=reference.js.map