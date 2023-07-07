import {InjectionToken} from "@angular/core";

export const TG_WEB_APP: InjectionToken<WebApp> = new InjectionToken<WebApp>('Telegram web app', {
  factory: () => (window as any).Telegram.WebApp,
});
