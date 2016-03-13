this.CollisionBox = function (width, height, parrentObjectPosition) {
    this.width = width;
    this.height = height;
    this.potition = parrentObjectPosition;

    this.LUCorner = new Vector2(this.position.x - this.width / 2, this.position.y - this.height / 2);
    this.DUCorner = new Vector2(this.position.x + this.width / 2, this.position.y + this.height / 2);
}

CollisionBox.prototype = {

    collOther: function (obj2) {
        this.LUCorner = new Vector2(this.position.x - this.width / 2, this.position.y - this.height / 2);
        this.DUCorner = new Vector2(this.position.x + this.width / 2, this.position.y + this.height / 2);

        if (obj2.LUCorner.x > this.LUCorner.x && obj2.LUCorner.x < this.DUCorner.x ||
            obj2.DUCorner.x > this.LUCorner.x && obj2.DUCorner.x < this.DUCorner.x) {
            if (obj2.LUCorner.y > this.LUCorner.y && obj2.LUCorner.y < this.DUCorner.y ||
                obj2.DUCorner.y > this.LUCorner.y && obj2.DUCorner.y < this.DUCorner.y) {
                return true;
            } else return false;
        } else return false;
    },

    collPoint: function (point) {
        this.LUCorner = new Vector2(this.position.x - this.width / 2, this.position.y - this.height / 2);
        this.DUCorner = new Vector2(this.position.x + this.width / 2, this.position.y + this.height / 2);

        if (point.x > this.LUCorner.x && point.x < this.DUCorner.x) {
            if (point.y > this.LUCorner.y && point.y < this.DUCorner.y) {
                return true;
            } else return false;
        } else return false;
    },
}