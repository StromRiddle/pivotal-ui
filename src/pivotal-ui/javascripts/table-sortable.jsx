/** @jsx React.DOM */
'use strict';

var React = require('react');
var _ = require('lodash');

var TableHeader = React.createClass({
  handleClick: function handleClick(e) {
    if (this.props.sortable) {
      this.props.onSortableTableHeaderClick(this);
    }
  },

  render: function render() {
    var sortClass;

    if (this.props.sortable) {
      if (this.props.sortState.column !== this.props.key) {
        sortClass = 'sortable sorted-none';
      } else if (this.props.sortState.order === 'asc') {
        sortClass = 'sortable sorted-asc';
      } else {
        sortClass = 'sortable sorted-desc';
      }
    }

    return (
      <th className={sortClass} onClick={this.handleClick}>
        {this.props.children}
      </th>
    );
  }
});

var TableRow = React.createClass({
  render: function render() {
    var tableCells = _.map(this.props.columnNames, function(columnName) {
      return (
        <td>{this.props.data[columnName]}</td>
      );
    }, this);

    return (
      <tr>
        {tableCells}
      </tr>
    );
  }
});

var TableSortable = module.exports = React.createClass({
  getInitialState: function getInitialState() {
    var initialSortColumn = this.props.columns[0].name;

    return {
      sort: {
        column: initialSortColumn,
        order: 'asc'
      },

      data: _.sortBy(this.props.data, initialSortColumn)
    };
  },

  sortData: function sortData(header) {
    var oldSortColumn = this.state.sort.column;
    var oldSortOrder = this.state.sort.order;
    var oldData = this.state.data;
    var newSortColumn = header.props.key;
    var newData;
    var newSortOrder;

    if (oldSortColumn !== newSortColumn) {
      newSortOrder = 'asc';
      newData = _.sortBy(oldData, newSortColumn);
    } else {
      newSortOrder = oldSortOrder === 'asc' ? 'desc' : 'asc';
      newData = oldData.reverse();
    }

    this.setState({
      sort: {
        column: newSortColumn,
        order: newSortOrder
      },
      data: newData
    });
  },

  render: function render() {
    var headings = _.map(this.props.columns, function(column) {
      return (
        <TableHeader key={column.name} sortable={column.sortable} sortState={this.state.sort} onSortableTableHeaderClick={this.sortData}>
          {column.title}
        </TableHeader>
      );
    }, this);

    var rows = _.map(this.state.data, function(datum) {
      return (
        <TableRow data={datum} key={datum.name} columnNames={_.map(this.props.columns, 'name')} />
      );
    }, this);

    var defaultClasses = ['table', 'table-sortable'];
    var allClasses = defaultClasses.concat(this.props.classes).join(' ');

    return (
      <table className={allClasses}>
        <thead>
          <tr>
            {headings}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});