export class Membership {
    private plans: { [key: string]: { cost: number; benefits: string[] } } = {
        Basic: { cost: 50, benefits: ["Access to gym facilities", "Group classes"] },
        Premium: { cost: 100, benefits: ["Access to gym facilities", "Group classes", "Personal training sessions", "Exclusive facilities"] },
        Family: { cost: 150, benefits: ["Access to gym facilities for up to 4 members", "Group classes"] },
    };

    public getMembershipPlans(): string[] {
        return Object.keys(this.plans);
    }

    public getMembershipDetails(plan: string): { cost: number; benefits: string[] } | null {
        return this.plans[plan] || null;
    }

    public isMembershipAvailable(plan: string): boolean {
        return this.plans.hasOwnProperty(plan);
    }
}