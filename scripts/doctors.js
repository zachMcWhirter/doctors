

//***************************************

const createDoctor = (name, specialty, address) => {
    const newDoc = {
        doctorName: name,
        specialty: specialty,
        addressOfPractice: address
        }
    console.log( newDoc.doctorName, "will see you now" ,newDoc)
    return createDoctor
}

const DrStrange = createDoctor("Dr. Starnge", "Wizardry", "177A Bleecker Street");
const DrPhil = createDoctor("Dr. Phil", "Mustaches", "Texas, USA")

//***************************************




