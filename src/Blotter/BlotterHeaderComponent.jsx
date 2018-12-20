import React, { Component } from 'react';
import ReactList from 'react-list';
import { randomData } from '../sampleData';
import './BlotterComponent.css';

export default class BlotterHeaderComponent extends Component {
    constructor() {
        super();

        this.columnData = [
            { columnkey: '_id', columnlabel: 'ID' },
            { columnkey: 'index', columnlabel: 'Index' },
            { columnkey: 'guid', columnlabel: 'GUID' },
            { columnkey: 'isActive', columnlabel: 'IsActive' },
            { columnkey: 'balance', columnlabel: 'Balance' },
            { columnkey: 'picture', columnlabel: 'Picture' },
            { columnkey: 'age', columnlabel: 'Age' },
            { columnkey: 'eyeColor', columnlabel: 'EyeColor' }
        ]
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
            {this.props.headerData.headerDataSource.map((val, i) => <div key={i} className="gridCell">
                {val.displayname}
            </div>)}
        </div>
    }
}