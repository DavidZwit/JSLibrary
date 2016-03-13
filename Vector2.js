this.Vector2 = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector2.prototype = {


    setX: function (value) {
        this.x = value;
        return this;
    },

    setY: function (value) {
        this.y = value;
        return this;
    },

    setToFloat: function (float) {
        this.x = float;
        this.y = float;
        return this;
    },

    setComponent: function (index, value) {
        switch (index) {
        case 0:
            this.x = value;
            break;
        case 1:
            this.y = value;
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
        default:
            throw new Error('index out of range: ' + index);
        }
    },

    //---------------------------------------------

    clone: function () {
        return new Vector2(this.x, this.y);
    },

    copy: function (vec) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    },

    //--------------------------------------------
    //return new vector functions
    //--------------------------------------------

    add: function (value) {
        return new Vector2(
            this.x + value.x,
            this.y + value.y);
    },

    addFloat: function (float) {
        return new Vector2(
            this.x + float,
            this.y + float);
    },

    addScaledVector: function (vect, scale) {
        return new Vector2(
            this.x + vect.x * scale,
            this.y + vect.y * scale);
    },

    //--------------------------------------------

    sub: function (value) {
        return new Vector2(
            this.x - value.x,
            this.y - value.y);
    },

    subFloat: function (float) {
        return new Vector2(
            this.x - float,
            this.y - float);
    },

    subScaledVector: function (vec, scale) {
        return new Vector2(
            this.x - vec.x * scale,
            this.y - vec.y * scale);
    },

    //-------------------------------------------

    mul: function (value) {
        return new Vector2(
            this.x * value.x,
            this.y * value.y);
    },

    mulFloat: function (float) {
        return new Vector2(
            this.x * float,
            this.y * float);
    },

    //-----------------------------------------

    divide: function (value) {
        return new Vector2(
            this.x / value.x,
            this.y / value.y);
    },

    divideFloat: function (float) {
        return new Vector2(
            this.x / vec,
            this.y / vec);
    },

    //----------------------------------------
    //-----------------Math-------------------

    min: function (vect) {
        return new Vector2(
            Math.min(this.x, vect.x),
            Math.min(this.y, vect.y));
    },

    max: function (vect) {
        return new Vector2(
            Math.max(this.x, vect.x),
            Math.max(this.y, vect.y));
    },

    floor: function () {
        return new Vector2(
            Math.floor(this.x),
            Math.floor(this.y));
    },

    abs: function () {
        return new Vector2(
            Math.abs(this.x),
            Math.abs(this.y));
    },

    ceil: function () {
        return new Vector2(
            Math.ceil(this.x),
            Math.ceil(this.y));
    },

    round: function () {
        return new Vector2(
            Math.round(this.x),
            Math.round(this.y));
    },

    sqrt: function () {
        return new Vector2(
            Math.sqrt(this.x),
            Math.sqrt(this.y));
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
        return 2;
    },

    //--------------------------------------------
    //Functions in the vector itself
    //--------------------------------------------

    addSelf: function (value) {
        this.x += value.x;
        this.y += value.y;
        return this;
    },

    addFloatSelf: function (float) {
        this.x += float;
        this.y += float;
        return this;
    },

    addVectorsSelf: function (vec1, vec2) {
        this.x = vec1.x + vec2.x;
        this.y = vec1.y + vec2.y;
        return this;
    },

    addScaledVectorSelf: function (vect, scale) {
        this.x += vect.x * scale;
        this.y += vect.y * scale;
        return this;
    },

    //--------------------------------------------

    subSelf: function (value) {
        this.x -= value.x;
        this.y -= value.y;
        return this;
    },

    subFloatSelf: function (float) {
        this.x -= float;
        this.y -= float;
        return this;
    },

    subVectorsSelf: function (vect1, vect2) {
        this.x = vect1.x - vect2.x;
        this.y = vect1.y - vect2.y;
        return this;
    },

    subScaledVectorSelf: function (vec, scale) {
        this.x -= vec.x * scale;
        this.y -= vec.y * scale;
        return this;
    },

    //-------------------------------------------

    mulSelf: function (value) {
        this.x *= value.x;
        this.y *= value.y;
        return this;
    },

    mulFloatSelf: function (float) {
        this.x *= float;
        this.y *= float;
        return this;
    },

    mulVectorsSelf: function (vect1, vect2) {
        this.x = vect1.x * vect2.x;
        this.y = vect1.y * vect2.y;
        return this;
    },

    //-----------------------------------------

    divideSelf: function (value) {
        this.x /= value.x;
        this.y /= value.y;
        return this;
    },

    divideFloatSelf: function (float) {
        this.x /= vec;
        this.y /= vec;
        return this;
    },

    divideVectorsSelf: function (vec1, vec2) {
        this.x = vec1.x / vec2.x;
        this.y = vec1.y / vec2.y;
        return this;
    },

    //----------------------------------------
    //-----------------Math-------------------

    minSelf: function (vect) {
        this.x = Math.min(this.x, vect.x);
        this.y = Math.min(this.y, vect.y);
        return this;
    },

    maxSelf: function (vect) {
        this.x = Math.max(this.x, vect.x);
        this.y = Math.max(this.y, vect.y);
        return this;
    },

    floorSelf: function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    },

    absSelf: function () {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    },

    ceilSelf: function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    },

    roundSelf: function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    },

    sqrtSelf: function () {
        this.x = Math.sqrt(this.x);
        this.y = Math.sqrt(this.y);
        return this;
    }
}