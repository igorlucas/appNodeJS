# app NodeJs
Um modelo de aplicação responsiva em NodeJs.  
Esse projeto consiste em um CRUD do registro de notícias, onde existirá uma tabela com os campos: **id**, **titulo**, **autor**, **resumo**, **noticia**, **data_criacao** e **data_noticia**. Deve ser criado um banco de dados mysql com essa devida tabela e realizar a conexão do servidor do banco de dados com a aplicação dentro do arquivo **config/dbConnection.js**.  

Será exibido as páginas:  
* **home** com o cadastro das 5 últimas notícias,
* **notícias** com o cadastro de todas as notícias,
* **addnotícias** com o formulário para cadastro de de uma nova notícia,
* **noticia** com o cadastro da notícia selecionada na página home ou notícias

## Módulos
* **express**: framework web,
* **body-parser**: validação de conteúdo html,
* **express-validator**: validação de conteúdo html,
* **ejs**: incorpora js no html,
* **consign**: gerencia carregamentos de modulos automaticamente,
* **mysql**: banco de dados    
    
