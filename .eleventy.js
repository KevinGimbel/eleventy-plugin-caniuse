module.exports = (eleventConfig, options = { periods: 'future_1,current,past_1', accessible_colors: true }) => {


  eleventConfig.addShortcode('caniuse_js', () => {
    return `<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js"></script>`;
  });

  eleventConfig.addShortcode('caniuse', (feature, _periods, _accessible_colors) => {
    let periods = _periods || options.periods;
    let accessible_colors = _accessible_colors || options.accessible_colors;

    return `<p class="ciu_embed" data-feature="${feature}" data-periods="${periods}" data-accessible-colours="${accessible_colors}">
      <picture>
        <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/${feature}.webp">
        <source type="image/png" srcset="https://caniuse.bitsofco.de/image/${feature}.png">
        <img src="https://caniuse.bitsofco.de/image/${feature}.jpg" alt="Data on support for the ${feature} feature across the major browsers from caniuse.com">
      </picture>
    </p>`;
  });
};