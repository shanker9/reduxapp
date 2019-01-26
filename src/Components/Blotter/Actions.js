// Write action creators for all dispatched actions in the container components

export default class Actions {

    static INITIAL_SOW_DATA = (blotter, data) => {
        return {
            type: 'INITIAL_SOW_DATA',
            name: blotter,
            payload: data
        }
    }

    static ROW_UPDATE = (blotter, data) => {
        return {
            type: 'ROW_UPDATE',
            name: blotter,
            payload: data
        }
    }

    static ROW_SELECTED = (blotter, rowKey, isSelected, isSingleRowSelect) => {
        return {
            type: 'ROW_SELECTED',
            name: blotter,
            payload: {
                rowKey: rowKey,
                isSelected: isSelected,
                isSingleRowSelect: isSingleRowSelect
            }
        }
    }

    static REORDER_COLULMN_DATASET = (blotter, data) => {
        return {
            type: 'REORDER_COLULMN_DATASET',
            name: blotter,
            payload: data
        }
    }
}

