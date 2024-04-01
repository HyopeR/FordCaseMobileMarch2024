import {Mixin} from 'ts-mixer';
import {BehaviorSubject} from 'rxjs';
import {
  addEventListener,
  NetInfoSubscription,
} from '@react-native-community/netinfo';
import {Singleton} from '@helpers/class';

class Connector extends Mixin(Singleton) {
  build = false;

  connection = new BehaviorSubject(false);
  connectionListener: NetInfoSubscription | undefined;

  register() {
    if (!this.build) {
      this.build = true;
      this.connectionListener = addEventListener(state => {
        this.connection.next(state.isConnected || false);
      });
    }
  }

  unregister() {
    this.build = false;
    this.connection.next(false);

    if (this.connectionListener) {
      this.connectionListener();
    }
  }
}

export default Connector.getInstance();
