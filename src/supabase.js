import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://wkgjjvnqzbocqksfpjgh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZ2pqdm5xemJvY3Frc2ZwamdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyNjkxMDksImV4cCI6MjAxODg0NTEwOX0.SKzollUU0TSQqMv-eRr2gUZ0bDFQW-bunAQ2YejSh74'
);

export default supabase;
