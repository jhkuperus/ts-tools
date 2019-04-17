"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
exports.none = false;
function isEmpty(v) {
    return !v;
}
exports.isEmpty = isEmpty;
function isDefined(v) {
    return !!v;
}
exports.isDefined = isDefined;
function flatMap(v, f) {
    return (!!v) ? f(v) : exports.none;
}
exports.flatMap = flatMap;
function fold(v, ifEmpty, ifDefined) {
    return (!!v) ? ifDefined(v) : ifEmpty();
}
exports.fold = fold;
function map(v, f) {
    return (!!v) ? f(v) : exports.none;
}
exports.map = map;
function orElse(v, defaultValue) {
    return (!!v) ? v : defaultValue;
}
exports.orElse = orElse;
function observeNone() { return rxjs_1.of(exports.none); }
exports.observeNone = observeNone;
function mapAndLiftObservable(v, f) {
    return fold(map(v, f), function () { return observeNone(); }, function (obs) { return obs; });
}
exports.mapAndLiftObservable = mapAndLiftObservable;
exports.Optional = {
    isDefined: isDefined,
    isEmpty: isEmpty,
    flatMap: flatMap,
    fold: fold,
    map: map,
    mapAndLiftObservable: mapAndLiftObservable,
    none: exports.none,
};
//# sourceMappingURL=optional.js.map