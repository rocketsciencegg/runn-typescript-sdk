"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
var BadRequest = (function () {
    function BadRequest() {
    }
    BadRequest.getAttributeTypeMap = function () {
        return BadRequest.attributeTypeMap;
    };
    BadRequest.discriminator = undefined;
    BadRequest.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "BadRequest.ErrorEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "BadRequest.StatusCodeEnum"
        }
    ];
    return BadRequest;
}());
exports.BadRequest = BadRequest;
(function (BadRequest) {
    var ErrorEnum;
    (function (ErrorEnum) {
        ErrorEnum[ErrorEnum["BadRequest"] = 'Bad Request'] = "BadRequest";
    })(ErrorEnum = BadRequest.ErrorEnum || (BadRequest.ErrorEnum = {}));
    var StatusCodeEnum;
    (function (StatusCodeEnum) {
        StatusCodeEnum[StatusCodeEnum["NUMBER_400"] = 400] = "NUMBER_400";
    })(StatusCodeEnum = BadRequest.StatusCodeEnum || (BadRequest.StatusCodeEnum = {}));
})(BadRequest || (exports.BadRequest = BadRequest = {}));
//# sourceMappingURL=badRequest.js.map