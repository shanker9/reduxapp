import React, { Component } from 'react';
import FORMAT_VALUE from './CellFormatters';

export default class BlotterCellComponent extends Component {
    constructor(props){
        super(props);
        this.columnformatter = props.columnconfig.properties.columnformatter;
        this.colorClass = '';
    }

    componentWillReceiveProps(nextProps,nextState){
        if(this.columnformatter==='price'){
            this.colorClass = nextProps.cellData > this.props.cellData ? 'greenCell' : 'redCell';
        }
    }

    render() {
        return <div className={`gridCell ${this.colorClass}`} style={{maxWidth : this.props.columnconfig.properties.columnWidth, minWidth : this.props.columnconfig.properties.columnWidth}}>
            {FORMAT_VALUE(this.props.cellData, this.columnformatter)}
        </div>
    }
}