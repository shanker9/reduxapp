import React from 'react';
import BlotterContainer from "../Blotter/BlotterContainer";

export default class RiskComponent extends React.Component {
    componentDidMount() {
    }

    render() {
        return <BlotterContainer blotter="risk"
        connectToServer={this.props.subscribeToAmps} />
    }
}