"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorCsv = void 0;
var ActorCsv = (function () {
    function ActorCsv() {
    }
    ActorCsv.getAttributeTypeMap = function () {
        return ActorCsv.attributeTypeMap;
    };
    ActorCsv.discriminator = undefined;
    ActorCsv.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ActorCsv.TypeEnum"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number"
        },
        {
            "name": "userEmail",
            "baseName": "userEmail",
            "type": "string"
        }
    ];
    return ActorCsv;
}());
exports.ActorCsv = ActorCsv;
(function (ActorCsv) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Csv"] = 'csv'] = "Csv";
    })(TypeEnum = ActorCsv.TypeEnum || (ActorCsv.TypeEnum = {}));
})(ActorCsv || (exports.ActorCsv = ActorCsv = {}));
//# sourceMappingURL=actorCsv.js.map