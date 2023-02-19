function getAdvise() {
    fetch('https://api.adviceslip.com/advice')
        .then( res => res.json() )
        .then( data => {
            return data
        } )
}