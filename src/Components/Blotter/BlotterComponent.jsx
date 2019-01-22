import React, { Component } from 'react';
import ReactList from 'react-list';
import './BlotterComponent.css';
import BlotterHeaderContainer from './BlotterHeader/BlotterHeaderContainer';
import BlotterRowContainer from './BlotterRow/BlotterRowContainer';

export default class BlotterComponent extends Component {
    constructor() {
        super();
        this.timer = null;
        this.dataSource = null;
        this.dataSourceKeys = null;

        /** Method bindings */
        this.getAmpsData = this.getAmpsData.bind(this);
        this.renderItemView = this.renderItemView.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        //this.getAmpsData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Component : ",nextProps);
        return nextProps.gridData.dataSourceKeys !== this.props.gridData.dataSourceKeys || nextProps.gridHeaderData !== this.props.gridHeaderData;
    }

    getVisibleRange() {
        const visibleRange = this.refs.reactlist.getVisibleRange();
        return this.dataSourceKeys.slice(visibleRange[0], visibleRange[1] + 1);
    }

    handleScroll() {
        document.getElementById('grid_header_container').scrollLeft = document.getElementById('grid_body_container').scrollLeft;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.props.updateVisibleRange(this.getVisibleRange())
        }, 150);
    }

    getAmpsData() {
        //this.props.subscribeToAmps();
    }

    renderItemView(index, k) {
        return <BlotterRowContainer blotter={this.props.blotter} key={index} id={this.dataSourceKeys[index]} />
    }

    render() {
        console.log("Blotter Componnet : ",this.props);
        this.dataSourceKeys = this.props.gridData.dataSourceKeys;
        return <div>
            <BlotterHeaderContainer blotter={this.props.blotter} />
            {/* <div className="smoothScroller"/> */}
            <div id='grid_body_container' className="gridViewContainer" onScroll={this.handleScroll}>
                <ReactList ref='reactlist'
                    itemRenderer={this.renderItemView}
                    length={this.dataSourceKeys.length}
                    /* minSize={30} */
                    type='uniform'
                />
            </div>
        </div>
    }
}