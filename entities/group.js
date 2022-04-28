/*
GROUP is a managed ENTITY for the PAINTER factory.
GROUP extends the ENTITY class to provide methods for manipulating and translating to/from an SVG <g> DOM object.
*/
import Entity from './entity.js';

// main class
class Group extends Entity {
	constructor(id, spec, group, enabled = true) {
		super(id, 'g', spec, group, enabled);
		this.update(this.createSpec(id, spec));
	}
	createSpec(id, spec) {
		console.log('[ GROUP ]: group.create[ ' + id + ' ]');
		return Object.assign({
			"id" : id
		}, spec);
	}
};

// export
export default Group;
