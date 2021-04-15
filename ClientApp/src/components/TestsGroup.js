"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestsGroup = void 0;
var React = require("react");
var Tests_1 = require("./Tests");
var TestsGroup = /** @class */ (function (_super) {
    __extends(TestsGroup, _super);
    function TestsGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.expanded = false;
        _this.toggleExpand = function (e) {
            e.stopPropagation();
            e.nativeEvent.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            _this.expanded = !_this.expanded;
            _this.setState({});
        };
        _this.toggleExpand = _this.toggleExpand.bind(_this);
        return _this;
    }
    TestsGroup.prototype.render = function () {
        var _a, _b, _c, _d;
        var groups = (_b = (_a = this.props.dto.groupChildren) === null || _a === void 0 ? void 0 : _a.map(function (item) { return React.createElement(TestsGroup, { dto: item }); })) !== null && _b !== void 0 ? _b : [];
        var leafItems = (_d = (_c = this.props.dto.leafChildren) === null || _c === void 0 ? void 0 : _c.map(function (item) { return React.createElement(Tests_1.Test, { dto: item }); })) !== null && _d !== void 0 ? _d : [];
        return (React.createElement("div", { className: "tests-group", onClick: this.toggleExpand },
            React.createElement("div", null, this.props.dto.name),
            this.expanded &&
                React.createElement("div", null,
                    groups.length > 0 &&
                        React.createElement("div", null,
                            "groups",
                            groups),
                    leafItems.length > 0 &&
                        React.createElement("ul", null, leafItems))));
    };
    return TestsGroup;
}(React.Component));
exports.TestsGroup = TestsGroup;
//# sourceMappingURL=TestsGroup.js.map