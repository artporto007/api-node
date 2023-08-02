CREATE TABLE usuario (
	id serial PRIMARY KEY,
	nome VARCHAR ( 50 ) UNIQUE NOT NULL,
	senha VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

INSERT INTO usuario (nome, senha, email) VALUES ('Fulano', '123','f@email.com')