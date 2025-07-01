DROP TABLE accounts.bank CASCADE;

DROP TABLE accounts.bank_card CASCADE;

DROP TABLE accounts.bank_card_type CASCADE;

DROP TABLE accounts.bank_type CASCADE;

DROP TABLE accounts.user_bank CASCADE;

DROP TABLE accounts.user_bank_card CASCADE;

DROP TABLE goals.category CASCADE;

DROP TABLE goals.category_goals CASCADE;

DROP TABLE goals.goals CASCADE;

DROP TABLE goals.sub_category CASCADE;

DROP TABLE payment.scheduler_type CASCADE;

DROP TABLE payment.transaction CASCADE;

DROP TABLE payment.transaction_status CASCADE;

DROP TABLE payment.transaction_type CASCADE;

DROP FOREIGN TABLE accounts.signup_user_details_user CASCADE;

DROP USER MAPPING FOR POSTGRES SERVER signup_server_cross_database;

DROP USER MAPPING FOR APP_SYSTEM_SERVICE_EFN SERVER signup_server_cross_database;

DROP SERVER signup_server_cross_database;

DROP EXTENSION postgres_fdw CASCADE;

DROP SCHEMA accounts;

DROP SCHEMA payment;

DROP SCHEMA goals;

DROP DATABASE core;
