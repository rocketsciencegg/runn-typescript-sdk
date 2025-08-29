"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var Team = (function () {
    function Team() {
    }
    Team.getAttributeTypeMap = function () {
        return Team.attributeTypeMap;
    };
    Team.discriminator = undefined;
    Team.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
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
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map