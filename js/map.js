const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

//getting all data
let officerAll = officers.map((officer) => officer);
console.log(officerAll);

//getting single data
let officerSingle = officers.map((officer) => officer);
console.log(officerSingle[0]);
