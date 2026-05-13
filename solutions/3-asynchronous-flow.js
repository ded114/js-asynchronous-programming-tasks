import fs from 'fs';

// BEGIN
const compareFileSizes = (pathToFile1, pathToFile2, 
    callback = (err, result) => {
        if (err) throw err 
        console.log(result)
    }) => {
        fs.stat(pathToFile1, (err, stats1) => {
            if (err) return callback(err)
            fs.stat(pathToFile2, (err, stats2) => {
                if (err) callback(err)
                const size1 = stats1.size
                const size2 = stats2.size
                let result
                if (size1 > size2) result = 1
                else if (size1 == size2) result = 0
                else result = -1
                callback(null, result)
            })
        })        
}

export { compareFileSizes }
// END