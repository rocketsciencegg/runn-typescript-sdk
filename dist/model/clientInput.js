"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInput = void 0;
var ClientInput = (function () {
    function ClientInput() {
    }
    ClientInput.getAttributeTypeMap = function () {
        return ClientInput.attributeTypeMap;
    };
    ClientInput.discriminator = undefined;
    ClientInput.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        }
    ];
    return ClientInput;
}());
exports.ClientInput = ClientInput;
//# sourceMappingURL=clientInput.js.map