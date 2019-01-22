import {connect} from 'react-redux';

import AppComponent from './AppComponent';

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;