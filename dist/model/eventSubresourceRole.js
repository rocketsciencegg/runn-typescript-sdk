"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubresourceRole = void 0;
var EventSubresourceRole = (function () {
    function EventSubresourceRole() {
    }
    EventSubresourceRole.getAttributeTypeMap = function () {
        return EventSubresourceRole.attributeTypeMap;
    };
    EventSubresourceRole.discriminator = undefined;
    EventSubresourceRole.attributeTypeMap = [
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
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        }
    ];
    return EventSubresourceRole;
}());
exports.EventSubresourceRole = EventSubresourceRole;
//# sourceMappingURL=eventSubresourceRole.js.map