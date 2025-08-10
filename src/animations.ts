import { animate, style, transition, trigger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
