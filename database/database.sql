
create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    middlename VARCHAR(255)
);

create TABLE items(
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(255),
    item_cost INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);