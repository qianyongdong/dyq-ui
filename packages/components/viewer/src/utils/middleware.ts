import EventEmitter from '@dong-ui/utils/eventEmitter';

const eventNames = [
  'PAGE:SCROLL_TO',
  'PAGE:RENDER',
  'PAGE:CREATE_MAGNIFY_AREA',
  'PAGE:REMOVE_MAGNIFY_AREA',
];
const middleware = new EventEmitter(eventNames);

export default middleware;
