
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length === 0 || matrix === []) return [];
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || i % 2 === 0) {
            arr.push(matrix[i]);
        } else {
            arr.push(matrix[i].reverse());
        }
    }

    return arr.flat();
}
