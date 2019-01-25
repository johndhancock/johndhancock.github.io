import $ from 'jquery';
import Handlebars from 'handlebars';
import projects from './modules/design.json';

document.addEventListener('DOMContentLoaded', (e) => {
  const source = document.getElementById('work-template').innerHTML;
  const workTemplate = Handlebars.compile(source);
  const workGrid = document.getElementById('work__grid');

  projects.forEach((project) => {
    const projectBlock = workTemplate(project);
    $('#work__grid').append(projectBlock);
  });
});
//
// const app = new App();
