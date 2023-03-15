# Desafio técnico caffeine army

Projeto desenvolvido para o desafio técnico caffeine army para vaga de Desenvolvedor Fullstack. 

Proposta do desafio: https://s3.amazonaws.com/gupy5/production/companies/48811/emails/1678300326348/48275f90-bddf-11ed-bc46-5960cf83794c/desafio_-_pessoa_desenvolvedora_fullstack__1.pdf

### Autenticação
O projeto começa pela autenticação, que é responsável por garantir a segurança do acesso à aplicação, permitindo que apenas usuários autorizados possam acessar as rotas protegidas. O AuthenticationController define rotas para registro, login, logout e informações do usuário autenticado. O AuthenticationService implementa a lógica de autenticação, incluindo registro, geração de token JWT e verificação de credenciais. As classes JwtAuthenticationGuard, JwtStrategy e LocalStrategy implementam as estratégias de autenticação para validar o token JWT do usuário e verificar as credenciais fornecidas pelo usuário em comparação com as credenciais armazenadas no banco de dados.

### Lojas
A parte de lojas da aplicação define um conjunto de rotas e serviços para gerenciar as informações das lojas cadastradas no sistema. O StoresController é responsável por definir as rotas relacionadas às lojas, que permitem listar todas as lojas cadastradas, buscar uma loja por CNPJ, criar uma nova loja, atualizar uma loja existente e excluir uma loja. Além disso, a rota de criação de loja é protegida por autenticação JWT usando o JwtAuthenticationGuard. Já o StoresService é responsável por implementar a lógica de negócio relacionada às lojas, como a busca de uma loja por CNPJ, criação de uma nova loja, atualização de uma loja existente e exclusão de uma loja. Quando uma requisição é feita para buscar uma loja por CNPJ, se a loja existir, ela é retornada. Caso contrário, é lançada uma exceção informando que a loja não foi encontrada. Se ocorrer algum erro durante a operação, é lançada uma exceção genérica com código de erro HTTP correspondente.

### Frontend
No frontend, apenas a funcionalidade de buscar uma loja por CNPJ foi implementada. Quando o usuário na tela home preenche o campo de pesquisa com um CNPJ válido e clica no botão de busca, uma requisição é enviada para o endpoint /stores/:cnpj definido no StoresController. Esse endpoint usa o método getStoreByCNPJ do StoresService para encontrar a loja correspondente no banco de dados com base no CNPJ fornecido pelo usuário. Se a loja for encontrada, a resposta do backend será um objeto JSON com os dados da loja correspondente. Esses dados podem incluir informações como o nome da loja, o endereço, informações de contato e o nome do lojista responsável. Esses dados são então usados para preencher os campos do accordion na tela do usuário. Se a loja não for encontrada, o backend retornará uma mensagem de erro informando que a loja não foi encontrada. Na tela do usuário, isso é exibido como uma mensagem de erro informando que o CNPJ fornecido é inválido.

### Docker
O Docker é utilizado nesse projeto para criar contêineres de aplicações que podem ser executadas de forma isolada em um ambiente virtualizado. O arquivo docker-compose.yml descreve como esses contêineres devem ser criados e conectados em uma rede virtual. O docker-compose.yml define quatro serviços: postgres, pgadmin, backend e frontend. O serviço postgres define um contêiner para o banco de dados PostgreSQL, o serviço pgadmin define um contêiner para o gerenciador gráfico de banco de dados PgAdmin, o serviço backend define um contêiner para a aplicação backend e o serviço frontend define um contêiner para a aplicação frontend. Os arquivos Dockerfile, presentes nos diretórios frontend e backend, definem a construção de contêineres baseados na imagem do Node.js na versão 18-alpine. Ambos os contêineres instalam as dependências do projeto e definem comandos para iniciar os servidores. Enquanto o contêiner do frontend é configurado para iniciar o servidor em modo de desenvolvimento, o do backend é configurado para iniciar o servidor em modo de produção.


## Desenvolvimento

### Desenvolvido com
- Node e NestJs para criação da API
- JWT e Bcrypt para o gerencimaneto da autenticação
- PostgreSQL para criação do banco de dados
- React com Next para desenvolver o Frontend
- Material UI para estilização
- Docker para conteinerização da aplicação

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[git](https://git-scm.com), [node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/).
Você também vai precisar de um editor de código, recomendo o [VS Code](https://code.visualstudio.com/).

### Rodando o projeto:

```shell
# Clone este repositório (ou download )
$ git clone git@github.com:joao21dev/desafio-tecnico.git

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-tecnico/

# Abra a pasta no editor de código (VS Code ou outro de sua preferência).

# Para criar os containers (Frontend na porta 4000 e api na porta 3007)
$ docker compose up 
```
