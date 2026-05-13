import fsp from 'fs/promises';

// BEGIN
async function touch(path) {
    try {
        await fsp.access(path)
        console.log('created')
    }
    catch (e) {
        await fsp.writeFile(path, '')
        console.log('created')
    }
}

export { touch }
// END