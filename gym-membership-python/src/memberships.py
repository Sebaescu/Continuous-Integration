class Membership:
    plans = {
        "Basic": {"base_cost": 50, "benefits": ["Access to gym facilities", "Group classes"]},
        "Premium": {"base_cost": 100, "benefits": ["Access to gym facilities", "Group classes", "Personal training sessions", "Exclusive facilities"]},
        "Family": {"base_cost": 150, "benefits": ["Access to gym facilities for up to 4 members", "Group classes"]},
    }

    @staticmethod
    def get_membership_plans():
        return [{"name": name, **details} for name, details in Membership.plans.items()]

    @staticmethod
    def get_membership_details(plan_name):
        return Membership.plans.get(plan_name)