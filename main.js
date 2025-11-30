//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */

const pohlavi = ["male", "female"];
const krestniZena = ["Anežka", "Miroslava", "Dana", "Karolína", "Jana", "Pavla", "Iva", "Anna", "Zdeňka", "Melisa", "Gertruda", "Liliana", "Žofie", "Anděla", "Dorota", "Angelika", "Bára", "Iveta", "Ivana", "Cecilie", "Dita", "Evženie", "Fiona", "Ráchel", "Gabriela", "Hana", "Jitka", "Kateřina", "Lucie", "Monika", "Natálie", "Oldřiška", "Petra", "Josefína", "Alena", "Lenka", "Jaroslava", "Marie", "Vilemína", "Františka", "Eva", "Karolína", "Romana", "Diana", "Radana", "Sylvie", "Tamara", "Uršula", "Vendula", "Xenie", "Zita"];
const krestniMuz = ["Adam", "Augustýn", "Bořek", "Břetislav", "Ciril", "Ctirad", "David", "Daniel", "Emil", "Evžen", "Florian", "František", "Gustav", "Herald", "Hynek", "Ignác", "Ivan", "Jan", "Jeroným", "Jindřich", "Karel", "Kvído", "Květoslav", "Luboš", "Libor", "Michal", "Milan", "Norbert", "Ondřej","Oldřich", "Pavel", "Petr", "Roman", "Radek", "Stanislav", "Sebastian", "Tomáš", "Tadeáš", "Tedd", "Václav", "Miloslav", "Miroslav", "Zbyněk", "Zdislav", "Jeroným", "Jeník", "John", "Květoslav", "Soběslav", "Milan", "Věnceslav" ];
const prijmZena  = ["Albertová", "Ankrová", "Akhová", "Brožková", "Boušková", "Ctiradová", "Camrová", "Davidová","Drobná", "Drahotová", "Eliášová", "Erbová", "Francová", "Fialová", "Gustavová", "Gardová", "Grossová", "Havelková", "Havlová", "Habrtová", "Chechtavá", "Charvátová", "Chechtavá", "Chocholoušková", "Chomoutová", "Chobotová", "Ignácová", "Irvinová", "Jandová", "Novotná", "Nová", "Newmanová", "Dvořáková", "Černá", "Krejčí", "Horáková", "Němcová", "Kučerová", "Pospíšilová", "Rychtářová", "Jasná", "Karmínová", "Klapová", "Kotková", "Ludvíková", "Litavská", "Motavá", "Nývltová", "Obermeierová", "Pekelná", "Radostná"];
const prijmMuz = ["Akh", "Augusta", "Brožek","Benda", "Candát", "Camr", "Cmrnda", "Drobný", "Dufek", "Drahota", "Eliáš", "Egrt", "Franc", "Fiala", "Goliáš", "Gross", "Grota", "Hamuta", "Havel", "Hlodavec", "Chrochta", "Charvát", "Chocholoušek", "Chomout", "Ivánek", "Igor", "Irvin", "Janda", "Jepota","Krasinský", "Klouzek", "Lebeda", "Manuel", "Nuvický", "Nekroman", "Novák", "Novotný", "Nový", "Newman", "Dvořák", "Černý", "Krejčí", "Horák", "Němec", "Kučera", "Pospíšil", "Obermeier", "Obora", "Pěnkava", "Rychtář", "Rabyně"];

const dtoIn = {
  count: 2,
  age: {
    min: 19,
    max: 35
  }
};

export function randomDo40() { //puvodne 40, ale to bylo malo pro testy, proto jsem zvysil na 51
  let dtoOut = Math.floor(Math.random()*51); // nahodne cislo do 51 (pro nahodny vyber jmena a prijmeni z 51 moznosti vyse) 
  return dtoOut;
}

export function datumNarozeni(vekMin, vekMax) {
  let nowDate = new Date();
  let nowDateNumb = Date.parse(nowDate);  //datum na ms = čislo
  let vek = Math.random()*(vekMax-vekMin)+vekMin; // nahodny vek v rozsahu pozadovanem na vstupu
  let bornDateNumb = nowDateNumb - (Math.floor(vek*365.25*24*60*60)*1000);  //vypocet data narozeni v ms jako cislo
  let bornDate = new Date();
  bornDate.setTime(bornDateNumb); //prevod cisla z ms na datum narozeni

  let dtoOut = bornDate.toISOString(); // a do pozadovaneho formatu

  return dtoOut;
}



export function main(dtoIn) {
  
  let dtoOut = [];  //nadefinování pole pro budoucí objekty
  for (let i = 0; i < dtoIn.count; i++) {  //pro každý objekt/zamestnance v poli v počtu požadovaném na vstupu
    let nahodneCislo = Math.floor(Math.random()*2); // 0, nebo 1 pro vyber pohlavi
    let uvazek = (Math.floor(Math.random()*4+1))*10; // generování náhodného 10, 20, 30, 40
  
    dtoOut[i]  = 
    {
      gender: pohlavi[nahodneCislo],
      birthdate: datumNarozeni(dtoIn.age.min, dtoIn.age.max),
      name: "",
      surname: "",
      workload: uvazek
    }
  
    if (nahodneCislo == 0) { // const pohlavi - 0 = muz
      dtoOut[i].name = krestniMuz[randomDo40()];
      dtoOut[i].surname = prijmMuz[randomDo40()];
    }
    else {  //nahodneCislo - 1 = zena
      dtoOut[i].name = krestniZena[randomDo40()];
      dtoOut[i].surname = prijmZena[randomDo40()];
    }
    /**
    for(let key in dtoOut[i]) // vypis zamestnancu
    {
      console.log(key + " : " + dtoOut[i][key]);
    }
    console.log("\n");  
    */
  }
  return dtoOut;
}

