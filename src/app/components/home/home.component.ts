import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroTitle = 'Welcome to TheAILegend';
  heroSubtitle = 'Transforming businesses through cutting-edge AI solutions and innovative technology';

  constructor(private router: Router) {}

  ngOnInit() {
    this.animateHeroTitle();
  }

  private animateHeroTitle() {
    // Add typing animation effect
    const titleElement = document.querySelector('.hero-title');
    if (titleElement) {
      titleElement.innerHTML = '';
      this.typeWriter(titleElement as HTMLElement, this.heroTitle, 50);
    }
  }

  private typeWriter(element: HTMLElement, text: string, speed: number) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToServices() {
    this.router.navigate(['/services']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
