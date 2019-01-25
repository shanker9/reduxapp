import React, { Component } from 'react';
import FORMAT_VALUE, {ChangeClasses} from './CellFormatters';
import './BlotterCellComponent.css'

export default class BlotterCellComponent extends Component {
    constructor(props){
        super(props);
        this.columnformatter = props.columnconfig.properties.columnformatter;
        this.ChangeClasses = props.columnconfig.properties.styleClass === 'numericCell' ? ChangeClasses.NUMERIC_CELL : ChangeClasses.STRING_CELL;
        this.colorClass = this.ChangeClasses.noChange;
    }

    componentWillReceiveProps(nextProps,nextState){
        if(this.columnformatter==='price'){
            this.colorClass = nextProps.cellData===this.props.cellData ? this.ChangeClasses.noChange : (nextProps.cellData > this.props.cellData ? this.ChangeClasses.greenCell : this.ChangeClasses.redCell);
        }
    }

    render() {
        return <div className={this.colorClass} style={{maxWidth : this.props.columnconfig.properties.columnWidth, minWidth : this.props.columnconfig.properties.columnWidth}}>
            {FORMAT_VALUE(this.props.cellData, this.columnformatter)}
        </div>
    }
}