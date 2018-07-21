
function numeroAleatorio() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.80) {
            let number = Math.round(Math.random()*10);
            // setTimeout(() => resolve(number), 1000);
            resolve(number);
        } else {
            // setTimeout(() => reject('numero aleatorio'), 1000);
            reject("numero aleatorio");
        }
    });
}

function cuadrado(n) {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.80) {
            // setTimeout(() => resolve(n*n), 1000);
            resolve(n*n);
        } else {
            // setTimeout(() => reject("cuadrado"))
            reject("cuadrado");
        }
    });
}

numeroAleatorio()
    .then(n => {
        console.log("numero: ", n);
        return cuadrado(n);
    })
    .then(n2 => {
        console.log("Resultado: ", n2);
        return n2*2;
    })
    .then(n3 => {
        console.log("n3", n3);
    })
    .catch(reason => {
        console.error("Error: ", reason)
    });

