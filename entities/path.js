/*
PATH is a managed ENTITY for the PAINTER factory.
PATH extends the ENTITY class to provide methods for manipulating and translating to/from an SVG <path> DOM object.
*/
import Entity from './entity.js';

// main class
class Path extends Entity {
	constructor(id, spec, group, enabled = true) {
		super(id, 'path', spec, group, enabled);
		this.update(this.createSpec(id, spec));
	}
	createSpec(id, spec) {
		console.log('[ PATH ]: path.create[ ' + id + ' ]');
		return Object.assign({
			"id" : id
		}, spec);
	}
};

// export
export default Path;
