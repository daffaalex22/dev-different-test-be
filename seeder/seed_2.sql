-- First, get your user_id from the auth.users table
-- You can replace this with your actual user_id after running: SELECT id FROM auth.users LIMIT 1;
DO $$
DECLARE
    user_id_var UUID;
BEGIN
    -- Get the first user_id from auth.users
    SELECT id INTO user_id_var FROM auth.users WHERE email=''; -- CHANGE THIS TO USE ACTUAL EMAIL

    -- Insert 20 properties with realistic New York locations
    INSERT INTO properties (user_id, title, price, lat, lng, image_url, bedrooms, bathrooms, description)
    VALUES
    -- Manhattan properties
    (user_id_var, 'Luxury Penthouse at Central Park', 8500000, 40.767778, -73.971111, 'https://picsum.photos/400/300?random=1', 4, 4.5, 'Stunning penthouse with panoramic park views'),
    (user_id_var, 'Modern Tribeca Loft', 4200000, 40.719167, -74.006389, 'https://picsum.photos/400/300?random=2', 3, 2, 'Converted industrial loft with high ceilings'),
    (user_id_var, 'Upper East Side Classic', 5900000, 40.773889, -73.963889, 'https://picsum.photos/400/300?random=3', 3, 3, 'Pre-war elegance with modern amenities'),
    (user_id_var, 'Chelsea Art District Condo', 3800000, 40.748889, -74.004722, 'https://picsum.photos/400/300?random=4', 2, 2, 'Contemporary living in art district'),
    
    -- Brooklyn properties
    (user_id_var, 'DUMBO Waterfront Apartment', 2900000, 40.703056, -73.989722, 'https://picsum.photos/400/300?random=5', 2, 2, 'Bridge views and modern finishes'),
    (user_id_var, 'Williamsburg Industrial Conversion', 2400000, 40.718889, -73.965556, 'https://picsum.photos/400/300?random=6', 2, 2, 'Converted warehouse space'),
    (user_id_var, 'Park Slope Brownstone', 4500000, 40.673889, -73.978889, 'https://picsum.photos/400/300?random=7', 4, 3.5, 'Historic brownstone with garden'),
    (user_id_var, 'Brooklyn Heights Classic', 3900000, 40.696944, -73.993611, 'https://picsum.photos/400/300?random=8', 3, 2.5, 'Promenade views and period details'),
    
    -- Financial District
    (user_id_var, 'FiDi Luxury High-Rise', 3200000, 40.707222, -74.011667, 'https://picsum.photos/400/300?random=9', 2, 2, 'Harbor views from the 40th floor'),
    (user_id_var, 'Wall Street Executive Condo', 4100000, 40.706944, -74.008889, 'https://picsum.photos/400/300?random=10', 3, 2.5, 'Steps from NYSE'),
    
    -- Upper West Side
    (user_id_var, 'Riverside Drive Pre-War', 3600000, 40.801944, -73.972778, 'https://picsum.photos/400/300?random=11', 3, 2, 'River views and original details'),
    (user_id_var, 'Central Park West Classic Six', 5500000, 40.779722, -73.973889, 'https://picsum.photos/400/300?random=12', 3, 3, 'Park views and doorman building'),
    
    -- Midtown
    (user_id_var, 'Fifth Avenue Pied-à-terre', 2800000, 40.762778, -73.973889, 'https://picsum.photos/400/300?random=13', 1, 1.5, 'Luxury shopping district location'),
    (user_id_var, 'Times Square Sky Palace', 4700000, 40.758889, -73.985278, 'https://picsum.photos/400/300?random=14', 3, 3, 'City lights and theater district'),
    
    -- Lower East Side
    (user_id_var, 'LES Boutique Condo', 1900000, 40.718611, -73.990278, 'https://picsum.photos/400/300?random=15', 2, 1, 'Hip neighborhood new development'),
    (user_id_var, 'Essex Crossing Luxury', 2600000, 40.717500, -73.988611, 'https://picsum.photos/400/300?random=16', 2, 2, 'New development with amenities'),
    
    -- Greenwich Village
    (user_id_var, 'Village Historic Townhouse', 7900000, 40.733611, -74.002778, 'https://picsum.photos/400/300?random=17', 5, 4.5, 'Landmark district gem'),
    (user_id_var, 'Washington Square Loft', 4300000, 40.731111, -73.997222, 'https://picsum.photos/400/300?random=18', 3, 2, 'Park views and original details'),
    
    -- SoHo
    (user_id_var, 'SoHo Cast Iron Classic', 6200000, 40.723889, -74.000278, 'https://picsum.photos/400/300?random=19', 3, 3, 'Historic cast iron building'),
    (user_id_var, 'West Broadway Penthouse', 8900000, 40.725278, -74.004167, 'https://picsum.photos/400/300?random=20', 4, 4, 'Full floor with private terrace');

END $$;