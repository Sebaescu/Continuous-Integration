import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from memberships import Membership

def test_get_membership_plans():
    plans = Membership.get_membership_plans()
    assert len(plans) == 3
    assert plans[0]['name'] == 'Basic'
    assert plans[0]['base_cost'] == 50

def test_get_membership_details():
    basic_plan = Membership.get_membership_details('Basic')
    assert basic_plan['base_cost'] == 50
    assert 'Access to gym facilities' in basic_plan['benefits']

def test_invalid_membership():
    invalid_plan = Membership.get_membership_details('NonExistent')
    assert invalid_plan is None