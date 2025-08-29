"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonCompetency = void 0;
var PersonCompetency = (function () {
    function PersonCompetency() {
    }
    PersonCompetency.getAttributeTypeMap = function () {
        return PersonCompetency.attributeTypeMap;
    };
    PersonCompetency.discriminator = undefined;
    PersonCompetency.attributeTypeMap = [
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "PersonCompetencyAllOfLevel"
        },
        {
            "name": "skillId",
            "baseName": "skillId",
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
    return PersonCompetency;
}());
exports.PersonCompetency = PersonCompetency;
//# sourceMappingURL=personCompetency.js.map