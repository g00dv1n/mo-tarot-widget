import config from "../config.json";

export default function (cardData) {
  return `
<div class="mo-tarot-widget">
    <div class="mo-tarot-widget__title">${config.widgetTitle}</div>
    <div class="mo-tarot-widget__subtitle">${config.widgetSubtitle}</div>
    <div class="mo-tarot-widget__img">
      <img src="${config.widgetDomain}/images/${cardData.id}.png" />
    </div>
    <div class="mo-tarot-widget__desc">${cardData.desc}</div>
    <div class="mo-tarot-widget__link">
      <a href="${config.destinationLink}#${cardData.id}" target="_blank">${config.destinationLinkText}</a>
    </div>
</div>
`;
}
