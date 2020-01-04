import React from 'react';
import PropTypes from 'prop-types';

/**
 * FooterCell component for BaseTable
 */
const TableFooterCell = ({ className, column, columnIndex }) => <div className={className}>{column.title}</div>;

TableFooterCell.propTypes = {
  className: PropTypes.string,
  column: PropTypes.object,
  columnIndex: PropTypes.number,
};

export default TableFooterCell;
