# Fitness Meal Planner

A modern, personalized meal planning web application that generates custom meal plans based on your fitness goals, budget, and body composition.

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

### Personalized Calorie Calculations
- **BMR Calculation**: Uses the Mifflin-St Jeor equation for accurate basal metabolic rate
- **TDEE Calculation**: Accounts for 5 activity levels (sedentary to extremely active)
- **Goal-Based Targets**: Automatic calorie adjustment based on your fitness objective
- **Real-Time Display**: See your TDEE, target calories, and meal plan total at a glance

### Smart Meal Planning
- **4 Fitness Goals**: Weight Loss, Muscle Gain, Maintenance, Endurance Training
- **3 Budget Tiers**: Automatically selected based on your daily budget ($5-$200)
- **36 Unique Meals**: Carefully curated meals with complete nutritional information
- **Macro Tracking**: Calories, protein, carbs, and fat for each meal

### Calendar Integration
- **Download .ics File**: Export to Google Calendar, Apple Calendar, or Outlook
- **Google Calendar API**: Direct sync with automatic event creation
- **Meal Reminders**: 30-minute advance notifications
- **Scheduled Times**: Breakfast (8:00 AM), Lunch (12:30 PM), Dinner (6:30 PM)

### Professional Design
- **Minimalist UI**: Clean black, white, and grey color scheme
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Modern Typography**: System font stack for native rendering
- **Smooth Interactions**: Loading animations and hover effects

## Demo

Try it live: [Add your deployed URL here]

## Screenshots

[Add screenshots of your application here]

## Installation

### Option 1: Clone the Repository
```bash
git clone https://github.com/alecneish/fitness-meal-planner.git
cd fitness-meal-planner
```

### Option 2: Download ZIP
Download the latest release and extract the files.

## Usage

1. Open `index.html` in your web browser
2. Fill in your personal information:
   - Age, gender, height, weight
   - Activity level
3. Select your fitness goal and daily budget
4. Click "Generate Meal Plan"
5. View your personalized meal plan with calorie calculations
6. Export to your calendar using the download button

## Project Structure

```
fitness-meal-planner/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Application logic
├── design.md           # Design documentation
├── requirements.md     # Requirements specification
├── tasks.md            # Development tasks
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Google Calendar API**: Optional calendar integration

## Calorie Calculation Formulas

### BMR (Mifflin-St Jeor Equation)
- **Male**: (10 × weight_kg) + (6.25 × height_cm) - (5 × age) + 5
- **Female**: (10 × weight_kg) + (6.25 × height_cm) - (5 × age) - 161

### TDEE
```
TDEE = BMR × Activity Level Multiplier
```

### Activity Levels
- Sedentary: 1.2
- Light (1-3 days/week): 1.375
- Moderate (3-5 days/week): 1.55
- Very Active (6-7 days/week): 1.725
- Extremely Active: 1.9

### Target Calories
- **Weight Loss**: TDEE - 500 cal
- **Muscle Gain**: TDEE + 400 cal
- **Maintenance**: TDEE
- **Endurance**: TDEE + 250 cal

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select main branch and root directory
4. Save

### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository

### Vercel
```bash
vercel deploy
```

## Google Calendar API Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable the Google Calendar API
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins
6. Replace `YOUR_CLIENT_ID` and `YOUR_API_KEY` in `script.js`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Weekly meal planning
- [ ] Shopping list generation
- [ ] Recipe instructions
- [ ] Meal customization and swapping
- [ ] Allergen filtering
- [ ] User accounts
- [ ] Metric unit support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Nutritional calculations based on the Mifflin-St Jeor equation
- Design inspired by modern SaaS products (Linear, Vercel, Apple)
- Calendar integration using iCalendar (RFC 5545) format

## Contact

Your Name - [@yourhandle](https://twitter.com/yourhandle)

Project Link: [https://github.com/alecneish/fitness-meal-planner](https://github.com/alecneish/fitness-meal-planner)

## Version History

### v2.0 (Current)
- Added personalized calorie calculations (BMR, TDEE)
- Personal information input form
- Calorie information display
- Enhanced form organization

### v1.0
- Initial release
- Basic meal planning
- Calendar export
- 36 unique meals

---

Made with ❤️ for fitness enthusiasts
