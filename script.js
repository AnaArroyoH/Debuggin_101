const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    // console.log ("Dit is de gehele persoon: ", person); // Use a coma (,) to display the whole
    // object, using + or [] won't show the whole object.
    // console.log ("De naam is", person.name);
    // console.log ("Het geboorte jaar is", 2021 - person.age);
    // console.log (person.name, "is een", person.profession);
    if (person.age > 50){
        console.log (person.name, "is ouder dan 50"); 
    }  
    // Ik hoop dit deel v/d opdracht te hebben begrepen, zo ja, dan werkt mijn if statement wel
  };
