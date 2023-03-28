'use strict';

import { EventEmitter } from 'events';

class RandomTimeInterval extends EventEmitter {
  constructor (constInterval = 10, randomInterval = 5) {
    super();
    this._constInterval = constInterval;
    this._randomInterval = randomInterval;
    this._onTickHandler = this._onTick.bind(this);
    this._timeout = setTimeout(this._onTickHandler, this._calcTimeout());
  }

  _calcTimeout () {
    const constInterval = this._constInterval;
    const randomInterval = Math.floor(Math.random() * this._randomInterval) + 1;
    return (constInterval + randomInterval) * 1000;
  }

  _onTick () {
    try {
      this.emit('tick');
    } catch (e) {
      // swallow
    } finally {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(this._onTickHandler, this._calcTimeout());
    }
  }

  close () {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    this.removeAllListeners();
  }
}

export default RandomTimeInterval;
