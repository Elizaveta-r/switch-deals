create table price_history (
    id bigint generated always as identity primary key,

    game_nsuid text not null,

    msrp numeric,
    sale_price numeric,

    captured_at timestamptz default now()
);


create index price_history_game_nsuid_idx
on price_history(game_nsuid);