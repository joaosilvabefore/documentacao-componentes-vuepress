# Bar Rating component

Component used in the representation of qualitative values (great, good, bad) in
bar chart form. Can be used to represent the signal quality, approval and so on.

## How to use

_Example of simple use_

```html
  <bar-rating value="1"></bar-rating>
  
```

_Example of use passing the limits_

```html
  <bar-rating 
    value="2"
    bar-default-color="bg-indigo" 
    bar-size="12
    :ranges="[
      {
        min: 0,
        max: 40,
        bars: 1,
        color: 'bg-danger'
      },
      {
        min: 41,
        max: 70,
        bars: 2,
        color: 'bg-warning'
      },
      {
        min: 71,
        max: false,
        bars: 3,
        color: 'bg-success'
      }
    ]"
  >
  </bar-rating>
```

## Properties

### value:

  *Value to be used in representation*

  > **type**: [Number, String]

  > **required**: true

### barSize:

  *Graphic bars size*

  > **type**: Number

  > **default**: 8

### barDefaultColor:
  
  *Default color of bars*
  
  > **type**: String

  > **default**: "bg-silver"

### ranges:

  *Definition of the ranges of values of each representation*

  > **type**: Array

  > **default**: 
  ```javascript
  [
    {
      min: false,
      max: 1,
      bars: 1,
      color: "bg-danger"
    },
    {
      min: 2,
      max: 2,
      bars: 2,
      color: "bg-warning"
    },
    {
      min: 3,
      max: 3,
      bars: 3,
      color: "bg-success"
    }
  ]
  ```