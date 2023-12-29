CREATE DATABASE Veterinaria;
create table animales(
	id serial primary key,
	nombre varchar(30),
	raza varchar(30),
	sexo varchar(1),
	edad numeric
);

insert into animales (nombre,raza,sexo,edad) values
('Naomi','Perro Pincher','F',2),
('Dante','Perro Lobo','M',4)