import {
  serverEnterResponse,
} from './serverEvents';

const clientEnter = ({ io, room }, payload) => {
  console.log('successfully heard client.enter');
  try {
    serverEnterResponse({ io, room }, payload);
  } catch (err) {
    console.log('clientEnter error: ', err);
  }
};

const clientEmitters = {
  'client.enter': clientEnter,
};

export default clientEmitters;
