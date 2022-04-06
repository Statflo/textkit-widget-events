![TextKit by Statflo](./assets/textkit-logo.svg)
# TextKit Widget Events

This package defines all the available events within the TextKit platform this package extends the [Widget SDK](https://github.com/statflo/widget-sdk) package. We export all the functionality from that package along with our implementation of it. 

We also include the necessary `iframeResizer.contentWindow.min.js` file needed for external widgets. This will always be included therefore it's not necessary to include or import.

## Installation

```node
yarn add @statflo/textkit-widget-events
```

### **More Documentation**

For more information on widget communication or container intialization you can refer to our [Widget SDK Readme](https://github.com/statflo/widget-sdk#readme)

## Container Initialization

This function will create the initial Widget State.

**Usage**

```javascript
import { createWidgetState, ContainerClient } from '@statflo/textkit-widget-events'

// Initialize Container
const containerClient = new ContainerClient({ window });

// Set the widgets unique id
const id = 'widgetId';

// Initialize widget inside client with default state
containerClient.createWidget(createWidgetState(id));
```

## Widget Initialization

```javascript
import { WidgetClient } from "@statflo/widget-sdk";

export const client = new WidgetClient({ 
  id: "my widget",
  window,
  createWidgetState: (id) => ({ id }),
});
```

## Events

**Usage**

```javascript
import { EventNames } from '@statflo/textkit-widget-events'
```

**Widget Properties**

`EventNames.widget.postForwardExample`: This event will forward the event data to other widgets this is for cross widget communication.

`EventNames.widget.actionCreationFailed`: This event will alert of error when actions are created.

`EventNames.widget.appendTextToMessage`: This event will append text to the message box.

`EventNames.widget.replaceTextMessage`: This event will replace the contents of the message box.

**Container Events**

`EventNames.container.activeConversationChanged`: This event will include context data when a conversation changes within TextKit so you can know with whom you are speaking to.

## Widget Types

**Usage**

```javascript
import { WidgetTypes } from '@statflo/textkit-widget-events'
```

**Enum values**

- Standard
- Action
- Timeline
- Sendable

## Widget Scopes

**Usage**

```javascript
import { WidgetScope } from '@statflo/textkit-widget-events'
```

**Enum values**

- User
- Conversation

## Widget Tabs

**Usage**

```javascript
import { WidgetTabs } from '@statflo/textkit-widget-events';
```

**Enum values**

- Widget
- Timeline

## Widget State

**Usage**

```javascript
import { WidgetState } from '@statflo/textkit-widget-events'
```

**Enum values**

- containerDomain
- footer
- header
- id
- isOpen
- isReady
- isShown
- label
- maxHeight
- size
- type
- url
- widgetDomain

## Widget View Sizes

**Usage**

```javascript
import { WidgetViewSize } from '@statflo/textkit-widget-events'
```

**Enum values**

- Large
- Medium
- Small

## Debug Log 

**Usage**

```javascript
import { DebugLogLevel } from '@statflo/textkit-widget-events'
```

**Enm values**

- None
- Debug

**Example**

```javascript
import { DebugLogLevel, ContainerClient } from '@statflo/textkit-widget-events';

export const widgetContainerClient = new ContainerClient({
  logs: DebugLogLevel.None,
  window,
});
```
