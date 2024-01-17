function totalVolume(boxes) {
    var total = 0;

    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var volume = box.reduce((acc, dimension) => acc * dimension, 1);
        total += volume;
    }

    return total;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])); // 63
console.log(totalVolume([2,2,2],[2,1,1])); // 10
console.log(totalVolume([1,1,1])); // 1

