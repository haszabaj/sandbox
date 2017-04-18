function SmartPlantEater() {
    this.energy = 20;
    this.dir = randomElement(directionNames);
}

SmartPlantEater.prototype.act = function(view) {
    var space = view.find(" ");
    if (this.energy > 120 && space) {
        return {
            type: "reproduce",
            direction: space
        };
    }
    var plant = view.find("*");
    if (plant && this.energy < 100) {
        return {
            type: "eat",
            direction: plant
        };
    }
    if (plant && this.energy > 100) {
        return {
            type: "move",
            direction: this.dir
        };
    }
    var start = this.dir;
    if (view.look(dirPlus(this.dir, -3)) != " ") {
        start = this.dir = dirPlus(this.dir, -2);
    }
    while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, 1);
        if (this.dir == start) {
            break;
        }
    }
    return {
        type: "move",
        direction: this.dir
    };
}