# imagify-node

## Example
``` js
import { Imagify } from "./helpers/imagify";

const image = //binary image data;
const imagify = new Imagify("YOUR_API_KEY");
const imageCompressed = await imagify.compressImage(image, {
    ultra: true,
    keep_exif: true
});
```