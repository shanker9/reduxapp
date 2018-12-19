let shouldUpdate = false;
(function () {
    setInterval(function () {
        shouldUpdate = true;
    }, 5000);
})();

export const gridData = function (state = { dataSource: [] }, action) {
    let newState;
    switch (action.type) {
        case 'RND':
            newState = Object.assign({}, state);
            newState.dataSource.push(action.payload.randData);
            break;

        case 'RND_PRICE':
            newState = Object.assign({}, state);
            let object = newState.dataSource[Math.floor(Math.random() * newState.dataSource.length)];
            object.balance = action.payload.price;
            object.timestamp = action.payload.timestamp;
            break;

        case 'INITIAL_SOW_DATA':
            newState = Object.assign({}, state);
            console.log('payload', Array.from(action.payload.values()));
            newState.dataSource = Array.from(action.payload.values());
            break;

        case 'UPDATE':
            if (shouldUpdate) {
                newState = Object.assign({}, state);
                shouldUpdate = false;
            } else {
                newState = state;
            }
            newState.dataSource.find(rec => rec.rowKey === action.payload.rowKey).u = action.payload.data;
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}

export const gridHeaderData = function (state = { headerDataSource: [] }, action) {
    let newState;
    switch (action.type) {
        case 'ADD_COLUMN_DATASET':
            newState = { ...state };
            newState.headerDataSource = action.payload.headerDataSet;
            break;

        case 'ADD_COLUMN_DATA':
            newState = { ...state };
            newState.headerDataSource.push(action.payload.headerData)
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}