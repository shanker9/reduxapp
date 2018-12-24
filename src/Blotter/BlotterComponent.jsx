import React, { Component } from 'react';
import ReactList from 'react-list';
import './BlotterComponent.css';
import BlotterHeaderContainer from './BlotterHeaderContainer';
import BlotterRowContainer from './BlotterRowContainer';

export default class BlotterComponent extends Component {
    constructor() {
        super();
        this.timer = null;
        this.dataSourceKeys = null;

        /** Method bindings */
        this.getAmpsData = this.getAmpsData.bind(this);
        this.renderItemView = this.renderItemView.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.getAmpsData();
    }

    getVisibleRange() {
        const visibleRange = this.refs.reactlist.getVisibleRange();
        return this.props.gridData.dataSourceKeys.slice(visibleRange[0], visibleRange[1] + 1);
    }

    handleScroll() {
        document.getElementById('grid_header_container').scrollLeft = document.getElementById('grid_body_container').scrollLeft;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.props.updateVisibleRange(this.getVisibleRange())
        }, 150);
    }

    getAmpsData() {
        this.props.subscribeToAmps();
    }

    renderItemView(index, k) {
        return <BlotterRowContainer key={k} id={this.props.gridData.dataSourceKeys[index]} />
    }

    render() {
        return <div>
            <div>Total Records :{this.props.gridData.dataSource.size}</div>
            <BlotterHeaderContainer />
            <div id='grid_body_container' className="gridViewContainer" onScroll={this.handleScroll}>
                <ReactList ref='reactlist'
                    itemRenderer={this.renderItemView}
                    length={this.props.gridData.dataSourceKeys.length}
                    minSize={30}
                    type='uniform'
                />
            </div>
        </div>
    }
}