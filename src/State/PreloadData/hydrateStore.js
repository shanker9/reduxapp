import BlotterSettings from './BlotterSettings'

const initialData = () => {
    return {
        orders: {
            headerData: { headerDataSource: BlotterSettings.ordersBS }
        },
        positions: {
            headerData: { headerDataSource: BlotterSettings.positionsBS }
        },
        risk: {
            headerData: { headerDataSource: BlotterSettings.riskBS }
        }
    }
}

export default initialData;