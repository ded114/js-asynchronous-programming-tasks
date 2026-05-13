import fs from 'fs';

// BEGIN
const write = (path, data, callback = () => 
    console.log('success')) => {
    fs.writeFile(path, data, (err) => {
        if (err) throw err
        callback()    
    })
}

export default write
// END