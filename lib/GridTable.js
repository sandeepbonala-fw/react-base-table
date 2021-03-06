"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactWindow = require("react-window");

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _TableFooter = _interopRequireDefault(require("./TableFooter"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper of the Grid for internal only
 */
var GridTable = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(GridTable, _React$PureComponent);

  var _super = _createSuper(GridTable);

  function GridTable(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GridTable);
    _this = _super.call(this, props);
    _this._setHeaderRef = _this._setHeaderRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this._setFooterRef = _this._setFooterRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this._setBodyRef = _this._setBodyRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this._itemKey = _this._itemKey.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handleItemsRendered = _this._handleItemsRendered.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderRow = _this.renderRow.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(GridTable, [{
    key: "forceUpdateTable",
    value: function forceUpdateTable() {
      this.headerRef && this.headerRef.forceUpdate();
      this.footerRef && this.footerRef.forceUpdate();
      this.bodyRef && this.bodyRef.forceUpdate();
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(args) {
      this.headerRef && this.headerRef.scrollTo(args.scrollLeft);
      this.footerRef && this.footerRef.scrollTo(args.scrollLeft);
      this.bodyRef && this.bodyRef.scrollTo(args);
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop(scrollTop) {
      this.bodyRef && this.bodyRef.scrollTo({
        scrollTop: scrollTop
      });
    }
  }, {
    key: "scrollToLeft",
    value: function scrollToLeft(scrollLeft) {
      this.headerRef && this.headerRef.scrollTo(scrollLeft);
      this.footerRef && this.footerRef.scrollTo(scrollLeft);
      this.bodyRef && this.bodyRef.scrollToPosition({
        scrollLeft: scrollLeft
      });
    }
  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var rowIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var align = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
      this.bodyRef && this.bodyRef.scrollToItem({
        rowIndex: rowIndex,
        align: align
      });
    }
  }, {
    key: "renderRow",
    value: function renderRow(args) {
      var _this$props = this.props,
          data = _this$props.data,
          columns = _this$props.columns,
          rowRenderer = _this$props.rowRenderer;
      var rowData = data[args.rowIndex];
      return rowRenderer(_objectSpread(_objectSpread({}, args), {}, {
        columns: columns,
        rowData: rowData
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          containerStyle = _this$props2.containerStyle,
          gridStyle = _this$props2.gridStyle,
          classPrefix = _this$props2.classPrefix,
          className = _this$props2.className,
          data = _this$props2.data,
          frozenData = _this$props2.frozenData,
          width = _this$props2.width,
          height = _this$props2.height,
          rowHeight = _this$props2.rowHeight,
          headerWidth = _this$props2.headerWidth,
          bodyWidth = _this$props2.bodyWidth,
          useIsScrolling = _this$props2.useIsScrolling,
          onScroll = _this$props2.onScroll,
          hoveredRowKey = _this$props2.hoveredRowKey,
          overscanRowCount = _this$props2.overscanRowCount,
          style = _this$props2.style,
          onScrollbarPresenceChange = _this$props2.onScrollbarPresenceChange,
          rest = (0, _objectWithoutProperties2["default"])(_this$props2, ["containerStyle", "gridStyle", "classPrefix", "className", "data", "frozenData", "width", "height", "rowHeight", "headerWidth", "bodyWidth", "useIsScrolling", "onScroll", "hoveredRowKey", "overscanRowCount", "style", "onScrollbarPresenceChange"]);

      var headerHeight = this._getHeaderHeight();

      var footerHeight = this._getFooterHeight();

      var frozenRowCount = frozenData.length;
      var frozenRowsHeight = rowHeight * frozenRowCount;
      var cls = (0, _classnames["default"])("".concat(classPrefix, "__table"), className);
      var containerProps = containerStyle ? {
        style: containerStyle
      } : null;
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        role: "table",
        className: cls
      }, containerProps), footerHeight > 0 && /*#__PURE__*/_react["default"].createElement(_TableFooter["default"], (0, _extends2["default"])({}, rest, {
        className: "".concat(classPrefix, "__footer"),
        ref: this._setFooterRef,
        data: data,
        frozenData: frozenData,
        width: bodyWidth,
        height: footerHeight,
        rowWidth: headerWidth,
        rowHeight: rowHeight,
        footerHeight: this.props.footerHeight,
        headerRenderer: this.props.footerRenderer,
        rowRenderer: this.props.rowRenderer,
        hoveredRowKey: frozenRowCount > 0 ? hoveredRowKey : null
      })), /*#__PURE__*/_react["default"].createElement(_reactWindow.FixedSizeGrid, (0, _extends2["default"])({}, rest, {
        className: "".concat(classPrefix, "__body"),
        ref: this._setBodyRef,
        data: data,
        itemKey: this._itemKey,
        frozenData: frozenData,
        width: bodyWidth,
        height: Math.max(height - headerHeight - footerHeight - frozenRowsHeight, 0),
        rowHeight: rowHeight,
        rowCount: data.length,
        overscanRowCount: overscanRowCount,
        columnWidth: bodyWidth,
        columnCount: 1,
        overscanColumnCount: 0,
        useIsScrolling: useIsScrolling,
        hoveredRowKey: hoveredRowKey,
        onScroll: onScroll,
        onItemsRendered: this._handleItemsRendered,
        children: this.renderRow,
        style: gridStyle
      })), headerHeight + frozenRowsHeight > 0 &&
      /*#__PURE__*/
      // put header after body and reverse the display order via css
      // to prevent header's shadow being covered by body
      _react["default"].createElement(_TableHeader["default"], (0, _extends2["default"])({}, rest, {
        className: "".concat(classPrefix, "__header"),
        ref: this._setHeaderRef,
        data: data,
        frozenData: frozenData,
        width: bodyWidth,
        height: Math.min(headerHeight + frozenRowsHeight, height),
        rowWidth: headerWidth,
        rowHeight: rowHeight,
        headerHeight: this.props.headerHeight,
        headerRenderer: this.props.headerRenderer,
        rowRenderer: this.props.rowRenderer,
        hoveredRowKey: frozenRowCount > 0 ? hoveredRowKey : null
      })));
    }
  }, {
    key: "_setHeaderRef",
    value: function _setHeaderRef(ref) {
      this.headerRef = ref;
    }
  }, {
    key: "_setFooterRef",
    value: function _setFooterRef(ref) {
      this.footerRef = ref;
    }
  }, {
    key: "_setBodyRef",
    value: function _setBodyRef(ref) {
      this.bodyRef = ref;
    }
  }, {
    key: "_itemKey",
    value: function _itemKey(_ref) {
      var rowIndex = _ref.rowIndex;
      var _this$props3 = this.props,
          data = _this$props3.data,
          rowKey = _this$props3.rowKey;
      return data[rowIndex][rowKey];
    }
  }, {
    key: "_getHeaderHeight",
    value: function _getHeaderHeight() {
      var headerHeight = this.props.headerHeight;

      if (Array.isArray(headerHeight)) {
        return headerHeight.reduce(function (sum, height) {
          return sum + height;
        }, 0);
      }

      return headerHeight;
    }
  }, {
    key: "_getFooterHeight",
    value: function _getFooterHeight() {
      var footerHeight = this.props.footerHeight;
      return footerHeight || 0;
    }
  }, {
    key: "_handleItemsRendered",
    value: function _handleItemsRendered(_ref2) {
      var overscanRowStartIndex = _ref2.overscanRowStartIndex,
          overscanRowStopIndex = _ref2.overscanRowStopIndex,
          visibleRowStartIndex = _ref2.visibleRowStartIndex,
          visibleRowStopIndex = _ref2.visibleRowStopIndex;
      this.props.onRowsRendered({
        overscanStartIndex: overscanRowStartIndex,
        overscanStopIndex: overscanRowStopIndex,
        startIndex: visibleRowStartIndex,
        stopIndex: visibleRowStopIndex
      });
    }
  }]);
  return GridTable;
}(_react["default"].PureComponent);

GridTable.propTypes = {
  containerStyle: _propTypes["default"].object,
  classPrefix: _propTypes["default"].string,
  className: _propTypes["default"].string,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  headerHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].arrayOf(_propTypes["default"].number)]).isRequired,
  headerWidth: _propTypes["default"].number.isRequired,
  bodyWidth: _propTypes["default"].number.isRequired,
  rowHeight: _propTypes["default"].number.isRequired,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  data: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  rowKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  frozenData: _propTypes["default"].arrayOf(_propTypes["default"].object),
  useIsScrolling: _propTypes["default"].bool,
  overscanRowCount: _propTypes["default"].number,
  hoveredRowKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  style: _propTypes["default"].object,
  onScrollbarPresenceChange: _propTypes["default"].func,
  onScroll: _propTypes["default"].func,
  onRowsRendered: _propTypes["default"].func,
  headerRenderer: _propTypes["default"].func.isRequired,
  rowRenderer: _propTypes["default"].func.isRequired
};
var _default = GridTable;
exports["default"] = _default;
//# sourceMappingURL=GridTable.js.map