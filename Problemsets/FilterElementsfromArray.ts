/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let tmp = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            tmp.push(arr[i]);
        }
    }
    return tmp;
};
