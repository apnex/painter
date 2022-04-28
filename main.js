// build painter
import Painter from './painter.js';
var painter = new Painter('container');

// main class
class Main {
	constructor(input, options = {}) {
		console.log('INIT new { MAIN }');

		// style testing
		let style = this.styleTest();
		style.keyCreate(':root', {
			"--path1"	: '"M 0 245 L 0 220 C 0 220 0 210 10 210 L 25 210 C 25 210 35 210 35 220 L 35 235 C 35 235 35 245 45 245 L 60 245 C 60 245 70 245 80 245 L 95 245 C 95 245 105 245 105 235 L 105 220 C 105 220 105 210 95 210 L 80 210 C 80 210 70 210 70 200 L 70 185 C 70 185 70 175 80 175 L 95 175 C 95 175 105 175 105 165 L 105 150 C 105 150 105 140 95 140 L 80 140 C 80 140 70 140 60 140 L 45 140 C 45 140 35 140 35 150 L 35 165 C 35 165 35 175 25 175 L 10 175 C 10 175 0 175 0 165 L 0 150 C 0 150 0 140 0 130 L 0 115 C 0 115 0 105 10 105 L 25 105 C 25 105 35 105 35 95 L 35 80 C 35 80 35 70 25 70 L 10 70 C 10 70 0 70 0 60 L 0 45 C 0 45 0 35 0 25 L 0 10 C 0 10 0 0 10 0 L 25 0 C 25 0 35 0 35 10 L 35 25 C 35 25 35 35 45 35 L 60 35 C 60 35 70 35 70 25 L 70 10 C 70 10 70 0 80 0 L 95 0 C 95 0 105 0 105 10 L 105 25 C 105 25 105 35 105 45 L 105 60 C 105 60 105 70 95 70 L 80 70 C 80 70 70 70 70 80 L 70 95 C 70 95 70 105 80 105 L 95 105 C 95 105 105 105 115 105 L 130 105 C 130 105 140 105 150 105 L 165 105 C 165 105 175 105 175 95 L 175 80 C 175 80 175 70 165 70 L 150 70 C 150 70 140 70 140 60 L 140 45 C 140 45 140 35 140 25 L 140 10 C 140 10 140 0 150 0 L 165 0 C 165 0 175 0 175 10 L 175 25 C 175 25 175 35 185 35 L 200 35 C 200 35 210 35 210 25 L 210 10 C 210 10 210 0 220 0 L 235 0 C 235 0 245 0 245 10 L 245 25 C 245 25 245 35 245 45 L 245 60 C 245 60 245 70 235 70 L 220 70 C 220 70 210 70 210 80 L 210 95 C 210 95 210 105 220 105 L 235 105 C 235 105 245 105 245 115 L 245 130 C 245 130 245 140 245 150 L 245 165 C 245 165 245 175 235 175 L 220 175 C 220 175 210 175 210 165 L 210 150 C 210 150 210 140 200 140 L 185 140 C 185 140 175 140 165 140 L 150 140 C 150 140 140 140 140 150 L 140 165 C 140 165 140 175 150 175 L 165 175 C 165 175 175 175 175 185 L 175 200 C 175 200 175 210 165 210 L 150 210 C 150 210 140 210 140 220 L 140 235 C 140 235 140 245 150 245 L 165 245 C 165 245 175 245 185 245 L 200 245 C 200 245 210 245 210 235 L 210 220 C 210 220 210 210 220 210 L 235 210 C 235 210 245 210 245 220 L 245 245"',
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
			"transform"	: 'translate(-122.5px, -122.5px) translate(50%, 50%)'
		});
		style.keyCreate('.node', {
			"height"	: '25px',
			"width"		: '25px',
			"transform"	: 'translate(-12.5px, -12.5px)',
			"rx"		: '4',
			"fill"		: '#29b6f6',
			"stroke"	: '#eeeeff',
			"stroke-width"	: '2px'
		});
		style.keyCreate('.mover-style', {
			"rx"		: '6',
			"fill"		: '#bbbbff',
			"stroke"	: 'var(--box, "red")',
			"stroke-width"	: '5px',
			"fill-opacity"	: '0.5'
		});
		style.keyCreate('.mover', {
			"width"		: '40px',
			"height"	: '40px',
			"transform"	: 'translate(-20px, -20px)',
			"offset-path"	: 'path(var(--path1))',
		        "animation"	: 'move 40s infinite alternate ease-in-out'
		});
		style.keyFrames('move', {
			"0%"	: {
				"offset-distance": '0%'
			},
			"100%"	: {
				"offset-distance": '100%'
			}
		});
		console.log(JSON.stringify(style.toObject(), null, "\t"));


		this.hilbertTest();

		/*
		//this.lineTest();
		//this.rectTest();
		//this.circleTest();

		// group test
		//let group = this.groupTest();
		//this.useTest(group.id);
		//group.children();
		*/
	}
	lineTest() {
		let entity = painter.line.create({
			"class"		: 'link',
			"x1"		: 100,
			"y1"		: 100,
			"x2"		: 400,
			"y2"		: 400
		}, 'links');
		console.log(entity.id);
		console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());
	}
	rectTest() {
		let entity = painter.rect.create({
			"class"		: 'box',
			"x"		: 200,
			"y"		: 200,
			"width"		: 400,
			"height"	: 400
		}, 'links');
		console.log(entity.id);
		console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());
	}
	circleTest() {
		let entity = painter.circle.create({
			"class"		: 'zoneActive',
			"cx"		: 600,
			"cy"		: 300,
			"r"		: 50
		}, 'links');
		console.log(entity.id);
		console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());
	}
	useTest(group = 'links') {
		let entity = painter.use.create({
			"href"		: 'loadbalancer',
			"class"		: 'mof',
			"x"		: 500,
			"y"		: 500
		}, group);
		console.log(entity.id);
		console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());

		let updateTime = Math.random() * 4000;
		let destroyTime = Math.random() * 4000;
		let x = Math.abs(Math.random() * 800);
		let y = Math.abs(Math.random() * 600);
		setTimeout(() => {
			entity.update({
				"x"	: x,
				"y"	: y
			});
			console.log(entity.attributes());
			setTimeout(() => {
				entity.destroy();
				setTimeout(() => {
					entity.update();
				}, 1000);
			}, destroyTime);
		}, updateTime);
	}
	groupTest() {
		let entity = painter.group.create({
			"class"		: 'host'
		}, 'links');
		console.log(entity.id);
		console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());
		return entity;
	}
	styleTest() {
		let entity = painter.style.create({}, 'container');
		console.log(entity.id);
		console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());
		return entity;
	}
	hilbertTest() {
		painter.group.create({
			"class"		: 'path1'
		}, 'default');
		painter.path.create({
			"class"		: 'path1'
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
			"class"		: 'mover mover-style'
		}, 'default');
	}
}

// export
export default new Main();
