let date = new Date('Sep 29 2021 00:00:00')

function counts() {
    let dateNow = new Date()
    let gap = date - dateNow;
    
    let days = Math.floor(gap / 1000 / 60 / 60/ 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24
    let minutes = Math.floor(gap / 1000 / 60) % 60
    let seconds = Math.floor(gap / 1000 ) % 60

    if (days < 10) {
        days = '0' + days
    }

    if (hours < 10) {
        hours = '0' + hours
    }

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }

    if (gap === 0) {
        document.querySelector('.timer').innerHTML = 'Акция завершилась'
    } else {
        document.querySelector('.p__3').innerHTML = days + ' :'
        document.querySelector('.p__4').innerHTML = hours + ' :'
        document.querySelector('.p__5').innerHTML = minutes + ' :'
        document.querySelector('.p__6').innerHTML = seconds
    }
}
counts()
setInterval(() => {
    counts()
}, 1000)