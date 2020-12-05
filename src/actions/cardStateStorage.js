import Cookies from "js-cookie";

const COOKIES_KEY = "mo-tarot-widget-card-of-the-day";

function getCard() {
  return Cookies.get(COOKIES_KEY);
}

function saveCard(cardId) {
  Cookies.set(COOKIES_KEY, cardId, { expires: 1 });
}

export default {
  getCard,
  saveCard,
};
