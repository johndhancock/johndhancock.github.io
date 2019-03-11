import $ from 'jquery';
import Handlebars from 'handlebars';
import Vue from 'vue';
import projects from './modules/design.json';

document.addEventListener('DOMContentLoaded', (e) => {
  // const source = document.getElementById('work-template').innerHTML;
  // const workTemplate = Handlebars.compile(source);
  //
  // projects.forEach((project) => {
  //   const projectBlock = workTemplate(project);
  //   $('#work__grid').append(projectBlock);
  // });

  const date = new Date();
  const year = date.getFullYear();
  $('#footer-year').text(year);

  Vue.component('process-button', {
    template: '<button @click="clickHandler">View process</button>',
    methods: {
      clickHandler() {
        console.log('view process');
      },
    },
  });

  Vue.component('portfolio-card', {
    props: ['projectData'],
    data() {
      return {
        project: { ...this.projectData },
      };
    },
    template: `
      <div class="work__entry">
        <img :src="'images/' + project.imagename + '.jpg'" :alt=project.head />
        <div class="work__content">
          <h5>{{project.head}}</h5>
          <p>{{project.blurb}} <a :href="project.url">View</a><p>
          <button @click="viewProcess">View Process</button>
          <div v-if="project.tags" class="work__skills">
            <span v-for="tag in project.tags">{{tag}}</span>
          </div>
        </div>
      </div>
    `,
    methods: {
      viewProcess() {
        console.log(this.project.head);
      },
    },
  });

  const portfolio = new Vue({
    el: '#work__grid',
    data: {
      projects,
    },
  });

  console.log(portfolio);


  // ---------------------------------------------------------------------------
  // NAV SCROLLING
  // ---------------------------------------------------------------------------

  function scrollPage(event, target) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(`#${target}`).offset().top,
    }, 500);
  }

  $('nav a').click(function (event) {
    const id = $(this).attr('id');
    scrollPage(event, id);
  });
});
//
// const app = new App();
