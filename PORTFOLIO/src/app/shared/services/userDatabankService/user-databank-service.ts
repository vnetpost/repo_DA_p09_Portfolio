import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDatabankService {
  personalInfo = {
    name: 'Babak Anvari',
    address: 'Heimburgstr. 3',
    city: 'Nuremberg',
    emailAddress: 'contact@babak-anvari.com',
    githubPage: 'https://github.com/vnetpost',
    currentYear: new Date().getFullYear(),
  };

  skillsList = [
    { name: 'Angular', imgPath: '/assets/img/icons/skills-icons/angular.svg' },
    { name: 'TypeScript', imgPath: '/assets/img/icons/skills-icons/ts.svg' },
    { name: 'JavaScript', imgPath: '/assets/img/icons/skills-icons/js.svg' },
    { name: 'HTML', imgPath: '/assets/img/icons/skills-icons/html.svg' },
    { name: 'CSS', imgPath: '/assets/img/icons/skills-icons/css.svg' },
    { name: 'Firebase', imgPath: '/assets/img/icons/skills-icons/firebase.svg' },
    { name: 'Git', imgPath: '/assets/img/icons/skills-icons/git.svg' },
    { name: 'REST-API', imgPath: '/assets/img/icons/skills-icons/api.svg' },
  ];

  aboutMeText: string = `Write some information about yourself that is IT related. <br />
Why are you passionate about coding? Show a desire to learn new technologies and add a
brief description of your problem-solving approach.<br />
You can include some key traits like: analytical thinking, creativity, persistence and
collaboration.`;

  referencesList = [
    {
      name: 'username1',
      roleKey: 'REFERENCES.LIST.USER_1.ROLE',
      textKey: 'REFERENCES.LIST.USER_1.TEXT',
    },
    {
      name: 'username2',
      roleKey: 'REFERENCES.LIST.USER_2.ROLE',
      textKey: 'REFERENCES.LIST.USER_2.TEXT',
    },
    {
      name: 'username3',
      roleKey: 'REFERENCES.LIST.USER_3.ROLE',
      textKey: 'REFERENCES.LIST.USER_3.TEXT',
    },
  ];

  projectsData = [
    {
      name: 'Join',
      imgPath: '/assets/img/projects-photos/join.png',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      descriptionKey: 'PORTFOLIO.PROJECTS.JOIN.DESCRIPTION',
      githubUrl: '#',
      webUrl: '#',
    },
    {
      name: 'El Pollo Loco',
      imgPath: '/assets/img/projects-photos/elPolloLoco.png',
      stack: 'JavaScript | HTML | CSS',
      descriptionKey: 'PORTFOLIO.PROJECTS.EL_POLLO_LOCO.DESCRIPTION',
      githubUrl: 'https://github.com/vnetpost/repo_DA_p08_El_Pollo_Loco.git',
      webUrl: 'https://elpolloloco.projects.babak-anvari.com',
    },
    {
      name: 'DABubble',
      imgPath: '/assets/img/projects-photos/da-bubble.png',
      stack: 'Angular | TypeScript | Firebase',
      descriptionKey: 'PORTFOLIO.PROJECTS.DA_BUBBLE.DESCRIPTION',
      githubUrl: '#',
      webUrl: '#',
    },
  ];

  contactFormData = {
    name: '',
    email: '',
    msg: '',
    privacy: false,
  };
}
