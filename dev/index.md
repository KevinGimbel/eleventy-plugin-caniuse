---
layout: base.njk
---

## All default embed

### Code
```liquid
{% raw %}{% caniuse "css-grid" %}{% endraw %}
```
### Live example
{% caniuse "css-grid" %}

## Only current support

### Code
```liquid
{% raw %}{% caniuse "css-grid" "current" %}{% endraw %}
```
### Live example

{% caniuse "css-grid" "current" %}

## Non accessible colors

### Code
```liquid
{% raw %}{% caniuse "css-grid" "current" "false" %}{% endraw %}
```

### Live example
{% caniuse "css-grid" "current" "false" %}

## All periods

### Code
{% raw %}{% caniuse "css-grid" "future_3,future_2,future_1,current,past_1,past_2,past_3,past_4,past_5" %}{% endraw %}

### Live example
{% caniuse "css-grid" "future_3,future_2,future_1,current,past_1,past_2,past_3,past_4,past_5" %}
