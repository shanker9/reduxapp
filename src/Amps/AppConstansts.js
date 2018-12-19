export default class AppConstants {

    static columntypes = {
        NUMERIC_COLUMN: 'numeric',
        STRING_COLUMN: 'string',
        DATE_COLUMN: 'data'
    };

    static columnformatter = {
        NUMBER: 'number',
        PRICE: 'price',
        PERCENTAGE: 'percent',
        DATE: 'data',
        STRING: 'string'
    };

    static scenarioReports = {
        USD_LIBOR3M_PARALLELSHIFT: 'USD Libor3M Parallel Shift',
        EURUSD_FXSLIDE: 'EURUSD FX Slide',
        Historical_VaR_1D: 'Historical VaR 1D'
    };

    static blotterConfig = {
        risk: {
            blotterMode: {
                selectedOption: {value: 'global', label: 'Global', grouping: ['division', 'desk', 'product']},
                selectOptions: [
                    {value: 'global', label: 'Global', grouping: ['division', 'region', 'desk', 'product']},
                    {value: 'desk', label: 'Desk', grouping: ['desk', 'account', 'product']},
                    {value: 'counterpary',label: 'Counterparty',grouping: ['counterparty', 'division', 'desk', 'product']},
                    {value: 'exposureglobal', label: 'Exposure - Global', grouping: ['assetclass', 'underlier']},
                    {value: 'exposurecounterpary',label: 'Exposure - Counterparty',grouping: ['counterparty', 'assetclass', 'underlier']},
                    {value: 'exposuresector',label: 'Exposure - Sector',grouping: ['sector', 'industry', 'underlier']},
                ]
            }
        },
        positions: {
            blotterMode:{
                selectedOption: {value: 'default', label: 'Default', grouping: ['division', 'desk', 'account', 'symbol']},
                selectOptions: [
                    {value: 'default', label: 'Default', grouping: ['division', 'desk', 'account', 'symbol']}
                ]
            }
        },
        orders: {
            blotterMode:{
                selectedOption: {value: 'default', label: 'Default', grouping: ['account', 'symbol']},
                selectOptions: [
                    {value: 'default', label: 'Default', grouping: ['account', 'symbol']}
                ]
            }
        }
    };
}