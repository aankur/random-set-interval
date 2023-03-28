# random-set-interval
Random Set Interval/Delay, updates setInterval to provide a randomized delay in between invocations, useful for API/Limiting/Throttling

Usage:- 

#### npm install random-set-interval

``` javascript
//commonjs
const RandomTimeInterval = require('random-set-interval');
//esm
import RandomTimeInterval from 'random-set-interval';
```

##### Usage

``` javascript
 const randomTimeInterval = new RandomTimeInterval(60 * 5 /* fixed delay in seconds */, 30 /* random delay in seconds */);
 randomTimeInterval.on('tick', () => {
    //will be called repeatedly until randomTimeInterval.close()
 });
```
