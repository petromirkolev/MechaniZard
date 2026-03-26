export type Action =
  /* Auth */
  | 'show-login-form'
  | 'show-register-form'
  | 'login'
  | 'register'

  /* Top bar */
  | 'garage-page'
  | 'maintenance-page'
  | 'repairs-page'
  | 'guides-page'
  | 'profile-page'
  | 'logout'

  /* Garage */
  | 'add-bike-submit'
  | 'edit-bike-submit'
  | 'log-odo-submit'
  | 'add-log-submit'
  | 'add-schedule-submit'
  | 'open-bike-maintenance'
  | 'open-add-bike-modal'
  | 'close-add-bike-modal'
  | 'open-edit-bike-modal'
  | 'close-edit-bike-modal'
  | 'open-log-odo-modal'
  | 'close-log-odo-modal'
  | 'open-delete-bike-modal'
  | 'close-delete-bike-modal'
  | 'confirm-bike-delete'
  | 'reject-bike-delete'

  /* Maintenance */
  | 'show-maintenance-current'
  | 'show-maintenance-history'
  | 'open-log-maintenance-modal'
  | 'close-log-maintenance-modal'
  | 'open-schedule-maintenance-modal'
  | 'close-schedule-maintenance-modal'

  /* Repairs */
  | 'show-repairs-current'
  | 'show-repairs-history'
  | 'open-add-repair-modal'
  | 'close-add-repair-modal'
  | 'add-repair-submit'
  | 'update-repair-submit'

  /* Profile */
  | 'update-profile'
  | 'update-password';
