"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProjectDeleted = void 0;
var EventProjectDeleted = (function () {
    function EventProjectDeleted() {
    }
    EventProjectDeleted.getAttributeTypeMap = function () {
        return EventProjectDeleted.attributeTypeMap;
    };
    EventProjectDeleted.discriminator = undefined;
    EventProjectDeleted.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EventProjectDeleted.TypeEnum"
        },
        {
            "name": "actor",
            "baseName": "actor",
            "type": "Actor"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "EventProjectDeletedProject"
        }
    ];
    return EventProjectDeleted;
}());
exports.EventProjectDeleted = EventProjectDeleted;
(function (EventProjectDeleted) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ProjectDeleted"] = 'project_deleted'] = "ProjectDeleted";
    })(TypeEnum = EventProjectDeleted.TypeEnum || (EventProjectDeleted.TypeEnum = {}));
})(EventProjectDeleted || (exports.EventProjectDeleted = EventProjectDeleted = {}));
//# sourceMappingURL=eventProjectDeleted.js.map