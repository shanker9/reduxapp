import React, { Component } from 'react';
import ReactList from 'react-list';
import './BlotterHeaderComponent.css';

export default class BlotterHeaderComponent extends Component {
    constructor() {
        super();
        
        /** Method bindings */
        this.addColumnDataSet = this.addColumnDataSet.bind(this);
        this.addColumnData = this.addColumnData.bind(this);
    }

    componentDidMount() {
        this.populateGridSettings();
        // this.addColumnDataSet(this.columnData);
        // this.addColumnData({ columnkey: 'Price', columnlabel: 'Price' })
    }

    populateGridSettings() {
        this.props.populateGridSettings();
    }

    addColumnDataSet(columnDataSet) {
        this.props.addColumnDataSet(columnDataSet);
    }

    addColumnData(columnData) {
        this.props.addColumnData(columnData);
    }

    render() {
        return <div id='grid_header_container' key={9999} className="gridHeaderViewContainer">
            {this.props.headerData.headerDataSource.map((val, i) => <div key={i} className="gridCell" style={{minWidth:val.properties.columnWidth}}>
                {val.displayname}
            </div>)}
        </div>
    }
}