// build painter
import Painter from './painter.js';
var painter = new Painter('container');

//test
import Turtle from './entities/turtle.js';
var turtle = new Turtle('mover');

// main class
class Main {
	constructor(input, options = {}) {
		console.log('INIT new { MAIN }');

		// style testing
		let style = painter.style.create({}, 'container');
		this.pathTest(style);
	}
	pathTest(style) {
		// string test
		let path = painter.path.create({
			"class"		: 'path1 turner',
		}, 'default');
		painter.rect.create({
			"class"		: 'node',
			"x"		: 0,
			"y"		: 245
		}, 'default');
		painter.rect.create({
			"class"		: 'node',
			"x"		: 245,
			"y"		: 245
		}, 'default');
		painter.rect.create({
			"class"		: 'cursor',
			"x"		: 0,
			"y"		: 0
		}, 'cursor');
		console.log(path.spec);

		// pinan shodan testing
		// create a "timeline" object - that returns a keyframe definition
		path.move({
			turn: -2
		});
		path.move({
			move: 1
		});
		path.move({
			turn: 4
		});
		path.move({
			move: 1
		});
		path.move({
			turn: 2
		});
		path.move({
			turn: -4
		});
		path.move({
			move: 1
		});
		path.move({
			move: 1
		});
		path.move({
			move: 1
		});
		path.move({
			turn: -4
		});

		// string path testing
		let steps = path.toPoints();
		console.log(steps);

		let pathString = path.calcPath(path.toMovePoints());
		console.log(pathString);
		style.keyCreate(':root', {
			"--path1"	: '"' + pathString + '"',
			"--line"	: '#bbffbb',
			"--box"		: '#ddddff'
		});
		style.keyCreate('.path1', {
			"d"		: 'path(var(--path1))',
			"stroke"	: 'var(--line)',
			"stroke-width"	: '5px',
			"fill"		: 'none'
		});
		style.keyCreate('#default',  {
			"transform"	: 'translate(0px, 0px) translate(50%, 50%)'
		});
		style.keyCreate('.node', {
			"height"	: '25px',
			"width"		: '25px',
			"transform"	: 'translate(-12.5px, -12.5px)',
			"rx"		: '4',
			"fill"		: '#29b6f6',
			"stroke"	: '#eeeeff',
			"stroke-width"	: '2px',
		});
		style.keyCreate('.cursor', {
			"rx"		: '6',
			"fill"		: '#bbbbff',
			"stroke"	: 'var(--box)',
			"stroke-width"	: '5px',
			"fill-opacity"	: '0.5',
			"width"		: '40px',
			"height"	: '40px',
			"transform"	: 'translate(-20px, -20px)'
		});
		style.keyCreate('.turner', {
		        "animation": 'turn 30s linear'
		});
		style.keyFrames('turn', path.toKeyframe());
	}
}

// export
export default new Main();
