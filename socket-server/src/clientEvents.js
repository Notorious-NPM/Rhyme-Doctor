import {
  serverEnterResponse,
  serverSendMsgResponse,
  serverSelectedChatResponse,
} from './serverEvents';

const clientEnter = ({ io, room }, payload) => {
  console.log('successfully heard client.inLobby');
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

const clientSelectedChat = ({ io, room }, payload) => {
  console.log('heard client select chat');
  try {
    serverSelectedChatResponse({ io, room }, payload);
  } catch (err) {
    console.log('clientSelectedChat error: ', err);
  }
};

const clientEmitters = {
  'client.inLobby': clientEnter,
  'client.sendMsg': clientMsg,
  'client.selectedChat': clientSelectedChat,
};

export default clientEmitters;
