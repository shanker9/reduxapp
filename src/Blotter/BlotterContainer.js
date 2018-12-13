import { connect } from 'react-redux';
import BlotterComponent from './BlotterComponent';

const mapStateToProps = (state) => {
    // console.log(state);

    return {
        gridData: state.gridData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        divClick: randData => {
            dispatch({ type: 'RND', payload: { randData: randData } });
        },
        updateRandPrice: timestamp => {
            dispatch({ type: 'RND_PRICE', payload: { price: `$${(Math.random() * 3000).toFixed(2)}`, timestamp: timestamp } })
        }
    }
}

const BlotterContainer = connect(mapStateToProps, mapDispatchToProps)(BlotterComponent);

export default BlotterContainer;