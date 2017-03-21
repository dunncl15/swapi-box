const StarWarsData = () => {

  const test = []

  fetch('http://swapi.co/api/')
    .then((response => response.json()))
    .then((data => test.push(...data)));

  console.log(test);
}

export default StarWarsData;
