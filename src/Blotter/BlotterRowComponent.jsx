import React, { Component } from 'react';
import './BlotterComponent.css';
import AppConstants from '../Amps/AppConstansts';
import format from 'format-number';
import ReactList from 'react-list';
import FORMATTER from './CellFormatters';

export default class BlotterRowComponent extends Component {

    constructor() {
        super();

        this.rowStateData = null;

        /** Method bindings */
        this.renderGridCell = this.renderGridCell.bind(this);
    }

    FORMAT_VALUE = (value, type) => {
        switch (type) {
            case AppConstants.columnformatter.PRICE:
                return FORMATTER.PRICE_FORMATTER(value.toFixed(2));
                break;

            case AppConstants.columnformatter.NUMBER:
                return FORMATTER.NUMBER_FORMATTER(value);
                break;

            case AppConstants.columnformatter.PERCENTAGE:
                return FORMATTER.PERCENT_FORMATTER((value * 100).toFixed(2));
                break;

            case AppConstants.columnformatter.DATE:
                return (new Date(value * 1000)).toLocaleString();
                break;

            default:
                return value;
                break;
        }
    }

    renderGridCell = (index, k) => {
        const cellVal = this.rowStateData[this.props.headerData[index].columnvalue];
        const cellData = !this.rowStateData || !cellVal
            || this.FORMAT_VALUE(cellVal, this.props.headerData[index].properties.columnformatter)
        return <div key={k} className="gridCell">
            {cellData}
        </div>
    }

    rowCellSizeGetter = (index) => {
        // return this.props.headerData[index].properties.columnWidth;
        return 200;
    }

    render() {
        this.rowStateData = this.props.rowState.data;
        return <div className="gridRow">
            <ReactList ref='reactlist'
                axis='x'
                itemRenderer={this.renderGridCell}
                length={this.props.headerData.length}
                itemSizeGetter={this.rowCellSizeGetter}
                type='variable'
            />
        </div>
    }
}