/**
 * Created by Olga on 4/18/17.
 */
console.log("I am using webpack!!! or not?");
document.write(require('./content.js'));
console.log(require('./text.js'));
document.getElementsByClassName("text")[0].textContent = (require('./text.js'));
console.log(require('./content.js'));
var greeting = require('./function-msg.js');
greeting("Uiii, Iam add function with webpack module!");



