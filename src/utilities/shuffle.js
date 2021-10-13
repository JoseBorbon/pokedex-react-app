function shuffle(Pokecards) {
  var m = Pokecards.length,
    t,
    i;

  // While there remain cards to shuffle…
  while (m) {
    // Pick a remaining card…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current card.
    t = Pokecards[m];
    Pokecards[m] = Pokecards[i];
    Pokecards[i] = t;
  }

  return Pokecards;
}

export default shuffle;
//Shoutout to Ronald Fisher and Frank Yates
