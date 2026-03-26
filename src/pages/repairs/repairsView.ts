import { dom } from '../../utils/dom';

export function repairsShowCurrent() {
  dom.repairsShowCurrent?.classList.add('active');
  dom.repairsShowHistory?.classList.remove('active');
}

export function repairsShowHistory() {
  dom.repairsShowCurrent?.classList.remove('active');
  dom.repairsShowHistory?.classList.add('active');
}
