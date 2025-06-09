CREATE SCHEMA IF NOT EXISTS accounts;

CREATE SCHEMA IF NOT EXISTS payment;

CREATE SCHEMA IF NOT EXISTS goals;

GRANT USAGE ON SCHEMA accounts TO APP_MIGRATION_SERVICE_EFN;

GRANT USAGE ON SCHEMA accounts TO APP_SYSTEM_SERVICE_EFN;

GRANT USAGE ON SCHEMA payment TO APP_MIGRATION_SERVICE_EFN;

GRANT USAGE ON SCHEMA payment TO APP_SYSTEM_SERVICE_EFN;

GRANT USAGE ON SCHEMA goals TO APP_MIGRATION_SERVICE_EFN;

GRANT USAGE ON SCHEMA goals TO APP_SYSTEM_SERVICE_EFN;

CREATE EXTENSION IF NOT EXISTS postgres_fdw;

CREATE SERVER signup_server_cross_database
FOREIGN DATA WRAPPER postgres_fdw
OPTIONS (dbname 'signup');

CREATE USER MAPPING FOR POSTGRES
SERVER signup_server_cross_database
OPTIONS (user 'cross_database_user', password 'd3f0f05f-2368-41a6-a2a6-73f4b1be8df5');

CREATE USER MAPPING FOR APP_SYSTEM_SERVICE_EFN
SERVER signup_server_cross_database
OPTIONS (user 'cross_database_user', password 'd3f0f05f-2368-41a6-a2a6-73f4b1be8df5');

CREATE FOREIGN TABLE accounts.signup_user_details_user (
    id INTEGER,
    status_id INTEGER
)
SERVER signup_server_cross_database
OPTIONS (schema_name 'user_details', table_name 'user');

