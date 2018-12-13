
export const gridData = function(state = { dataSource : [], headerDataSource : [] }, action) {
    let newState;
    switch (action.type) {
        case 'RND':
            newState = Object.assign({}, state);
            newState.dataSource.push(action.payload.randData);
            break;

        case 'RND_PRICE':
            newState = Object.assign({},state);
            newState.dataSource[Math.floor(Math.random()*newState.dataSource.length)].balance = action.payload;
            break;
            
        default:
            newState = state;
            break;
    }
    return newState;
}

export const gridHeaderData = function(state = {headerDataSource : []},action){
    let newState;
    switch (action.type) {
        case 'ADD_COLUMN_DATASET':
            newState = {...state};
            newState.headerDataSource = action.payload.headerDataSet;
            break;
        
        case 'ADD_COLUMN_DATA':
            newState = {...state};
            newState.headerDataSource.push(action.payload.headerData)
            break;
    
        default:
            newState = state;
            break;
    }
    return newState;
}