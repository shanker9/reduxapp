import format from 'format-number';
import AppConstants from '../../../Amps/AppConstansts';

const FORMATTER = {
    PRICE_FORMATTER: format({prefix: '$', integerSeparator: ','}),
    NUMBER_FORMATTER: format({integerSeparator: ','}),
    PERCENT_FORMATTER: format({suffix: '%'}),
}

export default function FORMAT_VALUE(value, type) {
    if (!value) {
        return value
    }
    switch (type) {
        case AppConstants.columnformatter.PRICE:
            return FORMATTER.PRICE_FORMATTER(value.toFixed(2));

        case AppConstants.columnformatter.NUMBER:
            return FORMATTER.NUMBER_FORMATTER(value);

        case AppConstants.columnformatter.PERCENTAGE:
            return FORMATTER.PERCENT_FORMATTER((value * 100).toFixed(2));

        case AppConstants.columnformatter.DATE:
            return (new Date(value * 1000)).toLocaleString();

        default:
            return value;
    }
}