exports.calculator = function (client) {

    let formula = document.querySelector('#formula')
    let result = document.querySelector('#result')
    formula.addEventListener('input', () => {
        client.invoke("calc", formula.value, (error, res) => {
            if (error) {
                console.error(error)
            } else {
                result.textContent = res
            }
        })
    })
    formula.dispatchEvent(new Event('input'))

}