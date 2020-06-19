let JumpStop_Records = [];
let Chatten_Records = [];
let Polar_Records = [];

const makeFunk_Rap_Artist = (name, age, genre) => {
    const newFunk = {
        fullName: name,
        age: age,
        musicalGenre: genre
    }
        JumpStop_Records.push(newFunk);
        return makeFunk_Rap_Artist;
};

const makeCountry_BluegrassArtist = (name, age, genre) => {
    const newCountry = {
        fullName: name,
        age: age,
        musicalGenre: genre
    }
        Chatten_Records.push(newCountry);
        return makeCountry_BluegrassArtist;
};

const makePopArtist = (name, age, genre) => {
    const newPop = {
        fullName: name,
        age: age,
        musicalGenre: genre
    }
        Polar_Records.push(newPop);
        return makePopArtist;
}



const BruceAtikins = makeCountry_BluegrassArtist("Bruce Atikins", 23, "Country");
const JensenBrown = makePopArtist("Jensen Brown", 20, "Pop");
const DreFunkz = makeFunk_Rap_Artist("Dre Funkz",25 ,"Funk");
const DustaGrimes = makeFunk_Rap_Artist("Dusta Grimes", 21, "Rap");
const BartholomewDanielson = makeCountry_BluegrassArtist("Bartholomew Danielson", 23, "Bluegrass");
const AvileeDallas = makeCountry_BluegrassArtist("Avilee Dallas", 19, "Country");
const AustinKinkaid = makePopArtist("Austin Kinkaid", 22, "Pop");
const LoyoncéBranis = makeFunk_Rap_Artist("Loyoncé Branis", 27, "Rap");

console.log("JumpStop Recording Artists", JumpStop_Records);
console.log("Chatten Recording Artists", Chatten_Records);
console.log("Polar Recording Artists", Polar_Records);





