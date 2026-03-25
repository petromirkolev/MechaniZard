import './styles/reset.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';

import { initRouter } from './render/router';
import { renderLoginPage } from './pages/auth/authView';

function bootstrapApp(): void {
  initRouter();
  renderLoginPage();
}

bootstrapApp();
