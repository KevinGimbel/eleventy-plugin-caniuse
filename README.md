# eleventy-plugin-caniuse
> Plugin to include caniuse.com embeds into 11ty websites

<!-- BEGIN mktoc -->
- [Usage](#usage)
  - [Install plugin](#install-plugin)
  - [Load the plugin in .eleventy.js](#load-the-plugin-in-eleventyjs)
  - [Load the caniuse-embed library](#load-the-caniuse-embed-library)
- [Config Options](#config-options)
- [Config Examples](#config-examples)
- [Use the shortcode](#use-the-shortcode)
  - [Syntax](#syntax)
<!-- END mktoc -->
## Usage

### Install plugin

Install the plugin using npm:

```bash
npm install @kevingimbel/eleventy-plugin-caniuse
```

### Load the plugin in .eleventy.js
Then, include it in your `.eleventy.js` config file:

```js
const canIuse = require("@kevingimbel/eleventy-plugin-caniuse");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(canIuse);
};
```

### Load the caniuse-embed library

The plugin requires the caniuse-embed library from Ire Aderinokun which can be found at [https://github.com/ireade/caniuse-embed](https://github.com/ireade/caniuse-embed).

The plugin provides a convenient shortcode to load the library from [jsdelivr.com](https://www.jsdelivr.com/)

```html
<body>
...
{% caniuse_js %}
</body>
```

This will render a script element that loads the library from the jsdelivr.com CDN.

Alternatively you can download the JavaScript code from [https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js](https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js) and include it in any other way, e.g. by adding it to a JavaScript bundle.

## Config Options

| Option      | Type | Default       | Available options |
| ----------- | ---- | ------------- | ----------------- | 
| accessible_colors | Boolean | true | true, false | 
| periods | string | future_1,current,past_1,past_2 | future_3, future_2, future_1, current, past_1, past_2, past_3, past_4, past_5 | 

See [https://caniuse.bitsofco.de/](https://caniuse.bitsofco.de/) for more details.

## Config Examples

In the following example accessible_colors are disabled and only current and two future browser versions are shown.

```js
const canIuse = require("@kevingimbel/eleventy-plugin-caniuse");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(canIuse, {
      accessible_colors: false,
      periods: "future_2,future_1,current"
  });
}
```

## Use the shortcode

### Syntax

```
{% caniuse "feature" "periods" "accessible_colors" %}
```
```
{% caniuse "css-grid" "future_1,current" "false" %}
```

### Examples

Some examples: 

**Use default config and embed info about css-grid support**
```
{% caniuse "css-grid" %}
```

**Custom periods**
```
{% caniuse "css-grid" "future_2,future_1,current,past_1" %}
```

**Disable accessible colors**
```
{% caniuse "css-grid" "past_1" "false" %}
```

## FAQ

### How can I find the "feature" name?

The name of the feature can be found in the URL of caniuse.com, for example:

`https://caniuse.com/async-clipboard` -> `async-clipboard`
`https://caniuse.com/css-grid` -> `css-grid`

## Credits

- [Ire Aderinokun](https://twitter.com/ireaderinokun) for her [caniuse embed script](https://caniuse.bitsofco.de/) and related service
- [5t3ph](https://github.com/5t3ph/) for her [https://github.com/5t3ph/eleventy-plugin-template](https://github.com/5t3ph/eleventy-plugin-template)