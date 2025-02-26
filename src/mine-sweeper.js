const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let res = matrix.map(row => row.map(el => el = 0));
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i - 1]) {
                if (matrix[i - 1][k - 1]) counter++;
                if (matrix[i - 1][k]) counter++;
                if (matrix[i - 1][k + 1]) counter++;
            }
            if (matrix[i + 1]) {
                if (matrix[i + 1][k - 1]) counter++;
                if (matrix[i + 1][k]) counter++;
                if (matrix[i + 1][k + 1]) counter++;
            }
            if (matrix[i][k - 1]) counter++;
            if (matrix[i][k + 1]) counter++;
            res[i][k] = counter;
            counter = 0;
        }
    }
    return res;
}

module.exports = {
    minesweeper
};
