const fancifyImage = (id = 151) => {
  strId = id.toString();
  let url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
  let remainderUrl = '.png';
  if (strId.length === 1) {
    url += '00' + id + remainderUrl;
  } else if (strId.length === 2) {
    url += '0' + id + remainderUrl;
  } else {
    url += id + remainderUrl;
  }
  return url;
};

console.log(fancifyImage());
