-- tables.sql
create table if not exists raffles (
  id uuid default gen_random_uuid() primary key,
  name text,
  description text,
  image_url text,
  ticket_price numeric(12,2) default 200,
  total_tickets int default 10000,
  created_at timestamptz default now()
);

create table if not exists admin_users (
  id uuid default gen_random_uuid() primary key,
  email text,
  name text,
  role text,
  created_at timestamptz default now()
);

create table if not exists purchases (
  id uuid default gen_random_uuid() primary key,
  raffle_id uuid references raffles(id),
  buyer_name text,
  cedula text,
  email text,
  phone text,
  qty int,
  reference text,
  receipt_url text,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists tickets (
  id uuid default gen_random_uuid() primary key,
  raffle_id uuid references raffles(id),
  ticket_number text,
  status text default 'available',
  reserved_by_purchase uuid references purchases(id),
  created_at timestamptz default now()
);
