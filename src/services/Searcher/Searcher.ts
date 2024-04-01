import React, {RefObject} from 'react';
import {TextInput} from 'react-native';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, map, distinctUntilChanged} from 'rxjs/operators';

class Searcher {
  #ref: RefObject<TextInput> = React.createRef();

  #textInitial: string;
  #text: string;
  protected subject: BehaviorSubject<string>;

  constructor(text = '') {
    this.#textInitial = text;
    this.#text = text;
    this.subject = new BehaviorSubject<string>(text);
  }

  get ref() {
    return this.#ref;
  }

  get pipe() {
    return this.subject.pipe(debounceTime(500));
  }

  get text() {
    return this.#text;
  }

  get textInitial() {
    return this.#textInitial;
  }

  onChangeText = (value: string) => {
    this.#text = value;
    this.subject.next(value);
  };

  focus() {
    this.ref.current?.focus();
  }

  blur() {
    this.ref.current?.blur();
  }

  reset() {
    this.#text = this.#textInitial;
    this.subject.next(this.#textInitial);
  }
}

export default Searcher;
