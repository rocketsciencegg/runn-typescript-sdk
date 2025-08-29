"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorSystem = void 0;
var ActorSystem = (function () {
    function ActorSystem() {
    }
    ActorSystem.getAttributeTypeMap = function () {
        return ActorSystem.attributeTypeMap;
    };
    ActorSystem.discriminator = undefined;
    ActorSystem.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ActorSystem.TypeEnum"
        }
    ];
    return ActorSystem;
}());
exports.ActorSystem = ActorSystem;
(function (ActorSystem) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["System"] = 'system'] = "System";
    })(TypeEnum = ActorSystem.TypeEnum || (ActorSystem.TypeEnum = {}));
})(ActorSystem || (exports.ActorSystem = ActorSystem = {}));
//# sourceMappingURL=actorSystem.js.map