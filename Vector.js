const Vector = function(x, y, z, w) {
    if (x != undefined) this.x = x;
    if (y != undefined) this.y = y;
    if (z != undefined) this.z = z;
    if (w != undefined) this.w = w;
}

Vector.prototype = {
    "+": function(vector, y, z, w) {

        let newVec = new Vector(vector, y, z, w);
        if(typeof(vector) === "object") newVec = vector;

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

        if(this.x != undefined) this.x = (vector.x == undefined) ? (this.x) : (this.x + vector.x);
        if(this.y != undefined) this.y = (vector.y == undefined) ? (this.y) : (this.y + vector.y);
        if(this.z != undefined) this.z = (vector.z == undefined) ? (this.z) : (this.z + vector.z);
        if(this.w != undefined) this.w = (vector.w == undefined) ? (this.w) : (this.w + vector.w);

        return this;
    },
}