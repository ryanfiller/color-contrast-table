import generateChart from './index.js'

// I know this is not a great test

const testData = [
  'black',
  '#ffffff',
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

const chart = generateChart(testData)

const expectation = [{"name":"black","value":"#000000","combinationScores":[{"name":"#ffffff","value":"#ffffff","ratio":"21.0","score":"AAA"},{"name":"red","value":"#ff0000","ratio":"5.3","score":"AA"},{"name":"blue","value":"#0000ff","ratio":"2.4","score":"fail"},{"name":"green","value":"#00ff00","ratio":"15.3","score":"AAA"}]},{"name":"#ffffff","value":"#ffffff","combinationScores":[{"name":"black","value":"#000000","ratio":"21.0","score":"AAA"},{"name":"red","value":"#ff0000","ratio":"4.0","score":"18+"},{"name":"blue","value":"#0000ff","ratio":"8.6","score":"AAA"},{"name":"green","value":"#00ff00","ratio":"1.4","score":"fail"}]},{"name":"red","value":"#ff0000","combinationScores":[{"name":"black","value":"#000000","ratio":"5.3","score":"AA"},{"name":"#ffffff","value":"#ffffff","ratio":"4.0","score":"18+"},{"name":"blue","value":"#0000ff","ratio":"2.1","score":"fail"},{"name":"green","value":"#00ff00","ratio":"2.9","score":"fail"}]},{"name":"blue","value":"#0000ff","combinationScores":[{"name":"black","value":"#000000","ratio":"2.4","score":"fail"},{"name":"#ffffff","value":"#ffffff","ratio":"8.6","score":"AAA"},{"name":"red","value":"#ff0000","ratio":"2.1","score":"fail"},{"name":"green","value":"#00ff00","ratio":"6.3","score":"AA"}]},{"name":"green","value":"#00ff00","combinationScores":[{"name":"black","value":"#000000","ratio":"15.3","score":"AAA"},{"name":"#ffffff","value":"#ffffff","ratio":"1.4","score":"fail"},{"name":"red","value":"#ff0000","ratio":"2.9","score":"fail"},{"name":"blue","value":"#0000ff","ratio":"6.3","score":"AA"}]}]

if (JSON.stringify(chart) === JSON.stringify(expectation)) {
  console.log('Yay, test passed!')
} else (
  console.error('Boo, test failed!')
)
