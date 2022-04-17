# Desafio Docker Full Cycle

Esse repositório contém a resolução dos dois desafios propostos ao final do módulo de docker.

## Desafio GO
Deve ser publicada uma imagem no docker hub e quando executarmos o comando:

docker run <seu-user>/codeeducation

Temos que ter o seguinte resultado: Code.education Rocks!

A imagem do projeto precisa ter menos de 2MB. 

### Entrega
```bash
docker run edfcsx/hello-go:prod
```

## Desafio Node.js e Proxy reverso
A idéia principal é quando um usuario acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

### Entrega
dev
```bash
docker compose up --build
```

production
```bash
docker compose -f docker-compose.prod.yaml up --build
```


Todos os desafios possuem versões de dev e prod, pensando na diminuição do tamanho das imagens.