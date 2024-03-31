import React, {RefObject} from 'react';
import {
  NavigationContainerRef,
  StackActions,
  Route,
} from '@react-navigation/native';
import {Mixin} from 'ts-mixer';
import {BehaviorSubject} from 'rxjs';
import {Singleton} from '@helpers/class';

class NavigationService extends Mixin(Singleton) {
  #ref: RefObject<NavigationContainerRef<any>> = React.createRef();
  #subject = new BehaviorSubject<Route<string>>({} as Route<string>);

  get ref() {
    return this.#ref;
  }

  get subject() {
    return this.#subject;
  }

  onStateChange() {
    const currentRoute = this.getCurrentRoute();

    if (currentRoute) {
      this.subject.next(currentRoute as Route<string>);
    }
  }

  navigate(name: string, params?: any) {
    this.ref.current?.navigate(name as any, params);
  }

  replace(name: string, params?: any) {
    this.ref.current?.dispatch(StackActions.replace(name, params));
  }

  goBack() {
    this.ref.current?.goBack();
  }

  getCurrentRoute() {
    return this.ref.current?.getCurrentRoute();
  }
}

export default NavigationService.getInstance();
