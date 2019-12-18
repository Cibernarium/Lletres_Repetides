/*
FASE 1
Crea una taula (char[]) amb el teu nom on cada posició correspongui a una lletra.
Fes un bucle que recorri aquesta taula i mostri per consola cadascuna de les lletres.
*/
'use strict'

var items;
var i=0;
var nom = [];
var surname = [];
var fullname = [];
var spacer= [' '];
do{var items = prompt("Por favor, indica tu nombre letra a letra, '0' para terminar: ");
nom[i]=items;
i++;
}
while(items!=0);
nom.pop();


//console.log( typeof nomCaracter[1]);
nom.forEach((element)=>{
console.log(element);
});




/*FASE 2
Canvia la taula per una llista (List<Character>)
Al bucle, si la lletra és una vocal imprimeix a la consola: ‘VOCAL’. Sinó, imprimeix: ‘CONSONTANT’.
Si trobes un numero, mostra per pantalla: ‘Els noms de persones no contenen números!’.
*/


nom=nom.toString().toUpperCase();
//console.log(nom);
nom = nom.split(',');
//console.log(nom);
var vocal =['A','E','I','O','U'];
var num = ['1','2','3','4','5','6','7','8','9'];

for (var i=0;i<nom.length;i++){
if(vocal.includes(nom[i])){
    console.log(nom[i]+" :es una vocal");
}
else if(num.includes(nom[i])) {
    console.log(nom[i]+"Los nombres no contienen números");
}
else{
    console.log(nom[i]+" :es una consonante"); 
}
}

/*
FASE 3
Emmagatzemar en un Map tant les lletres de la llista com el nombre de vegades que apareixen
*/    

var nomMap= new Map();
for (var i=0;i<nom.length;i++){
	if(!nomMap.has(nom[i])){
		var value=1;
		nomMap.set(nom[i],value);
		console.log(nomMap);
		//debugger;
	}	
	else{value=nomMap.get(nom[i],value);
		nomMap.set(nom[i],value+1);
		//debugger;
	}	
}

/*
FASE 4
Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra.

Fusiona les dues llistes en una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de la llista name i surname i al acabar l’execució només tindrem una que es dirà fullName.

    FullName: [‘N’, ‘A’, ‘M’, ‘E’, ‘ ‘, ‘S’, ‘U’, ‘R‘, ‘N’, ‘A’, ‘M’, ‘E’]
*/
i=0;
do{var items = prompt("Por favor, indica tu apellido letra a letra, '0' para terminar: ");
surname[i]=items;
i++;
}
while(items!=0);
surname.pop();
fullname=nom.concat(spacer).concat(surname);
console.log(fullname);




