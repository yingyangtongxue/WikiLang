import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Grammar', url: '/grammar', icon: 'extension-puzzle' },
    { title: 'Different Meanings', url: '/different-meanings', icon: 'chatbubbles' },
    { title: 'Files', url: '/files', icon: 'archive' },
    { title: 'Tips', url: '/tips', icon: 'clipboard' },
    { title: 'About', url: '/about', icon: 'earth' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
