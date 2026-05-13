import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
function getDirectorySize(path_, callback) {
    fs.readdir(path_, (err, arrNames) => {
        if (err) return callback(err)
        async.map(arrNames, (name, cb) => {
            const fullName = path.join(path_, name)
            fs.stat(fullName, (err, stats) => {
                if (err) return cb(err)
                cb(null, stats.isFile() ? stats.size : 0)
            })
        }, (err, arrSizes) => {
            if (err) return callback(err)
            const result = _.sumBy(arrSizes)
            callback(null, result)
        })
    })
}

export { getDirectorySize }
// END
