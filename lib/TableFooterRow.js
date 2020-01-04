"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

/**
 * FooterRow component for BaseTable
 */
var TableFooterRow = function TableFooterRow(_ref) {
  var className = _ref.className,
      style = _ref.style,
      columns = _ref.columns,
      footerIndex = _ref.footerIndex,
      cellRenderer = _ref.cellRenderer,
      footerRenderer = _ref.footerRenderer,
      expandColumnKey = _ref.expandColumnKey,
      ExpandIcon = _ref.expandIcon,
      Tag = _ref.tagName,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["className", "style", "columns", "footerIndex", "cellRenderer", "footerRenderer", "expandColumnKey", "expandIcon", "tagName"]);
  var cells = columns.map(function (column, columnIndex) {
    return cellRenderer({
      columns: columns,
      column: column,
      columnIndex: columnIndex,
      footerIndex: footerIndex,
      expandIcon: column.key === expandColumnKey && _react["default"].createElement(ExpandIcon, null)
    });
  });

  if (footerRenderer) {
    cells = (0, _utils.renderElement)(footerRenderer, {
      cells: cells,
      columns: columns,
      footerIndex: footerIndex
    });
  }

  return _react["default"].createElement(Tag, (0, _extends2["default"])({}, rest, {
    className: className,
    style: style
  }), cells);
};

TableFooterRow.defaultProps = {
  tagName: 'div'
};
TableFooterRow.propTypes = {
  isScrolling: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  footerIndex: _propTypes["default"].number,
  cellRenderer: _propTypes["default"].func,
  footerRenderer: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].element]),
  expandColumnKey: _propTypes["default"].string,
  expandIcon: _propTypes["default"].func,
  tagName: _propTypes["default"].elementType
};
var _default = TableFooterRow;
exports["default"] = _default;
//# sourceMappingURL=TableFooterRow.js.map