/*
LINE is a managed ENTITY for the PAINTER factory.
LINE extends the ENTITY class to provide methods for manipulating and translating to/from an SVG line DOM object.
*/
import Entity from './entity.js';

// main class
class Line extends Entity {
	constructor(id, spec, group, enabled = true) {
		super(id, 'line', spec, group, enabled);
		this.update(this.createSpec(id, spec));
	}
	createSpec(id, spec) {
		console.log('[ LINE ]: line.create[ ' + id + ' ]: SRC[ ' + spec.x1 + ':' + spec.y1 + ' ] DST[ ' + spec.x2 + ':' + spec.y2 + ' ]');
		return {
			"id"		: id,
			"class"		: spec.class,
			"x1"		: spec.x1,
			"y1"		: spec.y1,
			"x2"		: spec.x2,
			"y2"		: spec.y2
		};
	}
};

// export
export default Line;
