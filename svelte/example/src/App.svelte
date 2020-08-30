<script>
	import ColorContrastChart from 'color-contrast-table-svelte'

	let colors = [
		{name: 'NAVY', value: '#001f3f'},
		{name: 'BLUE', value: '#0074D9'},
		{name: 'AQUA', value: '#7FDBFF'},
		{name: 'TEAL', value: '#39CCCC'},
		{name: 'OLIVE', value: '#3D9970'},
		{name: 'GREEN', value: '#2ECC40'},
		{name: 'LIME', value: '#01FF70'},
		{name: 'YELLOW', value: '#FFDC00'},
		{name: 'ORANGE', value: '#FF851B'},
		{name: 'RED', value: '#FF4136'},
		{name: 'MAROON', value: '#85144b'},
		{name: 'FUCHSIA', value: '#F012BE'},
		{name: 'PURPLE', value: '#B10DC9'},
		{name: 'BLACK', value: '#111111'},
		{name: 'GRAY', value: '#AAAAAA'},
		{name: 'SILVER', value: '#DDDDDD'}
	]

	const updateColors = (valueType, index, newValue) => {
		const newColors = [...colors]
		newColors[index][valueType] = newValue
		colors = newColors
	}
</script>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
</style>

the value of the first color is {colors[0].name} {colors[0].value}

<ColorContrastChart
	{colors}
	useStyles
	editNames
	editValues
	onInputBlur={event => console.log(event)}
/>
