## ChatBot utilizando OpenAI API

Este é um simples ChatBot desenvolvido utilizando a API da OpenAI para gerar respostas baseadas em texto fornecido pelo usuário.

## Funcionalidades

O usuário pode enviar uma mensagem para o ChatBot.
O ChatBot responde com uma mensagem gerada pelo modelo de linguagem da OpenAI.
O histórico da conversa é exibido na tela.

Tecnologias Utilizadas

JavaScript (Frontend)
Node.js (Backend)
Express.js (Framework para servidor Node.js)
Fetch API (Para fazer solicitações HTTP no frontend)

## Como Usar

Pré-requisitos
Node.js instalado na sua máquina.
Conta na OpenAI com acesso à API.

Configuração

Clone este repositório para sua máquina local.

Instale as dependências do servidor:
npm install

Crie um arquivo .env na raiz do projeto e adicione sua chave de API da OpenAI:
makefile
APIKEY=sua_chave_de_api_aqui

Inicie o servidor:
sql
npm start
Abra localhost:porta/ no seu navegador para acessar o chat.


## Observações
Certifique-se de que sua chave de API esteja configurada corretamente no arquivo .env.
Este é um exemplo básico e pode ser expandido com mais recursos e melhorias conforme necessário.
