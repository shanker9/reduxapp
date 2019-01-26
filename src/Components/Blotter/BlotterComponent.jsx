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

        this.headerDiv = null;
        this.bodyDiv = React.createRef();
        this.isSyncingHeaderScroll = false;
        this.isSyncingBodyScroll = false;

        /** Method bindings */
        this.getAmpsData = this.getAmpsData.bind(this);
        this.renderItemView = this.renderItemView.bind(this);
        this.handleHeaderScroll = this.handleHeaderScroll.bind(this);
        this.handleBodyScroll = this.handleBodyScroll.bind(this);
    }

    componentDidMount() {
        if (this.props.gridData.dataSourceKeys.length === 0) {
            this.getAmpsData();
            console.log("Risk Component");
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("Component : ",nextProps);
        return nextProps.gridData.dataSourceKeys !== this.props.gridData.dataSourceKeys || nextProps.gridHeaderData !== this.props.gridHeaderData;
    }

    getVisibleRange() {
        const visibleRange = this.refs.reactlist.getVisibleRange();
        return this.dataSourceKeys.slice(visibleRange[0], visibleRange[1] + 1);
    }

    /** Scroll Event Handlers */
    /** Tying Body Div scroll with header and vice versa */

    handleScroll() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            if (this.props.visibleRangeUpdates) {
                this.props.visibleRangeUpdates(this.getVisibleRange())
            }
        }, 200);
    }

    handleHeaderScroll() {
        if (!this.isSyncingHeaderScroll) {
            this.isSyncingBodyScroll = true;
            this.bodyDiv.current.scrollLeft = this.headerDiv.scrollLeft;
        }
        this.isSyncingHeaderScroll = false;
    }

    handleBodyScroll() {
        this.handleScroll();
        if (!this.isSyncingBodyScroll) {
            this.isSyncingHeaderScroll = true;
            this.headerDiv.scrollLeft = this.bodyDiv.current.scrollLeft;
        }
        this.isSyncingBodyScroll = false;
    }


    getAmpsData() {
        this.props.connectToServer(this.props.blotter);
    }

    renderItemView(index, k) {
        // return index === 0 ? <div key={index} className='smoothScrollForDraggableElementsInHeader smoothScroller' /> : <BlotterRowContainer blotter={this.props.blotter} key={index} id={this.dataSourceKeys[index - 1]} />
        return <BlotterRowContainer blotter={this.props.blotter} key={index} id={this.dataSourceKeys[index]} />
    }

    noDataView() {
        return <div ref={this.bodyDiv} id='grid_body_container' className="gridBody stylishScroller">
            <span className="nodata-grid">No Data to show</span>
        </div>
    }

    render() {
        this.dataSourceKeys = this.props.gridData.dataSourceKeys;
        return <div className="grid">
            <BlotterHeaderContainer headerRef={ref => this.headerDiv = ref} blotter={this.props.blotter} onScrollHandler={this.handleHeaderScroll} />
            {
                this.dataSourceKeys.length === 0 ? this.noDataView() :
                    <div ref={this.bodyDiv} id='grid_body_container' className="gridBody stylishScroller" onScroll={this.handleBodyScroll}>
                        <ReactList ref='reactlist'
                            itemRenderer={this.renderItemView}
                            length={this.dataSourceKeys.length}
                            /* minSize={30} */
                            type='uniform'
                        />
                    </div>
            }
        </div>
    }
}