import fsp from 'fs/promises';

// BEGIN
async function reverse(path) {
    try {
        const data = await fsp.readFile(path, 'utf-8')
        const arrLines = data.split('\n')
        const reversedArr = arrLines.reverse().join('\n')
        await fsp.writeFile(path, reversedArr)
    }
    catch (e){
        console.log(e)
        throw e
    }
}

export { reverse }
// END