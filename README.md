Explicacion de como Utilizar la API Grupo Iraola gestion de personas <br />

1A.  En el caso de querer correr la api de manera local debes completar el .env con las variables de entorno de la siguiente manera <br /> <br />
    a. PORT = 4000 <br /> 
    b. HOST = localhost <br />
    c. DB_NAME = grupoIraola ( previamente creando una base de datos con este nombre para que la complete ) <br />
    d. DIALECT = postgres <br />
    e. DB_USER = *Tu usuario de postgress* <br />
    f. DB_PASSWORD = *Tu contraseña de postgres* <br />


![image](https://user-images.githubusercontent.com/90066344/210846396-b630a198-1d88-4280-8281-36e5755c93d1.png) <br /> 


1B. En el caso de querer correrlo manual pero utilizando la base de datos ya deployada en la web debes completar el .env de la siguiente manera <br /> <br />
    a. PORT = 4000 <br />
    b. DB_DEPLOY = postgresql://postgres:TxY0POgVJy2GX9xCXAMh@containers-us-west-19.railway.app:8000/railway <br />
    

![image](https://user-images.githubusercontent.com/90066344/210847535-f0ce069f-f713-4f17-9e82-9a18b9c7110b.png) <br />

2. Ejecutar en la carpeta padre el comando npm i ( para instalar todas las dependencias ) <br /> 

3. Ejecutar en la carpeta padre el comando npm start para correr el servidor en el puerto indicado

