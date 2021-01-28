import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { renderElement } from './utils';
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
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "style", "columns", "footerIndex", "cellRenderer", "footerRenderer", "expandColumnKey", "expandIcon", "tagName"]);

  var cells = columns.map(function (column, columnIndex) {
    return cellRenderer({
      columns: columns,
      column: column,
      columnIndex: columnIndex,
      footerIndex: footerIndex,
      expandIcon: column.key === expandColumnKey && /*#__PURE__*/React.createElement(ExpandIcon, null)
    });
  });

  if (footerRenderer) {
    cells = renderElement(footerRenderer, {
      cells: cells,
      columns: columns,
      footerIndex: footerIndex
    });
  }

  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    className: className,
    style: style
  }), cells);
};

TableFooterRow.defaultProps = {
  tagName: 'div'
};
TableFooterRow.propTypes = {
  isScrolling: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  footerIndex: PropTypes.number,
  cellRenderer: PropTypes.func,
  footerRenderer: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  expandColumnKey: PropTypes.string,
  expandIcon: PropTypes.func,
  tagName: PropTypes.elementType
};
export default TableFooterRow;
//# sourceMappingURL=TableFooterRow.js.map