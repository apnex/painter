/*
ENTITY is the base class of all managed ENTITY objects for PAINTER.
ENTITY standardises the translation interface.
*/

// entities
/*
import Line from './line.js';
import Rect from './rect.js';
import Circle from './circle.js';
import Use from './use.js';
import Group from './group.js';
import Style from './style.js';
*/

// main
class Entity {
	constructor(id, kind, spec, group, enabled) {
		this.id = id;
		this.kind = kind;
		this.spec = spec;
		this.group = group;
		this.enabled = enabled;
		this.state = {};
	}
	newId() {
		let dec = Math.round(Math.random() * 16777215); // 000000-FFFFFF
		let hex = Number(dec).toString(16).padStart(6, '0');
		return hex;
	}
	children() {
		console.log('Children test');
		let collection = this.element().children;

		// return array of entities
		let result = [];

		for(let i = 0; i < collection.length; i++) {
			console.log(collection[i].outerHTML);
			console.log(collection[i].tagName);
			console.log(collection[i].id);
			let id = collection[i].id;
			// check if has id
			// if not assign one?
			// create new entity with it
			// separate entity creation from DOM render

			// attach(element); connect to existing DOM element
			// detach();
			// update() merge properties with spec, and re-render
			// render() draw entity in DOM
			// destroy() delete entity from DOM
			//result.push(new Use(id, {}, group));
		}
	}
	element() {
		let element = document.getElementById(this.id);
		return element;
	}
	attributes() {
		let nodeMap = this.element().attributes;
                let attributes = {};
 		for(let i = 0; i < nodeMap.length; i++) {
			attributes[nodeMap[i].name] = nodeMap[i].value;
		}
		return attributes;
	}
	string() {
		return this.element().outerHTML;
	}
	update(spec = false) {
		if(spec) {
			Object.assign(this.spec, spec);
		}
		if(this.enabled) {
			if(this.element()) {
				this.assignAttr(this.element(), this.spec);
			} else {
				this.render(this.kind, this.spec, this.group);
			}
		} else {
			console.log('DOM rendering disabled for this entity');
		}
	}
	destroy() {
		let element = this.element();
		if(element) {
			let parent = element.parentNode;
			if(parent) {
				parent.removeChild(element);
				return this.id;
			}
		}
	}
	render(kind, spec, group) {
		let element = document.createElementNS('http://www.w3.org/2000/svg', kind);
		let g = document.getElementById(group);
		g.appendChild(this.assignAttr(element, spec));
		return element;
	}
	assignAttr(o, a, ns = null) {
		for(let key in a) {
			o.setAttributeNS(ns, key, a[key])
		}
		return o;
	}

}

// export
export default Entity;
