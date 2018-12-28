import React, { Component } from 'react';
import FORMAT_VALUE from './CellFormatters';

export default class BlotterCellComponent extends Component {

    render() {
        return <div className="gridCell" style={{maxWidth : this.props.columnconfig.properties.columnWidth, minWidth : this.props.columnconfig.properties.columnWidth}}>
            {FORMAT_VALUE(this.props.cellData, this.props.columnconfig.properties.columnformatter)}
        </div>
    }
}