function current_date(){
    let date = new Date
    return `${date.getFullYear()}/${Number(date.getMonth())+1}/${date.getDate()}`
}
function current_time() {
    let hour = new Date
    return `${hour.getHours()}:${hour.getMinutes()}:${hour.getSeconds()}`
}
console.log("Current date: " + current_date())
console.log("Current hour:"+ current_time())