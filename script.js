// Meal database organized by goal and budget tier
const mealDatabase = {
    'weight-loss': {
        low: {
            breakfast: { name: 'Oatmeal with Berries', calories: 300, protein: 10, carbs: 50, fat: 5, cost: 2.50, items: ['1/2 cup oats', '1/2 cup mixed berries', '1 tsp honey'] },
            lunch: { name: 'Grilled Chicken Salad', calories: 400, protein: 35, carbs: 20, fat: 15, cost: 5.00, items: ['4oz grilled chicken breast', 'Mixed greens', 'Cherry tomatoes', 'Balsamic vinegar'] },
            dinner: { name: 'Baked Fish with Vegetables', calories: 450, protein: 40, carbs: 25, fat: 12, cost: 6.00, items: ['6oz white fish', 'Roasted broccoli', 'Steamed carrots', 'Lemon'] }
        },
        medium: {
            breakfast: { name: 'Greek Yogurt Parfait', calories: 350, protein: 20, carbs: 45, fat: 8, cost: 4.00, items: ['1 cup Greek yogurt', 'Granola', 'Fresh berries', 'Almonds'] },
            lunch: { name: 'Turkey & Avocado Wrap', calories: 420, protein: 30, carbs: 35, fat: 18, cost: 6.50, items: ['Whole wheat tortilla', '4oz turkey breast', '1/4 avocado', 'Spinach', 'Tomato'] },
            dinner: { name: 'Salmon with Quinoa', calories: 480, protein: 38, carbs: 30, fat: 20, cost: 8.50, items: ['5oz salmon fillet', '1/2 cup quinoa', 'Asparagus', 'Olive oil'] }
        },
        high: {
            breakfast: { name: 'Protein Smoothie Bowl', calories: 380, protein: 25, carbs: 48, fat: 10, cost: 6.00, items: ['Protein powder', 'Acai', 'Banana', 'Chia seeds', 'Fresh fruit toppings'] },
            lunch: { name: 'Grass-fed Steak Salad', calories: 450, protein: 40, carbs: 20, fat: 22, cost: 12.00, items: ['5oz grass-fed steak', 'Arugula', 'Goat cheese', 'Walnuts', 'Balsamic reduction'] },
            dinner: { name: 'Sea Bass with Vegetables', calories: 500, protein: 42, carbs: 28, fat: 18, cost: 15.00, items: ['6oz sea bass', 'Grilled asparagus', 'Sweet potato', 'Herb butter'] }
        }
    },
    'muscle-gain': {
        low: {
            breakfast: { name: 'Eggs & Whole Wheat Toast', calories: 500, protein: 28, carbs: 45, fat: 20, cost: 3.00, items: ['3 whole eggs', '2 slices whole wheat toast', 'Peanut butter'] },
            lunch: { name: 'Chicken Rice Bowl', calories: 650, protein: 45, carbs: 70, fat: 15, cost: 5.50, items: ['6oz chicken breast', '1 cup brown rice', 'Black beans', 'Salsa'] },
            dinner: { name: 'Ground Beef Pasta', calories: 700, protein: 48, carbs: 75, fat: 22, cost: 6.50, items: ['6oz lean ground beef', 'Whole wheat pasta', 'Marinara sauce', 'Vegetables'] }
        },
        medium: {
            breakfast: { name: 'Protein Pancakes', calories: 550, protein: 35, carbs: 60, fat: 15, cost: 5.00, items: ['Protein powder', 'Oat flour', 'Eggs', 'Banana', 'Maple syrup'] },
            lunch: { name: 'Steak & Sweet Potato', calories: 720, protein: 50, carbs: 65, fat: 25, cost: 9.00, items: ['6oz sirloin steak', 'Large sweet potato', 'Green beans', 'Butter'] },
            dinner: { name: 'Chicken Stir-Fry', calories: 680, protein: 52, carbs: 70, fat: 18, cost: 7.50, items: ['7oz chicken breast', 'Mixed vegetables', 'Brown rice', 'Teriyaki sauce'] }
        },
        high: {
            breakfast: { name: 'Steak & Eggs', calories: 600, protein: 48, carbs: 35, fat: 28, cost: 10.00, items: ['5oz ribeye steak', '3 eggs', 'Hash browns', 'Avocado'] },
            lunch: { name: 'Salmon Poke Bowl', calories: 750, protein: 55, carbs: 75, fat: 22, cost: 14.00, items: ['7oz salmon', 'Sushi rice', 'Edamame', 'Seaweed', 'Avocado'] },
            dinner: { name: 'Lamb Chops with Quinoa', calories: 780, protein: 58, carbs: 60, fat: 30, cost: 18.00, items: ['8oz lamb chops', 'Quinoa pilaf', 'Grilled vegetables', 'Mint sauce'] }
        }
    },
    'maintenance': {
        low: {
            breakfast: { name: 'Scrambled Eggs & Toast', calories: 400, protein: 20, carbs: 40, fat: 15, cost: 2.80, items: ['2 eggs', '2 slices whole grain toast', 'Butter', 'Orange juice'] },
            lunch: { name: 'Chicken Sandwich', calories: 500, protein: 32, carbs: 50, fat: 18, cost: 5.00, items: ['4oz chicken breast', 'Whole wheat bun', 'Lettuce', 'Tomato', 'Mayo'] },
            dinner: { name: 'Spaghetti with Meatballs', calories: 600, protein: 35, carbs: 65, fat: 20, cost: 6.00, items: ['Pasta', 'Turkey meatballs', 'Marinara sauce', 'Parmesan'] }
        },
        medium: {
            breakfast: { name: 'Avocado Toast with Eggs', calories: 450, protein: 22, carbs: 42, fat: 22, cost: 5.50, items: ['2 slices sourdough', '1/2 avocado', '2 poached eggs', 'Everything seasoning'] },
            lunch: { name: 'Buddha Bowl', calories: 550, protein: 28, carbs: 60, fat: 20, cost: 8.00, items: ['Quinoa', 'Chickpeas', 'Sweet potato', 'Kale', 'Tahini dressing'] },
            dinner: { name: 'Chicken Fajitas', calories: 580, protein: 38, carbs: 55, fat: 22, cost: 7.50, items: ['5oz chicken', 'Bell peppers', 'Onions', 'Tortillas', 'Guacamole'] }
        },
        high: {
            breakfast: { name: 'Smoked Salmon Bagel', calories: 480, protein: 25, carbs: 50, fat: 20, cost: 8.00, items: ['Everything bagel', 'Smoked salmon', 'Cream cheese', 'Capers', 'Red onion'] },
            lunch: { name: 'Sushi Platter', calories: 600, protein: 30, carbs: 70, fat: 18, cost: 15.00, items: ['Assorted nigiri', 'California roll', 'Edamame', 'Miso soup'] },
            dinner: { name: 'Pan-Seared Duck Breast', calories: 650, protein: 42, carbs: 45, fat: 28, cost: 20.00, items: ['Duck breast', 'Wild rice', 'Roasted root vegetables', 'Cherry reduction'] }
        }
    },
    'endurance': {
        low: {
            breakfast: { name: 'Banana Oatmeal', calories: 450, protein: 12, carbs: 80, fat: 8, cost: 2.50, items: ['Oats', '2 bananas', 'Honey', 'Cinnamon'] },
            lunch: { name: 'Pasta Primavera', calories: 600, protein: 20, carbs: 95, fat: 12, cost: 5.00, items: ['Whole wheat pasta', 'Mixed vegetables', 'Olive oil', 'Garlic'] },
            dinner: { name: 'Chicken & Rice', calories: 650, protein: 40, carbs: 85, fat: 12, cost: 6.00, items: ['5oz chicken', 'White rice', 'Steamed broccoli', 'Soy sauce'] }
        },
        medium: {
            breakfast: { name: 'Energy Smoothie', calories: 500, protein: 20, carbs: 85, fat: 10, cost: 5.00, items: ['Banana', 'Dates', 'Protein powder', 'Almond milk', 'Spinach', 'Oats'] },
            lunch: { name: 'Turkey & Sweet Potato', calories: 650, protein: 38, carbs: 90, fat: 14, cost: 7.50, items: ['6oz turkey breast', 'Large sweet potato', 'Green beans', 'Cranberry sauce'] },
            dinner: { name: 'Salmon Pasta', calories: 700, protein: 42, carbs: 88, fat: 18, cost: 9.00, items: ['5oz salmon', 'Whole wheat pasta', 'Spinach', 'Lemon cream sauce'] }
        },
        high: {
            breakfast: { name: 'Athlete Power Bowl', calories: 550, protein: 25, carbs: 90, fat: 12, cost: 8.00, items: ['Acai bowl', 'Granola', 'Fruits', 'Honey', 'Chia seeds', 'Almond butter'] },
            lunch: { name: 'Grilled Chicken Grain Bowl', calories: 700, protein: 45, carbs: 95, fat: 16, cost: 12.00, items: ['6oz chicken', 'Quinoa', 'Farro', 'Roasted vegetables', 'Tahini'] },
            dinner: { name: 'Venison with Wild Rice', calories: 750, protein: 50, carbs: 92, fat: 18, cost: 18.00, items: ['7oz venison', 'Wild rice blend', 'Brussels sprouts', 'Berry compote'] }
        }
    }
};

