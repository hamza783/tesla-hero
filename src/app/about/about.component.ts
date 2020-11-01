import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadResume() {
    // code to download resume
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/hamza_shakel_Resume.pdf';
    link.download ='hamza_shakel_Resume';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  viewResume() {
    // code to view resume
    console.log('inside download');
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/hamza_shakel_Resume.pdf';
    // link.download = path;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
