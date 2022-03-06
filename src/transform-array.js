const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
    let copy = Array.from(arr);

    for (let i = 0; i < arr.length; i++) {

        if (copy[i] === '--double-next') {
            if (i === arr.length - 1) copy.splice(i, 1);
            else if (copy[i + 2] === '--double-prev') copy.splice(i, 3, copy[i + 1], copy[i + 1], copy[i + 1]);
            else if (copy[i + 2] === '--discard-prev') copy.splice(i, 3, copy[i + 1]);
            else copy.splice(i, 1, copy[i + 1]);
        } else if (copy[i] === '--discard-next') {
            if (i === arr.length - 1) copy.splice(i, 1);
            else if (copy[i + 2] === '--double-prev' || '--discard-prev') copy.splice(i, 3);
            else copy.splice(i, 2);
        } else if (copy[i] === '--double-prev') {
            if (i === 0) copy.splice(i, 1);
            else copy.splice(i, 1, copy[i - 1]);
        } else if (copy[i] === '--discard-prev') {
            if (i === 0) copy.splice(i, 1);
            else copy.splice(i - 1, 2);
        }
    }

    return copy;
}

module.exports = {
    transform
};
