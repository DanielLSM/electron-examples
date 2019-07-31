// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const zerorpc = require("zerorpc")
let client = new zerorpc.Client()
client.connect("tcp://127.0.0.1:4242")


//     def server_plan_opportunities(self):
server_plan_opportunities = function () {
    console.log("server_plan_opportunities requested")
    client.invoke("server_plan_opportunities")

}

//     def server_preprocess_tasks(self):
server_preprocess_tasks = function () {
    console.log("server_preprocess_tasks requested")
    client.invoke("server_preprocess_tasks")

}

//     def server_plan_tasks(self):
server_plan_tasks = function () {
    console.log("server_plan_tasks requested")
    client.invoke("server_plan_tasks")

}

//     def server_save_checks_xlsx(self):
server_save_checks_xlsx = function () {
    console.log("server_save_checks_xlsx requested")
    client.invoke("server_save_checks_xlsx")

}

//     def server_save_tasks_xlsx(self):
server_save_tasks_xlsx = function () {
    console.log("server_save_tasks_xlsx requested")
    client.invoke("server_save_tasks_xlsx")

}

//     def server_save_checks(self):
server_save_checks = function () {
    console.log("server_save_checks requested")
    client.invoke("server_save_checks")

}

//     def server_load_checks(self):
server_load_checks = function () {
    console.log("server_load_checks requested")
    client.invoke("server_load_checks")

}

//     def server_save_tasks(self):
server_save_tasks = function () {
    console.log("server_save_tasks requested")
    client.invoke("server_save_tasks")

}


//     def server_load_tasks(self):
server_load_tasks = function () {
    console.log("server_load_tasks requested")
    client.invoke("server_load_tasks")

}







// const calc = require("./scripts/actions/calc")
// calc.calculator(client)
// calculator(client)
// let formula = document.querySelector('#formula')
// let result = document.querySelector('#result')
// formula.addEventListener('input', () => {
//     client.invoke("calc", formula.value, (error, res) => {
//         if (error) {
//             console.error(error)
//         } else {
//             result.textContent = res
//         }
//     })
// })
// formula.dispatchEvent(new Event('input'))

