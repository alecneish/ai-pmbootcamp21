# Requirements Document - Fitness Meal Planner

## Project Overview
A web-based meal planning application that generates personalized meal plans based on user fitness goals and budget, with calendar integration capabilities.

## Functional Requirements

### FR1: User Input Collection
- **FR1.1**: User must be able to select a fitness goal from predefined options
  - Weight Loss
  - Muscle Gain
  - Maintenance
  - Endurance Training
- **FR1.2**: User must be able to input a daily budget (USD)
  - Minimum: $5
  - Maximum: $200
  - Step: $1
- **FR1.3**: User must be able to select optional dietary preferences
  - No Preference
  - Vegetarian
  - Vegan
  - Keto
  - Paleo
- **FR1.4**: System must display goal-specific descriptions when user selects a fitness goal
- **FR1.5**: User must be able to input personal information for calorie calculations
  - Age (13-100 years)
  - Gender (Male/Female)
  - Height (Feet: 3-8, Inches: 0-11)
  - Weight (50-500 lbs)
  - Activity Level:
    - Sedentary (little or no exercise)
    - Light (exercise 1-3 days/week)
    - Moderate (exercise 3-5 days/week)
    - Very Active (exercise 6-7 days/week)
    - Extremely Active (athlete or physical job)

### FR2: Calorie Calculations
- **FR2.1**: System must calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor equation
  - Male: (10 × weight_kg) + (6.25 × height_cm) - (5 × age) + 5
  - Female: (10 × weight_kg) + (6.25 × height_cm) - (5 × age) - 161
- **FR2.2**: System must calculate Total Daily Energy Expenditure (TDEE)
  - TDEE = BMR × Activity Level Multiplier
  - Sedentary: 1.2
  - Light: 1.375
  - Moderate: 1.55
  - Very Active: 1.725
  - Extremely Active: 1.9
- **FR2.3**: System must calculate target calories based on fitness goal
  - Weight Loss: TDEE - 500 calories (1 lb/week loss)
  - Muscle Gain: TDEE + 400 calories
  - Maintenance: TDEE
  - Endurance: TDEE + 250 calories
- **FR2.4**: System must display calculated values to user
  - User's TDEE
  - Target calories for selected goal
  - Total calories in generated meal plan

### FR3: Meal Plan Generation
- **FR3.1**: System must generate a meal plan based on fitness goal and budget
- **FR3.2**: Meal plan must include three meals:
  - Breakfast (8:00 AM)
  - Lunch (12:30 PM)
  - Dinner (6:30 PM)
- **FR3.3**: Each meal must display:
  - Meal name
  - Scheduled time
  - List of ingredients
  - Calories
  - Protein (grams)
  - Carbohydrates (grams)
  - Fat (grams)
  - Cost (USD)
- **FR3.4**: Budget tiers must be automatically determined:
  - Low tier: $5 - $17/day
  - Medium tier: $18 - $29/day
  - High tier: $30+/day

### FR4: Calendar Export
- **FR4.1**: User must be able to download meal plan as .ics calendar file
- **FR4.2**: .ics file must include:
  - All three meals as separate events
  - Meal scheduled for the next day
  - 30-minute event duration
  - 30-minute advance reminder
  - Ingredient list in event description
- **FR4.3**: .ics file must be compatible with:
  - Google Calendar
  - Apple Calendar
  - Microsoft Outlook
  - Other RFC 5545 compliant applications

### FR5: Google Calendar Integration (Optional)
- **FR5.1**: User must be able to sync meals directly to Google Calendar via API
- **FR5.2**: System must handle OAuth 2.0 authentication
- **FR5.3**: System must provide fallback instructions if API not configured
- **FR5.4**: System must display success message after sync

### FR6: User Interface
- **FR6.1**: System must display loading indicator during meal plan generation
- **FR6.2**: System must show success message after calendar export
- **FR6.3**: Success messages must auto-dismiss after 5 seconds
- **FR6.4**: Form validation must prevent submission with incomplete data
- **FR6.5**: Interface must be responsive on mobile and desktop devices

## Non-Functional Requirements

