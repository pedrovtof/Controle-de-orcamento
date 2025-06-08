CREATE SCHEMA IF NOT EXISTS user_details;

CREATE SCHEMA IF NOT EXISTS journey;

GRANT USAGE ON SCHEMA user_details TO APP_MIGRATION_SERVICE_EFN;

GRANT USAGE ON SCHEMA user_details TO APP_SYSTEM_SERVICE_EFN;

GRANT USAGE ON SCHEMA journey TO APP_MIGRATION_SERVICE_EFN;

GRANT USAGE ON SCHEMA journey TO APP_SYSTEM_SERVICE_EFN;

GRANT USAGE ON SCHEMA journey TO CROSS_DATABASE_USER;

GRANT USAGE ON SCHEMA user_details TO CROSS_DATABASE_USER;

CREATE TABLE IF NOT EXISTS user_details.user (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150),
  email VARCHAR(100),
  phone BIGINT,
  status_id INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS user_details.user_status (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NULL,
  active INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS user_details.user_password_history (
  id SERIAL PRIMARY KEY,
  user_password_id INTEGER NOT NULL,
  active INTEGER NOT NULL DEFAULT 0,
  value DATE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS user_details.user_password (
  id SERIAL PRIMARY KEY,
  active INTEGER NOT NULL DEFAULT 0,
  user_id INTEGER,
  value VARCHAR(255), 
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS journey.token_password (
  id SERIAL PRIMARY KEY,
  value VARCHAR(40) NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NULL,
  expire_at DATE NOT NULL,
  token_config_id INTEGER
);

CREATE TABLE IF NOT EXISTS journey.token_config (
  id SERIAL PRIMARY KEY,
  html_format TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NULL
);

ALTER TABLE user_details.user ADD CONSTRAINT fk_user_status_id FOREIGN KEY (status_id) REFERENCES user_details.user_status (id);

ALTER TABLE user_details.user_password ADD CONSTRAINT fk_user_password_user_id FOREIGN KEY (user_id) REFERENCES user_details.user (id);

ALTER TABLE user_details.user_password_history ADD CONSTRAINT fk_user_password_history_id FOREIGN KEY (user_password_id) REFERENCES user_details.user_password (id);

ALTER TABLE journey.token_password ADD CONSTRAINT fk_token_password_config_id FOREIGN KEY (token_config_id) REFERENCES journey.token_config(id);

ALTER TABLE journey.token_password ADD CONSTRAINT fk_token_password_user_id FOREIGN KEY (user_id) REFERENCES user_details."user"(id);

CREATE UNIQUE INDEX idx_unic_user_email ON user_details.user (email);

CREATE UNIQUE INDEX idx_unic_user_phone ON user_details.user (phone);

CREATE UNIQUE INDEX idx_unic_user_details_name ON user_details.user_status (name);

CREATE INDEX idx_user_status ON user_details.user (status_id);

CREATE INDEX idx_user_password_user_id ON user_details.user_password (user_id);

CREATE INDEX idx_user_password_history_password_id ON user_details.user_password_history (user_password_id);

CREATE INDEX idx_token_password_user_id ON journey.token_password (user_id);

GRANT SELECT ON user_details.user TO CROSS_DATABASE_USER;