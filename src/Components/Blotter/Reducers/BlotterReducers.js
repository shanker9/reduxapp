let shouldRefresh = false;
(function () {
    setInterval(function () {
        shouldRefresh = true;
    }, 150);
})();

let newRowState, selectedRowState;
export const gridData = function (state = { dataSource: new Map(), dataSourceKeys: [], selectedRows: new Map() }, action) {
    let newState;
    switch (action.type) {
        case 'INITIAL_SOW_DATA':
            newState = { ...state }
            newState.dataSource = action.payload;
            newState.dataSourceKeys = Array.from(newState.dataSource.keys());
            break;

        case 'ROW_UPDATE':
            newState = shouldRefresh ? { ...state } : state;
            // if(shouldRefresh){
            //     console.time('r');
            //     newState = {...state};
            // }else{
            //     console.timeEnd('r');
            //     newState = state;
            // }
            // newRowState = {...newState.dataSource.get(action.payload.rowKey)}
            newRowState = newState.dataSource.get(action.payload.rowKey)
            if (newRowState) {
                newRowState.data = action.payload.data;
                newState.dataSource.set(action.payload.rowKey, newRowState);
            }

            shouldRefresh = false;
            break;

        case 'NEW_ROWS_UPDATE':
            newState = { ...state }
            action.payload.forEach((d, k) => newState.dataSource.set(k, d));
            newState.dataSourceKeys = Array.from(newState.dataSource.keys());
            break;

        case 'ROW_SELECTED':
            newState = { ...state };
            // adding to selectedRows map
            if (action.payload.isSingleRowSelect) {
                newState.selectedRows.forEach((rowState, rowKey) => {
                    selectedRowState = { ...newState.dataSource.get(rowKey) };
                    selectedRowState.isSelected = false;
                    newState.dataSource.set(rowKey, selectedRowState);
                })
                newState.selectedRows.clear();

                newRowState = { ...newState.dataSource.get(action.payload.rowKey) };
                newRowState.isSelected = true;
                newState.dataSource.set(action.payload.rowKey, newRowState);
                newState.selectedRows.set(newRowState.rowKey, newRowState)
            } else {
                newRowState = { ...newState.dataSource.get(action.payload.rowKey) };
                newRowState.isSelected = action.payload.isSelected;
                newState.dataSource.set(action.payload.rowKey, newRowState);
                action.payload.isSelected ? newState.selectedRows.set(action.payload.rowKey, newRowState)
                    : newState.selectedRows.delete(action.payload.rowKey);
            }
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}

export const gridHeaderData = function (state = { headerDataSource: new Map(), headerDataSourceKeys: [] }, action) {
    let newState;
    switch (action.type) {
        case 'ADD_COLUMN_DATASET':
            newState = { ...state };
            newState.headerDataSource = action.payload.headerDataSet;
            newState.headerDataSourceKeys = Array.from(newState.headerDataSource.keys());
            break;

        case 'ADD_COLUMN_DATA':
            newState = { ...state };
            newState.headerDataSource = [...newState.headerDataSource];
            newState.headerDataSource.set(action.payload.headerData.columnkey, action.payload.headerData);
            newState.headerDataSourceKeys = Array.from(newState.headerDataSource.keys());
            break;

        case 'REMOVE_COLUMN_DATA':
            newState = { ...state };
            newState.headerDataSource = [...newState.headerDataSource];
            newState.headerDataSource.delete(action.payload.columnkey);
            newState.headerDataSourceKeys = Array.from(newState.headerDataSource.keys());
            break;

        case 'UPDATE_COLUMN_DATA':
            newState = { ...state };
            const columnData = { ...newState.headerDataSource.get(action.payload.columnkey) };
            columnData.properties = Object.assign({}, columnData.properties, action.payload.changeData);
            newState.headerDataSource.set(columnData.columnkey, columnData)
            newState.headerDataSourceKeys = Array.from(newState.headerDataSource.keys());
            break;

        case 'REORDER_COLULMN_DATASET':
            newState = { ...state };
            const newHeaderDataSource = new Map(action.payload.map(i => [i, newState.headerDataSource.get(i)]))
            newState.headerDataSource = newHeaderDataSource;
            newState.headerDataSourceKeys = Array.from(newState.headerDataSource.keys());
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}

export const queryData = function (state = { queryCommand: {} }, action) {
    let newState;
    switch (action.type) {
        case 'UPDATE_QUERY':
            newState = { ...state };
            newState.queryCommand = action.payload.query;
            break;


        default:
            newState = state;
            break;
    }
    return newState;
}