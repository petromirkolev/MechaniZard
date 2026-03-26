export const dom = {
  /* Top bar */
  topbar: document.querySelector(
    '[data-testid="topbar"]',
  ) as HTMLElement | null,

  /* Nav links */
  navGarage: document.querySelector(
    '[data-action="garage-page"]',
  ) as HTMLAnchorElement | null,
  navMaintenance: document.querySelector(
    '[data-action="maintenance-page"]',
  ) as HTMLAnchorElement | null,
  navRepairs: document.querySelector(
    '[data-action="repairs-page"]',
  ) as HTMLAnchorElement | null,
  navGuides: document.querySelector(
    '[data-action="guides-page"]',
  ) as HTMLAnchorElement | null,
  navProfile: document.querySelector(
    '[data-action="profile-page"]',
  ) as HTMLAnchorElement | null,

  /* Screens */
  authScreen: document.querySelector('.auth-view') as HTMLElement | null,
  garageScreen: document.querySelector(
    '[data-testid="shell-garage"]',
  ) as HTMLElement | null,
  maintenanceScreen: document.querySelector(
    '[data-testid="shell-maintenance"]',
  ) as HTMLElement | null,
  repairsScreen: document.querySelector(
    '[data-testid="shell-repairs"]',
  ) as HTMLElement | null,
  guidesScreen: document.querySelector(
    '[data-testid="shell-guides"]',
  ) as HTMLElement | null,
  profileScreen: document.querySelector(
    '[data-testid="shell-profile"]',
  ) as HTMLElement | null,

  /* Forms */
  loginForm: document.querySelector(
    '[data-testid="form-login"]',
  ) as HTMLFormElement | null,
  registerForm: document.querySelector(
    '[data-testid="form-register"]',
  ) as HTMLElement | null,
  addBikeForm: document.querySelector(
    '[data-testid="add-bike-form"]',
  ) as HTMLFormElement | null,
  editBikeForm: document.querySelector(
    '[data-testid="edit-bike-form"]',
  ) as HTMLFormElement | null,
  logOdoForm: document.querySelector(
    '[data-testid="log-odo-form"]',
  ) as HTMLFormElement | null,
  logMaintenanceForm: document.querySelector(
    '[data-testid="log-maintenance-form"]',
  ) as HTMLFormElement | null,
  scheduleMaintenanceForm: document.querySelector(
    '[data-testid="schedule-maintenance-form"]',
  ) as HTMLFormElement | null,

  /* Login */
  gotoLoginButton: document.querySelector(
    '[data-testid="tab-login"]',
  ) as HTMLElement | null,
  loginButton: document.querySelector(
    '[data-testid="btn-login"]',
  ) as HTMLElement | null,

  /* Register */
  gotoRegisterButton: document.querySelector(
    '[data-testid="tab-register"]',
  ) as HTMLElement | null,
  registerButton: document.querySelector(
    '[data-testid="btn-register"]',
  ) as HTMLElement | null,

  /* Garage */
  garageGrid: document.querySelector(
    '[data-testid="garage-grid"]',
  ) as HTMLElement | null,

  /* Maintenance */
  maintenancePanel: document.querySelector(
    '[data-testid="panel-maintenance"]',
  ) as HTMLElement | null,
  maintenanceSelectBikeContainer: document.querySelector(
    '[data-testid="bike-select"]',
  ) as HTMLSelectElement | null,
  maintenanceShowCurrent: document.querySelector(
    '[data-action="show-maintenance-current"]',
  ) as HTMLElement | null,
  maintenanceShowHistory: document.querySelector(
    '[data-action="show-maintenance-history"]',
  ) as HTMLElement | null,
  maintenanceCurrentList: document.querySelector(
    '[data-testid="maintenance-current-list"]',
  ) as HTMLElement | null,
  maintenanceHistoryList: document.querySelector(
    '[data-testid="maintenance-history-list"]',
  ) as HTMLElement | null,
  maintenanceHeaderContainer: document.querySelector(
    '.maintenance-top__grid',
  ) as HTMLElement | null,

  /* Repairs */
  repairsShowCurrent: document.querySelector(
    '[data-action="show-repairs-current"]',
  ) as HTMLElement | null,
  repairsShowHistory: document.querySelector(
    '[data-action="show-repairs-history"]',
  ) as HTMLElement | null,
};
