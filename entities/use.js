/*
USE is a managed ENTITY for the PAINTER factory.
USE extends the ENTITY class to provide methods for manipulating and translating to/from an SVG line DOM object.
*/
import Entity from './entity.js';

// main class
class Use extends Entity {
	constructor(id, spec, group, enabled = true) {
		super(id, 'use', spec, group, enabled);
		this.update(this.createSpec(id, spec));
	}
	createSpec(id, spec) {
		console.log('[ USE ]: use.create[ ' + id + ' ]: POS[ ' + spec.x + ':' + spec.y + ' ]');
		return {
			"id"		: id,
			"href"		: '#' + spec.href,
			"class"		: spec.class,
			"x"		: spec.x,
			"y"		: spec.y
		};
	}
};

// export
export default Use;
