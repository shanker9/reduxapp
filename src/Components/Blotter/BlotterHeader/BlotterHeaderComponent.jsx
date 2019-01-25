import React, { Component } from 'react';
import ResizeObserver from 'react-resize-observer';
import './BlotterHeaderComponent.css';


export const HeaderCell = (props) => {
    return <div className={`gridHeaderCell`}>
        <div className={`gridCell`} >
            <div className={`resizeable-cell ${props.val.properties.styleClass}`} style={{ width: props.val.properties.columnWidth - 1 }}>
                <ResizeObserver onResize={rect => props.cellResize(props.val.columnkey, rect)} />
                {props.val.displayname}
            </div>
        </div>
    </div>
}

export default class BlotterHeaderComponent extends Component {
    constructor() {
        super();

        this.timer = null;

        /** Method bindings */
        this.addColumnDataSet = this.addColumnDataSet.bind(this);
        this.addColumnData = this.addColumnData.bind(this);
        this.updateColumnData = this.updateColumnData.bind(this);
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

    updateColumnData(columnkey, rect) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            const changeObject = {
                columnWidth: rect.width + 1
            }
            console.log('Resized cell width', rect.width);
            this.props.updateColumnData(columnkey, changeObject);
        }, 200);
    }

    render() {
        return <div id='grid_header_container' key={9999} className="gridHeaderViewContainer">
            {this.props.gridHeaderData.headerDataSource.map((val, i) => <HeaderCell val={val} key={i} cellResize={this.updateColumnData} />)}
        </div>
    }
}