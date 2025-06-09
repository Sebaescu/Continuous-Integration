import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from utils import validate_membership_plan, validate_features

def test_validate_membership_plan():
    assert validate_membership_plan({'name': 'Basic'}) == True
    assert validate_membership_plan(None) == False

def test_validate_features():
    assert validate_features(['Personal Training']) == True
    assert validate_features(['Personal Training', 'Group Classes']) == True
    assert validate_features(['Invalid Feature']) == False
    assert validate_features([]) == True