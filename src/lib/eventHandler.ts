import { TypedEmitter } from 'tiny-typed-emitter';
import { setup, start, defaultClient } from 'applicationinsights';
import { CustomEvents } from '../types/events';

class CustomEventHandler extends TypedEmitter<CustomEvents> {
  constructor() {
    super();
  }
}
const customEventHandler = new CustomEventHandler();
customEventHandler.on('inquiry_started', (_id, payload) => {
  setup();
  start();

  defaultClient.trackEvent({
    name: 'inquiry_started',
    properties: payload,
  });
});
customEventHandler.on('inquiry_stopped', (id, payload) => {
  setup();
  start();

  defaultClient.trackEvent({
    name: 'inquiry_stopped',
    properties: { ...payload, inquiryId: id },
  });
});
customEventHandler.on('member_join', (id, payload) => {
  setup();
  start();

  defaultClient.trackEvent({
    name: 'member_join',
    properties: { ...payload, inquiryId: id },
  });
});
customEventHandler.on('member_leave', (id, payload) => {
  setup();
  start();

  defaultClient.trackEvent({
    name: 'member_leave',
    properties: { ...payload, inquiryId: id },
  });
});
customEventHandler.on('message_sent', (id, payload) => {
  setup();
  start();

  defaultClient.trackEvent({
    name: 'message_sent',
    properties: { ...payload, inquiryId: id },
  });
});
export default customEventHandler;