// Meal times
const mealTimes = {
    breakfast: '8:00 AM',
    lunch: '12:30 PM',
    dinner: '6:30 PM'
};

// Goal descriptions
const goalDescriptions = {
    'weight-loss': 'Focus on calorie deficit with high protein to preserve muscle',
    'muscle-gain': 'High protein and calorie surplus to support muscle growth',
    'maintenance': 'Balanced nutrition to maintain current weight and health',
    'endurance': 'High carbohydrate intake to fuel long-duration activities'
};

// BMR Calculation using Mifflin-St Jeor Equation
function calculateBMR(weight, heightFeet, heightInches, age, gender) {
    // Convert imperial to metric
    const weightKg = weight * 0.453592; // lbs to kg
    const totalInches = (heightFeet * 12) + heightInches;
    const heightCm = totalInches * 2.54; // inches to cm

    let bmr;
    if (gender === 'male') {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }

    return Math.round(bmr);
}

// TDEE Calculation (BMR × Activity Level)
function calculateTDEE(bmr, activityLevel) {
    return Math.round(bmr * activityLevel);
}

// Target Calories based on Fitness Goal
function calculateTargetCalories(tdee, goal) {
    let target;
    switch(goal) {
        case 'weight-loss':
            target = tdee - 500; // 1 lb/week loss
            break;
        case 'muscle-gain':
            target = tdee + 400; // Moderate surplus for muscle
            break;
        case 'maintenance':
            target = tdee;
            break;
        case 'endurance':
            target = tdee + 250; // Extra energy for endurance
            break;
        default:
            target = tdee;
    }
    return Math.round(target);
}

