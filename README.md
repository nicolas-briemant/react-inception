# react-inception

## aspects

- i18n
- auth
- routing
- sdmx
- styles

## application

- [recompose](https://github.com/acdlite/recompose) ??

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
