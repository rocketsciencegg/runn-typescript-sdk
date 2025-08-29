"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRequest = void 0;
var PersonRequest = (function () {
    function PersonRequest() {
    }
    PersonRequest.getAttributeTypeMap = function () {
        return PersonRequest.attributeTypeMap;
    };
    PersonRequest.discriminator = undefined;
    PersonRequest.attributeTypeMap = [
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
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PersonRequest.StatusEnum"
        },
        {
            "name": "requesterId",
            "baseName": "requesterId",
            "type": "number"
        },
        {
            "name": "updaterId",
            "baseName": "updaterId",
            "type": "number"
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
    return PersonRequest;
}());
exports.PersonRequest = PersonRequest;
(function (PersonRequest) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["NeedToHire"] = 'NEED_TO_HIRE'] = "NeedToHire";
        StatusEnum[StatusEnum["Requested"] = 'REQUESTED'] = "Requested";
        StatusEnum[StatusEnum["Pending"] = 'PENDING'] = "Pending";
    })(StatusEnum = PersonRequest.StatusEnum || (PersonRequest.StatusEnum = {}));
})(PersonRequest || (exports.PersonRequest = PersonRequest = {}));
//# sourceMappingURL=personRequest.js.map