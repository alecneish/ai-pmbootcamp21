# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fitness Meal Planner is a client-side single-page application that generates personalized daily meal plans based on user fitness goals, budget, and body composition. Built with vanilla HTML5, CSS3, and JavaScript (ES6+) with no backend dependencies or frameworks.

## Architecture

**Event-Driven Pattern:**
- Form submission triggers calculations → meal generation → UI updates
- State managed primarily through `window.currentMealPlan` array
- DOM-driven UI state (showing/hiding sections)
- No data persistence (resets on page refresh)

**File Organization:**
- `index.html` - Form structure and layout
- `script.js` - All application logic (calculations, meal generation, calendar export)
- `styles.css` - Complete styling (responsive grid, minimalist design)
- `design.md`, `requirements.md`, `tasks.md` - Comprehensive documentation

## Key Data Structures

### Meal Database Structure
```javascript
mealDatabase = {
  'weight-loss' | 'muscle-gain' | 'maintenance' | 'endurance': {
    'low' | 'medium' | 'high': {
      'breakfast' | 'lunch' | 'dinner': {
        name: string,
        calories: number,
        protein: number,  // grams
        carbs: number,    // grams
        fat: number,      // grams
        cost: number,     // USD
        items: string[]   // ingredient list
      }
    }
  }
}
```

**Total Meals:** 36 (4 goals × 3 budget tiers × 3 meal types)

**Budget Tiers:**
- Low: $5-$17/day
- Medium: $18-$29/day
- High: $30+/day

**Meal Times (Fixed):**
- Breakfast: 8:00 AM
- Lunch: 12:30 PM
- Dinner: 6:30 PM

## Calorie Calculation System

### BMR (Basal Metabolic Rate) - Mifflin-St Jeor Equation
- **Male:** (10 × weight_kg) + (6.25 × height_cm) - (5 × age) + 5
- **Female:** (10 × weight_kg) + (6.25 × height_cm) - (5 × age) - 161

**Imperial to Metric Conversions:**
- Weight: lbs × 0.453592 = kg
- Height: inches × 2.54 = cm

### TDEE (Total Daily Energy Expenditure)
```
TDEE = BMR × Activity Level Multiplier
```

**Activity Multipliers:**
- Sedentary: 1.2
- Light (1-3 days/week): 1.375
- Moderate (3-5 days/week): 1.55
- Very Active (6-7 days/week): 1.725
- Extremely Active: 1.9

### Target Calories by Fitness Goal
- **Weight Loss:** TDEE - 500 (creates ~1 lb/week deficit)
- **Muscle Gain:** TDEE + 400 (moderate caloric surplus)
- **Maintenance:** TDEE (no adjustment)
- **Endurance:** TDEE + 250 (extra energy for training)

## Application Flow

1. **User Input Collection:**
   - Personal info: age, gender, height (ft/in), weight (lbs), activity level
   - Fitness goal selection (shows dynamic description)
   - Budget and optional dietary preference

2. **Form Submission:**
   - Validates all required fields
   - Calculates BMR from personal metrics
   - Calculates TDEE from BMR × activity level
   - Determines target calories based on goal
   - Shows loading spinner (1.5s simulated delay)

3. **Meal Generation:**
   - Selects budget tier based on daily budget
   - Retrieves meals from `mealDatabase[goal][tier]`
   - Calculates total meal plan calories
   - Renders three meal cards with nutritional info
   - Displays calorie summary (TDEE, Target, Actual)
   - Stores meals in `window.currentMealPlan` for export

4. **Calendar Export:**
   - `.ics` file: Download button generates RFC 5545 compliant file
   - Google Calendar: OAuth 2.0 API integration (requires setup)

## Calendar Export Details

### ICS File Generation
- Creates one VEVENT per meal scheduled for the next day
- Event duration: 30 minutes
- 30-minute popup reminder
- Includes meal name, ingredients, and location (Home)
- Uses browser's local timezone via `Intl.DateTimeFormat()`
- Properly converts 12-hour AM/PM format to 24-hour format

### Google Calendar API
**Setup Required:**
- API credentials: Client ID and API Key in `script.js` (lines ~550-555)
- Replace `YOUR_CLIENT_ID` and `YOUR_API_KEY` placeholders
- Lazy loads Google Sign-In and Calendar API scripts
- Fallback: Shows alert with manual instructions if not configured

## Design System

**Color Palette:**
- Background: #0a0a0a (deep black)
- Container: #ffffff (white)
- Text: #000000 (black), #666666 (medium grey), #888888 (light grey)
- Borders: #d4d4d4, #e0e0e0, #e8e8e8
- Hover: #fafafa, #f5f5f5

**Responsive Design:**
- Desktop: 2-column form grid, 3-column calorie cards
- Mobile (<768px): Single column layout
- System font stack for native rendering
- Minimal border-radius (2px)

## Important Implementation Details

**Dynamic Goal Descriptions:**
Located in `goalDescriptions` object (script.js ~line 81):
- Weight Loss: "Focus on calorie deficit with high protein to preserve muscle"
- Muscle Gain: "High protein and calorie surplus to support muscle growth"
- Maintenance: "Balanced nutrition to maintain current weight and health"
- Endurance: "High carbohydrate intake to fuel long-duration activities"

**Form Validation Rules:**
- Age: 13-100 years
- Gender: Male/Female (required)
- Height: 3-8 feet, 0-11 inches
- Weight: 50-500 lbs
- Activity Level: 5 options with multiplier values
- Budget: $5-$200 USD
- Dietary Preference: Optional (not yet implemented in filtering)

**UI Interactions:**
- Success messages auto-dismiss after 5 seconds
- Loading animation uses CSS keyframe spin
- Form organized into sections: "Personal Information" and "Meal Preferences"
- Calorie info cards display after meal plan generation

**Time Zone Handling:**
- All calendar events use browser's local timezone
- No hardcoded timezone assumptions
- Properly formats dates for ICS (YYYYMMDDTHHMMSS)

## Known Limitations

1. **Dietary Preferences:** Form field exists but filtering not implemented
2. **No Persistence:** All data lost on page refresh
3. **Single Day Plan:** Only generates one day of meals
4. **Google Calendar API:** Requires manual credential setup by user
5. **Imperial Units Only:** No metric unit support

## Testing

Open `index.html` in any modern browser. No build process or dependencies required.
