function clock(){
    let hours = document.querySelector('#hr')
    let mints = document.querySelector('#min')
    let second = document.querySelector('#sec')

    let date = new Date()
    hours.innerHTML = (date.getHours()<10 ? "0" : '' ) + date.getHours()
    mints.innerHTML = (date.getMinutes() < 10 ? "0" : '') + date.getMinutes()
    second.innerHTML = (date.getSeconds() < 10 ? "0" : '' )+ date.getSeconds()

   
}

setInterval(clock,1000)