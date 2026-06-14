-- Fix passcode hashes (correct SHA-256 values)
UPDATE portal_clients 
SET passcode_hash = '1f8d04353db886e1fb4113cec98e2896a51093b6be866b9ed878f60ee1676c83'
WHERE company_name = 'Kalyan Jewellers';

UPDATE portal_clients 
SET passcode_hash = '256085eab8197a311fe232847000084eda7a64dc187221c3bfe908326fd39068'
WHERE company_name = 'Malabar Gold & Diamonds';

UPDATE portal_clients 
SET passcode_hash = 'f0fe1f93c9f89aeec5e0bb057f61e0ef51f2ad312c71736033af049ff5c0a0ee'
WHERE company_name = 'Reliance Retail';
