# Supabase Setup Guide

This guide will walk you through setting up Supabase as the backend database for your Fitness Meal Planner application. This enables features like saving user profiles and storing meal plans in the cloud.

## What is Supabase?

Supabase is an open-source Firebase alternative that provides a PostgreSQL database, authentication, storage, and real-time subscriptions. For this project, we're using it as a simple database to store user profiles and meal plans without requiring authentication.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Your Fitness Meal Planner project files
- 10-15 minutes of setup time

## Free Tier Limits

Supabase offers a generous free tier that includes:
- 500 MB database space
- 1 GB file storage
- 2 GB bandwidth per month
- 50,000 monthly active users

This is more than enough for personal use and small-scale deployments.

---

## Step 1: Create a Supabase Account

1. **Navigate to Supabase**
   - Open your browser and go to [https://supabase.com](https://supabase.com)

2. **Sign Up**
   - Click the "Start your project" or "Sign Up" button
   - You can sign up using:
     - GitHub account (recommended)
     - Email and password

3. **Verify Your Email**
   - Check your inbox for a verification email
   - Click the verification link

---

## Step 2: Create a New Project

1. **Access the Dashboard**
   - After logging in, you'll see your Supabase dashboard
   - Click "New Project" (or "Create a new project" if this is your first one)

2. **Select or Create an Organization**
   - If this is your first project, you'll need to create an organization
   - Enter an organization name (e.g., "Personal Projects")
   - Click "Create organization"

3. **Configure Your Project**
   - **Name**: Enter a project name (e.g., "fitness-meal-planner")
   - **Database Password**: Create a strong password
     - ⚠️ **Important**: Save this password! You'll need it for direct database access
     - Store it in a password manager or secure location
   - **Region**: Choose the region closest to your users
     - US East (North Virginia) for US East Coast
     - US West (Oregon) for US West Coast
     - Europe (Frankfurt) for EU
     - Southeast Asia (Singapore) for Asia Pacific
   - **Pricing Plan**: Select "Free" (default)

4. **Create the Project**
   - Click "Create new project"
   - Wait 1-2 minutes while Supabase sets up your database
   - You'll see a progress indicator

---

## Step 3: Set Up the Database Schema

1. **Open the SQL Editor**
   - In your project dashboard, look for the left sidebar
   - Click on the SQL Editor icon (looks like `</>`)

2. **Create a New Query**
   - Click "New query" button in the top right

3. **Copy the Schema SQL**
   - Open the `supabase-schema.sql` file from your project
   - Copy all the contents (Ctrl+A, then Ctrl+C or Cmd+A, Cmd+C on Mac)

4. **Paste and Run the Schema**
   - Paste the SQL into the Supabase SQL editor
   - Click the "Run" button (or press Ctrl+Enter / Cmd+Enter)
   - You should see a success message: "Success. No rows returned"

5. **Verify the Tables Were Created**
   - Click on "Table Editor" in the left sidebar
   - You should see 4 new tables:
     - `user_profiles`
     - `custom_meals`
     - `favorite_meals`
     - `saved_meal_plans`

---

## Step 4: Get Your API Credentials

1. **Navigate to API Settings**
   - In the left sidebar, click the gear icon (⚙️) to open "Project Settings"
   - Click on "API" in the settings menu

2. **Copy Your Project URL**
   - Look for the "Project URL" section
   - It will look like: `https://xxxxxxxxxxxxx.supabase.co`
   - Click the copy icon next to it
   - Save this URL temporarily in a text editor

3. **Copy Your Anon Key**
   - Scroll down to the "Project API keys" section
   - Find the `anon` `public` key
   - Click the copy icon next to it
   - Save this key temporarily in a text editor
   - ⚠️ **Note**: The anon key is safe to use in client-side code

4. **Do NOT Copy the Service Role Key**
   - The `service_role` `secret` key should never be used in client-side code
   - It bypasses all security rules and should only be used on a backend server

---

## Step 5: Configure Your Application

1. **Locate the Config Example File**
   - In your project folder, find `config.example.js`

2. **Create Your Config File**
   - Copy `config.example.js` to `config.js`:
     ```bash
     # On Mac/Linux:
     cp config.example.js config.js

     # On Windows (Command Prompt):
     copy config.example.js config.js
     ```
   - Or manually create a new file named `config.js`

3. **Add Your Credentials**
   - Open `config.js` in your code editor
   - Replace the placeholders with your actual credentials:
   ```javascript
   const SUPABASE_CONFIG = {
       url: 'https://xxxxxxxxxxxxx.supabase.co',  // Your Project URL
       anonKey: 'your-actual-anon-key-here'        // Your Anon Key
   };
   ```

4. **Save the File**
   - Make sure to save `config.js`
   - ⚠️ **Important**: Never commit this file to Git!
   - The `.gitignore` file is already configured to exclude `config.js`

---

## Step 6: Test the Integration

1. **Open the Application**
   - Open `index.html` in your web browser
   - You can double-click the file or use a local server

2. **Test Profile Saving**
   - Fill in your personal information:
     - Age, gender, height, weight, activity level
   - Click the "Save Profile" button
   - You should see:
     - A success message or notification
     - Your profile code displayed (6 digits)
   - If you see an error:
     - Check the browser console (F12 or Right-click → Inspect → Console)
     - Verify your credentials in `config.js`

3. **Test Profile Loading**
   - Refresh the page (or open in a new tab)
   - Enter your 6-digit code in the "Load Profile" section
   - Click "Load Profile"
   - Your information should auto-fill in the form

4. **Test Meal Plan Saving**
   - Fill in all required fields
   - Click "Generate Meal Plan"
   - Once your meal plan is displayed, click "Save This Meal Plan"
   - You should see a success message

5. **Verify in Supabase Dashboard**
   - Go back to your Supabase dashboard
   - Click "Table Editor" in the left sidebar
   - Select `user_profiles` table
   - You should see your saved profile data
   - Check `saved_meal_plans` to see your saved meal plan

---

## Troubleshooting

### Error: "Invalid API Key"
**Problem**: The credentials in `config.js` are incorrect.

**Solution**:
1. Double-check that you copied the entire key (they're very long)
2. Make sure there are no extra spaces before or after the key
3. Verify you're using the `anon` key, not the `service_role` key
4. Ensure the URL starts with `https://`

### Error: "Failed to fetch"
**Problem**: CORS policy or network issue.

**Solution**:
1. Check that your project URL is correct
2. Try accessing the URL directly in your browser to verify it's active
3. If using a local file (file://), some browsers block requests. Try using a local server:
   ```bash
   # Python 3:
   python -m http.server 8000

   # Then open: http://localhost:8000
   ```

### Error: "Permission denied"
**Problem**: Row Level Security policies may not be set up correctly.

**Solution**:
1. Go to SQL Editor in Supabase
2. Run this query to check policies:
   ```sql
   SELECT * FROM pg_policies WHERE tablename IN (
       'user_profiles', 'custom_meals', 'favorite_meals', 'saved_meal_plans'
   );
   ```
3. If no policies are returned, re-run the entire `supabase-schema.sql` file

### Tables Not Showing Up
**Problem**: SQL script didn't run successfully.

**Solution**:
1. Go to SQL Editor
2. Re-run the entire `supabase-schema.sql` file
3. Check for any error messages in the output
4. If you see "already exists" errors, the tables were created but may not be visible. Try refreshing the page.

### Code Not Being Saved
**Problem**: LocalStorage might be disabled or blocked.

**Solution**:
1. Check browser settings to ensure cookies and local storage are enabled
2. Try in an incognito/private window to rule out extensions
3. The code should still be saved in the database, even if localStorage doesn't work

---

## Security Notes

### What We're Using
- **Anon Key**: Safe to use in client-side code
- **Row Level Security (RLS)**: Enabled on all tables
- **Anonymous Access**: Policies allow anyone to read/write their own data

### What's Protected
- The database password (only needed for direct database access)
- The service role key (should never be used in client-side code)
- Your `config.js` file (excluded from Git)

### Data Privacy
- No authentication means anyone with a 6-digit code can access that profile
- Codes are randomly generated (1 in 900,000 chance of collision)
- For production use with sensitive data, consider adding proper authentication

---

## Next Steps

Now that Supabase is set up, you can:

1. **Save Your Profile**
   - Create your profile and get your unique code
   - Share your code across devices to sync your profile

2. **Save Meal Plans**
   - Generate meal plans and save your favorites
   - Access them later using your profile code

3. **Deploy Your App**
   - Deploy to Netlify, Vercel, or GitHub Pages
   - Your database will work from any domain (CORS is configured)

4. **Future Enhancements**
   - Implement custom meal creation
   - Add favorites functionality
   - View meal plan history

---

## Database Schema Overview

For reference, here's what each table stores:

### `user_profiles`
- Personal information (age, gender, height, weight, activity level)
- Unique 6-digit user code for identification

### `custom_meals`
- User-created custom meals (not yet implemented in UI)
- Linked to user codes

### `favorite_meals`
- Meals marked as favorites (not yet implemented in UI)
- Linked to user codes

### `saved_meal_plans`
- Complete meal plans with all meals
- Goal, budget, and calorie information
- Linked to user codes

---

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)

---

## Support

If you encounter issues not covered in this guide:

1. Check the browser console for error messages (F12 → Console tab)
2. Verify all credentials are correctly copied
3. Ensure you're using the latest version of the project files
4. Check the [Supabase Status Page](https://status.supabase.com/) for outages

---

**Congratulations!** 🎉 You've successfully set up Supabase for your Fitness Meal Planner application. You can now save and load profiles and meal plans from anywhere!
