class Features:
    available_features = {
        "Personal Training": 50,
        "Group Classes": 30,
        "Nutrition Consultation": 40,
    }

    @staticmethod
    def get_available_features():
        return [{"name": name, "cost": cost} for name, cost in Features.available_features.items()]

    @staticmethod
    def calculate_feature_cost(selected_features):
        total_cost = 0
        for feature in selected_features:
            if feature in Features.available_features:
                total_cost += Features.available_features[feature]
            else:
                raise ValueError(f"Feature '{feature}' is not available.")
        return total_cost