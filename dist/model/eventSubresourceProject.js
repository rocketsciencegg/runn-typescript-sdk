"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubresourceProject = void 0;
var EventSubresourceProject = (function () {
    function EventSubresourceProject() {
    }
    EventSubresourceProject.getAttributeTypeMap = function () {
        return EventSubresourceProject.attributeTypeMap;
    };
    EventSubresourceProject.discriminator = undefined;
    EventSubresourceProject.attributeTypeMap = [
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
    return EventSubresourceProject;
}());
exports.EventSubresourceProject = EventSubresourceProject;
//# sourceMappingURL=eventSubresourceProject.js.map