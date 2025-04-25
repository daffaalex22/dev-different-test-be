DO $$
DECLARE
    user_id_var UUID;
BEGIN
    -- Get a specific user_id (you can modify this to get a different user)
    SELECT id INTO user_id_var FROM auth.users WHERE email=''; -- USE ACTUAL EMAIL

    -- Insert 20 properties with realistic San Francisco locations
    INSERT INTO properties (user_id, title, price, lat, lng, image_url, bedrooms, bathrooms, description)
    VALUES
    -- Pacific Heights
    (user_id_var, 'Pacific Heights Manor', 12500000, 37.792778, -122.446111, 'https://picsum.photos/400/300?random=21', 6, 5.5, 'Prestigious mansion with bay views'),
    (user_id_var, 'Fillmore Street Classic', 7200000, 37.788889, -122.434722, 'https://picsum.photos/400/300?random=22', 4, 3.5, 'Victorian elegance with modern updates'),
    
    -- Russian Hill
    (user_id_var, 'Russian Hill View Home', 8900000, 37.801389, -122.419722, 'https://picsum.photos/400/300?random=23', 4, 4, 'Panoramic bay and bridge views'),
    (user_id_var, 'Hyde Street Residence', 6500000, 37.798333, -122.417778, 'https://picsum.photos/400/300?random=24', 3, 3, 'Cable car line location'),
    
    -- Nob Hill
    (user_id_var, 'Nob Hill Penthouse', 9500000, 37.793056, -122.414167, 'https://picsum.photos/400/300?random=25', 4, 4.5, 'Full-floor luxury with 360° views'),
    (user_id_var, 'Historic Nob Hill Flat', 4200000, 37.791667, -122.416389, 'https://picsum.photos/400/300?random=26', 2, 2, 'Pre-war details throughout'),
    
    -- Marina District
    (user_id_var, 'Marina Boulevard Estate', 11000000, 37.807222, -122.440278, 'https://picsum.photos/400/300?random=27', 5, 4.5, 'Waterfront luxury living'),
    (user_id_var, 'Chestnut Street Condo', 3800000, 37.800556, -122.436944, 'https://picsum.photos/400/300?random=28', 2, 2, 'Prime retail corridor location'),
    
    -- SOMA
    (user_id_var, 'SOMA Loft Penthouse', 4500000, 37.778889, -122.399722, 'https://picsum.photos/400/300?random=29', 2, 2.5, 'Contemporary urban living'),
    (user_id_var, 'Yerba Buena Adjacent', 2900000, 37.785556, -122.401944, 'https://picsum.photos/400/300?random=30', 1, 1.5, 'Arts district convenience'),
    
    -- Hayes Valley
    (user_id_var, 'Hayes Valley Victorian', 5600000, 37.776944, -122.423889, 'https://picsum.photos/400/300?random=31', 4, 3, 'Restored Victorian masterpiece'),
    (user_id_var, 'Patricia Green Adjacent', 3200000, 37.775833, -122.425278, 'https://picsum.photos/400/300?random=32', 2, 2, 'Park-side modern living'),
    
    -- Mission District
    (user_id_var, 'Mission Dolores Modern', 4100000, 37.759722, -122.427778, 'https://picsum.photos/400/300?random=33', 3, 2.5, 'Contemporary new construction'),
    (user_id_var, 'Valencia Corridor Loft', 2800000, 37.761389, -122.421944, 'https://picsum.photos/400/300?random=34', 2, 2, 'Hip restaurant row location'),
    
    -- Potrero Hill
    (user_id_var, 'Potrero Hill View Home', 4800000, 37.759444, -122.400278, 'https://picsum.photos/400/300?random=35', 3, 3, 'Skyline and bay views'),
    (user_id_var, '18th Street Contemporary', 3900000, 37.761667, -122.398611, 'https://picsum.photos/400/300?random=36', 3, 2.5, 'Modern design with city views'),
    
    -- North Beach
    (user_id_var, 'Telegraph Hill Residence', 7200000, 37.802778, -122.406111, 'https://picsum.photos/400/300?random=37', 4, 3.5, 'Coit Tower proximity'),
    (user_id_var, 'North Beach Classic', 5100000, 37.799722, -122.409722, 'https://picsum.photos/400/300?random=38', 3, 2.5, 'Italian district charm'),
    
    -- Presidio Heights
    (user_id_var, 'Presidio Heights Estate', 15000000, 37.787222, -122.456944, 'https://picsum.photos/400/300?random=39', 7, 6.5, 'Park-side mansion'),
    (user_id_var, 'Presidio Avenue Manor', 9800000, 37.788611, -122.453889, 'https://picsum.photos/400/300?random=40', 5, 4.5, 'Classic architecture with views');

END $$;