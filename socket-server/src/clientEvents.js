import {
  serverEnterResponse,
  serverSendMsgResponse,
} from './serverEvents';

const clientEnter = ({ io, room }, payload) => {
  console.log('successfully heard client.enter');
  try {
    serverEnterResponse({ io, room }, payload);
  } catch (err) {
    console.log('clientEnter error: ', err);
  }
};

const clientMsg = ({ io, room }, payload) => {
  console.log('successfully heard client.Msg');
  try {
    serverSendMsgResponse({ io, room }, payload);
  } catch (err) {
    console.log('clientEnter error: ', err);
  }
};

const clientEmitters = {
  'client.enter': clientEnter,
  'client.sendMsg': clientMsg,
};

export default clientEmitters;
