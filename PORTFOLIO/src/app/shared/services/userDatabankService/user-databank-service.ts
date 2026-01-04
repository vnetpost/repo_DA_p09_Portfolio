import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDatabankService {
  skillsList = [
    { name: 'Angular', imgPath: '/assets/img/icons/angular.svg' },
    { name: 'TypeScript', imgPath: '/assets/img/icons/ts.svg' },
    { name: 'JavaScript', imgPath: '/assets/img/icons/js.svg' },
    { name: 'HTML', imgPath: '/assets/img/icons/html.svg' },
    { name: 'CSS', imgPath: '/assets/img/icons/css.svg' },
    { name: 'Firebase', imgPath: '/assets/img/icons/firebase.svg' },
    { name: 'Git', imgPath: '/assets/img/icons/git.svg' },
    { name: 'REST-API', imgPath: '/assets/img/icons/api.svg' },
  ];

  emailAddress: string = 'info@babak-anvari.com';

  aboutMeText: string = `Write some information about yourself that is IT related. <br />
Why are you passionate about coding? Show a desire to learn new technologies and add a
brief description of your problem-solving approach.<br />
You can include some key traits like: analytical thinking, creativity, persistence and
collaboration.`;
}
