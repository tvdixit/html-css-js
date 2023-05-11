// module.exports={
//     x :10,
//     y:20
// }
exports.myDateTime = function () {
    return Date();
};

const fs= require('fs').writeFileSync;
fs("xyz.txt", "abc")