// Update goal description on selection
document.getElementById('fitnessGoal').addEventListener('change', function() {
    const description = goalDescriptions[this.value] || '';
    document.getElementById('goalDescription').textContent = description;
});

// Form submission
document.getElementById('mealPlanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get personal information
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const heightFeet = parseInt(document.getElementById('heightFeet').value);
    const heightInches = parseInt(document.getElementById('heightInches').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);

    // Get meal preferences
    const goal = document.getElementById('fitnessGoal').value;
    const budget = parseFloat(document.getElementById('budget').value);
    const dietary = document.getElementById('dietaryPreference').value;

    // Calculate BMR, TDEE, and Target Calories
    const bmr = calculateBMR(weight, heightFeet, heightInches, age, gender);
    const tdee = calculateTDEE(bmr, activityLevel);
    const targetCalories = calculateTargetCalories(tdee, goal);

    // Show loading
    document.getElementById('loading').classList.add('active');
    document.getElementById('mealPlan').classList.remove('active');

    // Simulate processing time
    setTimeout(() => {
        generateMealPlan(goal, budget, dietary, tdee, targetCalories);
        document.getElementById('loading').classList.remove('active');
        document.getElementById('mealPlan').classList.add('active');
    }, 1500);
});

function generateMealPlan(goal, budget, dietary, tdee, targetCalories) {
    // Determine budget tier
    let tier = 'low';
    if (budget >= 30) tier = 'high';
    else if (budget >= 18) tier = 'medium';

    const meals = mealDatabase[goal][tier];
    const mealCardsContainer = document.getElementById('mealCards');
    mealCardsContainer.innerHTML = '';

    // Store meals for calendar sync
    window.currentMealPlan = [];
    let totalCalories = 0;

    Object.keys(meals).forEach(mealType => {
        const meal = meals[mealType];
        const mealCard = document.createElement('div');
        mealCard.className = 'meal-card';

        const emoji = mealType === 'breakfast' ? '🌅' : mealType === 'lunch' ? '☀️' : '🌙';

        // Add meal calories to total
        totalCalories += meal.calories;

        mealCard.innerHTML = `
            <h3>
                ${emoji} ${mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                <span class="meal-time">${mealTimes[mealType]}</span>
            </h3>
            <div class="meal-details">
                <h4>${meal.name}</h4>
                <div class="meal-item">
                    ${meal.items.map(item => `• ${item}`).join('<br>')}
                </div>
                <div class="nutrition-info">
                    <span class="nutrition-badge">🔥 ${meal.calories} cal</span>
                    <span class="nutrition-badge">💪 ${meal.protein}g protein</span>
                    <span class="nutrition-badge">🍞 ${meal.carbs}g carbs</span>
                    <span class="nutrition-badge">🥑 ${meal.fat}g fat</span>
                    <span class="nutrition-badge">💵 $${meal.cost.toFixed(2)}</span>
                </div>
            </div>
        `;

        mealCardsContainer.appendChild(mealCard);

        // Store for calendar
        window.currentMealPlan.push({
            type: mealType,
            name: meal.name,
            time: mealTimes[mealType],
            items: meal.items
        });
    });

    // Update calorie information display
    document.getElementById('tdeeValue').textContent = tdee.toLocaleString();
    document.getElementById('targetValue').textContent = targetCalories.toLocaleString();
    document.getElementById('mealPlanValue').textContent = totalCalories.toLocaleString();
}

