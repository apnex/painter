/*
CIRCLE is a managed ENTITY for the PAINTER factory.
CIRCLE extends the ENTITY class to provide methods for manipulating and translating to/from an SVG circle DOM object.
*/
import Entity from './entity.js';

// main class
class Circle extends Entity {
	constructor(id, spec, group, enabled = true) {
		super(id, 'circle', spec, 'links', enabled);
		this.update(this.createSpec(id, spec));
	}
	createSpec(id, spec) {
		console.log('[ CIRCLE ]: circle.create[ ' + id + ' ] POS[ ' + spec.cx + ':' + spec.cy + ' ] RADIUS[ ' + spec.r + ' ]');
		return {
			"id"	: id,
			"class"	: spec.class,
			"r"	: spec.r,
			"cx"	: spec.cx,
			"cy"	: spec.cy
		};
	}
};

// export
export default Circle;
