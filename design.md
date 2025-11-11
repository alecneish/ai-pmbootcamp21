# Design Document - Fitness Meal Planner

## Overview
The Fitness Meal Planner is a web application that generates personalized meal plans based on user fitness goals and budget constraints. The application provides nutritional information and allows users to export their meal plans to calendar applications.

## Design Philosophy

### Visual Design
- **Minimalist & Professional**: Clean, modern interface with a monochromatic color scheme
- **Cutting-edge Aesthetic**: Inspired by modern SaaS products (Linear, Vercel, Apple)
- **Black, White & Grey Palette**: Professional color scheme for a sophisticated look
- **Typography**: System font stack for native, crisp rendering across all platforms

### Color Palette

```
Background:   #0a0a0a (Deep Black)
Container:    #ffffff (Pure White)
Primary Text: #000000 (Black)
Secondary:    #666666 (Medium Grey)
Tertiary:     #888888 (Light Grey)
Borders:      #d4d4d4, #e0e0e0, #e8e8e8 (Various Grey Shades)
Hover BG:     #fafafa, #f5f5f5 (Off-White)
Button Hover: #2d2d2d (Dark Grey)
```

### Typography Hierarchy

```
H1 (Main Title):     2.8em, weight 700, -0.5px letter-spacing
H2 (Section):        1.8em, weight 700, -0.5px letter-spacing
H3 (Subsection):     1.3em, weight 700
H4 (Details):        1.1em, weight 600
Body Text:           15px, weight 400
Labels:              0.9em, weight 600, uppercase, 0.5px letter-spacing
Small Text:          0.85em
```

### Layout & Spacing

- **Container Max Width**: 900px (optimal reading width)
- **Border Radius**: 2px (minimal, sharp corners)
- **Padding**: Generous (60px container, 30px cards)
- **Gaps**: Consistent 12px-20px spacing
- **Responsive**: 20px body padding for mobile support

### Component Design

#### Buttons
- Black background (#000000)
- White text
- Uppercase with 1px letter-spacing
- 16px vertical, 40px horizontal padding
- Subtle hover state (#2d2d2d)
- Sharp 2px border-radius

#### Input Fields
- 1px grey border (#d4d4d4)
- Black border on focus with shadow
- 14px vertical, 16px horizontal padding
- Minimal 2px border-radius

#### Meal Cards
- Light grey background (#fafafa)
- 3px black left border
- Hover effect: slight darkening + shadow
- 30px padding
- Structured layout with clear hierarchy

#### Nutrition Badges
- White background with grey border
- Inline-flex layout
- 12px gaps between badges
- Compact padding (8px × 14px)

#### Section Titles
- 1.2em font size, weight 700
- Black bottom border (2px)
- Uppercase with 1px letter-spacing
- 40px top margin for separation
- Used to organize form into logical sections

#### Form Rows
- 2-column grid layout on desktop
- Single column on mobile (< 768px)
- 20px gap between columns
- Groups related inputs (age/gender, height/weight)

#### Height & Weight Inputs
- Inline layout with unit labels
- Unit labels in medium grey (#666666)
- Height: two inputs (feet & inches)
- Weight: single input with "lbs" label
- Clean, compact presentation

#### Calorie Information Cards
- 3-column grid layout on desktop
- Light grey background (#fafafa) container
- White cards with grey borders
- Large numeric values (2.2em, weight 700)
- Small uppercase labels
- Displays: TDEE, Target Calories, Meal Plan Total
- Stacks to single column on mobile

## Calorie Calculation System

### BMR (Basal Metabolic Rate)
Uses the **Mifflin-St Jeor Equation** (most accurate):
- **Male**: (10 × weight_kg) + (6.25 × height_cm) - (5 × age) + 5
- **Female**: (10 × weight_kg) + (6.25 × height_cm) - (5 × age) - 161

### TDEE (Total Daily Energy Expenditure)
- **Formula**: BMR × Activity Level Multiplier
- **Activity Multipliers**:
  - Sedentary: 1.2 (little/no exercise)
  - Light: 1.375 (1-3 days/week)
  - Moderate: 1.55 (3-5 days/week)
  - Very Active: 1.725 (6-7 days/week)
  - Extremely Active: 1.9 (athlete/physical job)

### Target Calories by Goal
- **Weight Loss**: TDEE - 500 cal (creates ~1 lb/week deficit)
- **Muscle Gain**: TDEE + 400 cal (moderate surplus)
- **Maintenance**: TDEE (no change)
- **Endurance**: TDEE + 250 cal (extra energy for training)

### Imperial to Metric Conversions
- Weight: lbs × 0.453592 = kg
- Height: inches × 2.54 = cm

## User Experience

### Interaction Flow
1. User enters personal information (age, gender, height, weight, activity level)
2. User selects fitness goal (dynamic description appears)
3. User enters budget and dietary preference
4. System validates all required fields
5. Click "Generate Meal Plan"
6. System calculates BMR, TDEE, and target calories
7. Loading spinner shows (1.5s simulation)
8. Meal plan appears with calorie information displayed
9. Calorie cards show: TDEE, target, and actual meal plan total
10. User can export via .ics download or Google Calendar sync

### Micro-interactions
- Form field focus states
- Button hover animations
- Card hover effects
- Loading spinner
- Success message auto-hide (5 seconds)

### Accessibility
- Semantic HTML structure
- Form labels properly associated
- Required fields marked
- Color contrast meets WCAG standards
- Keyboard navigation support

## Technical Architecture

### File Structure
```
/
├── index.html       # Main HTML structure
├── styles.css       # All styling
├── script.js        # Application logic
├── design.md        # This file
├── requirements.md  # Project requirements
└── tasks.md         # Development tasks
```

### State Management
- Client-side only (no backend)
- `window.currentMealPlan` stores active plan
- DOM manipulation for dynamic content
- Event-driven architecture

### Data Structure
```javascript
mealDatabase = {
  [goal]: {
    [tier]: {
      breakfast: { name, calories, protein, carbs, fat, cost, items[] }
      lunch: { ... }
      dinner: { ... }
    }
  }
}
```

## Export Functionality

### .ics Calendar File
- Standard iCalendar format (RFC 5545)
- Events scheduled for next day
- 30-minute meal duration
- 30-minute advance reminder
- Compatible with all major calendar apps

### Google Calendar API (Optional)
- OAuth 2.0 authentication
- Direct calendar integration
- Requires API credentials setup
- Fallback to manual instructions

## Future Enhancements

### Potential Features
- Weekly meal planning
- Shopping list generation
- Macro tracking over time
- Custom meal database
- User accounts and meal history
- Recipe instructions
- Allergen filtering
- Meal prep mode

### Design Improvements
- Dark mode toggle
- Customizable meal times
- Print-friendly layout
- Mobile app version
- Animations and transitions
- Progressive Web App (PWA)

## Performance Considerations

- Minimal dependencies (vanilla JavaScript)
- Single page application (no page loads)
- Lazy loading for Google API scripts
- Efficient DOM updates
- Small file sizes (< 50KB total)

## Browser Compatibility

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox
- Web APIs: Blob, URL, Date

## Design Inspiration

- **Linear**: Clean, professional UI
- **Vercel**: Minimalist black/white aesthetic
- **Apple**: Typography and spacing
- **Stripe**: Professional documentation style
