import React, { Component } from 'react';
import ReactList from 'react-list';
import { randomData } from '../sampleData';
import './BlotterComponent.css';

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

    divClick() {
        const that = this, multiplier = 1000;
        let randData;
        for (let i = 0; i < randomData.length*multiplier; i++) {
            randData = randomData[i%randomData.length];
            randData.serialOrder = i;
            that.props.divClick(randData);
        }
        console.log('gridData',this.props.gridData);
        
        console.log('Data length',randomData.length*multiplier);
        setInterval(()=>{
            this.props.updateRandPrice()
        },0.01)
    }

    renderItemView(index, k) {
        const data = this.props.gridData.dataSource[index];
        delete data.name;
        const dataKeys = Object.keys(data);

        return <div key={k} className="gridRow">
            {dataKeys.map((val, i) => <div key={i} className="gridCell">{data[val]}</div>)}
        </div>
    }

    render() {
        return <div className="gridViewContainer">
            <ReactList ref='reactlist'
                itemRenderer={this.renderItemView}
                length={this.props.gridData.dataSource.length}
                // minSize={30}
                type='uniform'
            />
        </div>
    }
}