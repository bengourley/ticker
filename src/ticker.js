/**
 * ticker.js
 * ==========
 * https://github.com/bengourley/ticker
 * Licenced under the New BSD License
*/

(function() {

var defaults =
  { interval: 3000
  , transitionTime: 150
  , tag: 'p'
  , className: 'ticker-item'
  , loop: true
  }

/**
 * Constructor for ticker objects
 */
function Ticker(options) {

  // Merge options and defaults
  this.options = _.extend({}, defaults, options)

  // Calling Ticker without new is ok...
  if (!(this instanceof Ticker)) return new Ticker(options)


  if (!this.options.selector) {
    throw new Error('`selector` is a required option')
  }

  // Make sure root is a single element
  this.root = $(this.options.selector).eq(0)

  this.index = 0
  this._items = []
  this.current = null
  this.interval = null
  this.isPlaying = false

}

Ticker.prototype.items = function (items) {
  this._items = items
  return this
}

Ticker.prototype.start = function (index) {
  this.isPlaying = true
  this.goTo(index || 0)
  this.interval = setInterval(_.bind(function () {
    this.next()
  }, this), this.options.interval)
  return this
}

Ticker.prototype.pause = function () {
  clearInterval(this.interval)
  this.isPlaying = false
  return this
}

Ticker.prototype.resume = function () {
  if (this.isPlaying) return this
  this.start(this.index)
  return this
}

Ticker.prototype.next = function (pause) {
  this.index++
  if (this.index === this._items.length && this.options.loop) {
    this.index = 0
  }
  this.goTo(this.index)
  return this
}

Ticker.prototype.prev = function (pause) {
  this.index--
  if (this.index === -1 && this.options.loop) {
    this.index = this._items.length - 1
  }
  this.goTo(this.index)
  return this
}

Ticker.prototype.goTo = function (index, pause) {

  if (index < 0 || index === this._items.length) return this

  if (this.current) {
    this.current.stop().animate({
      opacity: 0
    }, this.options.transitionTime, function () {
      $(this).remove()
    })
  }

  var item = this._items[index]

  if (item.link) {
    this.current = $('<' + this.options.tag + '/>')
      .append(
        $('<a/>')
          .attr('href', item.link)
          .text(item.text)
        )
  } else {
    this.current = $('<' + this.options.tag + '/>')
      .text(item.text)
  }

  this.current
    .addClass(this.options.className)
    .css({ opacity: 0 })
    .appendTo(this.root)
    .animate({ opacity: 1 }, this.options.transitionTime)

  return this

}

window.Ticker = Ticker

})()