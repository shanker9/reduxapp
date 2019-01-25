import BlotterSettings from './BlotterSettings'

const initialData = () => {

    const headerDataFromSettings = (settings) => {
        const m = new Map(settings.map(i => [i.columnkey, i]))
        return {
            headerDataSource: m,
            headerDataSourceKeys: Array.from(m.keys())
        }
    }

    return {
        orders: {
            headerData: headerDataFromSettings(BlotterSettings.ordersBS)
        },
        positions: {
            headerData: headerDataFromSettings(BlotterSettings.positionsBS)
        },
        risk: {
            headerData: headerDataFromSettings(BlotterSettings.riskBS)
        }
    }
}

export default initialData;