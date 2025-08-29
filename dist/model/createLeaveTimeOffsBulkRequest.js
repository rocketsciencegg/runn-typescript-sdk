"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLeaveTimeOffsBulkRequest = void 0;
var CreateLeaveTimeOffsBulkRequest = (function () {
    function CreateLeaveTimeOffsBulkRequest() {
    }
    CreateLeaveTimeOffsBulkRequest.getAttributeTypeMap = function () {
        return CreateLeaveTimeOffsBulkRequest.attributeTypeMap;
    };
    CreateLeaveTimeOffsBulkRequest.discriminator = undefined;
    CreateLeaveTimeOffsBulkRequest.attributeTypeMap = [
        {
            "name": "timeOffs",
            "baseName": "time_offs",
            "type": "Array<TimeOffLeaveInput>"
        }
    ];
    return CreateLeaveTimeOffsBulkRequest;
}());
exports.CreateLeaveTimeOffsBulkRequest = CreateLeaveTimeOffsBulkRequest;
//# sourceMappingURL=createLeaveTimeOffsBulkRequest.js.map