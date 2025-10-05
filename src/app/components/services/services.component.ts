import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      icon: 'fas fa-robot',
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business requirements and data patterns.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.'
    },
    {
      icon: 'fas fa-eye',
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and intelligent decision making.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'AI Automation',
      description: 'Streamline your processes with intelligent automation solutions.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud AI',
      description: 'Scalable AI solutions deployed on cloud infrastructure for maximum efficiency.'
    }
  ];

  ngOnInit() {
    // Add any initialization logic here
  }
}
