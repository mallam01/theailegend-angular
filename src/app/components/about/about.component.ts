import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  stats: Stat[] = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' }
  ];

  features: Feature[] = [
    {
      icon: 'fas fa-rocket',
      title: 'Innovation',
      description: 'Pioneering the latest AI technologies'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Reliability',
      description: 'Trusted solutions for critical business needs'
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Team',
      description: 'World-class AI engineers and scientists'
    }
  ];

  ngOnInit() {
    this.animateCounters();
  }

  private animateCounters() {
    const counters = document.querySelectorAll('.stat h4');
    counters.forEach((counter, index) => {
      const target = parseInt(this.stats[index].value);
      const increment = target / 100;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          (counter as HTMLElement).textContent = Math.ceil(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          (counter as HTMLElement).textContent = target + '+';
        }
      };
      
      updateCounter();
    });
  }
}
