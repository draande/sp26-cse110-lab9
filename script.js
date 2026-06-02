// step 4
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

let form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    // let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    // output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);

    // step 3
    try {
        let output = document.querySelector('output');
        
        if (firstNum === '' || secondNum === '') {
            throw new CustomError('Both numbers must be provided');
        }
        if (isNaN(firstNum) || isNaN(secondNum)) {
            throw new CustomError('Both inputs must be valid numbers');
        }
        if (operator === '/' && Number(secondNum) === 0) {
            throw new CustomError('Can\'t divide by zero');
        }
        if (!['+', '-', '*', '/'].includes(operator)) {
            throw new CustomError('Invalid operator');
        }
        
        let result = eval(`${firstNum} ${operator} ${secondNum}`);
        output.innerHTML = result;
    }
    catch (error) {
        if (error instanceof CustomError) {
            console.error(`[Custom Error Caught] ${error.name}: ${error.message}`);
            alert(`Calculator Issue: ${error.message}`);
        } 
        else {
            console.error(`[Unexpected System Error Caught]`, error);
            alert("Something went horribly wrong under the hood!");
        }
    } 
    finally {
        console.log('This will always run');
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// step 2
errorBtns[0].addEventListener('click', () => {
    console.log('This is a console log message');
});
errorBtns[1].addEventListener('click', () => {
    console.error('This is a console error message');
});
errorBtns[2].addEventListener('click', () => {
    console.count('This is a console count message');
});
errorBtns[3].addEventListener('click', () => {
    console.warn('This is a console warn message');
});
errorBtns[4].addEventListener('click', () => {
    const actual = 6;
    const expected = 7;
    const message = "Number is not 7";
    console.assert(actual === expected, { actual, expected, message });
});
errorBtns[5].addEventListener('click', () => {
    console.clear();
});
errorBtns[6].addEventListener('click', () => {
    console.dir(document.activeElement);
});
errorBtns[7].addEventListener('click', () => {
    console.dirxml(document.querySelector('form'));
});
errorBtns[8].addEventListener('click', () => {
    console.group('Group 1');
    console.log('This is a message in Group 1');
});
errorBtns[9].addEventListener('click', () => {
    console.groupEnd();
});
errorBtns[10].addEventListener('click', () => {
    const officeChars = [
    { name: 'Michael', age: 44 },
    { name: 'Dwight', age: 42 },
    { name: 'Jim', age: 40 }
    ];
    console.table(officeChars);
});
errorBtns[11].addEventListener('click', () => {
    console.time('This is a console timer message');
});
errorBtns[12].addEventListener('click', () => {
    console.timeEnd('This is a console timer message');
});
errorBtns[13].addEventListener('click', () => {
    function a() { b(); }
    function b() { c(); }
    function c() { console.trace('This is a console trace message'); }
    a();
});

// step 5
window.onerror = function(message, source, lineNumber, colNumber, error) {
    console.log("Global Error");
    console.dir({
        message: message,
        source: source,
        lineno: lineNumber,
        colno: colNumber,
        error: error
    });
    return false;
};
errorBtns[14].addEventListener('click', () => {
    willCrash();
});