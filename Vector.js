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

    "dm": function(dimensions, standart) {

        if(dimensions == undefined) {
            let dimCount = 0;
            if(this.x != undefined) dimCount++;
            if(this.y != undefined) dimCount++;
            if(this.z != undefined) dimCount++;
            if(this.w != undefined) dimCount++;

            return dimCount;
        }
        else {
            if(dimensions < 1) delete this.x; else if(this.x == undefined) this.x = standart;
            if(dimensions < 2) delete this.y; else if(this.y == undefined) this.y = standart;
            if(dimensions < 3) delete this.z; else if(this.z == undefined) this.z = standart;
            if(dimensions < 4) delete this.w; else if(this.w == undefined) this.w = standart;

            return this;
        }

    },

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
}