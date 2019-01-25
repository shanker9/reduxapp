import {connect} from 'react-redux';

import HeaderComponent from './HeaderComponent';

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
        dataCount : new Map(state.navigation.navLinks.map(n => [n.key,state[n.key].gridData.dataSource.size]))
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