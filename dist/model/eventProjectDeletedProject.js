"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProjectDeletedProject = void 0;
var EventProjectDeletedProject = (function () {
    function EventProjectDeletedProject() {
    }
    EventProjectDeletedProject.getAttributeTypeMap = function () {
        return EventProjectDeletedProject.attributeTypeMap;
    };
    EventProjectDeletedProject.discriminator = undefined;
    EventProjectDeletedProject.attributeTypeMap = [
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
    return EventProjectDeletedProject;
}());
exports.EventProjectDeletedProject = EventProjectDeletedProject;
//# sourceMappingURL=eventProjectDeletedProject.js.map