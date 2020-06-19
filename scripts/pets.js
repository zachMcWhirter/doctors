// **************************************

let BowWowKennels = [];

const makePet = (name, breed) => {
    const newPet = {
    petName: name,
    patBreed: breed
    }
    BowWowKennels.push(newPet);
    return makePet;
}


const Teddy = makePet("Teddy", "Lab");
const Spike = makePet("Spike", "Great Dane");
const Lady = makePet("Lady", "Cocker Spaniel");
console.log("Dogs in the BowWowKennel", BowWowKennels);
