//
// Demo of matrix-vector multiplication
//

let vector = [
    1,
    2
]
// a way to write "let vector = [1, 2]" so it looks like a vector

let matrix = [
    [2, 1],
    [1, 2]
]
// a way to write "let matrix = [[1, 0], [0,1]]", an array of arrays, so it looks like a matrix

let matrixTimesVector = []
// this array (vector) wil be the result of matrix * vector

for (let i = 0; i < matrix.length; i++) {  // cycle down the rows of the matrix
    let sum = 0
    for (let j = 0; j < vector.length; j++) {  // cycle down the rows of the vector (and across the columns of the matrix)
        sum += matrix[i][j] * vector[j]
    }
    matrixTimesVector.push(sum)
}

console.log(".......... matrix:", matrix)
console.log(".......... vector:", vector)
console.log("matrixTimesVector:", matrixTimesVector)