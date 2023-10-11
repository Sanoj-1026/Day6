class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKilometers, timeInMinutes) {
        const distanceCost = distanceInKilometers * this.costPerKilometer;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalCost = this.baseFare + distanceCost + timeCost;
        return totalCost;
    }
}


const uberXCalculator = new UberPriceCalculator(5, 1.5, 0.2);
const distance = 10; 
const time = 15; 
const price = uberXCalculator.calculatePrice(distance, time);

console.log(`UberX Price: $${price}`);
