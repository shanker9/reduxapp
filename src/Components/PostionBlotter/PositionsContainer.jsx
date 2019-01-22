import {connect} from 'react-redux';

import PositionsComponent from './PositionsComponent'

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const PositionsContainer = connect(mapStateToProps, mapDispatchToProps)(PositionsComponent);

export default PositionsContainer;