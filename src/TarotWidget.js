import cardStateStorage from "./actions/cardStateStorage";
import renderWidgetHtml from "./actions/renderWidgetHtml";
import cardsMap from "./cards-map.json";

class TarotWidget {
  constructor(
    containerId = "mo-tarot-widget",
    cardStateStorageLib = cardStateStorage,
    renderFn = renderWidgetHtml
  ) {
    this.containerId = containerId;
    this.el = document.getElementById(containerId);
    this.cardStateStorageLib = cardStateStorageLib;
    this.renderFn = renderFn;
    this.cardsMap = cardsMap;

    try {
      this.mount();
    } catch (err) {
      console.log(err);
    }
  }

  mount() {
    const cardOfTheDayID =
      this.cardStateStorageLib.getCard() || this.getRandomCardID();

    const cardData = this.cardsMap[cardOfTheDayID];

    if (cardData) {
      this.el.innerHTML = this.renderFn(
        Object.assign({}, cardData, { id: cardOfTheDayID })
      );
      this.cardStateStorageLib.saveCard(cardOfTheDayID);
    }
  }

  getRandomCardID() {
    const ids = Object.keys(this.cardsMap);

    const randomIndex = Math.floor(Math.random() * ids.length);

    return ids[randomIndex];
  }
}

export default TarotWidget;
