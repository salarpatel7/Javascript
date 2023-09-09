## project 1 

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});

## project 2 solution

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmiguide = document.querySelector('#bmiguide');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `plz give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `plz give valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18) {
      bmiguide.innerHTML = `<h3>This is under weight </h3>`;
    } else if (bmi > 18 && bmi < 24) {
      bmiguide.innerHTML = `<h3>this is normal range </h3> `;
    } else {
      bmiguide.innerHTML = `<h3>this is overweight </h3>`;
    }
  }
});

##project 3 (color changing)

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalid;
const startchangingColor = function () {
  if (!intervalid) {
    intervalid = setInterval(changBgClr, 1000);
  }

  function changBgClr() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopchangingColor = function () {
  clearInterval(intervalid);
  intervalid = null;
};
document.querySelector('#start').addEventListener('click', startchangingColor);

document.querySelector('#stop').addEventListener('click', stopchangingColor);


```