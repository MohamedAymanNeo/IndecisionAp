console.log("utils.js is running");


const add = (a,b) => a + b;

const square = (a) => a * a;

const subtract = (x, y) => x - y;

// export { add, square, subtract as default }; // we can use default like that 

export { add, square };

// export default (x, y) => x - y; // and like this 
export default subtract; // and also like that 
