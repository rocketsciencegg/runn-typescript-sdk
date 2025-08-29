"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
var Actor = (function () {
    function Actor() {
    }
    Actor.getAttributeTypeMap = function () {
        return Actor.attributeTypeMap;
    };
    Actor.discriminator = "type";
    Actor.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Actor.TypeEnum"
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
        },
        {
            "name": "tokenId",
            "baseName": "tokenId",
            "type": "number"
        },
        {
            "name": "tokenName",
            "baseName": "tokenName",
            "type": "string"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }
    ];
    return Actor;
}());
exports.Actor = Actor;
(function (Actor) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["User"] = 'user'] = "User";
        TypeEnum[TypeEnum["RunnSupport"] = 'runn_support'] = "RunnSupport";
        TypeEnum[TypeEnum["Api"] = 'api'] = "Api";
        TypeEnum[TypeEnum["Csv"] = 'csv'] = "Csv";
        TypeEnum[TypeEnum["Integration"] = 'integration'] = "Integration";
        TypeEnum[TypeEnum["System"] = 'system'] = "System";
    })(TypeEnum = Actor.TypeEnum || (Actor.TypeEnum = {}));
})(Actor || (exports.Actor = Actor = {}));
//# sourceMappingURL=actor.js.map