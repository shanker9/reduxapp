import React, { Component } from 'react';
import './BlotterComponent.css';
import AppConstants from '../Amps/AppConstansts';
import format from 'format-number';


export default class BlotterRowComponent extends Component {
    // constructor(){
    //     super();
    // }

    FORMAT_VALUE = (value, type) => {
        let myFormat, result;
        switch (type) {
            case AppConstants.columnformatter.PRICE:
                myFormat = format({ prefix: '$', integerSeparator: ',' });
                result = myFormat(value.toFixed(2));
                break;
    
            case AppConstants.columnformatter.NUMBER:
                myFormat = format({ integerSeparator: ',' });
                result = myFormat(value);
                break;
    
            case AppConstants.columnformatter.PERCENTAGE:
                myFormat = format({ suffix: '%' });
                result = myFormat((value * 100).toFixed(2));
                break;
    
            case AppConstants.columnformatter.DATE:
                result = (new Date(value * 1000)).toLocaleString();
                break;
    
            default:
                result = value;
                break;
        }
    
        return result;
    }

    render() {
        // return <div>{!this.props.data || this.props.data.rowKey}</div>
        return <div className="gridRow">
            {this.props.headerData.map((val, i) => <div key={i} className="gridCell">
                { !this.props.data || !this.props.data[val.columnvalue] || this.FORMAT_VALUE(this.props.data[val.columnvalue], val.properties.columnformatter)}
            </div>)}
        </div>
    }
}