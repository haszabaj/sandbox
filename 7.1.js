function SmartPlantEater() {
    this.energy = 20;
    this.dir = randomElement(directionNames);
}

SmartPlantEater.prototype.act = function(view) {
    var space = view.find(" ");
    var MINIMAL_ENERGY_FOR_REPRODUCTION = 120;
    if (this.energy > MINIMAL_ENERGY_FOR_REPRODUCTION && space) {
        return {
            type: "reproduce",
            direction: space
        };
    }
    var plant = view.find("*");
    var MINIMAL_ENERGY_FOR_EATING = 100;
    if (plant && this.energy < MINIMAL_ENERGY_FOR_EATING) {
        return {
            type: "eat",
            direction: plant
        };
    }
    if (plant && this.energy > MINIMAL_ENERGY_FOR_EATING) {
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
