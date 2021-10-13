const applyFancyImage = (id = 151) => {
  let url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
  const urlExtension = '.png';
  url += id < 999 ? `00${id}`.slice(-3) : id;
  url += urlExtension;

  return url;
};

export default applyFancyImage;
