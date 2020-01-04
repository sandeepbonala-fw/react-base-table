import React from 'react';
import PropTypes from 'prop-types';
/**
 * FooterCell component for BaseTable
 */

var TableFooterCell = function TableFooterCell(_ref) {
  var className = _ref.className,
      column = _ref.column,
      columnIndex = _ref.columnIndex;
  return React.createElement("div", {
    className: className
  }, column.title);
};

TableFooterCell.propTypes = {
  className: PropTypes.string,
  column: PropTypes.object,
  columnIndex: PropTypes.number
};
export default TableFooterCell;
//# sourceMappingURL=TableFooterCell.js.map