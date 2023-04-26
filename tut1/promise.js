let complete = true;

function prom(a, b) {
    return new Promise(function (resolve, reject) {
        console.log("Please wait..");
        var c = a * b;
        setTimeout(() => {
            if (a, b) {
                resolve(`Answer is : ${c}`);
            } else {
                reject("it is wrong");
            }
        }, 2000);
    });
}

let fulfill = (result) => {
    console.log(result);
}
let rejection = (error) => {
    console.log(error);
}

prom(5, 2).then(fulfill).catch(rejection);


