import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from discounts import Discounts

def test_group_discount():
    # No discount for single member
    cost = Discounts.apply_group_discount(100, 1)
    assert cost == 100

    # 10% discount for 2+ members
    cost = Discounts.apply_group_discount(100, 2)
    assert cost == 90

def test_special_offer_discount():
    # No discount for amounts <= 200
    cost = Discounts.apply_special_offer_discount(150)
    assert cost == 150

    # $20 discount for amounts 201-400
    cost = Discounts.apply_special_offer_discount(250)
    assert cost == 230

    # $50 discount for amounts > 400
    cost = Discounts.apply_special_offer_discount(450)
    assert cost == 400