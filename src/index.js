module.exports = function check(str, bracketsConfig) {
    if (!(str && bracketsConfig)) return false;

    let stack = [];
    let arr = str.split('');
    let configToPlaneArr = bracketsConfig.join(',').split(','); // to 1 level arr
    let configToPairs = bracketsConfig.map((item) => item.join('')); //to bracket pairs 

    for (let i = 0; i < arr.length; i++) {
        if (configToPlaneArr.includes(arr[i])) { // configArr includes bracket

            stack.push(arr[i]);
            isPair(stack, arr[i]);

        } else return false;
    }

    return stack.length ? false : true;

    function isPair(stack, bracket) {
        let previous = stack[stack.length - 2]; // get previous open bracket      
        let pair = previous + bracket;

        if (configToPairs.includes(pair)) {
            stack.pop();
            stack.pop();
        }

    }
}