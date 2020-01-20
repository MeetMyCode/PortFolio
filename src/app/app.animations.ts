import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const FadeInAnimation = trigger('routeAnimations', [
  // The '* => *' will trigger the animation to change between any two states
  transition('toHomePage => toPortfolioPage', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('0s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const slideInAnimation =
  trigger('SlidingRouteAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ top: '100vh'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms', style({ top: '-100vh'}))
        ]),
        query(':enter', [
          animate('500ms', style({ top: '0vh'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
 
  