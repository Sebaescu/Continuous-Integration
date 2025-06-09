import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from app import calculate_total_cost, display_membership_options, display_feature_options
from memberships import Membership
from features import Features
from unittest.mock import patch
import io

def test_calculate_total_cost():
    selected_membership = {"name": "Basic", "base_cost": 50}
    selected_features = ["Personal Training"]
    total = calculate_total_cost(selected_membership, selected_features)
    # 50 + 50 (feature) = 100, with 10% group discount = 90, no special offer discount
    assert total == 90

def test_display_membership_options():
    with patch('sys.stdout', new_callable=io.StringIO) as mock_stdout:
        display_membership_options()
        output = mock_stdout.getvalue()
        assert "Available Membership Plans:" in output
        assert "Basic:" in output
        assert "Premium:" in output
        assert "Family:" in output

def test_display_feature_options():
    with patch('sys.stdout', new_callable=io.StringIO) as mock_stdout:
        display_feature_options()
        output = mock_stdout.getvalue()
        assert "Available Additional Features:" in output
        assert "Personal Training:" in output
        assert "Group Classes:" in output
        assert "Nutrition Consultation:" in output