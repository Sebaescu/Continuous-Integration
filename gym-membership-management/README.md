# Gym Membership Management System

## Overview
The Gym Membership Management System is a command-line application designed to manage gym memberships efficiently. It allows users to select from various membership plans, customize their memberships with additional features, and calculate the total costs, including applicable discounts.

## Features
- **Membership Selection**: Users can choose from different membership plans such as Basic, Premium, and Family, each with its own benefits and costs.
- **Additional Features**: Users can enhance their membership with extra features like personal training sessions and group classes, each with associated costs.
- **Cost Calculation**: The application calculates the total membership cost by summing the base membership cost and the costs of additional features.
- **Discounts**: 
  - A 10% discount is applied for group memberships when two or more members sign up together.
  - Special offer discounts are available based on the total cost of the membership and features.
- **Premium Membership Features**: Premium members enjoy exclusive facilities and programs, with an additional surcharge applied to their total cost.
- **User Confirmation**: Before finalizing, users can review their selections and confirm or cancel their membership plan.
- **Error Handling**: The application gracefully handles invalid inputs and calculation errors, providing clear feedback to users.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd gym-membership-management
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run the following command:
```
npm start
```
Follow the on-screen prompts to select your membership plan, customize it with additional features, and view the total cost.

## Testing
Unit tests are implemented to ensure the functionality of the application. To run the tests, use:
```
npm test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.