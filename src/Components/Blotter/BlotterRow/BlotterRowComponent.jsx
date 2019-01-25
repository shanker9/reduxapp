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

    rowCellSizeGetter = (index) => {
        return  this.props.headerData.headerDataSource.get(this.props.headerData.headerDataSourceKeys[index]).properties.columnWidth;
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

    renderGridCell = (index, k) => {
        return <BlotterCellContainer blotter={this.props.blotter} key={index} id={this.props.rowKey} columnconfig={this.props.headerData.headerDataSource.get(this.props.headerData.headerDataSourceKeys[index])}/>
    }

    render() {
        const rowSelectClass = this.props.rowState.isSelected ? 'row-selected' : '';
        return <div className={`gridRow ${rowSelectClass}`} onClick={this.rowSelect}>
            <div>
            <ReactList ref='reactlist'
                axis='x'
                itemRenderer={this.renderGridCell}
                length={this.props.headerData.headerDataSourceKeys.length}
                itemSizeGetter={this.rowCellSizeGetter}
                type='variable'
                /* threshold={4000} */
            />
            </div>
        </div>
    }
}