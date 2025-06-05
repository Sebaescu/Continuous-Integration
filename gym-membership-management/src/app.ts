import * as readline from 'readline';
import Membership from './memberships';
import Features from './features';
import Discounts from './discounts';
import { validateMembershipSelection, validateFeatureSelection } from './utils/validation';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const membershipOptions = new Membership();
const featureOptions = new Features();
const discountOptions = new Discounts();

const displayMembershipOptions = () => {
    console.log("Available Membership Plans:");
    membershipOptions.getMembershipPlans().forEach(plan => {
        console.log(`${plan.name}: $${plan.cost} - ${plan.benefits}`);
    });
};

const displayFeatureOptions = () => {
    console.log("Available Additional Features:");
    featureOptions.getAvailableFeatures().forEach(feature => {
        console.log(`${feature.name}: $${feature.cost}`);
    });
};

const calculateTotalCost = (selectedMembership, selectedFeatures) => {
    let totalCost = selectedMembership.cost;
    totalCost += featureOptions.calculateFeatureCost(selectedFeatures);
    totalCost = discountOptions.applyGroupDiscount(totalCost);
    totalCost = discountOptions.applySpecialOffers(totalCost);
    return totalCost;
};

const confirmMembership = (membership, features, totalCost) => {
    console.log("You have selected:");
    console.log(`Membership: ${membership.name}`);
    console.log(`Additional Features: ${features.join(', ')}`);
    console.log(`Total Cost: $${totalCost}`);
    rl.question("Do you want to confirm this membership? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === 'yes') {
            console.log("Membership confirmed!");
            rl.close();
        } else {
            console.log("Membership canceled.");
            rl.close();
        }
    });
};

const startApplication = () => {
    displayMembershipOptions();
    rl.question("Select a membership plan: ", (membershipChoice) => {
        const selectedMembership = membershipOptions.getMembershipByName(membershipChoice);
        if (!validateMembershipSelection(selectedMembership)) {
            console.log("Invalid membership selection. Please try again.");
            rl.close();
            return;
        }

        displayFeatureOptions();
        rl.question("Select additional features (comma-separated): ", (featuresChoice) => {
            const selectedFeatures = featuresChoice.split(',').map(feature => feature.trim());
            if (!validateFeatureSelection(selectedFeatures)) {
                console.log("Invalid feature selection. Please try again.");
                rl.close();
                return;
            }

            const totalCost = calculateTotalCost(selectedMembership, selectedFeatures);
            confirmMembership(selectedMembership, selectedFeatures, totalCost);
        });
    });
};

startApplication();