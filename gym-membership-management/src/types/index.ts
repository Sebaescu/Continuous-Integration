export interface MembershipPlan {
    name: string;
    baseCost: number;
    benefits: string[];
    isAvailable: boolean;
}

export interface Feature {
    name: string;
    cost: number;
    isAvailable: boolean;
}

export interface Discount {
    description: string;
    threshold: number;
    amount: number;
}