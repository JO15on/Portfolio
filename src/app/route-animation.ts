import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
 } from '@angular/animations';

 export const slideInAnimation =
    trigger('routeAnimations', [
         transition('Contact => *', [
              query(':enter, :leave', 
                   style({ position: 'fixed', width: '100%' }), 
                   { optional: true }),        
              group([
                   query(':enter',[
                       style({ transform: 'translateX(-100%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform:   'translateX(0%)'}),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(100%)' }))
                   ], { optional: true }),
              ])
         ]),
         transition('Home => *', [
              query(':enter, :leave', 
                   style({ position: 'fixed',  width: '100%' }), 
                   { optional: true }),
              group([
                   query(':enter', [
                       style({ transform: 'translateX(100%)' }), 
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform: 'translateX(0%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(-100%)' }))
                       ], { optional: true }),
               ])
         ]),
         transition('GraphicDesign => Contact', [
               query(':enter, :leave', 
                   style({ position: 'fixed', width: '100%' }), 
                   { optional: true }),
               group([
                   query(':enter', [
                       style({ transform: 'translateX(100%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform: 'translateX(0%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(-100%)' }))
                   ], { optional: true }),
               ])
         ]),
         transition('GraphicDesign => Home', [
              query(':enter, :leave', 
                   style({ position: 'fixed', width: '100%' }), 
                   { optional: true }),        
              group([
                   query(':enter',[
                       style({ transform: 'translateX(-100%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform:   'translateX(0%)'}),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(100%)' }))
                   ], { optional: true }),
              ])
         ]),
         transition('GraphicDesign => Photography', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
         transition('GraphicDesign => SocialMedia', [
        query(':enter, :leave', 
             style({ position: 'fixed', width: '100%' }), 
             { optional: true }),        
        group([
             query(':enter',[
                 style({ transform: 'translateX(-100%)' }),
                 animate('0.5s ease-in-out', 
                 style({ transform: 'translateX(0%)' }))
             ], { optional: true }),
             query(':leave', [
                 style({ transform:   'translateX(0%)'}),
                 animate('0.5s ease-in-out', 
                 style({ transform: 'translateX(100%)' }))
             ], { optional: true }),
        ])
        ]),
        transition('GraphicDesign => SoftwareProject', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Photography => Contact', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('Photography => Home', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('Photography => GraphicDesign', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('Photography => SocialMedia', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('Photography => SoftwareProject', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SocialMedia => Contact', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SocialMedia => Home', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SocialMedia => GraphicDesign', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SocialMedia => Photography', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SocialMedia => SocialMedia', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SocialMedia => SoftwareProject', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SoftwareProject => Contact', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SoftwareProject => Home', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SoftwareProject => GraphicDesign', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SoftwareProject => Photography', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
        transition('SoftwareProject => SocialMedia', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ])
        ]),
      ]);
 