// Google Calendar Integration
let accessToken = null;
let tokenClient = null;

// Load Google API
function loadGoogleAPI() {
    const script1 = document.createElement('script');
    script1.src = 'https://accounts.google.com/gsi/client';
    script1.async = true;
    script1.defer = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://apis.google.com/js/api.js';
    script2.async = true;
    script2.defer = true;
    script2.onload = () => {
        gapi.load('client', initializeGapiClient);
    };
    document.head.appendChild(script2);
}

// Initialize Google API Client
async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: 'YOUR_API_KEY', // Replace with your API key
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    });

    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Replace with your client ID
        scope: 'https://www.googleapis.com/auth/calendar.events',
        callback: (response) => {
            if (response.access_token) {
                accessToken = response.access_token;
                addEventsToCalendar();
            }
        },
    });
}

// Sync to Google Calendar
document.getElementById('syncCalendar').addEventListener('click', function() {
    if (!window.currentMealPlan || window.currentMealPlan.length === 0) {
        alert('Please generate a meal plan first!');
        return;
    }

    // For demo purposes without actual Google API credentials
    // Show a modal with instructions
    if (typeof gapi === 'undefined' || !tokenClient) {
        showCalendarInstructions();
        return;
    }

    // Request access token
    tokenClient.requestAccessToken();
});

async function addEventsToCalendar() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    for (const meal of window.currentMealPlan) {
        const [hours, minutes] = meal.time.replace(/AM|PM/, '').trim().split(':');
        const isPM = meal.time.includes('PM');
        const hour24 = isPM && hours !== '12' ? parseInt(hours) + 12 : hours === '12' && !isPM ? 0 : parseInt(hours);

        const startTime = new Date(tomorrow);
        startTime.setHours(hour24, parseInt(minutes), 0);

        const endTime = new Date(startTime);
        endTime.setMinutes(endTime.getMinutes() + 30);

        const event = {
            summary: `🍽️ ${meal.name}`,
            description: `${meal.type.charAt(0).toUpperCase() + meal.type.slice(1)}\n\nIngredients:\n${meal.items.join('\n')}`,
            start: {
                dateTime: startTime.toISOString(),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            end: {
                dateTime: endTime.toISOString(),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'popup', minutes: 30 },
                ],
            },
        };

        try {
            await gapi.client.calendar.events.insert({
                calendarId: 'primary',
                resource: event,
            });
        } catch (error) {
            console.error('Error adding event:', error);
        }
    }

    document.getElementById('successMessage').classList.add('active');
}

