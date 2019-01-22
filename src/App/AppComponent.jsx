import React, {Component} from 'react';
import './App.scss';
import RiskContainer from '../Components/RiskBlotter/RiskContainer';
import PositionsContainer from '../Components/PostionBlotter/PositionsContainer';
import OrdersContainer from '../Components/OrderBlotter/OrdersContainer';
import AppConstants from "./Constants";
import HeaderContainer from "./header/HeaderContainer";

class AppComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    renderBlotter() {
        let html = <div>No default blotter set</div>;
        switch (this.props.navigation.blotter) {
            case AppConstants.NavigationKeys.RISK_VIEW:
                html = <RiskContainer/>;
                break;
            case AppConstants.NavigationKeys.POSITION_VIEW:
                html = <PositionsContainer/>;
                break;
            case AppConstants.NavigationKeys.ORDERS_VIEW:
                html = <OrdersContainer/>;
                break;
            default:
                break;
        }

        return html;
    }

    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                {this.renderBlotter()}
            </div>
        );
    }
}

export default AppComponent;
