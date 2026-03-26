import { dom } from '../../utils/dom';
import { showAuthForm } from '../../utils/show-screen';

export function renderLoginView(): void {
  showAuthForm('login');
  dom.gotoLoginButton?.classList.add('active');
  dom.gotoRegisterButton?.classList.remove('active');
}

export function renderRegisterView(): void {
  showAuthForm('register');
  dom.gotoRegisterButton?.classList.add('active');
  dom.gotoLoginButton?.classList.remove('active');
}
