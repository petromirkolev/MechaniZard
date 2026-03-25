import { dom } from './dom';

export type Screen = 'auth' | 'garage' | 'maintenance';
export type AuthMode = 'login' | 'register';
export type MaintenanceMode = 'maintenance-log' | 'maintenance-history';

const SCREENS: Record<Screen, HTMLElement | null> = {
  auth: dom.authScreen,
  garage: dom.garageScreen,
  maintenance: dom.maintenanceScreen,
};

function setHidden(el: HTMLElement | null, hidden: boolean) {
  if (!el) return;
  el.classList.toggle('is-hidden', hidden);
}

export function showScreen(screen: Screen) {
  (Object.keys(SCREENS) as Screen[]).forEach((key) => {
    setHidden(SCREENS[key], key !== screen);

    if (screen === 'auth') {
      dom.topbar?.classList.add('is-hidden');
    } else {
      dom.topbar?.classList.remove('is-hidden');
    }
  });
}

export function showAuthForm(mode: AuthMode) {
  setHidden(dom.loginForm, mode !== 'login');
  setHidden(dom.registerForm, mode !== 'register');
}

export function showMaintenanceForm(mode: MaintenanceMode) {
  setHidden(dom.maintenanceShowCurrent, mode !== 'maintenance-log');
  setHidden(dom.maintenanceShowHistory, mode !== 'maintenance-history');
}
