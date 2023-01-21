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

export type scoreState = {
  points: number;
};

export type endOfGameState = {
  gameOver: string;
};

export type finalScore = {
  scoreMessage: string;
};

//Used in code to keep track of number of moles out at playfield
export type moleStatus = {
  howManyMoles: number;
};

//Vad kan jag skriva ist för Array<>?
export type moleHoleState = Array<{
  id: number;
  available: boolean;
}>;
