let shouldRefresh = false;
(function () {
    setInterval(function () {
        shouldRefresh = true;
    }, 100);
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

        case 'UPDATE':
            newState = shouldRefresh ? { ...state } : state;
            newRowState = newState.dataSource.get(action.payload.rowKey)
            if (newRowState) {
                newRowState.data = action.payload.data;
                newState.dataSource.set(action.payload.rowKey, newRowState);
            } else {
                newState.dataSource.set(action.payload.rowKey,
                    {
                        rowKey: action.payload.rowKey,
                        isAggregatedRow: true,
                        data: action.payload.data,
                        childData: new Map(),
                        showChildData: false,
                        isSelected: false,
                        groupKey: null,
                        grouplevel: 0
                    }
                )
            }
            
            shouldRefresh = false;
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
            newState.headerDataSource.splice(newState.headerDataSource.findIndex(i => i.columnkey === action.payload.columnkey), 1);
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}