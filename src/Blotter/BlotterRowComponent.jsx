import React, { Component } from 'react';
import './BlotterComponent.css';
import AppConstants from '../Amps/AppConstansts';
import format from 'format-number';
import ReactList from 'react-list';
import FORMATTER from './CellFormatters';
import BlotterCellContainer from './BlotterCellContainer';

export default class BlotterRowComponent extends Component {

    constructor() {
        super();

        this.rowStateData = null;

        /** Method bindings */
        this.renderGridCell = this.renderGridCell.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.gridDataSourceKeys !== this.props.gridDataSourceKeys;
    }

    renderGridCell = (index, k) => {
        return <BlotterCellContainer key={k} id={this.props.rowKey} columnconfig={this.props.headerData[index]}/>
    }

    rowCellSizeGetter = (index) => {
        // console.log('cache size',cache);
        return this.props.headerData[index].properties.columnWidth;
        // return 200;
    }

    render() {
        return <div className="gridRow">
            <ReactList ref='reactlist'
                axis='x'
                itemRenderer={this.renderGridCell}
                length={this.props.headerData.length}
                itemSizeGetter={this.rowCellSizeGetter}
                type='variable'
                /* threshold={5000} */
            />
        </div>
    }
}