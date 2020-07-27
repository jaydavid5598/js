const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

const pilotsRebel = pilots.filter((pilot) => pilot.faction == "Rebels");
console.log(pilotsRebel);

const pilotsEmpire = pilots.filter((pilot) => pilot.faction == "Empire");
console.log(pilotsEmpire);
