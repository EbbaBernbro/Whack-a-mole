//objects:

export type initilizeTimer = {
  init: number;
};

export type counterState = {
  timer: number;
};

export type buttonState = {
  disableButton: boolean;
};

//Används den här?
export type Mole = {
  moleInTheHole: boolean;
};

export type scoreState = {
  points: number;
};

export type endOfGameState = {
  gameOver: string;
};

export type finalScore = {
  scoreMessage: string;
};

//bara test till min setInterval
export type intervalState = {
  timeOut: number;
};

//To keep track of the id nbr att whacked mole??
// export type idOfWhacked = Array<{
//   id: number;
// }>;

//Eller ska det vara en variabel?
export type moleStatus = {
  howManyMoles: number;
};

//Vad kan jag skriva ist för Array<>
export type moleHoleState = Array<{
  id: number;
  available: boolean;
}>;
