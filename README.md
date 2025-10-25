# ProBar
A silly progressbar for node.js cli applications with a little bit of customization features.


# Installation
```sh
npm install probar
```

# Usage

### Module Import
```js
import ProBar from "probar" //ES Module

const ProBar = require("probar").default // commonjs
```

### Example
```js
const pb = new ProBar(10) // to process 10 unit of something

// each 500ms 1 unit of proccess is done
setInterval(()=>{
	pb.add(1)
}, 500)
```

if it is needed to complete the process earlier cause of some condition there is a `done()` method to render the bar 100%.
```js
setInterval(()=>{
	if (someConditionIsTrue()) {
		pb.done()
	} else {
		pb.add(1)
	}
}, 500)
```

**Any subsequent calls to `add()` or `done()` method after `done()` or completing the total unit of process will return undefined hence will cause nothing.**

# Customizations

A process can have a title to describe what process it's running.
```js
const pb = new ProBar(244, { title: "parsing 244 files ..." })
```

The bar also customizable. For example the placeholder, fill color etc.

### Probar Options Schema
```
{
	title: string
	barOpts: BarOptions{
		trackPlaceholder: string
		trackColor: RGB{
			r: number
			g: number
			b: number
		}
		fillPlaceholder: string
		fillColor: RGB{ ... }
		barWidth: number
	}
}
```

### Example

A progress bar which has gray fill color and a title.
```js
const pb = new ProBar(20, {
	title: "Process 20 units ...",
	barOpts: {
		filColor: { r: 127, g: 127, b: 127 }
	}
})
```