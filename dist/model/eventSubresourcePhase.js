"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubresourcePhase = void 0;
var EventSubresourcePhase = (function () {
    function EventSubresourcePhase() {
    }
    EventSubresourcePhase.getAttributeTypeMap = function () {
        return EventSubresourcePhase.attributeTypeMap;
    };
    EventSubresourcePhase.discriminator = undefined;
    EventSubresourcePhase.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }
    ];
    return EventSubresourcePhase;
}());
exports.EventSubresourcePhase = EventSubresourcePhase;
//# sourceMappingURL=eventSubresourcePhase.js.map