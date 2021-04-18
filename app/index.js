// const myArray = ["Jaipur", "Delhi", "Paris"];

// console.log(myArray);

// export default myArray;
const colorInput = document.getElementById('colorInput');
const btnChangeColor = document.getElementById('btnChangeColor');

const changeBakcgroundColor = () => {
  const color = colorInput.value;
  if (!color) {
    return alert('Please Enter a color');
  }
  if (!color.includes('#') || color.length > 7) {
    return alert('Please Enter valid hex color');
  }
  localStorage.setItem('color', color);
  document.body.style.backgroundColor = color;
};

const setColorIfExistInLocalStorage = () => {
  const color = localStorage.getItem('color');
  if (color) {
    document.body.style.backgroundColor = color;
  } else {
    document.body.style.backgroundColor = '#5a20cb';
  }
};

btnChangeColor.addEventListener('click', changeBakcgroundColor);
window.addEventListener('DOMContentLoaded', setColorIfExistInLocalStorage);
