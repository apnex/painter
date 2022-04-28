/*
RECTANGLE is a managed ENTITY for the PAINTER factory.
RECTANGLE extends the ENTITY class to provide methods for manipulating and translating to/from an SVG line DOM object.
*/
import Entity from './entity.js';

// main class
class Rect extends Entity {
	constructor(id, spec, group, enabled = true) {
		super(id, 'rect', spec, group, enabled);
		this.update(this.createSpec(id, spec));
	}
	createSpec(id, spec) {
		console.log('[ RECTANGLE ]: rect.create[ ' + id + ' ] POS[ ' + spec.x + ':' + spec.y + ' ] WIDTH[ ' + spec.width + ' ] HEIGHT[ ' + spec.height + ' ]');
		return Object.assign({
			"id" : id
		}, spec);
	}
	center(pos) {
		this.update({
			"x": pos.x - (this.attributes().width / 2),
			"y": pos.y - (this.attributes().height / 2)
		});
	}
};

// export
export default Rect;
