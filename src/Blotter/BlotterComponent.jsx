import React, { Component } from 'react';
import ReactList from 'react-list';
import { randomData } from '../sampleData';
import './BlotterComponent.css';
import BlotterHeaderContainer from './BlotterHeaderContainer';
import BlotterRowContainer from './BlotterRowContainer';
import AppConstants from '../Amps/AppConstansts';

export default class BlotterComponent extends Component {
    constructor() {
        super();
        this.timer = null;

        /** Method bindings */
        this.divClick = this.divClick.bind(this);
        this.getAmpsData = this.getAmpsData.bind(this);
        this.renderItemView = this.renderItemView.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.getAmpsData();
    }

    getVisibleRange() {
        const visibleRange = this.refs.reactlist.getVisibleRange();
        // if (visibleRange.length > 0) {
            return this.props.gridData.dataSource.slice(visibleRange[0], visibleRange[1] + 1);
        // }
        // console.log('null visible range');
        // return null;
    }

    handleScroll() {
        document.getElementById('grid_header_container').scrollLeft = document.getElementById('grid_body_container').scrollLeft;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.props.updateVisibleRange(this.getVisibleRange())
        }, 150);
    }

    divClick() {
        const that = this, multiplier = 1;
        let randData, j = 0;
        for (let i = 0; i < randomData.length * multiplier; i++) {
            randData = { ...randomData[i % randomData.length] };
            randData.timestamp = this.getLocalTime(new Date(Date.now()));
            j++;
            that.props.divClick(randData);
        }
        console.log('gridData', this.props.gridData);

        console.log('Data length', randomData.length * multiplier);
        setInterval(() => {
            this.props.updateRandPrice(this.getLocalTime(new Date(Date.now())))
            // randData = {...randomData[j%randomData.length]};
            // randData.serialOrder = j;
            // j++;
            // that.props.divClick(randData);
        }, 0.001)
    }

    getLocalTime(dateObject) {
        return `${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;
    }

    getAmpsData() {
        this.props.subscribeToAmps();
    }

    renderItemView(index, k) {
        const rowState = this.props.gridData.dataSource[index];
        // const rowData = rowState.data;
        const headerData = this.props.gridHeaderData.headerDataSource;

        return <BlotterRowContainer key={k} id={rowState.rowKey} />
        // return <div key={k} id={data.rowKey} className="gridRow">
        //     {headerData.map((val, i) => <div key={i} className="gridCell">
        //         {!data[val.columnvalue] || this.FORMAT_VALUE(data[val.columnvalue],val.properties.columnformatter)}
        //     </div>)}
        // </div>
    }

    // FORMAT_VALUE = (value, type) => {
    //     let myFormat, result;
    //     switch (type) {
    //         case AppConstants.columnformatter.PRICE:
    //             myFormat = format({ prefix: '$', integerSeparator: ',' });
    //             result = myFormat(value.toFixed(2));
    //             break;
    
    //         case AppConstants.columnformatter.NUMBER:
    //             myFormat = format({ integerSeparator: ',' });
    //             result = myFormat(value);
    //             break;
    
    //         case AppConstants.columnformatter.PERCENTAGE:
    //             myFormat = format({ suffix: '%' });
    //             result = myFormat((value * 100).toFixed(2));
    //             break;
    
    //         case AppConstants.columnformatter.DATE:
    //             result = (new Date(value * 1000)).toLocaleString();
    //             break;
    
    //         default:
    //             result = value;
    //             break;
    //     }
    
    //     return result;
    // }

    render() {
        return <div>
            <div>Total Records :{this.props.gridData.dataSource.length}</div>
            <BlotterHeaderContainer />
            <div id='grid_body_container' className="gridViewContainer" onScroll={this.handleScroll}>
                <ReactList ref='reactlist'
                    itemRenderer={this.renderItemView}
                    length={this.props.gridData.dataSource.length}
                    minSize={30}
                    type='uniform'
                />
            </div>
        </div>
    }
}