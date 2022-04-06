import 'iframe-resizer/js/iframeResizer.contentWindow.min.js';
import { ContainerClient, Helpers, WidgetClient } from '@statflo/widget-sdk';

export enum WidgetType {
  Standard = 'Standard',
  Action = 'Action',
  Timeline = 'Timeline',
  Sendable = 'Sendable',
}

export enum WidgetScope {
  User = 'user',
  Conversation = 'conversation',
}

export enum WidgetTabs {
  Widget = 'Widget',
  Timeline = 'Timeline',
}

export enum WidgetState {
  containerDomain = 'containerDomain',
  footer = 'footer',
  header = 'header',
  id = 'id',
  isOpen = 'isOpen',
  isReady = 'isReady',
  isShown = 'isShown',
  label = 'label',
  maxHeight = 'maxHeight',
  size = 'size',
  type = 'type',
  url = 'url',
  widgetDomain = 'widgetDomain',
}

export enum WidgetViewSize {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}

const ContainerEvents = {
  activeConversationChanged: 'active_conversation_changed',
};

const WidgetEvents = {
  postForwardExample: 'post_forward_example',
  actionCreationFailed: 'action_creation_failed',
  appendTextToMessage: 'append_text_to_message',
  replaceTextMessage: 'replace_text_message',
};

export const EventNames = {
  widget: WidgetEvents,
  container: ContainerEvents,
};

export const createWidgetState = (id: string): Helpers.TWidgetState => {
  return {
    id,
    type: null,
    containerDomain: '*',
    footer: '',
    header: '',
    isOpen: false,
    isReady: false,
    isShown: false,
    label: '',
    maxHeight: null,
    size: null,
    url: '',
    widgetDomain: '*',
  };
};

export { Helpers, WidgetClient, ContainerClient };
