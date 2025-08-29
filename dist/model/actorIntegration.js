"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorIntegration = void 0;
var ActorIntegration = (function () {
    function ActorIntegration() {
    }
    ActorIntegration.getAttributeTypeMap = function () {
        return ActorIntegration.attributeTypeMap;
    };
    ActorIntegration.discriminator = undefined;
    ActorIntegration.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ActorIntegration.TypeEnum"
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
    return ActorIntegration;
}());
exports.ActorIntegration = ActorIntegration;
(function (ActorIntegration) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Integration"] = 'integration'] = "Integration";
    })(TypeEnum = ActorIntegration.TypeEnum || (ActorIntegration.TypeEnum = {}));
})(ActorIntegration || (exports.ActorIntegration = ActorIntegration = {}));
//# sourceMappingURL=actorIntegration.js.map