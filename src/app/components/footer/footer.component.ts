import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface SocialLink {
  icon: string;
  url: string;
}

interface FooterLink {
  title: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialLinks: SocialLink[] = [
    { icon: 'fab fa-linkedin', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-github', url: '#' }
  ];

  serviceLinks: FooterLink[] = [
    { title: 'Machine Learning', url: '/services' },
    { title: 'Natural Language Processing', url: '/services' },
    { title: 'Computer Vision', url: '/services' },
    { title: 'Data Analytics', url: '/services' }
  ];

  companyLinks: FooterLink[] = [
    { title: 'About Us', url: '/about' },
    { title: 'Contact', url: '/contact' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Terms of Service', url: '#' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Add any initialization logic here
  }

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }
}
