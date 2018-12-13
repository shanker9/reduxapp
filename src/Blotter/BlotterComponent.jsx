import React, { Component } from 'react';
import ReactList from 'react-list';
import { randomData } from '../sampleData';
import './BlotterComponent.css';
import BlotterHeaderContainer from './BlotterHeaderContainer';

export default class BlotterComponent extends Component {
    constructor() {
        super();

        /** Method bindings */
        this.divClick = this.divClick.bind(this);
        this.renderItemView = this.renderItemView.bind(this);
    }

    componentDidMount() {
        this.divClick();
    }

    handleScroll() {
        document.getElementById('grid_header_container').scrollLeft = document.getElementById('grid_body_container').scrollLeft;
    }

    divClick() {
        const that = this, multiplier = 1000;
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

    getLocalTime(dateObject){
        return `${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;
    }

    renderItemView(index, k) {
        const data = this.props.gridData.dataSource[index];
        delete data.name;
        const dataKeys = Object.keys(data);

        return <div key={k} className="gridRow">
            {dataKeys.map((val, i) => <div key={i} className="gridCell">
                {`${data[val]}`}
            </div>)}
        </div>
    }

    render() {
        return <div>
            <BlotterHeaderContainer />
            <div id='grid_body_container' className="gridViewContainer" onScroll={this.handleScroll}>
                <ReactList ref='reactlist'
                    itemRenderer={this.renderItemView}
                    length={this.props.gridData.dataSource.length}
                    // minSize={30}
                    type='uniform'
                />
            </div>
        </div>
    }
}