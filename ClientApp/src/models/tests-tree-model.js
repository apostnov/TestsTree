"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestsTreeModel = void 0;
var test_group_model_1 = require("./test-group-model");
var TestsTreeModel = /** @class */ (function () {
    function TestsTreeModel(proto) {
        var _a, _b;
        this.totalSubgroupsCount = 0;
        this.totalTestCount = 0;
        this.groups = [];
        this.leafChildren = proto.leafChildren;
        this.groups = (_b = (_a = proto.groupChildren) === null || _a === void 0 ? void 0 : _a.map(function (group) { return new test_group_model_1.TestGroupModel(group); })) !== null && _b !== void 0 ? _b : [];
        this.totalSubgroupsCount = this.groups.reduce(function (sum, group) { return sum + group.totalSubgroupsCount; }, 0) + this.groups.length;
        this.totalTestCount = this.groups.reduce(function (sum, group) { return sum + group.totalTestsCount; }, 0) + this.totalTestCount;
    }
    return TestsTreeModel;
}());
exports.TestsTreeModel = TestsTreeModel;
//# sourceMappingURL=tests-tree-model.js.map