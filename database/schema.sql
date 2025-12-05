-- Create form_submissions table
CREATE TABLE form_submissions (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert (form submission)
CREATE POLICY "Allow public insert" ON form_submissions
  FOR INSERT WITH CHECK (true);

-- Create policies for authenticated read/update (dashboard)
CREATE POLICY "Allow authenticated read" ON form_submissions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated update" ON form_submissions
  FOR UPDATE TO authenticated USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_form_submissions_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
INSERT INTO form_submissions (name, email, phone, message, status) VALUES
  ('John Doe', 'john@example.com', '+1234567890', 'Interested in web development services', 'new'),
  ('Jane Smith', 'jane@example.com', '+0987654321', 'Need help with dashboard creation', 'in_progress'),
  ('Bob Johnson', 'bob@example.com', NULL, 'Looking for automation solutions', 'resolved');