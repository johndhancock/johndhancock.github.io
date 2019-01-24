import app from './modules/app.json';
document.addEventListener('DOMContentLoaded', function (event) {

  const testData = [{'head': 'headline'}];
  console.log('ready to es6!');
  const foo = 4;
  const bar = 5;
  console.log(foo, bar);
  console.log(app[0].head);
});
//
// const app = new App();
