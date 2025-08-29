"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conflict = void 0;
var Conflict = (function () {
    function Conflict() {
    }
    Conflict.getAttributeTypeMap = function () {
        return Conflict.attributeTypeMap;
    };
    Conflict.discriminator = undefined;
    Conflict.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "Conflict.ErrorEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "Conflict.StatusCodeEnum"
        }
    ];
    return Conflict;
}());
exports.Conflict = Conflict;
(function (Conflict) {
    var ErrorEnum;
    (function (ErrorEnum) {
        ErrorEnum[ErrorEnum["Conflict"] = 'Conflict'] = "Conflict";
    })(ErrorEnum = Conflict.ErrorEnum || (Conflict.ErrorEnum = {}));
    var StatusCodeEnum;
    (function (StatusCodeEnum) {
        StatusCodeEnum[StatusCodeEnum["NUMBER_409"] = 409] = "NUMBER_409";
    })(StatusCodeEnum = Conflict.StatusCodeEnum || (Conflict.StatusCodeEnum = {}));
})(Conflict || (exports.Conflict = Conflict = {}));
//# sourceMappingURL=conflict.js.map