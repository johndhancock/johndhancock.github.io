import $ from 'jquery';
import Handlebars from 'handlebars';
import projects from './modules/design.json';

document.addEventListener('DOMContentLoaded', (e) => {
  const source = document.getElementById('work-template').innerHTML;
  const workTemplate = Handlebars.compile(source);

  projects.forEach((project) => {
    const projectBlock = workTemplate(project);
    $('#work__grid').append(projectBlock);
  });

  const date = new Date();
  const year = date.getFullYear();
  $('#footer-year').text(year);

  $('nav a').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 500);
  });
});
