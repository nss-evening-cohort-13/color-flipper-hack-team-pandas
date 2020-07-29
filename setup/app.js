'use strict';
// 1. Senario 1
//     - **User story:** As a user, I want to be able to randomly select a color so that the background color of the page can be changed.
//     - **Given:** The user has navigated to the home page
//     - **When:** The user presses a button that reads “Click Me” on in the center of the page
//     - **Then:** A random color should be chosen from a predetermined array of colors
//     - **And:** The background color of the current page’s body should be changed to the chosen color

const colors = [
  'red',
  'orange',
  'blue',
  'purple',
  'white',
  'yellow',
  'black',
  'pink',
  'green',
  'tan',
];

const handleButtonClick = e => {
  const buttonId = e.target.id;
  const randomNum = Math.floor(Math.random() * Math.floor(10));
  const chosenColor = colors[randomNum];
  const bodySelector = (document.querySelector(
    'body'
  ).style.backgroundColor = chosenColor);
};

const buttonEvents = () => {
  document.querySelector('#myBtn').addEventListener('click', handleButtonClick);
};

buttonEvents();
