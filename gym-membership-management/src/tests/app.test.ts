import { Membership } from '../memberships';
import { Features } from '../features';
import { Discounts } from '../discounts';

describe('Gym Membership Management System', () => {
    let membership: Membership;
    let features: Features;
    let discounts: Discounts;

    beforeEach(() => {
        membership = new Membership();
        features = new Features();
        discounts = new Discounts();
    });

    test('should calculate total cost for Basic membership without additional features', () => {
        const selectedMembership = membership.getMembershipDetails('Basic');
        const totalCost = selectedMembership.cost;
        expect(totalCost).toBe(100); // Assuming Basic membership cost is 100
    });

    test('should calculate total cost for Premium membership with additional features', () => {
        const selectedMembership = membership.getMembershipDetails('Premium');
        const additionalFeatureCost = features.calculateFeatureCost(['personal training']);
        const totalCost = selectedMembership.cost + additionalFeatureCost;
        expect(totalCost).toBe(150); // Assuming Premium cost is 120 and personal training is 30
    });

    test('should apply group discount for multiple members', () => {
        const totalCost = 200; // Example total cost for group
        const discountedCost = discounts.applyGroupDiscount(totalCost, 2);
        expect(discountedCost).toBe(180); // 10% discount applied
    });

    test('should apply special offer discount for total cost exceeding 200', () => {
        const totalCost = 250; // Example total cost
        const discountedCost = discounts.applySpecialOfferDiscount(totalCost);
        expect(discountedCost).toBe(230); // $20 discount applied
    });

    test('should handle invalid membership selection', () => {
        expect(() => membership.getMembershipDetails('Invalid')).toThrow('Membership plan not available');
    });

    test('should validate additional features availability', () => {
        const isAvailable = features.validateFeatureAvailability('group classes');
        expect(isAvailable).toBe(true); // Assuming group classes are available
    });

    test('should confirm membership selections', () => {
        const selectedMembership = membership.getMembershipDetails('Family');
        const additionalFeatureCost = features.calculateFeatureCost(['group classes']);
        const totalCost = selectedMembership.cost + additionalFeatureCost;
        const confirmationMessage = membership.confirmMembership(selectedMembership, additionalFeatureCost, totalCost);
        expect(confirmationMessage).toBe('Membership confirmed with total cost: ' + totalCost);
    });
});