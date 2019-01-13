let shouldRefresh = false;
(function () {
    setInterval(function () {
        shouldRefresh = true;
    }, 150);
})();

let newRowState;
export const gridData = function (state = { dataSource: new Map(), dataSourceKeys : [] }, action) {
    let newState;
    switch (action.type) {
        case 'INITIAL_SOW_DATA':
            newState = { ...state }
            console.log('payload', action.payload);
            newState.dataSource = action.payload;
            newState.dataSourceKeys = Array.from(newState.dataSource.keys());
            break;

        case 'UPDATE':
            newState = shouldRefresh ?  {...state} : state;
            // if(shouldRefresh){
            //     console.time('r');
            //     newState = {...state};
            // }else{
            //     console.timeEnd('r');
            //     newState = state;
            // }
            // newRowState = {...newState.dataSource.get(action.payload.rowKey)}
            newRowState = newState.dataSource.get(action.payload.rowKey)
            newRowState.data = action.payload.data;
            newState.dataSource.set(action.payload.rowKey, newRowState);

            shouldRefresh = false;
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
            newState.headerDataSource = [...newState.headerDataSource];
            newState.headerDataSource.push(action.payload.headerData);
            break;

        case 'REMOVE_COLUMN_DATA':
            newState = { ...state };
            newState.headerDataSource = [...newState.headerDataSource];
            newState.headerDataSource.splice(newState.headerDataSource.findIndex(i=>i.columnkey === action.payload.columnkey),1);
        break;

        default:
            newState = state;
            break;
    }
    return newState;
}