/*
PAINTER manages ENTITIES
PAINTER attaches to an SVG container, and informs ENTITIES
*/

// build draw factory
import Line from './entities/line.js';
import Rectangle from './entities/rectangle.js';
import Circle from './entities/circle.js';
import Use from './entities/use.js';

// main class
class Main {
	constructor(input, options = {}) {
		console.log('INIT new { MAIN }');
		this.lineTest();
		this.rectangleTest();
		this.circleTest();
		this.useTest();
	}
	lineTest() {
		// draw a line
		let id = Math.random() * 10;
		let entity = new Line(id, {
			"class"		: 'link',
			"x1"		: 100,
			"y1"		: 100,
			"x2"		: 400,
			"y2"		: 400
		});
		console.log(entity.id);
		//console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());
	}
	rectangleTest() {
		// draw a rect
		let id = Math.random() * 10;
		let entity = new Rectangle(id, {
			"class"		: 'box',
			"x"		: 200,
			"y"		: 200,
			"width"		: 400,
			"height"	: 400
		});
		console.log(entity.id);
		//console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());
	}
	circleTest() {
		let id = Math.random() * 10;
		let entity = new Circle(id, {
			"class"		: 'zoneActive',
			"cx"		: 600,
			"cy"		: 300,
			"r"		: 50
		});
		console.log(entity.id);
		//console.log(entity.spec);
		console.log(JSON.stringify(entity.attributes(), null, "\t"));
		console.log(entity.string());
	}
	useTest() {
		let id = Math.random() * 10;
		let entity = new Use(id, {
			"href"		: 'loadbalancer',
			"class"		: 'mof',
			"x"		: 500,
			"y"		: 500
		});
		console.log(entity.id);
		//console.log(entity.spec);
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
			}, destroyTime);
		}, updateTime);
	}
}

// export
export default new Main();
