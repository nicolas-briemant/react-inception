# react-inception

## aspects

- redux (thunk, reselect)
- router v4 with code spliting
- sync between history and store
- i18n (react-intl)
- blueprintjs, normalize.css and classnames
- glamorous

## reusable components (UI/UX)

why ?
- avoid monolithic approach
- ensure UI/UX consistency

how ?
- using React
  - no template mechanism needed (jsx)
  - composition pattern
  - declarative approach
- using [glamorous](https://github.com/paypal/glamorous)
  - encapsulated
  - theme

rules:
- self-sufficient
  - no side-effect (ie API calls)
  - data-independent (from parent)
- documented
  - readme
  - proptypes definition

good patterns:
- favor fewer versatile props over a lot of props
- expose an events API to share component state with parents

samples:
- pure UI component
- themed components
- UX component

## conventions

#### className

Rely on classnames module (https://github.com/JedWatson/classnames) to handle complex usecases.

BAD:
```javascript
//import classNames from 'classnames';
//import { Classes } from '@blueprintjs/core';

<Button
  text="text"
  className={true ? 'active minimal' : 'minimal'}
/>
```

GOOD:
```javascript
//import classNames from 'classnames';
//import { Classes } from '@blueprintjs/core';

<Button
  text="text"
  className={classNames(Classes.MINIMAL, { [Classes.ACTIVE]: true })}
/>
```

#### blueprintjs classes usage

Rely on blueprintjs Classes for a better maintainability.

BAD:
```javascript
<p className="pt-ui-text-large">text</p>;
```

GOOD:
```javascript
//import { Classes } from '@blueprintjs/core';

<p className={Classes.UI_TEXT_LARGE}>text</p>;
```