"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unauthorized = void 0;
var Unauthorized = (function () {
    function Unauthorized() {
    }
    Unauthorized.getAttributeTypeMap = function () {
        return Unauthorized.attributeTypeMap;
    };
    Unauthorized.discriminator = undefined;
    Unauthorized.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "Unauthorized.ErrorEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "Unauthorized.MessageEnum"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "Unauthorized.StatusCodeEnum"
        }
    ];
    return Unauthorized;
}());
exports.Unauthorized = Unauthorized;
(function (Unauthorized) {
    var ErrorEnum;
    (function (ErrorEnum) {
        ErrorEnum[ErrorEnum["Unauthorized"] = 'Unauthorized'] = "Unauthorized";
    })(ErrorEnum = Unauthorized.ErrorEnum || (Unauthorized.ErrorEnum = {}));
    var MessageEnum;
    (function (MessageEnum) {
        MessageEnum[MessageEnum["Unauthorized"] = 'Unauthorized'] = "Unauthorized";
    })(MessageEnum = Unauthorized.MessageEnum || (Unauthorized.MessageEnum = {}));
    var StatusCodeEnum;
    (function (StatusCodeEnum) {
        StatusCodeEnum[StatusCodeEnum["NUMBER_401"] = 401] = "NUMBER_401";
    })(StatusCodeEnum = Unauthorized.StatusCodeEnum || (Unauthorized.StatusCodeEnum = {}));
})(Unauthorized || (exports.Unauthorized = Unauthorized = {}));
//# sourceMappingURL=unauthorized.js.map