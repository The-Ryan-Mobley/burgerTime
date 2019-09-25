
USE f0jujnhilnhwvda2;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    eaten BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);
