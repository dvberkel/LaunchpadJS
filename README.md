# LaunchpadJS
Interacting with a Novation Launchpad from your browser with the [web MIDI API][midi-web].

## Usage

Install LaunchpadJS with [bower][] via the following command

```shell
npm install --save LaunchpadJS
```

or download a distribution from [releases][].

Include `launchpad.min.js` in your html page

```html
<script src="bower_components/LaunchpadJS/launchpad.min.js"></script>
```

Hook your [Lauchpad or Launchpad Mini][launchpad] up to your computer and start writing an application. E.g. the following snippet turns on each button that is pressed to red.

```js
launchpad.connect().then(function(pad){
  pad.clear();
  pad.on('press', function(button){
    button.turn('red');
  });
});
```

Now open your page in [Chrome][chrome] the only browser that natively implements the [Web Midi API][midi-web] at the [moment][can-i-use/midi].

See the [wiki][] for an overview of the [API][api]

## Development Notes

### Launchpad documentation

The Novation Launchpad had an excellent [programmers reference][reference].

[midi-web]: https://webaudio.github.io/web-midi-api/
[bower]: http://bower.io/
[releases]: https://github.com/dvberkel/LaunchpadJS/releases
[launchpad]: http://global.novationmusic.com/launch/launchpad#
[chrome]: https://www.google.com/chrome/browser/desktop/
[can-i-use/midi]: http://caniuse.com/#feat=midi
[reference]: https://d19ulaff0trnck.cloudfront.net/sites/default/files/novation/downloads/4080/launchpad-programmers-reference.pdf
[wiki]: https://github.com/dvberkel/LaunchpadJS/wiki
[api]: https://github.com/dvberkel/LaunchpadJS/wiki/API
