use master
go

--nombre de la tabla
create database DataBase_Laboratorio
go

use DataBase_Laboratorio
go

create table Paises
(
ID int not null,
Descripcion varchar (50) not null,
Constraint PK_Paises PRImary key(ID)


)
go

create table Provincias
(
ID int not null,
IDPais int not null,
Descripcion varchar (100) not null,
constraint PK_provincias primary key(ID),
constraint FK_Provincia_Pais foreign key(IDPais)
references Paises(ID),
)
go


create table Ciudades
(
ID int not null,
IDProvincia INT not null,
Descripcion varchar (100) not null,
Constraint PK_Ciudades PRImary key(ID),
constraint FK_Ciudades_Provincias foreign key(iDProvincia)
references Provincias(ID),

)
go


create table Direcciones
(
ID INT not null,
IDCiudad INT not null,
Calle varchar (100) not null,
Numero varchar(10) not null,
Constraint PK_Direcciones PRImary key(ID),
constraint FK_Direcciones_Ciudades foreign key(iDCiudad)
references Ciudades(ID),

)
go


create table Categorias
(
ID INT not null,
Descripcion varchar (100) not null,
Constraint PK_Catregorias Primary key(ID)


)
go

create table Departamentos
(
ID int not null,
Descripcion varchar (100) not null,
Constraint PK_Departamentos Primary key(ID)


)
go


create table Permisos
(
Id int not null,
Descripcion varchar (100) not null,
Constraint PK_Permisos Primary key(Id)


)
go

create table Etapas
(
Id int not null,
Descripcion varchar (50) not null,
Constraint PK_Etapas Primary key(Id)


)
go


create table Insumos
(
Id int not null,
IdEtapa int not null,
Codigo varchar (20) not null,
Descripcion varchar(100) not null,
Constraint PK_Insumos PRImary key(Id),
constraint FK_Etapas foreign key(IdEtapa)
references Etapas(Id),

)
go

 
 create table Empresas
(
ID int not null,
IDDireccion int not null,
IDCategoria int not null,
RazonSocial int not null,
Telefono varchar (20) not null,
Constraint PK_Empresas Primary key(ID),
constraint FK_Direcciones foreign key(IDDireccion)
references Direcciones(ID),
constraint FK_Categorias foreign key(IDCategoria)
references Categorias(ID),

)
go

 create table Contactos
(
ID INT not null,
IDEmpresa INT not null,
Nombre varchar (50) not null,
Apellido varchar (50) not null,
Telefono varchar (20) null,
Mail varchar (50) not null,
Descripcion varchar (100)  null,
Constraint PK_Contactos Primary key(ID),
constraint FK_Empresas foreign key(IDEmpresa)
references Empresas(ID),
)
go

 create table Usuarios
(
ID INT not null,
IDContacto INT not null,
IDDepartamento INT not null,
IDPermiso INT not null,
Constraint PK_Usuarios Primary key(ID),
constraint FK_Contactos foreign key(IDContacto)
references Contactos(ID),
constraint FK_Departamentos foreign key(IDDepartamento)
references Departamentos(ID),
constraint FK_Permisos foreign key(IDPermiso)
references Permisos(ID),
)
go



 create table ProductosPreCargados
(
ID int not null,
IDEmpresa int foreign key  references Empresas(ID) not null,
Descripcion varchar (100) not null,
Codigo varchar (20) not null,
Constraint PK_ProductosPreCargados Primary key(ID),


)
go


create table InsumosxProductosPreCargados
(
ID int not null,
IDInsumo int not null,
CantidadTeorica varchar (20) not null,
Constraint PK_InsumosxProductosPreCargados Primary key(ID),
constraint FK_Insumos foreign key(IDInsumo)
references Etapas(ID),

)
go
 
 
create table Ingresos
(
ID int not null,
IDUsuario int not null,
IDEmpresa int not null,
Remito varchar (30) not null,
Fecha datetime not null ,
---IDEstado int not null,
Constraint PK_Ingresos Primary key(ID),
constraint FK_Usuarios foreign key(IDUsuario)
references Usuarios(ID),
constraint FK_EmpresasIngresos foreign key(IDEmpresa)
references Empresas(ID),

)
go
 

 
create table Consumibles
(
ID INT not null,
IDIngreso INT not null,
Descripcion varchar(100)not null,
Cantidad varchar (20) not null,
Constraint PK_Consumibles Primary key(Id),
constraint FK_Ingresos foreign key(IdIngreso)
references Ingresos (ID),

)
go


create table Estados
(
Id int not null,
Descripcion varchar (30)not null,
Constraint PK_Estados Primary key(Id),


)
go
 
 
create table MateriasPrimas
(
Id int not null,
IdIngreso int not null,
IdInsumo int not null,
IdEstado int not null,
Lote varchar (20)  null,
Analisis varchar(20)  null ,
Vencimiento datetime ,
Cantidad varchar(20) not null,
Constraint PK_MateriasPrimas Primary key(ID),
constraint FK_IngresoMateriasPrimas foreign key(IDIngreso)
references Insumos(ID),
constraint FK_Estados foreign key(IDEstado)
references Estados(ID),

)
go


create table Productos
(
ID INT not null,
IDProductoPrecargado INT not null,
IDIngreso INT not null,
Lote varchar (20) not null,
Analisis varchar(20) not null ,
Estado varchar (20)not null,
Vencimiento datetime ,
Codigo varchar(30) not null,
Constraint PK_Productos Primary key(Id),
constraint FK_ProductosPreCargados foreign key(IDProductoPrecargado)
references ProductosPreCargados(Id),
constraint FK_IngresosProductos foreign key(IDIngreso)
references Ingresos(Id),

)
go
 

 create table ProductosDet
(
IDProducto INT not null,
IDInsumo INT not null,
Detalle varchar (30) not null,
Vencimiento datetime not null ,
Cantidad varchar (20)not null,
Constraint PK_ProductosDet Primary key(IDProducto,IDInsumo),
constraint FK_Productos foreign key(IDProducto)
references Productos(Id),
constraint FK_InsumosProdDet foreign key(IDInsumo)
references Insumos(Id),


)
go
 

 Create table Racks
(
ID INT  not null,
Descripcion varchar (30)not null,
Constraint PK_Racks Primary key(Id),


)
go
 

  create table Casilleros
(
ID INT not null,
IDRack INT not null,
Descripcion varchar (30) not null,
Estado varchar (20) not null,
Constraint PK_Casilleros Primary key(Id),
constraint FK_Racks foreign key(IDRack)
references Racks(Id),


)
go

 create table CasillerosXingresos
(
IDIngreso int not null,
IDCasillero int not null,
Fecha datetime not null ,
Baja bit not null,
Constraint PK_CasillerosXingresos Primary key(IDIngreso,IdCasillero),
constraint FK_IngresosXcasilleros foreign key(IDIngreso)
references Ingresos(Id),
constraint FK_Casilleros foreign key(IdCasillero)
references Casilleros(Id),

)
go

 create table ProductosXEtapas
(
IdProducto INT Not null,
IdEtapa INT not null,
IdEstado INT not null,
Constraint PK_ProductosXEtapas Primary key(IDProducto),
constraint FK_ProductosXEtapas foreign key(IDProducto)
references Productos(Id),
constraint FK_ProductosXEtapas foreign key(IDEtapa)
references Etapas(Id),
constraint FK_Estado foreign key(IDEstado)
references Estados(ID),

)
go