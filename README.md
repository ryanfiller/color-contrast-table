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

You will get an array back with this shape

```json
[
  {
    "name":"red",
    "value":"#ff0000",
    "combinationScores": [
      {
        "name":"blue",
        "value":"#0000ff",
        "ratio":"2.1",
        "score":"fail"
      },
      {
        "name":"green",
        "value":"#00ff00",
        "ratio":"2.9",
        "score":"fail"
      }
    ]
  },
  {
    "name":"blue",
    "value":"#0000ff",
    "combinationScores": [
      {
        "name":"red",
        "value":"#ff0000",
        "ratio":"2.1",
        "score":"fail"
      },
      {
        "name":"green",
        "value":"#00ff00",
        "ratio":"6.3",
        "score":"AA"
      }
    ]
  },
  {
    "name":"green",
    "value":"#00ff00",
    "combinationScores": [
      {
        "name":"red",
        "value":"#ff0000",
        "ratio":"2.9",
        "score":"fail"
      },
      {
        "name":"blue",
        "value":"#0000ff",
        "ratio":"6.3",
        "score":"AA"
      }
    ]
  }
]
```

### Score Key

- **AAA** - The contrast ratio was greater than 7.0
  - this is a great score, you can _definitely_ use this combination
- **AA** - The contrast ratio was greater than 4.5, but less than 7
  - this is a pretty good score, safe for most applications
- **18+** - The contrast ratio was greater than 3.0, but less than 4.5
  - this means this color combo is safe for text larger than 18px
- **fail** - The contrast ratio was less than 3.
  - this is a bad score, please be very careful using this combination of text and background
