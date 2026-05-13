import fsp from 'fs/promises';

// BEGIN
async function getTypes(arr) {
    const result = arr.map((path) => 
        fsp.stat(path)
        .then((stats) => (stats.isDirectory() ? 'directory' : 'file'))
        .catch(() => null)
    )
    return Promise.all(result)
}

export { getTypes }
// END