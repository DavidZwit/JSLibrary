Vector2Call = {
    addVectors: function (vec1, vec2) {
        return new Vector2(
            vec1.x + vec2.x,
            vec1.y + vec2.y);
    },

    addFloat: function (vec, float) {
        return new Vector2(
            vec.x + float,
            vec.y + float);
    },

    subVector: function (vec1, vec2) {
        return new Vector2(
            vec1.x - vec2.x,
            vec1.y - vec2.y);
    },

    subFloat: function (vect, float) {
        return new Vector2(
            vec.x - float,
            vec.y - float);
    },

    divideVector: function (vec1, vec2) {
        return new Vector2(
            vec1.x / vec2.x,
            vec1.y / vec2.y);
    },

    divideFloat: function (vec, float) {
        return new Vector2(
            vec.x / float,
            vec.y / float);
    },

    mullVector: function (vec1, vec2) {
        return new Vector2(
            vec1.x * vec2.x,
            vec1.y * vec2.y);
    },

    mullFloat: function (vec, float) {
        return new Vector2(
            vec.x * float,
            vec.y * float);
    },

    distance: function (vec1, vec2) {
        return this.subSelf(vec1, vec2).magnitute();
    },

    getLowerVec: function (vec1, vec2) {
        if (vec1.x < vec2.x && vec1.y < vec2.y && vec1.z < vec2.z) return true;
        else return false;
    },

    getLowerFloat: function (vec, float) {
        if (vec.x < float && vec.y < float && vec.z < float) return true;
        else return false;
    }
}