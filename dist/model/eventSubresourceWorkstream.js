"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubresourceWorkstream = void 0;
var EventSubresourceWorkstream = (function () {
    function EventSubresourceWorkstream() {
    }
    EventSubresourceWorkstream.getAttributeTypeMap = function () {
        return EventSubresourceWorkstream.attributeTypeMap;
    };
    EventSubresourceWorkstream.discriminator = undefined;
    EventSubresourceWorkstream.attributeTypeMap = [
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
    return EventSubresourceWorkstream;
}());
exports.EventSubresourceWorkstream = EventSubresourceWorkstream;
//# sourceMappingURL=eventSubresourceWorkstream.js.map