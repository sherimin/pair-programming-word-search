/**
 * @mikedaltonmtl
 * @sherimin
 */

const wordSearch = (letters, word) => { 
    
    if (letters.length < 1 || word.length < 1) {
        return false;
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''));
    if (findWord(horizontalJoin, word) === true) {
        return true;
    } 

    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));
    if (findWord(verticalJoin, word) === true) {
        return true;
    }

    const reverse = letters.map(ls => ls.reverse());
    const reverseJoin = reverse.map(ls => ls.join(''));
    if (findWord(reverseJoin, word) === true) {
        return true;
    }
    return false;
}

const findWord = function(grid, word) {
    for (g of grid) {
        if (g.includes(word))
            return true;
        }
    return false;
};


const transpose = function (matrix) {
    let output = [];
    for (let i = 0; i < matrix[0].length; i++) {
        output.push([]);
    }

    for (let rows = 0; rows < matrix.length; rows++) {
        for (let elements = 0; elements < matrix[rows].length; elements++) {
            output[elements][rows] = matrix[rows][elements];
        }
    }
    return output;
  };
  

module.exports = wordSearch