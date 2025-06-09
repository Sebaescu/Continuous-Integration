from memberships import Membership
from features import Features
from discounts import Discounts
from utils import validate_membership_plan, validate_features

def display_membership_options():
    print("Available Membership Plans:")
    for plan in Membership.get_membership_plans():
        print(f"{plan['name']}: ${plan['base_cost']} - {', '.join(plan['benefits'])}")

def display_feature_options():
    print("Available Additional Features:")
    for feature in Features.get_available_features():
        print(f"{feature['name']}: ${feature['cost']}")

def calculate_total_cost(selected_membership, selected_features):
    total_cost = selected_membership['base_cost']
    total_cost += Features.calculate_feature_cost(selected_features)
    total_cost = Discounts.apply_group_discount(total_cost, 2)  # Example group size
    total_cost = Discounts.apply_special_offer_discount(total_cost)
    return total_cost

def confirm_membership(selected_membership, selected_features, total_cost):
    print("You have selected:")
    print(f"Membership: {selected_membership['name']}")
    print(f"Additional Features: {', '.join(selected_features)}")
    print(f"Total Cost: ${total_cost}")
    confirmation = input("Do you want to confirm this membership? (yes/no): ")
    if confirmation.lower() == 'yes':
        print("Membership confirmed!")
    else:
        print("Membership canceled.")

def start_application():
    display_membership_options()
    membership_choice = input("Select a membership plan: ")
    selected_membership = Membership.get_membership_details(membership_choice)
    if not validate_membership_plan(selected_membership):
        print("Invalid membership selection. Please try again.")
        return

    display_feature_options()
    features_choice = input("Select additional features (comma-separated): ")
    selected_features = [feature.strip() for feature in features_choice.split(',')]
    if not validate_features(selected_features):
        print("Invalid feature selection. Please try again.")
        return

    total_cost = calculate_total_cost(selected_membership, selected_features)
    confirm_membership(selected_membership, selected_features, total_cost)

if __name__ == "__main__":
    start_application()