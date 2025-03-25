const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (eve) {
    // console.log(eve);
    // console.log(eve.target);
    switch (eve.target.id) {
      case 'grey':
        body.style.backgroundColor = eve.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = eve.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = eve.target.id;
        break;
      case 'white':
        body.style.backgroundColor = eve.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = eve.target.id;
        break;
    }
  });
});
