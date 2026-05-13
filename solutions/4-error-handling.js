import fs from 'fs';

// BEGIN
function read(path, callback) {
    fs.readFile(path, callback)
}
function write(newPath, data, callback) {
    fs.writeFile(newPath, data, callback)
}
function remove(path, callback) {
    fs.unlink(path, callback)
}
function move(path, newPath, callback = (err) => {}) {
    read(path, (err, data) => {
        if (err) return callback(err)
        write(newPath, data, (err) => {
            if (err) return callback(err)
            remove(path, (err) => {callback(err)})
        })
    })
}
export { move }
// END
