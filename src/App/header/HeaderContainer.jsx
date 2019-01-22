import {connect} from 'react-redux';

import HeaderComponent from './HeaderComponent';

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setView: view => {
            dispatch({
                type: 'SET_BLOTTER',
                payload: {blotter: view}
            })
        },

        removeView: (view, index) => {
            dispatch({
                type: 'REMOVE_BLOTTER',
                payload: {blotter: view, index: index}
            })
        }
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default HeaderContainer;