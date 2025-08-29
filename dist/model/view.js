"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var View = (function () {
    function View() {
    }
    View.getAttributeTypeMap = function () {
        return View.attributeTypeMap;
    };
    View.discriminator = undefined;
    View.attributeTypeMap = [
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
            "name": "description",
            "baseName": "description",
            "type": "string"
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
    return View;
}());
exports.View = View;
//# sourceMappingURL=view.js.map