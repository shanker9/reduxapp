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
        return <BlotterCellContainer blotter={this.props.blotter} key={index} id={this.props.rowKey} columnconfig={this.props.headerData[index]}/>
    }

    rowCellSizeGetter = (index,cache) => {
        return  this.props.headerData[index].properties.columnWidth;
    }

    rowSelect = (e) => {
        if(e.ctrlKey){
            this.props.rowSelected(this.props.blotter,this.props.rowKey,!this.props.rowState.isSelected,false)
        }else{
            this.props.rowSelected(this.props.blotter,this.props.rowKey,!this.props.rowState.isSelected,true)
        }
        // this.setState({
        //     isSelected : !this.state.isSelected
        // })

    }

    render() {
        const rowSelectClass = this.props.rowState.isSelected ? 'row-selected' : '';
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