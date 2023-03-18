class Vector {
    constructor(x, y, z) {
        if(x != undefined) this.x = x;
        if(y != undefined) this.y = y;
        if(z != undefined) this.z = z;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    adde(vector) {
        this = this.add(vector);
        return this;
    }

    sub(vector) {

    }

    sube(vector) {

    }

    neg() {

    }
}

// mabye function $(string) { action = string };