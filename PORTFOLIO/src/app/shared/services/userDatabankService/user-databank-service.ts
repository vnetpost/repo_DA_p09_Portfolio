import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDatabankService {
  personalInfo = {
    name: 'Babak Anvari',
    address: 'Heimburgstr. 3',
    city: 'Nuremberg',
    emailAddress: 'info@babak-anvari.com',
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
      role: 'Team Partner',
      text: `Michael really kept the team together with his great organization and clear communication.
          We wouldn't have got this far without his commitment.`,
    },
    {
      name: 'username2',
      role: 'Team Partner',
      text: `Michi was a top team colleague at DA. His positive commitment and willingness to take on
          responsibility made a significant contribution to us achieving our goals.`,
    },
    {
      name: 'username3',
      role: 'Frontend Engineer',
      text: `It was a great pleasure to work with Michael. He knows how to push and encourage team
          members to present the best work possible, always adding something to brainstorm.
          Regarding the well-being of group members, he was always present and available to listen
          and help others, with a great sense of humor as well.`,
    },
  ];

  projectsData = [
    {
      name: 'Join',
      imgPath: '/assets/img/projects-photos/join.png',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop, assign users, and manage categories.',
      githubUrl: '#',
    },
    {
      name: 'El Pollo Loco',
      imgPath: '/assets/img/projects-photos/elPolloLoco.png',
      stack: 'JavaScript | HTML | CSS',
      description:
        'Jump, collect items, and defeat enemies in a playful side-scroller game with custom animations and sound effects.',
      githubUrl: 'https://github.com/vnetpost/repo_DA_p08_El_Pollo_Loco.git',
    },
    {
      name: 'DABubble',
      imgPath: '/assets/img/projects-photos/da-bubble.png',
      stack: 'Angular | TypeScript | Firebase',
      description:
        'Slack-style team messenger with channels, threads, and emoji reactions for seamless collaboration.',
      githubUrl: '#',
    },
  ];

  contactFormData = {
    name: '',
    email: '',
    msg: '',
    privacy: false,
  };
}
