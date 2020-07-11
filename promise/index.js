const error = new Error('Algo salio mal :(')

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Funciono correctamente')
        } else {
            reject(error)
        }
    })
}


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            reject(error)
        }
    })
}

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of result', response)
    })
    .catch(err => {
        console.error(err)
        console.log('Algo salio mal prr')
    })