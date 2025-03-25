const form = document.querySelector('form');

form.addEventListener('submit', function (eve) {
  eve.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      res.innerHTML = `your bmi is lesser eat something`;
    } else if (bmi < 24.9 && bmi > 18.6) {
      res.innerHTML = `your bmi is controlled you are living your life fullest`;
    }
    if (bmi > 24.9) {
      res.innerHTML = `your bmi is greater do workout`;
    }
  }
});
