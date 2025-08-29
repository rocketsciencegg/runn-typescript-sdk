"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMilestones200Response = void 0;
var ListMilestones200Response = (function () {
    function ListMilestones200Response() {
    }
    ListMilestones200Response.getAttributeTypeMap = function () {
        return ListMilestones200Response.attributeTypeMap;
    };
    ListMilestones200Response.discriminator = undefined;
    ListMilestones200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Milestone>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListMilestones200Response;
}());
exports.ListMilestones200Response = ListMilestones200Response;
//# sourceMappingURL=listMilestones200Response.js.map