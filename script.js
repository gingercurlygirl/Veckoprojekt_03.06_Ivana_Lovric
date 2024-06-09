function createResult() {
    let currentResult = ""
    let previousOperator = ""

    const buttons = document.querySelectorAll('.calculator button')
    const operators = document.querySelectorAll('.calculator button.op')
    var historyList = document.querySelector('.history-list')

    function disableOperators(disable) {
        for (var button of operators) {
            button.disabled = disable
        }
    }
    for (var button of buttons) {
        button.addEventListener('click', buttonClick)
    }

    const result = document.querySelector('#result')
    const input = document.querySelector('#input')

    function buttonClick(event) {
        const element = event.srcElement

        if (element.className == "b digit") {
            input.innerText += element.innerText
            console.log(element)
            console.log(input)
            disableOperators(false)
            if (previousOperator === "") {
                currentResult += element.innerText
                console.log(currentResult)
            } else {
                if (previousOperator == "badd op") {
                    currentResult = (Number(currentResult) + Number(element.innerText)).toString()
                }
                else if (previousOperator == "bsub op") {
                    currentResult = (Number(currentResult) - Number(element.innerText)).toString()
                }
                else if (previousOperator == "bmul op") {
                    currentResult = (Number(currentResult) * Number(element.innerText)).toString()
                }
                else if (previousOperator == "bdiv op") {
                    currentResult = (Number(currentResult) / Number(element.innerText)).toString()
                }

                result.innerText = currentResult
                previousOperator = ""
            }

        }
        else if (element.className == "badd op") {
            disableOperators(true)
            input.innerText += element.innerText
            previousOperator = "badd op"
        }
        else if (element.className == "bsub op") {
            disableOperators(true)
            input.innerText += element.innerText
            previousOperator = "bsub op"
        }
        else if (element.className == "bmul op") {
            disableOperators(true)
            input.innerText += element.innerText
            previousOperator = "bmul op"
        }
        else if (element.className == "bdiv op") {
            disableOperators(true)
            input.innerText += element.innerText
            previousOperator = "bdiv op"
        }
        else if (element.className == "bsq op") {
            disableOperators(true)
            input.innerText = "(" + input.innerText + ")^2"
            currentResult = (Number(currentResult) * Number(currentResult)).toString()
            result.innerText = currentResult

            previousOperator = ""
        }
        else if (element.className == "bsqrt op") {
            disableOperators(true)
            input.innerText = "√(" + input.innerText + ")"
            currentResult = (Math.sqrt(Number(currentResult))).toString()
            result.innerText = currentResult

            previousOperator = ""
        }

        if (element.className == "bclear") {
            previousOperator = "bclear"
            result.innerText = "0"
            input.innerText = ""
            currentResult = ""
            previousOperator = ""
            historyList.innerHTML = ''
        } else {
            const li = document.createElement('li')
            li.innerText = input.innerText + " = " + currentResult
            historyList.append(li)
        }
    }
}

createResult()
