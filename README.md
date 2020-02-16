# A vanilla javascript function that takes an array of colors and returns the WCAG contast scores for all of their possible color combinations.

## Input

You can pass an array of colors:

``` json
[
  "red",
  "#0000ff",
  "rgb(0,255,0)"
]
```

You can pass an array of objects that contains a color name a value:

``` json
[
  {
    "name": "red",
    "value": "red"
  },
  {
    "name": "blue",
    "value": "#0000ff"
  },
  {
    "name": "green",
    "value": "rgb(0,255,0)"
  }
]
```

You can get crazy:

``` json
[
  "black",
  "#ffffff",
  {
    "name": "red",
    "value": "red"
  },
  {
    "name": "blue",
    "value": "#0000ff"
  },
  {
    "name": "green",
    "value": "rgb(0,255,0)"
  }
]
```

You can **NOT** get too crazy:
(but I *might* add this feature in the future...)

``` json
[
  "black",
  "#ffffff",
  {
    "name": "grays",
    "value": [
      "lightgray",
      "gray",
      "darkgray"
    ]
  },
]
```

## Output
