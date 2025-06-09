class Discounts:
    @staticmethod
    def apply_group_discount(total_cost, number_of_members):
        if number_of_members >= 2:
            return total_cost * 0.90  # 10% discount
        return total_cost

    @staticmethod
    def apply_special_offer_discount(total_cost):
        if total_cost > 400:
            return total_cost - 50
        elif total_cost > 200:
            return total_cost - 20
        return total_cost