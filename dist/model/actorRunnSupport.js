"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorRunnSupport = void 0;
var ActorRunnSupport = (function () {
    function ActorRunnSupport() {
    }
    ActorRunnSupport.getAttributeTypeMap = function () {
        return ActorRunnSupport.attributeTypeMap;
    };
    ActorRunnSupport.discriminator = undefined;
    ActorRunnSupport.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ActorRunnSupport.TypeEnum"
        }
    ];
    return ActorRunnSupport;
}());
exports.ActorRunnSupport = ActorRunnSupport;
(function (ActorRunnSupport) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["RunnSupport"] = 'runn_support'] = "RunnSupport";
    })(TypeEnum = ActorRunnSupport.TypeEnum || (ActorRunnSupport.TypeEnum = {}));
})(ActorRunnSupport || (exports.ActorRunnSupport = ActorRunnSupport = {}));
//# sourceMappingURL=actorRunnSupport.js.map