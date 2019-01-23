
export const gridData = function (state = { dataSource: new Map(), dataSourceKeys : [] }, action) {
    return state;
};

export const gridHeaderData = function (state = { headerDataSource: [] }, action) {
    let newState;
    switch (action.type) {
        case 'ADD_COLUMN_DATASET':
            newState = { ...state };
            newState.headerDataSource = action.payload.headerDataSet;
            break;

        case 'ADD_COLUMN_DATA':
            newState = { ...state };
            newState.headerDataSource.push(action.payload.headerData);
            break;

        default:
            newState = state;
            break;
    }
    return newState;
};