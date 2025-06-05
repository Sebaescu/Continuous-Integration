export class Discounts {
    static applyGroupDiscount(totalCost: number, numberOfMembers: number): number {
        if (numberOfMembers >= 2) {
            const discount = totalCost * 0.10; // 10% discount
            return totalCost - discount;
        }
        return totalCost;
    }

    static applySpecialOfferDiscount(totalCost: number): number {
        if (totalCost > 400) {
            return totalCost - 50; // $50 discount
        } else if (totalCost > 200) {
            return totalCost - 20; // $20 discount
        }
        return totalCost;
    }

    static calculateFinalCost(baseCost: number, additionalFeaturesCost: number, numberOfMembers: number): number {
        let totalCost = baseCost + additionalFeaturesCost;

        // Apply group discount if applicable
        totalCost = this.applyGroupDiscount(totalCost, numberOfMembers);

        // Apply special offer discount if applicable
        totalCost = this.applySpecialOfferDiscount(totalCost);

        return totalCost;
    }
}