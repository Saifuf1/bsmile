-- Create counselors table
CREATE TABLE public.counselors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  phone TEXT,
  bio TEXT,
  experience_years INTEGER DEFAULT 0,
  image_url TEXT,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  languages TEXT[] DEFAULT '{}',
  specialties TEXT[] DEFAULT '{}',
  certificates TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create counselor schedules table
CREATE TABLE public.counselor_schedules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  counselor_id UUID NOT NULL REFERENCES public.counselors(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6), -- 0=Sunday, 6=Saturday
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  timezone TEXT DEFAULT 'Asia/Dhaka',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(counselor_id, day_of_week)
);

-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image_url TEXT,
  author_name TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  publish_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create admin users table (separate from auth.users)
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.counselors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.counselor_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- RLS Policies for counselors (public read, admin write)
CREATE POLICY "Anyone can view active counselors" 
ON public.counselors 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Only admins can manage counselors" 
ON public.counselors 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM public.admin_users 
  WHERE user_id = auth.uid() AND is_active = true
));

-- RLS Policies for counselor schedules (public read, admin write)
CREATE POLICY "Anyone can view active schedules" 
ON public.counselor_schedules 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Only admins can manage schedules" 
ON public.counselor_schedules 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM public.admin_users 
  WHERE user_id = auth.uid() AND is_active = true
));

-- RLS Policies for blog posts (public read published, admin all)
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (status = 'published');

CREATE POLICY "Only admins can manage blog posts" 
ON public.blog_posts 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM public.admin_users 
  WHERE user_id = auth.uid() AND is_active = true
));

-- RLS Policies for admin users (admin only)
CREATE POLICY "Only admins can view admin users" 
ON public.admin_users 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.admin_users 
  WHERE user_id = auth.uid() AND is_active = true
));

CREATE POLICY "Only super admins can manage admin users" 
ON public.admin_users 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM public.admin_users 
  WHERE user_id = auth.uid() AND role = 'super_admin' AND is_active = true
));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_counselors_updated_at
  BEFORE UPDATE ON public.counselors
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_counselor_schedules_updated_at
  BEFORE UPDATE ON public.counselor_schedules
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(regexp_replace(regexp_replace(trim(title), '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '-', 'g'));
END;
$$ LANGUAGE plpgsql;

-- Create function to check if counselor is currently online
CREATE OR REPLACE FUNCTION public.is_counselor_online(counselor_id UUID, check_time TIMESTAMP WITH TIME ZONE DEFAULT now())
RETURNS BOOLEAN AS $$
DECLARE
  current_day INTEGER;
  check_time_only TIME;
  schedule_exists BOOLEAN;
BEGIN
  -- Get current day of week (0=Sunday, 6=Saturday)
  current_day := EXTRACT(DOW FROM check_time);
  check_time_only := check_time::TIME;
  
  -- Check if counselor has an active schedule for current day and time
  SELECT EXISTS(
    SELECT 1 FROM public.counselor_schedules cs
    JOIN public.counselors c ON c.id = cs.counselor_id
    WHERE cs.counselor_id = counselor_id
    AND cs.day_of_week = current_day
    AND cs.start_time <= check_time_only
    AND cs.end_time >= check_time_only
    AND cs.is_active = true
    AND c.is_active = true
  ) INTO schedule_exists;
  
  RETURN schedule_exists;
END;
$$ LANGUAGE plpgsql;