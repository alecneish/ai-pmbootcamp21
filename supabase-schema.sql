-- Supabase Database Schema for Fitness Meal Planner
-- Run this SQL in your Supabase SQL Editor to create the tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User Profiles Table
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_code TEXT UNIQUE NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 13 AND age <= 100),
    gender TEXT NOT NULL CHECK (gender IN ('male', 'female')),
    height_feet INTEGER NOT NULL CHECK (height_feet >= 3 AND height_feet <= 8),
    height_inches INTEGER NOT NULL CHECK (height_inches >= 0 AND height_inches <= 11),
    weight DECIMAL(5,2) NOT NULL CHECK (weight >= 50 AND weight <= 500),
    activity_level DECIMAL(3,3) NOT NULL CHECK (activity_level IN (1.2, 1.375, 1.55, 1.725, 1.9)),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Custom Meals Table
CREATE TABLE custom_meals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_code TEXT NOT NULL,
    name TEXT NOT NULL,
    calories INTEGER NOT NULL CHECK (calories > 0),
    protein INTEGER NOT NULL CHECK (protein >= 0),
    carbs INTEGER NOT NULL CHECK (carbs >= 0),
    fat INTEGER NOT NULL CHECK (fat >= 0),
    cost DECIMAL(6,2) NOT NULL CHECK (cost >= 0),
    items JSONB NOT NULL, -- Array of ingredient strings
    meal_type TEXT NOT NULL CHECK (meal_type IN ('breakfast', 'lunch', 'dinner')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Favorite Meals Table
CREATE TABLE favorite_meals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_code TEXT NOT NULL,
    goal TEXT NOT NULL CHECK (goal IN ('weight-loss', 'muscle-gain', 'maintenance', 'endurance')),
    tier TEXT NOT NULL CHECK (tier IN ('low', 'medium', 'high')),
    meal_type TEXT NOT NULL CHECK (meal_type IN ('breakfast', 'lunch', 'dinner')),
    meal_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_code, goal, tier, meal_type, meal_name)
);

-- Saved Meal Plans Table
CREATE TABLE saved_meal_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_code TEXT NOT NULL,
    goal TEXT NOT NULL CHECK (goal IN ('weight-loss', 'muscle-gain', 'maintenance', 'endurance')),
    budget DECIMAL(6,2) NOT NULL,
    tdee INTEGER NOT NULL,
    target_calories INTEGER NOT NULL,
    meals JSONB NOT NULL, -- Array of meal objects
    saved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_user_profiles_code ON user_profiles(user_code);
CREATE INDEX idx_custom_meals_user_code ON custom_meals(user_code);
CREATE INDEX idx_favorite_meals_user_code ON favorite_meals(user_code);
CREATE INDEX idx_saved_meal_plans_user_code ON saved_meal_plans(user_code);
CREATE INDEX idx_saved_meal_plans_saved_at ON saved_meal_plans(saved_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_meals ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorite_meals ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_meal_plans ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anonymous access
-- Since we're not using authentication, we'll allow all operations
-- In production, you might want to add rate limiting or other protections

CREATE POLICY "Allow anonymous read access on user_profiles"
    ON user_profiles FOR SELECT
    USING (true);

CREATE POLICY "Allow anonymous insert on user_profiles"
    ON user_profiles FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow anonymous update on user_profiles"
    ON user_profiles FOR UPDATE
    USING (true);

CREATE POLICY "Allow anonymous read access on custom_meals"
    ON custom_meals FOR SELECT
    USING (true);

CREATE POLICY "Allow anonymous insert on custom_meals"
    ON custom_meals FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow anonymous delete on custom_meals"
    ON custom_meals FOR DELETE
    USING (true);

CREATE POLICY "Allow anonymous read access on favorite_meals"
    ON favorite_meals FOR SELECT
    USING (true);

CREATE POLICY "Allow anonymous insert on favorite_meals"
    ON favorite_meals FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow anonymous delete on favorite_meals"
    ON favorite_meals FOR DELETE
    USING (true);

CREATE POLICY "Allow anonymous read access on saved_meal_plans"
    ON saved_meal_plans FOR SELECT
    USING (true);

CREATE POLICY "Allow anonymous insert on saved_meal_plans"
    ON saved_meal_plans FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow anonymous delete on saved_meal_plans"
    ON saved_meal_plans FOR DELETE
    USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE user_profiles IS 'Stores user personal information with a unique 6-digit code for retrieval';
COMMENT ON TABLE custom_meals IS 'User-created custom meals that can be used in meal plans';
COMMENT ON TABLE favorite_meals IS 'Tracks which meals users have marked as favorites';
COMMENT ON TABLE saved_meal_plans IS 'Historical meal plans saved by users';
