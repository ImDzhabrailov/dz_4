//Click
//1 АКТИВНА КНОПКА "РЕГИСТРАЦИЯ"

// const myButton = document.getElementById("myButton")
// myButton.addEventListener ("click", () => {
//     console.log("Кнопка была нажата!")
// })

//DoubleClick
//1 ПРОИЗВЕСТИ ДВОЙНОЙ КЛИК НА КНОПКЕ "РЕГИСТРАЦИЯ"
// const myButton = document.getElementById ("myButton");
// const myDiv = document.getElementById ("myDiv");
// myButton.addEventListener ("dblclick", () => {
//     myDiv.style.backgroundColor = "green";
// })

//2
// addEventListener ("dblclick", () => {
//     console.log("Вы совершили двойной клик!")
// })

//3
// const o1 = document.getElementById ("o1", "o2", "o3", "o4", "o5", "o6");
// o1.addEventListener ("dblclick", () => {
//     o1.textContent = "Double clicked!";
// })
// o2.addEventListener ("dblclick", () => {
//     o2.textContent = "Double clicked!";
// })
// o3.addEventListener ("dblclick", () => {
//     o3.textContent = "Double clicked!";
// })
// o4.addEventListener ("dblclick", () => {
//     o4.textContent = "Double clicked!";
// })
// o5.addEventListener ("dblclick", () => {
//     o5.textContent = "Double clicked!";
// })
// o6.addEventListener ("dblclick", () => {
//     o6.textContent = "Double clicked!";
// })

//4
// const i1 = document.getElementById ("i1", "i2", "i3");
// i1.addEventListener ("dblclick", () => {
//     console.log("Кошак");
// })
// i2.addEventListener ("dblclick", () => {
//     console.log("Бардак какой-то");
// })
// i3.addEventListener ("dblclick", () => {
//     console.log("Черноречье");
// })

//5
// const zagolovok = document.getElementById ("t1");
// zagolovok.addEventListener ("dblclick", () => {
//     zagolovok.textContent = "Double clicked!";
// })

//KeyDown
//1
// document.addEventListener ("keydown", (event) => {
//     console.log("Кнопка, которую вы нажали: " + event.key);
// })

//2 НАЖАТЬ КНОПКУ Click here!
// const zaprosStr = document.getElementById ("myZapros");
// zaprosStr.addEventListener ("click", () => {
//     prompt("Введите строку:");
//     console.log("Вы ввели: " + zaprosStr);
// })

// const text = prompt("bla bla bla")
// console.log(text)

//KeyUp

document.addEventListener ("keyup", (event) => {
    console.log("Кнопка, которую вы отпустили: " + event.key)
})