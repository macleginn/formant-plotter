var margin = 30;

var minX = 400,
	maxX = 3000,
	minY = 150,
	maxY = 1200;

var layoutHerz = {
	xaxis: {
		range: [maxX, minX]
	},
	yaxis: {
		range: [maxY, minY]
	},
	showlegend: false,
	margin: {
		b: margin,
		l: margin,
		r: margin,
		t: margin
	}
};

var layoutMel = {
	xaxis: {
		range: [herz2Mel(maxX), herz2Mel(minX)]
	},
	yaxis: {
		range: [herz2Mel(maxY), herz2Mel(minY)]
	},
	showlegend: false,
	margin: {
		b: margin,
		l: margin,
		r: margin,
		t: margin
	}
};

var layoutBark = {
	xaxis: {
		range: [herz2bark(maxX), herz2bark(minX)]
	},
	yaxis: {
		range: [herz2bark(maxY), herz2bark(minY)]
	},
	showlegend: false,
	margin: {
		b: margin,
		l: margin,
		r: margin,
		t: margin
	}
};