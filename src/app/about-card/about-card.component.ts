import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent implements OnInit {

  socialMedia: any = [{
    name: 'github',
    icon: 'github',
    link: 'github'
  },{
    name: 'linkedin',
    icon: 'linkedin',
    link: 'linkedin'
  },{
    name: 'instagram',
    icon: 'instagram',
    link: 'instagram'
  },{
    name: 'twitter',
    icon: 'twitter',
    link: 'twitter'
  }]

  details: any = [{
    name: 'Phone',
    icon: 'phone',
    data: '+91 9876543210',
    link: '#'
  },{
    name: 'Email',
    icon: 'mail',
    data: 'theabhishekbankar@gmail.com',
    link: '#'
  },{
    name: 'Location',
    icon: 'placeholder',
    data: 'Pune, Maharashtra,India',
    link: '#'
  }]

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
