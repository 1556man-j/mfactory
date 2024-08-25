import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonial: ConfigItem |  undefined;
  configService: ConfigService = inject(ConfigService);

  constructor(){
    this.testimonial = this.configService.getPageByName('testimonial');
  }

}
