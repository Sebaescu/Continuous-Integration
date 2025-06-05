export function validateMembershipPlan(plan: string, availablePlans: string[]): boolean {
    return availablePlans.includes(plan);
}

export function validateFeatures(selectedFeatures: string[], availableFeatures: string[]): boolean {
    return selectedFeatures.every(feature => availableFeatures.includes(feature));
}

export function validateGroupSize(groupSize: number): boolean {
    return groupSize > 1; // Group size must be greater than 1 for group discounts
}

export function validateCost(cost: number): boolean {
    return cost >= 0; // Cost should not be negative
}

export function handleError(message: string): void {
    console.error(`Error: ${message}`);
}