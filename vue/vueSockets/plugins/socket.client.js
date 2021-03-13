import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import store from '../store';
import io from 'socket.io-client';

const publicPath = process.env.NODE_ENV === 'production'
  ? '/front-end/'
  : '/';

const socketInstance = io(publicPath, {
  transports: ['websocket', 'flashsocket', 'polling'],
  rejectUnauthorized: false,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax : 5000,
  reconnectionAttempts: 15
});

export default ({ store }) => {
  Vue.use(new VueSocketIO({
    debug: false,
    connection: socketInstance,
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_',
    },
  }));
};