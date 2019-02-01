import React from 'react';
import BlotterContainer from "../Blotter/BlotterContainer";

export default class RiskComponent extends React.Component {
    componentDidMount() {
        this.subscribeToAmps(this.props.queryData.queryCommand);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.queryData !== this.props.queryData) {
            this.subscribeToAmps(nextProps.queryData.queryCommand);
        }
    }

    subscribeToAmps(query) {
        this.props.subscribeToAmps('risk', query)
    }

    render() {
        return <BlotterContainer blotter="risk"
            /* connectToServer={this.props.subscribeToAmps} */
            visibleRangeUpdates={this.props.visibleRangeUpdates} />
    }
}