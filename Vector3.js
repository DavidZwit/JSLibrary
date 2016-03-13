this.Vector3 = function (x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
}

Vector3.prototype = {

    setX: function (value) {
        this.x = value;
        return this;
    },

    setY: function (value) {
        this.y = value;
        return this;
    },

    setZ: function (value) {
        this.z = value;
        return this;
    },

    setToFloat: function (float) {
        this.x = float;
        this.y = float;
        this.z = float;
    },

    setComponent: function (index, value) {
        switch (index) {
        case 0:
            this.x = value;
            break;
        case 1:
            this.y = value;
            break;
        case 2:
            this.z = value;
            break;
        default:
            throw new Error('index out of range: ' + index);
        }
    },

    getComponent: function (index, value) {
        switch (index) {
        case 0:
            return this.x
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error('index out of range: ' + index);
        }
    },

    //---------------------------------------------

    clone: function () {
        return new Vector3(this.x, this.y, this.z);
    },

    copy: function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        return this;
    },

    //--------------------------------------------
    //return new vector functions
    //--------------------------------------------

    add: function (value) {
        return new Vector3(
            this.x + value.x,
            this.y + value.y,
            this.z + value.z);
    },

    addFloat: function (float) {
        return new Vector3(
            this.x + float,
            this.y + float,
            this.z + float);
    },

    addScaledVector: function (vect, scale) {
        return new Vector3(
            this.x + vect.x * scale,
            this.y + vect.y * scale,
            this.z + vect.z * scale);
    },

    //--------------------------------------------

    sub: function (value) {
        return new Vector3(
            this.x - value.x,
            this.y - value.y,
            this.z - value.z);
    },

    subFloat: function (float) {
        return new Vector3(
            this.x - float,
            this.y - float,
            this.z - float);
    },

    subScaledVector: function (vec, scale) {
        return new Vector3(
            this.x - vec.x * scale,
            this.y - vec.y * scale,
            this.z - vec.z * scale);
    },

    //-------------------------------------------

    mul: function (value) {
        return new Vector3(
            this.x * value.x,
            this.y * value.y,
            this.z * value.z);
    },

    mulFloat: function (float) {
        return new Vector3(
            this.x * float,
            this.y * float,
            this.z * float);
    },

    //-----------------------------------------

    divide: function (value) {
        return new Vector3(
            this.x / value.x,
            this.y / value.y,
            this.z / value.z);
    },

    divideFloat: function (float) {
        return new Vector3(
            this.x / vec,
            this.y / vec,
            this.z / vec);
    },

    //----------------------------------------
    //-----------------Math-------------------

    min: function (vect) {
        return new Vector3(
            Math.min(this.x, vect.x),
            Math.min(this.y, vect.y),
            Math.min(this.z, vect.z));
    },

    max: function (vect) {
        return new Vector3(
            Math.max(this.x, vect.x),
            Math.max(this.y, vect.y),
            Math.max(this.z, vect.z));
    },

    floor: function () {
        return new Vector3(
            Math.floor(this.x),
            Math.floor(this.y),
            Math.floor(this.z));
    },

    abs: function () {
        return new Vector3(
            Math.abs(this.x),
            Math.abs(this.y),
            Math.abs(this.z));
    },

    ceil: function () {
        return new Vector3(
            Math.ceil(this.x),
            Math.ceil(this.y),
            Math.ceil(this.z));
    },

    round: function () {
        return new Vector3(
            Math.round(this.x),
            Math.round(this.y),
            Math.round(this.z));
    },

    sqrt: function () {
        return new Vector3(
            Math.sqrt(this.x),
            Math.sqrt(this.y),
            Math.sqrt(this.z));
    },

    angle: function () {
        var angle = Math.atan2(this.y, this.x);
        if (angle < 0) angle += 2 * Math.PI;
        return angle;
    },

    dot: function (v) {
        return this.x * v.x + this.y * v.y;
    },

    magnitute: function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    },

    getLength: function () {
        return 3;
    },

    //---------------------------------------------
    //Functions for the vecotr itself
    //---------------------------------------------

    addSelf: function (value) {
        this.x += value.x;
        this.y += value.y;
        this.z += value.z;
        return this;
    },

    addFloatSelf: function (float) {
        this.x += float;
        this.y += float;
        this.z += float;
        return this;
    },

    addVectorsSelf: function (vec1, vec2) {
        this.x = vec1.x + vec2.x;
        this.y = vec1.y + vec2.y;
        this.z = vec1.z + vec2.z;
        return this;
    },

    addScaledVectorSelf: function (vect, scale) {
        this.x += vect.x * scale;
        this.y += vect.y * scale;
        this.z += vect.z * scale;
        return this;
    },

    //----------------------------------------------

    subSelf: function (value) {
        this.x -= value.x;
        this.y -= value.y;
        this.z -= value.z;
        return this;
    },

    subFloatSelf: function (float) {
        this.x -= float;
        this.y -= float;
        this.z -= float;
        return this;
    },

    subVectorsSelf: function (vect1, vect2) {
        this.x = vect1.x - vect2.x;
        this.y = vect1.y - vect2.y;
        this.z = vect1.z - vect2.z;
        return this;
    },

    //----------------------------------------------

    mulSelf: function (value) {
        this.x *= value.x;
        this.y *= value.y;
        this.z *= value.z;
        return this;
    },

    mulFloatSelf: function (float) {
        this.x *= float;
        this.y *= float;
        this.z *= float;
        return this;
    },

    mulVectorsSelf: function (vect1, vect2) {
        this.x = vect1.x * vect2.x;
        this.y = vect1.y * vect2.y;
        this.z = vect1.z * vect2.z;
        return this;
    },

    //-----------------------------------------------
    //-------------------Math------------------------

    divideSelf: function (value) {
        this.x /= value.x;
        this.y /= value.y;
        this.z /= value.z;
        return this;
    },

    divideFloatSelf: function (float) {
        this.x /= float;
        this.y /= float;
        this.z /= float;
    },

    minSelf: function (vect) {
        this.x = Math.min(this.x, vect.x);
        this.y = Math.min(this.y, vect.y);
        this.z = Math.min(this.z, vect.z);
        return this;
    },

    maxSelf: function (vect) {
        this.x = Math.max(this.x, vect.x);
        this.y = Math.max(this.y, vect.y);
        this.z = Math.max(this.z, vect.z);
        return this;
    },

    floorSelf: function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    },

    ceilSelf: function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    },

    roundSelf: function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    },
}