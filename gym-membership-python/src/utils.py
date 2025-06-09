def validate_membership_plan(plan):
    return plan is not None

def validate_features(selected_features):
    available_features = ["Personal Training", "Group Classes", "Nutrition Consultation"]
    return all(feature in available_features for feature in selected_features)