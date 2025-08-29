"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorUser = void 0;
var ActorUser = (function () {
    function ActorUser() {
    }
    ActorUser.getAttributeTypeMap = function () {
        return ActorUser.attributeTypeMap;
    };
    ActorUser.discriminator = undefined;
    ActorUser.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ActorUser.TypeEnum"
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
    return ActorUser;
}());
exports.ActorUser = ActorUser;
(function (ActorUser) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["User"] = 'user'] = "User";
    })(TypeEnum = ActorUser.TypeEnum || (ActorUser.TypeEnum = {}));
})(ActorUser || (exports.ActorUser = ActorUser = {}));
//# sourceMappingURL=actorUser.js.map