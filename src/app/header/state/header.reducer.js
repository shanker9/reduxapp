const intialState = {
    blotter: 'risk',
    navLinks: [
        {
            key: 'risk',
            label: 'Risk',
            icon: 'qgraph-risk',
            enableClose: false
        },
        {
            key: 'positions',
            label: 'Positions',
            icon: 'qgraph-position',
            enableClose: false
        },
        {
            key: 'orders',
            label: 'Orders',
            icon: 'qgraph-orders',
            enableClose: false
        }
    ]
};

export const navigation = function (state = intialState, action) {
    const newState = Object.assign({}, state);
    const {payload} = {...action};
    switch (action.type) {
        case 'SET_BLOTTER' :
            newState.blotter = payload.blotter;
            break;

        case 'REMOVE_BLOTTER':
            newState.blotter.splice(payload.blotter, payload.index);
            break;
        default:
            break;
    }
    return newState;
};