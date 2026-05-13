import fs from 'fs';

// BEGIN
const print = (path) => {
    fs.readFile(path, 'utf-8', (err, result) => {
        if (err) throw err
        console.log(result)
    })
}

export default print
// END