function showCalendarInstructions() {
    const instructions = `
To enable Google Calendar sync:

1. Go to Google Cloud Console (console.cloud.google.com)
2. Create a new project
3. Enable the Google Calendar API
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins: ${window.location.origin}
6. Replace YOUR_CLIENT_ID and YOUR_API_KEY in the code

For now, here's your meal plan to add manually:

${window.currentMealPlan.map(meal => `
${meal.type.toUpperCase()} - ${meal.time}
${meal.name}
${meal.items.join(', ')}
`).join('\n')}
    `;

    alert(instructions);

    // Show success message anyway for demo
    document.getElementById('successMessage').innerHTML =
        'Copy your meal plan details above and add them to Google Calendar manually, or set up the API to enable automatic sync!';
    document.getElementById('successMessage').classList.add('active');
}

// Download .ics calendar file
document.getElementById('downloadCalendar').addEventListener('click', function() {
    if (!window.currentMealPlan || window.currentMealPlan.length === 0) {
        alert('Please generate a meal plan first!');
        return;
    }

    const icsContent = generateICSFile();
    downloadFile(icsContent, 'fitness-meal-plan.ics', 'text/calendar');

    document.getElementById('successMessage').innerHTML =
        'Calendar file downloaded! Import it into Google Calendar, Apple Calendar, or Outlook.';
    document.getElementById('successMessage').classList.add('active');

    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('successMessage').classList.remove('active');
    }, 5000);
});

function generateICSFile() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // ICS file header
    let ics = 'BEGIN:VCALENDAR\r\n';
    ics += 'VERSION:2.0\r\n';
    ics += 'PRODID:-//Fitness Meal Planner//EN\r\n';
    ics += 'CALSCALE:GREGORIAN\r\n';
    ics += 'METHOD:PUBLISH\r\n';
    ics += 'X-WR-CALNAME:Fitness Meal Plan\r\n';
    ics += 'X-WR-TIMEZONE:' + Intl.DateTimeFormat().resolvedOptions().timeZone + '\r\n';

    // Add each meal as an event
    window.currentMealPlan.forEach(meal => {
        const [hours, minutes] = meal.time.replace(/AM|PM/, '').trim().split(':');
        const isPM = meal.time.includes('PM');
        const hour24 = isPM && hours !== '12' ? parseInt(hours) + 12 : hours === '12' && !isPM ? 0 : parseInt(hours);

        const startTime = new Date(tomorrow);
        startTime.setHours(hour24, parseInt(minutes), 0, 0);

        const endTime = new Date(startTime);
        endTime.setMinutes(endTime.getMinutes() + 30);

        // Format dates for ICS (YYYYMMDDTHHMMSS)
        const formatICSDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hour = String(date.getHours()).padStart(2, '0');
            const minute = String(date.getMinutes()).padStart(2, '0');
            const second = String(date.getSeconds()).padStart(2, '0');
            return `${year}${month}${day}T${hour}${minute}${second}`;
        };

        const uid = `${meal.type}-${Date.now()}@fitness-meal-planner`;
        const timestamp = formatICSDate(new Date());

        ics += 'BEGIN:VEVENT\r\n';
        ics += 'UID:' + uid + '\r\n';
        ics += 'DTSTAMP:' + timestamp + '\r\n';
        ics += 'DTSTART:' + formatICSDate(startTime) + '\r\n';
        ics += 'DTEND:' + formatICSDate(endTime) + '\r\n';
        ics += 'SUMMARY:' + meal.name + '\r\n';
        ics += 'DESCRIPTION:' + meal.type.charAt(0).toUpperCase() + meal.type.slice(1) + '\\n\\nIngredients:\\n' + meal.items.join('\\n') + '\r\n';
        ics += 'LOCATION:Home\r\n';
        ics += 'STATUS:CONFIRMED\r\n';
        ics += 'BEGIN:VALARM\r\n';
        ics += 'TRIGGER:-PT30M\r\n';
        ics += 'ACTION:DISPLAY\r\n';
        ics += 'DESCRIPTION:Meal Reminder - ' + meal.name + '\r\n';
        ics += 'END:VALARM\r\n';
        ics += 'END:VEVENT\r\n';
    });

    ics += 'END:VCALENDAR\r\n';
    return ics;
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Load Google API on page load
window.addEventListener('load', loadGoogleAPI);
