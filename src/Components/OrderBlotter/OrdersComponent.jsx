import React from 'react';
import BlotterContainer from "../Blotter/BlotterContainer";

export default class OrdersComponent extends React.Component {
    render() {
        return <BlotterContainer blotter="orders"
            connectToServer={this.props.subscribeToAmps} />
    }
}