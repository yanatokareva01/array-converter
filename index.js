/**
 * Created by Yana Tokareva on 12.05.2018.
 */
"use strict";

/**
 * Finds sequences in array and converts them to a string
 * @param array
 * @returns {Promise}
 */
module.exports.convert = function(array) {
    return new Promise((resolve, reject) => {
	    let firstNumber = array[0];
	    let lastNumber;

	    let result = "";

	    if (array && array.length) {
		    for (let i = 1; i < array.length; i++) {
			    if (array[i] - array[i - 1] !== 1) {
				    lastNumber = array[i - 1];

				    if (lastNumber - firstNumber > 1) {
					    result += `${firstNumber}-${lastNumber},`;
				    } else if (lastNumber - firstNumber === 1) {
					    result += `${firstNumber},${lastNumber},`
				    } else {
					    result += `${firstNumber},`;
				    }

				    firstNumber = array[i];
			    }
		    }

		    lastNumber = array[array.length - 1];

		    if (lastNumber - firstNumber > 1) {
			    result += `${firstNumber}-${lastNumber}`;
		    } else if (lastNumber - firstNumber === 1) {
			    result += `${firstNumber},${lastNumber}`
		    } else {
			    result += `${firstNumber}`;
		    }
	    }

	    resolve(result);
    });
};