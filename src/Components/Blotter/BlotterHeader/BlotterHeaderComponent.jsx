import React, { Component } from 'react';
import ResizeObserver from 'react-resize-observer';
import Sortable from 'react-sortablejs';
import './BlotterHeaderComponent.css';


export const HeaderCell = (props) => {
    return <div key={props.val.columnkey} data-id={props.val.columnkey} className={`${props.childClassNames}`}>
        <div className={'gridCell'} >
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
        this.columnResizeHandler = this.columnResizeHandler.bind(this);
        this.listChangeHandler = this.listChangeHandler.bind(this);
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

    columnResizeHandler(columnkey, rect) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            console.log('Resized cell width', rect.width);
            const functionToCall = columnkey === 'groupingColumn' ? this.props.groupingCellResize : this.props.updateColumnData;
            functionToCall(columnkey, { columnWidth: rect.width + 1 });
        }, 150);
    }

    listChangeHandler(order, sortable, event) {
        this.props.reorderColumnData(order);
    }

    render() {
        return <div ref={this.props.headerRef} id='grid_header_container' key={9999} className="gridHeaderViewContainer" onScroll={this.props.onScrollHandler}>
            <Sortable tag='div'
                options={{
                    scrollSensitivity: 30,
                    scrollSpeed: 50,
                    ghostClass: 'headerCellReorderGhost',
                    chosenClass: 'headerCellReorderChosen',
                    animation: 150,
                    draggable: '.gridHeaderCell'
                }}
                onChange={this.listChangeHandler}>
                <HeaderCell childClassNames='groupingHeaderCell' val={this.props.groupingColumnConfig} key={-1} cellResize={this.columnResizeHandler} />
                {Array.from(this.props.gridHeaderData.headerDataSource).map((val, i) => <HeaderCell val={val[1]} key={i} childClassNames='gridHeaderCell' cellResize={this.columnResizeHandler} />)}
            </Sortable>
        </div>
    }
}