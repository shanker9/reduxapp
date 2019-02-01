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
            headerData: headerDataFromSettings(BlotterSettings.riskBS),
            queryData: {
                queryCommand: {
                    command: 'sow_and_delta_subscribe',
                    topic: 'ProductUI',
                    filter: "(/Account LIKE '.')",
                    orderby: "/Division",
                    options: "max_backlog=50,grouping=[/Division],projection=[COUNT_DISTINCT(/Product) AS /ProductCount,/WhatIf,/Product,/Account,/Desk,/Region,/Quantity,/Division,/Counterparty,/Vertex,/PayCurrency,/PayDiscountCurve,MAX(/LastUpdated) As /LastUpdated,/PayNotional,/ReceiveCurrency,/ReceiveDiscountCurve,/ReceiveIndex,/ReceiveNotional,SUM(/Price) As /Price,SUM(/PayLeg) As /PayLeg,SUM(/ReceiveLeg) As /ReceiveLeg,SUM(/Rho10bps) AS /Rho10bps,SUM(/Theta1d) AS /Theta1d,SUM(/Delta1pct) AS /Delta1pct,SUM(/Gamma1pct) AS /Gamma1pct,SUM(/Vega1pt) AS /Vega1pt,/PayFixedRate,/MaturityDate,/ContractSize],no_empties,conflation=300ms"
                }
            }
        }
    }
}

export default initialData;