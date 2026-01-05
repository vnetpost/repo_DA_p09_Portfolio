import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDatabankService {
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

  emailAddress: string = 'info@babak-anvari.com';

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
}
