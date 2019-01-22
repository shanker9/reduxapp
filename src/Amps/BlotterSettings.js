import AppConstants from './AppConstansts';

export default class BlotterSettings {
    static riskBS = [
        {
            columnkey: "product",
            columnvalue: "Product",
            displayname: 'Product',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 220,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "productcount",
            columnvalue: "ProductCount",
            displayname: 'Position Count',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 140,
                styleClass: 'numericCell',
                filter: false
            }
        },
        {
            columnkey: "price",
            columnvalue: "Price",
            displayname: 'Theo Value',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "delta1pct",
            columnvalue: "Delta1pct",
            displayname: 'Delta1pct',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "gamma1pct",
            columnvalue: "Gamma1pct",
            displayname: 'Gamma1pct',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "vega1pt",
            columnvalue: "Vega1pt",
            displayname: 'Vega1pt',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "rho10bps",
            columnvalue: "Rho10bps",
            displayname: 'Rho10bps',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "theta1d",
            columnvalue: "Theta1d",
            displayname: 'Theta1d',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "account",
            columnvalue: "Account",
            displayname: 'Account',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "region",
            columnvalue: "Region",
            displayname: 'Region',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "desk",
            columnvalue: "Desk",
            displayname: 'Desk',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 120,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "quantity",
            columnvalue: "Quantity",
            displayname: 'Quantity',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "division",
            columnvalue: "Division",
            displayname: 'Division',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 180,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "strike",
            columnvalue: "Strike",
            displayname: 'Strike',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "putOrCall",
            columnvalue: "PutOrCall",
            displayname: 'Put Or Call',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "counterparty",
            columnvalue: "Counterparty",
            displayname: 'Counterparty',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "assetclass",
            columnvalue: "AssetClass",
            displayname: 'Asset Class',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "sector",
            columnvalue: "Sector",
            displayname: 'Sector',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "industry",
            columnvalue: "Industry",
            displayname: 'Industry',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "underlier",
            columnvalue: "Underlier",
            displayname: 'Underlier',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "lastUpdated",
            columnvalue: "LastUpdated",
            displayname: 'Last Updated',
            properties: {
                columnType: AppConstants.columntypes.DATE_COLUMN,
                columnformatter: AppConstants.columnformatter.DATE,
                columnWidth: 160,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "contractSize",
            columnvalue: "ContractSize",
            displayname: 'Contract Size',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "receiveIndex",
            columnvalue: "ReceiveIndex",
            displayname: 'Receive Index',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "receiveLeg",
            columnvalue: "ReceiveLeg",
            displayname: 'Receive Leg',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "vertex",
            columnvalue: "Vertex",
            displayname: 'Vertex',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "payLeg",
            columnvalue: "PayLeg",
            displayname: 'PayLeg',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "volatility",
            columnvalue: "Volatility",
            displayname: 'Volatility',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PERCENTAGE,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "payCurrency",
            columnvalue: "PayCurrency",
            displayname: 'Pay Currency',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "payDiscountCurve",
            columnvalue: "PayDiscountCurve",
            displayname: 'PayDiscount Curve',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "payFixedRate",
            columnvalue: "PayFixedRate",
            displayname: 'PayFixed Rate',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "maturityDate",
            columnvalue: "MaturityDate",
            displayname: 'Maturity Date',
            properties: {
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "payNotional",
            columnvalue: "PayNotional",
            displayname: 'Pay Notional',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "receiveDiscountCurve",
            columnvalue: "ReceiveDiscountCurve",
            displayname: 'ReceiveDiscount Curve',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 175,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "receiveNotional",
            columnvalue: "ReceiveNotional",
            displayname: 'Receive Notional',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 150,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "receiveCurrency",
            columnvalue: "ReceiveCurrency",
            displayname: 'Receive Currency',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "receiveSpread",
            columnvalue: "ReceiveSpread",
            displayname: 'Receive Spread',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "amerOrEuro",
            columnvalue: "AmerOrEuro",
            displayname: 'Amer Or Euro',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        }];
    static positionsBS = [
        {
            columnkey: "whatifentry",
            columnvalue: "WhatIf",
            displayname: 'What-If',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 120,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "division",
            columnvalue: "Division",
            displayname: 'Division',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 200,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "desk",
            columnvalue: "Desk",
            displayname: 'Desk',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 100,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "account",
            columnvalue: "Account",
            displayname: 'Account',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 100,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "symbol",
            columnvalue: "Symbol",
            displayname: 'Symbol',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 220,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "quantity",
            columnvalue: "Quantity",
            displayname: 'Quantity',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 100,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "buycumqty",
            columnvalue: "BuyCumQty",
            displayname: 'BuyCumQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 120,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "buyfilledcost",
            columnvalue: "BuyFilledCost",
            displayname: 'BuyFilledCost',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "buyfilledqty",
            columnvalue: "BuyFilledQty",
            displayname: 'BuyFilledQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "buyleavesqty",
            columnvalue: "BuyLeavesQty",
            displayname: 'BuyLeavesQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "buyorderqty",
            columnvalue: "BuyOrderQty",
            displayname: 'BuyOrderQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "sellcumqty",
            columnvalue: "SellCumQty",
            displayname: 'SellCumQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "sellfilledcost",
            columnvalue: "SellFilledCost",
            displayname: 'SellFilledCost',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "sellfilledqty",
            columnvalue: "SellFilledQty",
            displayname: 'SellFilledQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "sellleavesqty",
            columnvalue: "SellLeavesQty",
            displayname: 'SellLeavesQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "sellorderqty",
            columnvalue: "SellOrderQty",
            displayname: 'SellOrderQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 130,
                styleClass: 'numericCell'
            }
        }
    ];
    static ordersBS = [
        {
            columnkey: "whatifentry",
            columnvalue: "WhatIf",
            displayname: 'What-If',
            properties: {
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 120,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "account",
            columnvalue: "Account",
            displayname: 'Account',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 140,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "symbol",
            columnvalue: "Symbol",
            displayname: 'Symbol',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 180,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "orderid",
            columnvalue: "OrderID",
            displayname: 'OrderID',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 240,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "side",
            columnvalue: "Side",
            displayname: 'Side',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 140,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "orderqty",
            columnvalue: "OrderQty",
            displayname: 'OrderQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 140,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "cumqty",
            columnvalue: "CumQty",
            displayname: 'CumQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 140,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "filledcost",
            columnvalue: "FilledCost",
            displayname: 'FilledCost',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.PRICE,
                columnWidth: 140,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "filledqty",
            columnvalue: "FilledQty",
            displayname: 'FilledQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 140,
                styleClass: 'numericCell'
            }
        },
        {
            columnkey: "leavesqty",
            columnvalue: "LeavesQty",
            displayname: 'LeavesQty',
            properties: {
                groupingEnable: false,
                isSortable: true,
                columnType: AppConstants.columntypes.NUMERIC_COLUMN,
                columnformatter: AppConstants.columnformatter.NUMBER,
                columnWidth: 140,
                styleClass: 'numericCell'
            }
        }
    ];
    static scenarioBS = [
        {
            columnkey: "division",
            columnvalue: "Division",
            displayname: 'Division',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 180,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "region",
            columnvalue: "Region",
            displayname: 'Region',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "desk",
            columnvalue: "Desk",
            displayname: 'Desk',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        },
        {
            columnkey: "tradeid",
            columnvalue: "Product",
            displayname: 'Product',
            properties: {
                groupingEnable: true,
                isSortable: true,
                columnType: AppConstants.columntypes.STRING_COLUMN,
                columnformatter: AppConstants.columnformatter.STRING,
                columnWidth: 150,
                styleClass: 'stringCell'
            }
        }
    ];
}