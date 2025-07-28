# How-2

## Portugues - BR

Para deploy, é necessário instalar algumas dependencias e aplicativos recomendados

### Dependencias

* [Node com NPM](https://nodejs.org/en/download)
* [Docker](https://hub.docker.com/welcome)
* [Netbeans (outro compilador JAVA)](https://netbeans.apache.org/front/main/download/)
* [Python](https://www.python.org/downloads/)

### Recomendados

* [Dbeaver](https://dbeaver.io/download/)
* [Redis insight](https://redis.io/downloads/)
* [Postman](https://www.postman.com/downloads/)

### Pacotes neceessários

#### Configurações

Inicie os containers dockers.

Dentro de \Controle-de-orcamento\code\infra\docker

existe o docker-compose.yml, nessa pasta voce pode rodar o inicio do ambiente.

Na mesma pasta existe o .env, nela voce deve editar as senhas conforme achar mais adequado

Caso de edição de senhas para segurança, é necessário validar os seguintes arquivos.

* \Controle-de-orcamento\code\infra\docker\clickhouse\node_a(b)\users.xml
* \Controle-de-orcamento\code\infra\sql\postgres\create_basic.sql
* \Controle-de-orcamento\code\infra\infra\sql\postgres\replica-init\01-init.sh
* \Controle-de-orcamento\code\infra\infra\sql\postgres\core\core_UP.sql
* \Controle-de-orcamento\code\infra\docker\tools\kong\kong.yml (jwt_secrets secret)

``` shell
docker compose up -d
```

Se todos containers subirem corretamente, acesse o postgres nodeA com uma ferramenta de conexão de banco de dados e rode o arquivo \Controle-de-orcamento\code\infra\sql\postgres\create_basic.sql dentro da instancia para poder iniciar a replicação.

OBS:

* O arquivo 01-init.sh não executa em windows, o windows o converte e corrompe automaticamente, deve ser executado dentro do WSL no caso de subir projeto no windows, é possivel que no download do git ja venha corrompido, nesse caso dentro do wsl, copie o arquivo, exclua ele e crie novamente.

Valide se postgres nodeB subiu de forma correta e esta replicando a escrita no nodeA, caso contrario derrube o nodeB e suba novamente.

Se tudo estiver ok, voce pode continuar rodando os script das pastas postgres e clickhouse e suas subpastas, para construir a estrutura do projeto na questão de dados, atualmente não existe migrations.

Para subir serviço de Front-end, acesse a pasta  Controle-de-orcamento\code\Frontend\easy-fin-by-nievo
Rode npm ci && npm run dev

Confira os IP no arquivo Controle-de-orcamento\code\Frontend\easy-fin-by-nievo\src\app\env.js para ver se as URL estão corretas de acordo com seu ambiente.

É preciso validar se secrect esta correto no kong-api-gateway (jwt_secrets secret) de acordo com seu back-end.

Para fazer requisições corretamente de login, é recomendado que frontend esteja validado com o encriptador.
As chaves publicas e privadas estaram anexas no devidos lugares e variaveis, para trocas precisa gerar um par novo, use o postman na rota crypto/keygen com metodo post para gerar, o body poderá ser vazio.

alterer as variaveis do frontend Controle-de-orcamento\code\Frontend\easy-fin-by-nievo\src\app\env.js e back-end Controle-de-orcamento\code\backend\node\auth-service\src\config\env.js 

De acordo com sua nova chave, é extremamente recomendavel trocar a variavel passphrase dentro do arquivo tambem.



## English - EUA
