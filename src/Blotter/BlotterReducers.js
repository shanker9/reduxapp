
export const gridData = function(state = { dataSource : [] }, action) {
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