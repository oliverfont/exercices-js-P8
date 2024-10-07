function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    return average;
}

export default calculateAverage
