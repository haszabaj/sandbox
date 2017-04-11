function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
    var groups = {};
    array.forEach(function(element) {
        var groupName = groupOf(element);


        if (!Array.isArray(groups[groupName])) {
            groups[groupName] = [];
        }

        if (groupName in groups) {
            groups[groupName].push(element);
        } else {
            groups[groupName] = [element];
        }
    })


    return groups;
}

var byCentury = groupBy(ancestry, function(person) {
    return Math.ceil(person.died / 100);
});