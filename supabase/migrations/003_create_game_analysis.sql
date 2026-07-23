create table game_analysis (
    id bigint generated always as identity primary key,

    game_nsuid text unique not null,

    quality_score numeric,

    summary text,

    pros jsonb default '[]'::jsonb,

    cons jsonb default '[]'::jsonb,

    recommended_for jsonb default '[]'::jsonb,

    tags jsonb default '[]'::jsonb,

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);