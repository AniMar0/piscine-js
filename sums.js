function sums(number) {
    let result = [];

    function findPartitions(remaining, partition, start) {
        if (remaining === 0) {
            result.push([...partition]);
            return;
        }

        for (let i = start; i <= remaining; i++) {
            partition.push(i); 
            findPartitions(remaining - i, partition, i);
            partition.pop(); 
        }
    }

    findPartitions(number, [], 1);
    return result;
}




console.log(sums(4))