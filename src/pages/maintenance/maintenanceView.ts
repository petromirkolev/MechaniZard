import { dom } from '../../utils/dom';
import { bikes } from '../../data/bikes';
import type { Bike } from '../../types/bike';
import { renderMaintenanceHeader } from '../../render/maintenance/renderMaintenanceHeader';
import { historyItems, maintenanceItems } from '../../data/maintenance';
import { renderMaintenanceCard } from '../../render/maintenance/renderMaintenanceCard';
import { renderHistoryCard } from '../../render/maintenance/renderMaintenanceHistoryCard';

export function renderMaintenanceView(bikeId: string | undefined) {
  (dom.maintenancePanel as HTMLElement).classList.remove('is-hidden');

  const bike = bikes.find((bike) => bike.id === bikeId);
  if (!bike) return;

  const maintenanceHeaderContent: string = renderMaintenanceHeader(
    bike as Bike,
  );
  if (!maintenanceHeaderContent) return;

  if (!dom.maintenanceHeaderContainer) return;
  dom.maintenanceHeaderContainer.innerHTML = '';
  dom.maintenanceHeaderContainer.innerHTML = maintenanceHeaderContent;

  showMaintenanceCurrent();
}

export function renderMaintenanceBikeSelect() {
  if (!dom.maintenanceSelectBikeContainer) return;
  dom.maintenanceSelectBikeContainer.innerHTML = `<option value="">Select a bike</option>`;

  bikes.forEach((bike) => {
    const option = document.createElement('option');
    option.value = bike.id;
    option.dataset.bikeid = bike.id;
    option.innerText = `${bike.year} ${bike.make} ${bike.model}`;
    dom.maintenanceSelectBikeContainer?.appendChild(option);
  });
}

export function showMaintenanceCurrent() {
  dom.maintenanceShowCurrent?.classList.add('active');
  dom.maintenanceShowHistory?.classList.remove('active');
  dom.maintenanceCurrentList?.classList.remove('is-hidden');
  dom.maintenanceHistoryList?.classList.add('is-hidden');

  (dom.maintenanceCurrentList as HTMLElement).innerHTML = '';

  maintenanceItems.forEach((item) => {
    const maintenanceCard = renderMaintenanceCard(item);
    (dom.maintenanceCurrentList as HTMLElement).innerHTML += maintenanceCard;
  });
}

export function showMaintenanceHistory() {
  dom.maintenanceShowCurrent?.classList.remove('active');
  dom.maintenanceShowHistory?.classList.add('active');
  dom.maintenanceCurrentList?.classList.add('is-hidden');
  dom.maintenanceHistoryList?.classList.remove('is-hidden');

  (dom.maintenanceHistoryList as HTMLElement).innerHTML = '';

  historyItems.forEach((item) => {
    const historyCard = renderHistoryCard(item);
    (dom.maintenanceHistoryList as HTMLElement).innerHTML += historyCard;
  });
}
