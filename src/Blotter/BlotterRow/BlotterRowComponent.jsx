import React, { Component } from 'react';
import '../BlotterComponent.css';
import ReactList from 'react-list';
import BlotterCellContainer from '../BlotterCell/BlotterCellContainer';

export default class BlotterRowComponent extends Component {

    constructor() {
        super();

        this.rowStateData = null;

        /** Method bindings */
        this.renderGridCell = this.renderGridCell.bind(this);
    }

    renderGridCell = (index, k) => {
        return <BlotterCellContainer key={index} id={this.props.rowKey} columnconfig={this.props.headerData[index]}/>
    }

    rowCellSizeGetter = (index,cache) => {
        // console.log('cache size',cache);
        return  this.props.headerData[index].properties.columnWidth;
        // return 200;
    }

    render() {
        return <div className="gridRow">
            <div>
            <ReactList ref='reactlist'
                axis='x'
                itemRenderer={this.renderGridCell}
                length={this.props.headerData.length}
                itemSizeEstimator={this.rowCellSizeGetter}
                type='variable'
                /* threshold={4000} */
            />
            </div>
        </div>
    }
}