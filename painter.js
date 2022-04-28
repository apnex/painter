/*
PAINTER provides a low-level API for rendering raw SVG elements to the DOM
Does not maintain separate state, it instead directly queries and translates to/from the DOM
Has no knowledge of MODEL or GRID
Uses raw pixel coordinate space
Supports <use>, <rect>, <line>, <path>, <circle>, <group>
PAINTER manages entity IDs
Therefore, the PAINTER spec is directly translated to/from DOM SVG constructs
*/

// entities
import Line from './entities/line.js';
import Path from './entities/path.js';
import Rect from './entities/rect.js';
import Circle from './entities/circle.js';
import Use from './entities/use.js';
import Group from './entities/group.js';
import Style from './entities/style.js';

// main class
class Painter {
	constructor(container) {
		console.log('INIT new { PAINTER }');
		let root = document.getElementById(container);
		let screen = root.getBoundingClientRect();
		console.log('[ PAINTER ]: container [ ' + container + ' ] screen { ' + screen.width + ':' + screen.height + ' }');
	}
	newId() {
		let dec = Math.round(Math.random() * 16777215); // 000000-FFFFFF
		let hex = Number(dec).toString(16).padStart(6, '0');
		return hex;
	}
}

// create instance
const createInstance = function(container) {
	const instance = new Painter(container);
	instance.line = {
		create: (spec, group = 'links', enabled = true) => {
			return new Line(instance.newId(), spec, group, enabled);
		}
	};
	instance.path = {
		create: (spec, group = 'links', enabled = true) => {
			return new Path(instance.newId(), spec, group, enabled);
		}
	};
	instance.rect = {
		create: (spec, group = 'links', enabled = true) => {
			return new Rect(instance.newId(), spec, group, enabled);
		}
	};
	instance.circle = {
		create: (spec, group = 'links', enabled = true) => {
			return new Circle(instance.newId(), spec, group, enabled);
		}
	};
	instance.use = {
		create: (spec, group = 'links', enabled = true) => {
			return new Use(instance.newId(), spec, group, enabled);
		}
	};
	instance.group = {
		create: (spec, group = 'defs', enabled = true) => {
			return new Group(instance.newId(), spec, group, enabled);
		}
	};
	instance.style = {
		create: (spec, group = 'container', enabled = true) => {
			return new Style(instance.newId(), spec, group, enabled);
		}
	};
	return instance;
};

// export
export default createInstance;
