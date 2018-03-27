import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
/**
 * Common animation functions
 */
export function inOutAnimation() {
    return trigger('inOut', [
        transition('* => *', [
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('0.33s ease-in-out', style({ opacity: 1 }))
                ], { optional: true, limit: 1 }),
                query(':leave', [
                    animate('0.33s ease-in-out', style({ opacity: 0 }))
                ], { optional: true, limit: 1 })
            ])
        ])
    ]);
}
export function routeAnimation() {
    return trigger('routeAnimation', [
        transition(':enter', []),
        transition('* => *', [
            group([
                query(':enter', [
                    style({
                        'background-color': 'var(--background-color)',
                        overflow: 'hidden',
                        transform: 'translateX(-100%)',
                        width: '100%'
                    }),
                    animate('0.33s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true, limit: 1 }),
                query(':leave', [
                    style({
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        'z-index': -1,
                    }),
                    animate('0.33s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true, limit: 1 })
            ])
        ])
    ]);
}
export function showHideAnimation() {
    return trigger('showHide', [
        state('shown', style({ height: '*', opacity: 1 })),
        state('hidden', style({ height: 0, opacity: 0 })),
        transition('* => *', animate('0.25s ease-in-out'))
    ]);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYW5pbWF0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFRL0YsTUFBTTtJQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQ3RCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2QsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ2xELEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ2xELEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUMvQixDQUFDO1NBQ0gsQ0FBQztLQUNILENBQUMsQ0FBQztDQUNKO0FBRUQsTUFBTTtJQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7UUFDL0IsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFDeEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUM7Z0JBQ0osS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDZCxLQUFLLENBQUM7d0JBQ0osa0JBQWtCLEVBQUUseUJBQXlCO3dCQUM3QyxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsU0FBUyxFQUFFLG1CQUFtQjt3QkFDOUIsS0FBSyxFQUFFLE1BQU07cUJBQ2QsQ0FBQztvQkFDRixPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQztpQkFDbkUsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO2dCQUM5QixLQUFLLENBQUMsUUFBUSxFQUFFO29CQUNkLEtBQUssQ0FBQzt3QkFDSixJQUFJLEVBQUUsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsR0FBRyxFQUFFLENBQUM7d0JBQ04sS0FBSyxFQUFFLE1BQU07d0JBQ2IsU0FBUyxFQUFFLENBQUMsQ0FBQztxQkFDZCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO2lCQUNyRSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7YUFDL0IsQ0FBQztTQUNILENBQUM7S0FDSCxDQUFDLENBQUM7Q0FDSjtBQUdELE1BQU07SUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtRQUN6QixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQy9DLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDbkQsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBncm91cCwgcXVlcnksIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBBbmltYXRpb25FbnRyeU1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQ29tbW9uIGFuaW1hdGlvbiBmdW5jdGlvbnNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRBbmltYXRpb24oKTogQW5pbWF0aW9uRW50cnlNZXRhZGF0YSB7XG4gIHJldHVybiB0cmlnZ2VyKCdpbk91dCcsIFtcbiAgICB0cmFuc2l0aW9uKCcqID0+IConLCBbXG4gICAgICBncm91cChbXG4gICAgICAgIHF1ZXJ5KCc6ZW50ZXInLCBbXG4gICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDB9KSxcbiAgICAgICAgICBhbmltYXRlKCcwLjMzcyBlYXNlLWluLW91dCcsIHN0eWxlKHtvcGFjaXR5OiAxfSkpXG4gICAgICAgIF0sIHtvcHRpb25hbDogdHJ1ZSwgbGltaXQ6IDF9KSxcbiAgICAgICAgcXVlcnkoJzpsZWF2ZScsIFtcbiAgICAgICAgICBhbmltYXRlKCcwLjMzcyBlYXNlLWluLW91dCcsIHN0eWxlKHtvcGFjaXR5OiAwfSkpXG4gICAgICAgIF0sIHtvcHRpb25hbDogdHJ1ZSwgbGltaXQ6IDF9KVxuICAgICAgXSlcbiAgICBdKVxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlQW5pbWF0aW9uKCk6IEFuaW1hdGlvbkVudHJ5TWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcigncm91dGVBbmltYXRpb24nLCBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW10pLFxuICAgIHRyYW5zaXRpb24oJyogPT4gKicsIFtcbiAgICAgIGdyb3VwKFtcbiAgICAgICAgcXVlcnkoJzplbnRlcicsIFtcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICd2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYW5pbWF0ZSgnMC4zM3MgZWFzZS1pbi1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknfSkpXG4gICAgICAgIF0sIHtvcHRpb25hbDogdHJ1ZSwgbGltaXQ6IDF9KSxcbiAgICAgICAgcXVlcnkoJzpsZWF2ZScsIFtcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgJ3otaW5kZXgnOiAtMSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhbmltYXRlKCcwLjMzcyBlYXNlLWluLW91dCcsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJ30pKVxuICAgICAgICBdLCB7b3B0aW9uYWw6IHRydWUsIGxpbWl0OiAxfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dIaWRlQW5pbWF0aW9uKCk6IEFuaW1hdGlvbkVudHJ5TWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcignc2hvd0hpZGUnLCBbXG4gICAgc3RhdGUoJ3Nob3duJywgc3R5bGUoe2hlaWdodDogJyonLCBvcGFjaXR5OiAxfSkpLFxuICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7aGVpZ2h0OiAwLCBvcGFjaXR5OiAwfSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gKicsIGFuaW1hdGUoJzAuMjVzIGVhc2UtaW4tb3V0JykpXG4gIF0pO1xufVxuIl19