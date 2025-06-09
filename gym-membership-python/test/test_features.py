import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from features import Features
import pytest

def test_get_available_features():
    features = Features.get_available_features()
    assert len(features) == 3
    assert any(f['name'] == 'Personal Training' for f in features)

def test_calculate_feature_cost():
    cost = Features.calculate_feature_cost(['Personal Training'])
    assert cost == 50

    cost = Features.calculate_feature_cost(['Personal Training', 'Group Classes'])
    assert cost == 80

def test_invalid_feature():
    with pytest.raises(ValueError):
        Features.calculate_feature_cost(['Invalid Feature'])