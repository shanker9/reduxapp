import React, { Component } from 'react';
import './BlotterHeaderComponent.css';


export const HeaderCell = (props) => {
    return <div className={`gridCell gridHeaderCell ${props.val.properties.styleClass}`} style={{ minWidth: props.val.properties.columnWidth }}>
        {props.val.displayname}
    </div>
}

export default class BlotterHeaderComponent extends Component {
    constructor() {
        super();

        /** Method bindings */
        this.addColumnDataSet = this.addColumnDataSet.bind(this);
        this.addColumnData = this.addColumnData.bind(this);
    }

    componentDidMount() {
        // this.populateGridSettings();
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

    getHeaderCell

    render() {
        return <div id='grid_header_container' key={9999} className="gridHeaderViewContainer">
            {this.props.gridHeaderData.headerDataSource.map((val, i) => <HeaderCell val={val} key={i} />)}
        </div>
    }
}