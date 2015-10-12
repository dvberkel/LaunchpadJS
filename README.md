# LaunchpadJS
Interacting with a Novation Launchpad from your browser with the [web MIDI API][midi-web].

## Launchpad documentation

The Novation Launchpad had an excellent [programmers reference][reference].

## Dreamcode
The next code snippit is how I would like to use the API myself, i.e. the most ideal API. It is an example of [dreamcode][].

```js
Launchpad.connect().then(function(launchpad){
  launchpad.clear();
  launchpad.on('press', function(button){
    button.turn('red');
  });
});
```

[midi-web]: https://webaudio.github.io/web-midi-api/
[reference]: https://d19ulaff0trnck.cloudfront.net/sites/default/files/novation/downloads/4080/launchpad-programmers-reference.pdf
[dreamcode]: http://hood.ie/initiatives/#dreamcode
