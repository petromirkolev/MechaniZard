import { dom } from '../../utils/dom';
import { bikes } from '../../data/bikes';
import { renderBikeCard } from '../../render/bikes/renderBikeCard';

export function renderGarageView() {
  if (dom.garageGrid)
    dom.garageGrid.innerHTML = bikes.map(renderBikeCard).join('');
}
