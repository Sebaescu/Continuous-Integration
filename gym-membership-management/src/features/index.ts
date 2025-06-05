export class Features {
    private availableFeatures: { [key: string]: number } = {
        'Personal Training': 50,
        'Group Classes': 30,
        'Nutrition Consultation': 40,
    };

    public getAvailableFeatures(): string[] {
        return Object.keys(this.availableFeatures);
    }

    public calculateFeatureCost(selectedFeatures: string[]): number {
        let totalCost = 0;
        for (const feature of selectedFeatures) {
            if (this.availableFeatures[feature]) {
                totalCost += this.availableFeatures[feature];
            } else {
                throw new Error(`Feature "${feature}" is not available.`);
            }
        }
        return totalCost;
    }

    public validateFeatureAvailability(selectedFeatures: string[]): boolean {
        for (const feature of selectedFeatures) {
            if (!this.availableFeatures[feature]) {
                return false;
            }
        }
        return true;
    }
}