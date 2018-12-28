import format from 'format-number';

const FORMATTER = {
    PRICE_FORMATTER : format({ prefix: '$', integerSeparator: ',' }),
    NUMBER_FORMATTER : format({ integerSeparator: ',' }),
    PERCENT_FORMATTER : format({ suffix: '%' }),
}

export default FORMATTER