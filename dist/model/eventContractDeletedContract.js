"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventContractDeletedContract = void 0;
var EventContractDeletedContract = (function () {
    function EventContractDeletedContract() {
    }
    EventContractDeletedContract.getAttributeTypeMap = function () {
        return EventContractDeletedContract.attributeTypeMap;
    };
    EventContractDeletedContract.discriminator = undefined;
    EventContractDeletedContract.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "person",
            "baseName": "person",
            "type": "EventSubresourcePerson"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "EventSubresourceRole"
        }
    ];
    return EventContractDeletedContract;
}());
exports.EventContractDeletedContract = EventContractDeletedContract;
//# sourceMappingURL=eventContractDeletedContract.js.map