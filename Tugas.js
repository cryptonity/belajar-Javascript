//Jawaban Nomor 1
function arkademy(num) {
    for(var i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('arkademy');
        } else if(i % 3 === 0) {
            console.log('arka');
        }else if(i % 5 === 0) {
            console.log('demy');
        } else {
            console.log(i);
        }
    }
}
arkademy(15);

//Jawaban Nomor 2
function ubahKata(kata){
var kata1 = kata.split('');
for(var x = 0; x < kata1.length; x++){
if(kata1[x]==='a'){
kata1[x] = 'o';
}
}
console.log(kata1.join(''));
}
ubahKata('purwakarta');
    


 //jawaban Nomor 3
 function cekParameter(param){
    if(typeof param === 'string'){
        console.log('parameter ' + param + ' adalah String!')
    } else if(typeof param === 'number'){
        console.log('parameter ' + param + ' adalah Number!')
    } else if(typeof param == 'boolean'){
        console.log('parameter ' + param + ' adalah Boolean!')
    } else if(typeof param === 'array'){
        console.log('parameter ' + param + ' adalah Array!')
    } else if(typeof param === 'object'){
        console.log('parameter ' + param + ' adalah Object!')
    } 
}
cekParameter(2);
cekParameter('huruf');
cekParameter(1<3);
cekParameter([]); //saya tidak tahu kenapa array jadi object
cekParameter({});
