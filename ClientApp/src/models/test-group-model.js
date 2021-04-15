"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGroupModel = void 0;
var TestGroupModel = /** @class */ (function () {
    function TestGroupModel(proto) {
        var _a, _b, _c, _d;
        this.groups = [];
        this.totalSubgroupsCount = 0;
        this.totalTestsCount = 0;
        this.id = proto.id;
        this.name = proto.name;
        this.leafChildren = proto.leafChildren;
        this.groups = (_b = (_a = proto.groupChildren) === null || _a === void 0 ? void 0 : _a.map(function (group) { return new TestGroupModel(group); })) !== null && _b !== void 0 ? _b : [];
        this.totalSubgroupsCount = this.groups.reduce(function (sum, group) { return sum + group.totalSubgroupsCount; }, 0) + this.groups.length;
        this.totalTestsCount = this.groups.reduce(function (sum, group) { return sum + group.totalTestsCount; }, 0) + ((_d = (_c = this.leafChildren) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0);
    }
    return TestGroupModel;
}());
exports.TestGroupModel = TestGroupModel;
//# sourceMappingURL=test-group-model.js.map