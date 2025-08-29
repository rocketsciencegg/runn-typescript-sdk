"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventContractDeleted = void 0;
var EventContractDeleted = (function () {
    function EventContractDeleted() {
    }
    EventContractDeleted.getAttributeTypeMap = function () {
        return EventContractDeleted.attributeTypeMap;
    };
    EventContractDeleted.discriminator = undefined;
    EventContractDeleted.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EventContractDeleted.TypeEnum"
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
            "name": "contract",
            "baseName": "contract",
            "type": "EventContractDeletedContract"
        }
    ];
    return EventContractDeleted;
}());
exports.EventContractDeleted = EventContractDeleted;
(function (EventContractDeleted) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ContractDeleted"] = 'contract_deleted'] = "ContractDeleted";
    })(TypeEnum = EventContractDeleted.TypeEnum || (EventContractDeleted.TypeEnum = {}));
})(EventContractDeleted || (exports.EventContractDeleted = EventContractDeleted = {}));
//# sourceMappingURL=eventContractDeleted.js.map