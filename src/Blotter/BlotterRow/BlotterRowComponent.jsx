import React, { Component } from 'react';
import './BlotterRowComponent.css';
import ReactList from 'react-list';
import BlotterCellContainer from '../BlotterCell/BlotterCellContainer';

export default class BlotterRowComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSelected : this.props.rowState.isSelected
        }

        /** Method bindings */
        this.renderGridCell = this.renderGridCell.bind(this);
    }

    renderGridCell = (index, k) => {
        return <BlotterCellContainer key={index} id={this.props.rowKey} columnconfig={this.props.headerData[index]}/>
    }

    rowCellSizeGetter = (index,cache) => {
        // console.log('cache size',cache);
        return  this.props.headerData[index].properties.columnWidth;
    }

    rowSelect = () => {
        this.props.rowSelected(this.props.rowKey,!this.state.isSelected)
        this.setState({
            isSelected : !this.state.isSelected
        })
    }

    render() {
        const rowSelectClass = this.state.isSelected ? 'row-selected' : '';
        return <div className={`gridRow ${rowSelectClass}`} onClick={this.rowSelect}>
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