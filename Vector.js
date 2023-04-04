// no license

const Vector = function(x, y, z, w) {
    if (x != undefined) this.x = x;
    if (y != undefined) this.y = y;
    if (z != undefined) this.z = z;
    if (w != undefined) this.w = w;
}

function V(x, y, z, w) {
    return new Vector(x, y, z, w);
}

Vector.prototype = {
    // add
    "+": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        if(typeof(y) === "boolean") {
            newVec.y = newVec.x;
            newVec.z = newVec.x;
            newVec.w = newVec.x;
        }

        return new Vector(
            (newVec.x == undefined | this.x == undefined) ? (this.x) : (this.x + newVec.x),
            (newVec.y == undefined | this.y == undefined) ? (this.y) : (this.y + newVec.y),
            (newVec.z == undefined | this.z == undefined) ? (this.z) : (this.z + newVec.z),
            (newVec.w == undefined | this.w == undefined) ? (this.w) : (this.w + newVec.w)
        );
    },
    
    // add Equals
    "+=": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        if(typeof(y) === "boolean") {
            newVec.y = newVec.x;
            newVec.z = newVec.x;
            newVec.w = newVec.x;
        }
        
        if(this.x != undefined) this.x = (newVec.x == undefined) ? (this.x) : (this.x + newVec.x);
        if(this.y != undefined) this.y = (newVec.y == undefined) ? (this.y) : (this.y + newVec.y);
        if(this.z != undefined) this.z = (newVec.z == undefined) ? (this.z) : (this.z + newVec.z);
        if(this.w != undefined) this.w = (newVec.w == undefined) ? (this.w) : (this.w + newVec.w);

        return this;
    },

    // substract
    "-": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        if(typeof(y) === "boolean") {
            newVec.y = newVec.x;
            newVec.z = newVec.x;
            newVec.w = newVec.x;
        }

        return new Vector(
            (newVec.x == undefined | this.x == undefined) ? (this.x) : (this.x - newVec.x),
            (newVec.y == undefined | this.y == undefined) ? (this.y) : (this.y - newVec.y),
            (newVec.z == undefined | this.z == undefined) ? (this.z) : (this.z - newVec.z),
            (newVec.w == undefined | this.w == undefined) ? (this.w) : (this.w - newVec.w)
        );
    },
    
    // substract Equals
    "-=": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        if(typeof(y) === "boolean") {
            newVec.y = newVec.x;
            newVec.z = newVec.x;
            newVec.w = newVec.x;
        }
        
        if(this.x != undefined) this.x = (newVec.x == undefined) ? (this.x) : (this.x - newVec.x);
        if(this.y != undefined) this.y = (newVec.y == undefined) ? (this.y) : (this.y - newVec.y);
        if(this.z != undefined) this.z = (newVec.z == undefined) ? (this.z) : (this.z - newVec.z);
        if(this.w != undefined) this.w = (newVec.w == undefined) ? (this.w) : (this.w - newVec.w);

        return this;
    },

    // mult
    "*": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        if(typeof(y) === "boolean") {
            newVec.y = newVec.x;
            newVec.z = newVec.x;
            newVec.w = newVec.x;
        }

        return new Vector(
            (newVec.x == undefined | this.x == undefined) ? (this.x) : (this.x * newVec.x),
            (newVec.y == undefined | this.y == undefined) ? (this.y) : (this.y * newVec.y),
            (newVec.z == undefined | this.z == undefined) ? (this.z) : (this.z * newVec.z),
            (newVec.w == undefined | this.w == undefined) ? (this.w) : (this.w * newVec.w)
        );
    },
    
    // mult Equals
    "*=": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        if(typeof(y) === "boolean") {
            newVec.y = newVec.x;
            newVec.z = newVec.x;
            newVec.w = newVec.x;
        }
        
        if(this.x != undefined) this.x = (newVec.x == undefined) ? (this.x) : (this.x * newVec.x);
        if(this.y != undefined) this.y = (newVec.y == undefined) ? (this.y) : (this.y * newVec.y);
        if(this.z != undefined) this.z = (newVec.z == undefined) ? (this.z) : (this.z * newVec.z);
        if(this.w != undefined) this.w = (newVec.w == undefined) ? (this.w) : (this.w * newVec.w);

        return this;
    },

    // divide
    "/": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        if(typeof(y) === "boolean") {
            newVec.y = newVec.x;
            newVec.z = newVec.x;
            newVec.w = newVec.x;
        }

        return new Vector(
            (newVec.x == undefined | this.x == undefined) ? (this.x) : (this.x / newVec.x),
            (newVec.y == undefined | this.y == undefined) ? (this.y) : (this.y / newVec.y),
            (newVec.z == undefined | this.z == undefined) ? (this.z) : (this.z / newVec.z),
            (newVec.w == undefined | this.w == undefined) ? (this.w) : (this.w / newVec.w)
        );
    },
    
    // divide Equals
    "/=": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        if(typeof(y) === "boolean") {
            newVec.y = newVec.x;
            newVec.z = newVec.x;
            newVec.w = newVec.x;
        }
        
        if(this.x != undefined) this.x = (newVec.x == undefined) ? (this.x) : (this.x / newVec.x);
        if(this.y != undefined) this.y = (newVec.y == undefined) ? (this.y) : (this.y / newVec.y);
        if(this.z != undefined) this.z = (newVec.z == undefined) ? (this.z) : (this.z / newVec.z);
        if(this.w != undefined) this.w = (newVec.w == undefined) ? (this.w) : (this.w / newVec.w);

        return this;
    },

    // Eqaul Equal
    "==": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        return (accuracy) => {
            accuracy = accuracy || 0;
            let isEqual = true;
            if(this ["dm"] () != vector ["dm"] ()) isEqual = false;
            if(this ["dm"] () > 0 & !(this.x >= newVec.x - accuracy & this.x <= newVec.x + accuracy)) isEqual = false;
            if(this ["dm"] () > 1 & !(this.y >= newVec.y - accuracy & this.y <= newVec.y + accuracy)) isEqual = false;
            if(this ["dm"] () > 2 & !(this.z >= newVec.z - accuracy & this.z <= newVec.z + accuracy)) isEqual = false;
            if(this ["dm"] () > 3 & !(this.w >= newVec.w - accuracy & this.w <= newVec.w + accuracy)) isEqual = false;

            return isEqual;
        };
    },

    // Exc Equal
    "!=": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        return (accuracy) => {
            accuracy = accuracy || 0;
            let isEqual = true;
            if(this ["dm"] () != vector ["dm"] ()) isEqual = false;
            if(this ["dm"] () > 0 & !(this.x >= newVec.x - accuracy & this.x <= newVec.x + accuracy)) isEqual = false;
            if(this ["dm"] () > 1 & !(this.y >= newVec.y - accuracy & this.y <= newVec.y + accuracy)) isEqual = false;
            if(this ["dm"] () > 2 & !(this.z >= newVec.z - accuracy & this.z <= newVec.z + accuracy)) isEqual = false;
            if(this ["dm"] () > 3 & !(this.w >= newVec.w - accuracy & this.w <= newVec.w + accuracy)) isEqual = false;

            return !isEqual;
        };
    },

    // dimensions
    "dm": function(dimensions, standard) {

        standard = standard | 0;

        if(dimensions == undefined) {
            let dimCount = 0;
            if(this.x != undefined) dimCount++;
            if(this.y != undefined) dimCount++;
            if(this.z != undefined) dimCount++;
            if(this.w != undefined) dimCount++;

            return dimCount;
        }
        else {
            if(dimensions < 1) delete this.x; else if(this.x == undefined) this.x = standard;
            if(dimensions < 2) delete this.y; else if(this.y == undefined) this.y = standard;
            if(dimensions < 3) delete this.z; else if(this.z == undefined) this.z = standard;
            if(dimensions < 4) delete this.w; else if(this.w == undefined) this.w = standard;

            return this;
        }

    },

    // distance To
    "dist": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

        let newThis = new Vector();
        if (this.x != undefined) newThis.x = this.x;
        if (this.y != undefined) newThis.y = this.y;
        if (this.z != undefined) newThis.z = this.z;
        if (this.w != undefined) newThis.w = this.w;

        newVec["dm"](4);
        newThis["dm"](4);

        return Math.hypot(
            newVec.x - newThis.x,
            newVec.y - newThis.y,
            newVec.z - newThis.z,
            newVec.w - newThis.w
        );

    },

    // lerp
    "lerp": function(vector) {

        vector ["dm"] (this ["dm"] ());

        return (t) => {
            const newVec = new Vector();
            if (this.x != undefined) newVec.x = this.x + (vector.x - this.x) * t;
            if (this.y != undefined) newVec.y = this.y + (vector.y - this.y) * t;
            if (this.z != undefined) newVec.z = this.z + (vector.z - this.z) * t;
            if (this.w != undefined) newVec.w = this.w + (vector.w - this.w) * t;
            return newVec;
        }
    },

    // conversion
    "conv": function(object, prefix) {
        let prefix_x = prefix + "X";
        let prefix_y = prefix + "Y";
        return new Vector(object[prefix_x], object[prefix_y]);
    },

    // move by angle 2d
    "moveAngle": function(axis, angle) {

        return ;
    },

    // move by angle 3d
    "moveAngles": function(axis, yaw, pitch) {

        return ;
    },

    "angleTo": function(vector, rad_deg) {

    },

    "anglesTo": function(vector, rad_deg) {

    },
}