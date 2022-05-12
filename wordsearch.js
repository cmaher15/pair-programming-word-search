const transpose = function(matrix) {
    let newArr = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let arr = [];
        for (let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i]);
        }
        newArr.push(arr);
    }
    return newArr;
};

const wordSearch = (letters, word) => {
    if (letters.length < 1) {
        return undefined;
    };
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        console.log(l);
        if (l.includes(word)) return true;
    }
    const tr = transpose(letters);
    const verticalJoin = tr.map(x => x.join(''));
    for (l of verticalJoin) {
        console.log("vertical", l);
        if (l.includes(word)) return true;
    }
    return false;
};




module.exports = wordSearch;