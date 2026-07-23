create table games (
    id bigint generated always as identity primary key,

    nsuid text unique not null,

    title text not null,
    slug text not null,

    description text,

    image text,

    publishers jsonb default '[]'::jsonb,
    developers jsonb default '[]'::jsonb,
    genres jsonb default '[]'::jsonb,

    esrb_rating text,

    release_date timestamptz,

    msrp numeric,
    sale_price numeric,
    lowest_price numeric,

    has_discount boolean default false,

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);