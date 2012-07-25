ticker
=======

A simple JS ticker. Fades through a list of textual
items (which optionally have links).

*Browser Support*: IE6+, Chrome, Firefox, Safari

A demo can be found at: http://bengourley.github.com/ticker/example/

## Dependencies:

This module depends on jQuery (DOM, events and animation) and Underscore
(templates, utilites). To take advantage of CSS transitions in capable
browsers, include https://github.com/benbarnett/jQuery-Animate-Enhanced/
on the page.

It is up to you to ensure these dependencies exist. In the example, these are
hotlinked from Google's CDN and GitHub. You should do something better in
production.

# Usage:

```html
<!-- Minimum recommended CSS -->
<style>
  #ticker {
    position: relative;
  }
  .ticker-item {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<!-- Root element for the ticker -->
<div id="ticker"></div>

<!-- Optional button to control -->
<button class="play-pause">Pause</button>

<!-- Scripts -->
<script src="jquery.min.js"></script>
<script src="jquery.animate-enhanced.min.js"></script>
<script src="underscore.min.js"></script>
<script src="ticker.min.js"></script>
<script src="my-ticker.js"></script>
```

**my-ticker.js:**
```js

// Instantiate a ticker object
var ticker = new Ticker(options)

// Load some items
ticker.items([
    { ... }
  , { ... }
  , { ... }
])

// Each item object should look like this:
//
// { text: '...' // Text to display. Required.
// , link: '...' // Link href to wrap text in. Optional.
// }

// Begin looping through the items
ticker.start()

// or

// Just go to a particular item
ticker.goTo(0)
```

# API

## var ticker = new Ticker(options)

Construct a ticker object. `new` is optional. Options should be
an object with some of the following properties:

- `selector`: Required. The selector of an existing element in the page.
- `interval`: Optional. The milliseconds between each item when autplaying. Default: 5000
- `transitionTime`: Optional. The milliseconds each transition should take. Default: 300
- `loop`: Optional. Loop back to the start when autoplaying. Default: true
- `tag`: Optional. The element tagname to wrap the text in. Default: 'p'
- `className`: Optional. The className to be given to the element. Default: 'ticker-item'


## ticker.items(items)

Pass in the itemss that you want the ticker to display. `items` should be an
array of objects with the following properties:

- `text`: '...' // Required. The text to display.
- `link`: '...' // Optional. Link href to wrap the text in.

## ticker.goTo(index, pause)

Transition to item number `index`. If `pause` is truthy,
the autoplay will be paused.

## ticker.next(pause)

Transition to the next item. Passes `pause` on to `ticker.goTo()`.

## ticker.prev(pause)

Transition to the previous item. Passes `pause` on to `ticker.goTo()`.

## ticker.play(index)

Run through items automatically. Starts from `index` (optional defaulting to 0).

## ticker.pause()

Pauses the play feature.

## ticker.resume()

Resume the play feature from the current item.

# Licence
Licenced under the [New BSD License](http://opensource.org/licenses/bsd-license.php)