### NFR1: Performance
- **NFR1.1**: Meal plan must generate within 2 seconds
- **NFR1.2**: Page load time must be under 1 second
- **NFR1.3**: Calendar file download must be instant

### NFR2: Usability
- **NFR2.1**: Interface must follow modern design principles
- **NFR2.2**: All interactive elements must have hover states
- **NFR2.3**: Form fields must have clear labels and placeholders
- **NFR2.4**: Error messages must be clear and actionable

### NFR3: Compatibility
- **NFR3.1**: Must work on Chrome (latest 2 versions)
- **NFR3.2**: Must work on Firefox (latest 2 versions)
- **NFR3.3**: Must work on Safari (latest 2 versions)
- **NFR3.4**: Must work on Edge (latest 2 versions)
- **NFR3.5**: Must work on mobile browsers (iOS Safari, Chrome Mobile)

### NFR4: Accessibility
- **NFR4.1**: Must use semantic HTML elements
- **NFR4.2**: Form inputs must have associated labels
- **NFR4.3**: Color contrast must meet WCAG 2.1 Level AA standards
- **NFR4.4**: Must be keyboard navigable

### NFR5: Security
- **NFR5.1**: No user data must be stored or transmitted
- **NFR5.2**: Google Calendar API credentials must use OAuth 2.0
- **NFR5.3**: All external scripts must use HTTPS

### NFR6: Maintainability
- **NFR6.1**: Code must be organized into separate files (HTML, CSS, JS)
- **NFR6.2**: CSS must use consistent naming conventions
- **NFR6.3**: JavaScript must use clear function and variable names
- **NFR6.4**: Code must include comments for complex logic

## Data Requirements

### DR1: Meal Database
- **DR1.1**: System must store meals for 4 fitness goals
- **DR1.2**: Each goal must have 3 budget tiers
- **DR1.3**: Each tier must have 3 meals (breakfast, lunch, dinner)
- **DR1.4**: Total meals in database: 36 unique meals

### DR2: Meal Data Structure
Each meal must contain:
- Name (string)
- Calories (integer)
- Protein (integer, grams)
- Carbohydrates (integer, grams)
- Fat (integer, grams)
- Cost (float, USD)
- Items (array of strings)

## Constraints

### C1: Technical Constraints
- Must be a client-side only application (no backend)
- Must use vanilla JavaScript (no frameworks)
- Must work without internet after initial load (except API features)

### C2: Business Constraints
- Must be free to use
- No user registration required
- No advertisements

### C3: Design Constraints
- Must use black, white, and grey color scheme
- Must maintain professional, minimalist aesthetic
- Must use system fonts only

## Assumptions

### A1: User Assumptions
- Users have basic computer literacy
- Users have access to a calendar application
- Users understand their fitness goals
- Users can estimate daily food budget

### A2: Technical Assumptions
- Users have modern web browsers
- Users have JavaScript enabled
- Users can download files from browser
- Users have calendar apps that support .ics format

### A3: Data Assumptions
- Meal costs are approximate averages
- Nutritional data is rounded for simplicity
- Meal portions are standardized
- Budget tiers are fixed (not customizable)

## Out of Scope

### OS1: Features Not Included
- User accounts and authentication
- Meal customization or substitution
- Recipe instructions
- Shopping list generation
- Nutrition tracking over time
- Multi-day meal planning
- Social sharing features
- Payment processing
- Backend data storage
- Mobile native applications

### OS2: Dietary Considerations Not Included
- Allergen warnings
- Specific macro targets
- Medical dietary restrictions
- Cultural food preferences
- Organic/non-GMO specifications
- Meal prep instructions

## Success Criteria

### SC1: Core Functionality
- User can generate meal plan in under 5 clicks
- 100% of generated meal plans are valid and complete
- Calendar export works for all major calendar apps

### SC2: User Experience
- Interface loads in under 1 second
- No JavaScript errors in console
- All buttons and links work correctly
- Form validation prevents invalid submissions

### SC3: Design Quality
- Interface matches design specifications
- Responsive layout works on mobile (320px+) and desktop
- Professional appearance suitable for portfolio

## Version History

**Version 1.0** (Current)
- Initial release
- Core meal planning functionality
- .ics calendar export
- Google Calendar API integration (optional)
- Professional black/white design
