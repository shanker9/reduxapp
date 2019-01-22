import React from 'react';
import BlotterContainer from "../Blotter/BlotterContainer";

export default class RiskComponent extends React.Component {
    componentDidMount() {
        if (this.props.gridData.dataSourceKeys.length === 0) {
            this.props.subscribeToAmps();
            console.log("Risk Component");
        }
    }

    render() {
        return <BlotterContainer blotter="risk"/>
    }
}