CREATE TABLE IF NOT EXISTS payment.transaction
( 
    id SERIAL PRIMARY KEY, 
    user_id INTEGER NOT NULL,
    transaction_status_id INTEGER NOT NULL,
    pay_date DATE,
    amount INTEGER NOT NULL,
    category_id  INTEGER NOT NULL,
    sub_category_id INTEGER,
    card_id INTEGER,
    bank_id INTEGER,
    transaction_type_id INT,
    scheduler_id INTEGER, 
    created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS payment.transaction_type
( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP DEFAULT NULL
); 



CREATE TABLE IF NOT EXISTS payment.transaction_status
( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP DEFAULT NULL 
);

CREATE TABLE IF NOT EXISTS payment.scheduler_type
( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP DEFAULT NULL
); 



CREATE TABLE IF NOT EXISTS goals.category
( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP DEFAULT NULL
); 


CREATE TABLE IF NOT EXISTS goals.goals
( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    owner_user_id INTEGER NOT NULL,
    amount INTEGER NULL,
    is_percent INT NULL,
    expire_at DATE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL 
); 

CREATE TABLE IF NOT EXISTS goals.category_goals
( 
    id SERIAL PRIMARY KEY, 
    goals_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    sub_category_id INTEGER NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL 
); 



CREATE TABLE IF NOT EXISTS goals.sub_category
( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    category_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL
); 


CREATE TABLE IF NOT EXISTS accounts.bank
( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    bank_type INT NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL 
);


CREATE TABLE IF NOT EXISTS accounts.user_bank
( 
    id SERIAL PRIMARY KEY,
    nick_name VARCHAR(150) NOT NULL,
    amount INTEGER,
    active INTEGER NOT NULL DEFAULT '0',
    bank_id INTEGER,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL 
);



CREATE TABLE IF NOT EXISTS accounts.bank_card
( 
    id SERIAL PRIMARY KEY,
    bank_id INTEGER NOT NULL,
    name VARCHAR(150) NOT NULL,
    card_type INTEGER NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL
); 


CREATE TABLE IF NOT EXISTS accounts.user_bank_card
( 
    id SERIAL PRIMARY KEY,
    bank_id INTEGER NOT NULL,
    name VARCHAR(150) NOT NULL,
    card_id INTEGER NOT NULL,
    active INTEGER NOT NULL DEFAULT '0', 
    user_id INTEGER NOT NULL, 
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL
);



CREATE TABLE IF NOT EXISTS accounts.bank_type
( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL
); 



CREATE TABLE IF NOT EXISTS accounts.bank_card_type
( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description VARCHAR(255) NOT NULL,
    active INTEGER NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL
); 

ALTER TABLE payment.transaction ADD CONSTRAINT fk_transaction_status FOREIGN KEY (transaction_status_id) REFERENCES payment.transaction_status (id);

ALTER TABLE payment.transaction ADD CONSTRAINT fk_transaction_type FOREIGN KEY (transaction_type_id) REFERENCES payment.transaction_type (id);

ALTER TABLE payment.transaction ADD CONSTRAINT fk_transaction_category_id FOREIGN KEY (category_id) REFERENCES goals.category (id);

ALTER TABLE payment.transaction ADD CONSTRAINT fk_transaction_subcategory_id FOREIGN KEY (sub_category_id) REFERENCES goals.sub_category(id);

ALTER TABLE payment.transaction ADD CONSTRAINT fk_transaction_card_id FOREIGN KEY (card_id) REFERENCES accounts.bank_card (id);

ALTER TABLE payment.transaction ADD CONSTRAINT fk_transaction_bank_id FOREIGN KEY (bank_id) REFERENCES accounts.bank (id);

ALTER TABLE payment.transaction ADD CONSTRAINT fk_transaction_scheduler_id FOREIGN KEY (scheduler_id) REFERENCES payment.scheduler_type (id);

ALTER TABLE accounts.user_bank_card ADD CONSTRAINT fk_user_card_bank FOREIGN KEY (bank_id) REFERENCES accounts.bank (id);

ALTER TABLE accounts.user_bank_card ADD CONSTRAINT fk_user_card_id_bank FOREIGN KEY (card_id) REFERENCES accounts.bank_card (id);

ALTER TABLE accounts.user_bank ADD CONSTRAINT fk_bank FOREIGN KEY (bank_id) REFERENCES accounts.bank (id);

ALTER TABLE accounts.bank ADD CONSTRAINT fk_bank_type FOREIGN KEY (bank_type) REFERENCES accounts.bank_type (id);

ALTER TABLE goals.sub_category ADD CONSTRAINT fk_subcategory_id FOREIGN KEY (category_id) REFERENCES goals.category (id);

ALTER TABLE goals.category_goals ADD CONSTRAINT fk_category_goals FOREIGN KEY (goals_id) REFERENCES goals.goals (id);

ALTER TABLE goals.category_goals ADD CONSTRAINT fk_category_goals_category FOREIGN KEY (category_id) REFERENCES goals.category (id);

ALTER TABLE goals.category_goals ADD CONSTRAINT fk_category_goals_subcategory FOREIGN KEY (sub_category_id) REFERENCES goals.sub_category (id);

ALTER TABLE accounts.bank_card ADD CONSTRAINT fk_card_bank FOREIGN KEY (bank_id) REFERENCES accounts.bank (id);

ALTER TABLE accounts.bank_card ADD CONSTRAINT fk_card_type_bank FOREIGN KEY (card_type) REFERENCES accounts.bank_card_type (id);

CREATE UNIQUE INDEX idx_category_goals ON goals.category_goals (goals_id, category_id, sub_category_id);

CREATE UNIQUE INDEX idx_goals_user_id_name ON goals.goals (owner_user_id,name);

CREATE UNIQUE INDEX idx_bank_name ON accounts.bank (name);

CREATE UNIQUE INDEX idx_subcategory_user_name ON goals.sub_category (user_id,name);

CREATE UNIQUE INDEX idx_category_name ON goals.category (name);

CREATE UNIQUE INDEX idx_transaction_status_name ON payment.transaction_status (name);

CREATE UNIQUE INDEX idx_scheduler_type_name ON payment.scheduler_type (name);

CREATE UNIQUE INDEX idx_transaction_type_name ON payment.transaction_type (name);

CREATE INDEX idx_transaction_user_paydate ON payment.transaction (user_id,pay_date);

CREATE INDEX idx_transaction_user_category ON payment.transaction (category_id);

CREATE INDEX idx_transaction_user_sub_category_user ON payment.transaction (user_id,sub_category_id);

CREATE INDEX idx_transaction_user_id ON payment.transaction (user_id);

CREATE INDEX idx_transaction_user_id_card_id ON payment.transaction (user_id,card_id);

CREATE INDEX idx_transaction_user_id_bank ON payment.transaction (user_id,bank_id);

CREATE INDEX idx_name_bank_card_type ON accounts.bank_card_type (name);

CREATE INDEX idx_name_bank_type ON accounts.bank_type (name);

CREATE INDEX idx_user_bank_card ON accounts.user_bank_card (user_id);

CREATE INDEX idx_card_bank_card ON accounts.user_bank_card (card_id);

CREATE INDEX idx_bank_bank_card ON accounts.user_bank_card (bank_id);

CREATE INDEX idx_bank_card ON accounts.bank_card (name);

CREATE INDEX idx_bank_user ON accounts.user_bank (user_id,bank_id);

CREATE INDEX idx_category_goals_goals_id ON goals.category_goals (goals_id);

CREATE INDEX idx_category_goals_category_id ON goals.category_goals (category_id);

CREATE INDEX idx_category_goals_subcategory_id ON goals.category_goals (sub_category_id);

CREATE INDEX idx_goals_active ON goals.goals (active);

CREATE INDEX idx_goals_name ON goals.goals (name);

CREATE INDEX idx_goals_expire_at ON goals.goals (expire_at);
