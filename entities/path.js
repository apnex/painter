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
		this.state['path'] = [];
	}
	createSpec(id, spec) {
		console.log('[ PATH ]: path.create[ ' + id + ' ]');
		return Object.assign({
			"id" : id
		}, spec);
	}
	move(spec) {
		//console.log('move event!');
		this.state.path.push(spec);
	}
	pathToString() {
		let final = "";
		this.state.path.forEach((move) => {
			console.log(move);
		});
	}
	toPoints() {
		let direction = 0;
		let pos = [0, 0];
		let points = [];

		// calculate absolute position and direction at each step
		this.state.path.forEach((step) => {
			if(typeof(step.turn) != 'undefined') {
				direction = ((direction + step.turn + 8) % 8);
			}
			if(typeof(step.move) != 'undefined') {
				if(direction == 0) {
					pos[1]--;
				}
				if(direction == 1) {
					pos[0]++;
					pos[1]--;
				}
				if(direction == 2) {
					pos[0]++;
				}
				if(direction == 3) {
					pos[0]++;
					pos[1]++;
				}
				if(direction == 4) {
					pos[1]++;
				}
				if(direction == 5) {
					pos[0]--;
					pos[1]++;
				}
				if(direction == 6) {
					pos[0]--;
				}
				if(direction == 7) {
					pos[0]--;
					pos[1]--;
				}
			}
			let vector = [pos[0], pos[1]];
			points.push([direction, vector]);
		});
		return points;
	}
	toMovePoints() {
		let points = this.toPoints();
		let movePoints = [];
		let lastPos = [];
		points.forEach((point) => { // filter points for change in x,y
			if((point[1][0] !== lastPos[0]) || (point[1][1] !== lastPos[1])) {
				movePoints.push(point);
			}
		});
		return movePoints;
	}
	calcPath(points) {
		// translate into line points
		let size = [80, 80];
		let pathString = "M ";
		points.forEach((point) => {
			if(pathString.length > 2) {
				pathString += " L ";
			}
			pathString += (point[1][0] * size[0]) + " " + (point[1][1] * size[1]);
		});
		this.toKeyframe(points);
		return pathString;
	}
	toKeyframe() {
		let points = this.toPoints();
		let frameIncrement = (100 / points.length);
		console.log(frameIncrement);
		let frameArray = [];
		let key = 0;
		frameArray.push([key, 0]); // start
		points.forEach((point) => {
			key += frameIncrement;
			frameArray.push([key, (point[0] * 45)]);
		});
		console.log('FRAMEARRAY');
		console.log(frameArray);

		/* build this
		{
			"0%"	: {
				"transform": 'rotate(0deg)'
			},
			"100%"	: {
				"transform": 'rotate(0deg)'
			}
		}
		*/
		let transform = {};
		frameArray.forEach((frame) => {
			transform[frame[0] + "%"] = {
				"transform": 'rotate(' + frame[1] + 'deg)'
			}
		});
		console.log(transform);
		return transform;
	}
};

// export
export default Path;
