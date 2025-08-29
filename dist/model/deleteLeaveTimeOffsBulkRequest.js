"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLeaveTimeOffsBulkRequest = void 0;
var DeleteLeaveTimeOffsBulkRequest = (function () {
    function DeleteLeaveTimeOffsBulkRequest() {
    }
    DeleteLeaveTimeOffsBulkRequest.getAttributeTypeMap = function () {
        return DeleteLeaveTimeOffsBulkRequest.attributeTypeMap;
    };
    DeleteLeaveTimeOffsBulkRequest.discriminator = undefined;
    DeleteLeaveTimeOffsBulkRequest.attributeTypeMap = [
        {
            "name": "timeOffIds",
            "baseName": "timeOffIds",
            "type": "Array<number>"
        }
    ];
    return DeleteLeaveTimeOffsBulkRequest;
}());
exports.DeleteLeaveTimeOffsBulkRequest = DeleteLeaveTimeOffsBulkRequest;
//# sourceMappingURL=deleteLeaveTimeOffsBulkRequest.js.map