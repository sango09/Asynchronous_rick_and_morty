sum = (num1, num2) => num1 + num2

calc = (num1, num2, callback) => callback(num1, num2)


console.log(calc(6, 2, sum))


date = (callback) => {
    console.log(new Date)
    setTimeout(() => {
        let date = new Date
        callback(date)
    }, 3000)
    console.log('Yo soy el callback')
}

printDate = (dateNow) => {
    console.log(dateNow)
}

date(printDate)