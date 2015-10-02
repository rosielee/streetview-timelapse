# hyperlapse

*abstract*
User clicks on points on map or enter start and finish postcodes.
Using Google street view photography a short hyperlapse video is generated.
The video is then digitally mapped over 3D objects from the creative, which users can then share on their social channels.

## libraries
- https://github.com/UseAllFive/StreetviewSequence.js **working**
- https://github.com/TeehanLax/Hyperlapse.js **experiental**
- http://postcodes.io/ **awesome**

*method*

- convert postcode into latlong coordinates
- all output is rendered inside canvas (streetview, object overlay, background)
- only streetview is rendered inside canvas

*output*

- a video is created (MP4, OGG) that's downloadable
    - a canvas made up google streetview images is 'tainted' due to Cross-origin resource sharing (CORS)
    - consequently, we cannot programatically render the frames into a video (MP4) for sharing

- a GIF is created
    - shabby

- the online experience can be recreated with a URL (...the URL would be shareable) perhaps an image could be used for sharing

*references*

- https://github.com/antimatter15/jsgif **looks shabby / old**
- http://www.paulhammond.org/webkit2png/ **doesn't render css as a decent browser would**
- https://jnordberg.github.io/gif.js/ **GIF looks shabby**
- http://www.oampo.co.uk/2011/01/exporting-video-from-webgl/ **CORS**
- http://www.ultramegasoft.com/blog/2010/09/record-html-canvas-animations-to-video/ **CORS**
- http://phantomjs.org/api/webpage/method/render.html **doesn't render css as a decent browser would**

*notes / concerns*

- do we need a google api key?
- usage: https://developers.google.com/maps/documentation/business/articles/usage_limits
- will need to measure distance between postcodes

---

# object takover

*abstract*

Using a bespoke Konami code such as “AIR MAX WORLD” users can discover the Air Max parallel world.
With floating objects from the animation appearing over the page.
Consumers will be encouraged to share the “secret code” to discover the world themselves.
Floating objects link to PDP page.

## libraries
- https://github.com/snaptortoise/konami-js