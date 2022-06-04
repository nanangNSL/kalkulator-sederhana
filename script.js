// MEMBUAT FUNGSI UNTUK MENDELETE SEMUA
const fulDelete =() =>{
    let textArea = document.querySelector('.display');
    textArea.innerHTML = "";
};
// MEMBUAT FUNGSI UNTUK MENAMPILAKAN NILAI YANG DI INPUTKAN
const showOut =(el) =>{
    let toCalculate = document.querySelector('.display');
    let tempOperation = toCalculate.innerText+el;
    toCalculate.innerText = tempOperation;
};
// MEMBUAT FUNGSI UNTUK MENDELETE 1 KARAKTER NILAI
const oneDelete =() =>{
    let textArea = document.querySelector('.display');
    let equation = textArea.innerText;
    equation = (equation.slice(0,equation.length-1))
    textArea.innerText=equation;
    
};
// MEMBUAT FUNGSI UNTUK MENAMPILKAN HASIL DARI KALKULASI
const showResult =() =>{
    let textArea = document.querySelector('.display');
    let equation = textArea.innerText;
    let result = eval(equation);
    textArea.innerText=result;

};