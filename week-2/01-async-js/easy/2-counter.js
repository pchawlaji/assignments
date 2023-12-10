let newDate = new Date()
let currentTime = newDate.getTime()
console.log(currentTime)
for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        currentTime += 1000;
        console.log(new Date(currentTime))
    }, 1000)
}