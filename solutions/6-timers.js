import fs from 'fs';

// BEGIN
const watch = (path, time, callback = (err) => {}) => {
    let lastMtime = null
    const id = setInterval(() => {
        fs.stat(path, (err, stats) => {
            if (err) {
                clearInterval(id)
                callback(err)
                return
            }
            if (lastMtime === null) { 
                lastMtime = stats.mtimeMs 
                return }
            if (stats.mtimeMs > lastMtime) { 
                lastMtime = stats.mtimeMs 
                callback(null) 
            }
        })
    }, time)
    fs.stat(path, (err, stats) => {
        if (err) { 
            clearInterval(id)
            callback(err)
            return
        }
        lastMtime = stats.mtimeMs
    })
    return id
}

export default watch
// END
