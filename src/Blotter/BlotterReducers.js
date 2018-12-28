let shouldRefresh = false;
(function () {
    setInterval(function () {
        shouldRefresh = true;
    }, 1000);
})();

let newRowState;
export const gridData = function (state = { dataSource: new Map(), dataSourceKeys : [] }, action) {
    let newState;
    switch (action.type) {
        case 'INITIAL_SOW_DATA':
            newState = { ...state }
            console.log('payload', action.payload);
            // newState.dataSource = new Map(Array.from(action.payload).map(entry => [entry[0], rowRecord(undefined, { type: 'ADD_RECORD', payload: entry[1] })]));
            newState.dataSource = action.payload;
            newState.dataSourceKeys = Array.from(newState.dataSource.keys());
            break;

        case 'UPDATE':
            // newState = shouldRefresh ? Object.assign({}, state) : state;
            // console.timeEnd('render');
            // newState = shouldRefresh ?  {...state} : state;
            if(shouldRefresh){
                console.time('r');
                newState = {...state};
            }else{
                console.timeEnd('r');
                newState = state;
            }
            // newState.dataSource.set(action.payload.rowKey, rowRecord(newState.dataSource.get(action.payload.rowKey), action));
            // if (shouldRefresh) {
            newRowState = {...newState.dataSource.get(action.payload.rowKey)}
            newRowState.data = action.payload.data;
            newState.dataSource.set(action.payload.rowKey, newRowState);
            // }
            // newState.dataSource.get(action.payload.rowKey).data = action.payload.data;
            shouldRefresh = false;
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}

export const rowRecord = function (state = {}, action) {
    switch (action.type) {
        case 'ADD_RECORD':
            return { ...action.payload };

        case 'UPDATE':
            if (state.rowKey !== action.payload.rowKey) {
                return state;
            }
            return {
                ...state,
                data: action.payload.data
            }

        default:
            return state;
    }
}

export const visibleGridData = function (state = {}, action) {
    let newState;
    switch (action.type) {
        case 'UPDATEE':
            newState = Object.assign({}, state);
            newState.dataSource.get(action.payload.rowKey).data = action.payload.data;
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