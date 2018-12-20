import React, { Component } from 'react';
import './BlotterComponent.css';
import AppConstants from '../Amps/AppConstansts';
import format from 'format-number';
import ReactList from 'react-list';


export default class BlotterRowComponent extends Component {

    constructor(){
        super();

        /** Method bindings */
        this.renderGridCell = this.renderGridCell.bind(this);
    }

    FORMAT_VALUE = (value, type) => {
        let myFormat, result;
        switch (type) {
            case AppConstants.columnformatter.PRICE:
                myFormat = format({ prefix: '$', integerSeparator: ',' });
                result = myFormat(value.toFixed(2));
                break;

            case AppConstants.columnformatter.NUMBER:
                myFormat = format({ integerSeparator: ',' });
                result = myFormat(value);
                break;

            case AppConstants.columnformatter.PERCENTAGE:
                myFormat = format({ suffix: '%' });
                result = myFormat((value * 100).toFixed(2));
                break;

            case AppConstants.columnformatter.DATE:
                result = (new Date(value * 1000)).toLocaleString();
                break;

            default:
                result = value;
                break;
        }

        return result;
    }

    renderGridCell = (index, k) => {
        const cellData = !this.props.rowState.data || !this.props.rowState.data[this.props.headerData[index].columnvalue]
            || this.FORMAT_VALUE(this.props.rowState.data[this.props.headerData[index].columnvalue], this.props.headerData[index].properties.columnformatter)
        return <div key={k} className="gridCell">
            {cellData}
        </div>
    }

    rowCellSizeGetter = (index) => {
        return this.props.headerData[index].properties.columnWidth;
    }

    render() {
        return <div className="gridRow">
            <ReactList ref='reactlist'
                axis='x'
                itemRenderer={this.renderGridCell}
                length={this.props.headerData.length}
                itemSizeGetter={this.rowCellSizeGetter}
                // minSize={30}
                type='variable'
            />
            {/* {this.props.headerData.map((val, i) => <div key={i} className="gridCell">
                {!this.props.rowState.data || !this.props.rowState.data[val.columnvalue] || this.FORMAT_VALUE(this.props.rowState.data[val.columnvalue], val.properties.columnformatter)}
            </div>)} */}
        </div>
    }
}