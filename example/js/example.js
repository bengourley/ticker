(function () {

  var Ticker = window.Ticker
    , items =
      [ { text: 'Some news article', link: '#' }
      , { text: 'Some other news article', link: '#' }
      , { text: 'Big news', link: '#' }
      , { text: 'Not a link' }
      ]

  var ticker = new Ticker({ selector: '#ticker' })
    .items(items)
    .start()

  $('button.play-pause').on('click', function () {
    if (ticker.isPlaying) {
      ticker.pause()
      $(this).text('Play')
    } else {
      ticker.resume()
      $(this).text('Pause')
    }
  })

}())