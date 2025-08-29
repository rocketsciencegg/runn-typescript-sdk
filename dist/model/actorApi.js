"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorApi = void 0;
var ActorApi = (function () {
    function ActorApi() {
    }
    ActorApi.getAttributeTypeMap = function () {
        return ActorApi.attributeTypeMap;
    };
    ActorApi.discriminator = undefined;
    ActorApi.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ActorApi.TypeEnum"
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
        }
    ];
    return ActorApi;
}());
exports.ActorApi = ActorApi;
(function (ActorApi) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Api"] = 'api'] = "Api";
    })(TypeEnum = ActorApi.TypeEnum || (ActorApi.TypeEnum = {}));
})(ActorApi || (exports.ActorApi = ActorApi = {}));
//# sourceMappingURL=actorApi.js.map