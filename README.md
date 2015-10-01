# LaunchpadJS
Interacting with a Novation Launchpad from your browser with the [web MIDI API][midi-web].

## Dreamcode
The next code snippit is how I would like to use the API myself, i.e. the most ideal API. It is an example of [dreamcode][].

```js
Launchpad.connect().then(function(launchpad){
  launchpad.on('press', function(button){
    button.turn('red');
  });
});
```

[midi-web]: https://webaudio.github.io/web-midi-api/
[dreamcode]: http://hood.ie/initiatives/#dreamcode
