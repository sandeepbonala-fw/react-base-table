import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';

var TableFooter = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(TableFooter, _React$PureComponent);

  function TableFooter(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.renderFooterRow = _this.renderFooterRow.bind(_assertThisInitialized(_this));
    _this.renderFrozenRow = _this.renderFrozenRow.bind(_assertThisInitialized(_this));
    _this._setRef = _this._setRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = TableFooter.prototype;

  _proto.scrollTo = function scrollTo(offset) {
    if (this.footerRef) this.footerRef.scrollLeft = offset;
  };

  _proto.renderFooterRow = function renderFooterRow(height, index) {
    var _this$props = this.props,
        columns = _this$props.columns,
        footerRenderer = _this$props.footerRenderer;
    if (height <= 0) return null;
    var style = {
      width: '100%',
      height: height
    };
    return footerRenderer({
      style: style,
      columns: columns,
      footerIndex: index
    });
  };

  _proto.renderFrozenRow = function renderFrozenRow(rowData, index) {
    var _this$props2 = this.props,
        columns = _this$props2.columns,
        rowHeight = _this$props2.rowHeight,
        rowRenderer = _this$props2.rowRenderer;
    var style = {
      width: '100%',
      height: rowHeight
    }; // for frozen row the `rowIndex` is negative

    var rowIndex = -index - 1;
    return rowRenderer({
      style: style,
      columns: columns,
      rowData: rowData,
      rowIndex: rowIndex
    });
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        className = _this$props3.className,
        width = _this$props3.width,
        height = _this$props3.height,
        rowWidth = _this$props3.rowWidth,
        footerHeight = _this$props3.footerHeight,
        frozenData = _this$props3.frozenData;
    if (height <= 0) return null;
    var style = {
      width: width,
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    var innerStyle = {
      width: rowWidth,
      height: height
    };
    var rowHeights = Array.isArray(footerHeight) ? footerHeight : [footerHeight];
    return /*#__PURE__*/React.createElement("div", {
      role: "grid",
      ref: this._setRef,
      className: className,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      role: "rowgroup",
      style: innerStyle
    }, rowHeights.map(this.renderFooterRow), frozenData.map(this.renderFrozenRow)));
  };

  _proto._setRef = function _setRef(ref) {
    this.footerRef = ref;
  };

  return TableFooter;
}(React.PureComponent);

TableFooter.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  footerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]).isRequired,
  rowWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  frozenData: PropTypes.arrayOf(PropTypes.object),
  footerRenderer: PropTypes.func.isRequired,
  rowRenderer: PropTypes.func.isRequired
};
export default TableFooter;
//# sourceMappingURL=TableFooter.js.map