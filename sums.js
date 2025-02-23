function sums(number) {
    let result = [];

    function findPartitions(remaining, partition, start) {
        if (remaining === 0) {
            result.push([...partition]); // تخزين تقسيم صحيح عند الوصول للمجموع المطلوب
            return;
        }

        for (let i = start; i <= remaining; i++) {
            partition.push(i); // إضافة الرقم الحالي إلى التقسيم
            findPartitions(remaining - i, partition, i); // استدعاء الدالة مع المجموع المتبقي
            partition.pop(); // إزالة آخر عنصر للعودة خطوة للخلف (Backtracking)
        }
    }

    findPartitions(number, [], 1);
    return result;
}




console.log(sums(4))