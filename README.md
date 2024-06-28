# Teste Técnico - Front End

## Descrição

Hoje, as operações gerenciais de apólices são feitas de forma manual. Para facilitar a vida dos operadores deve-se criar uma interface web para digitalizar o processo.
Portanto, construa uma interface web, utilizando ReactJS e que atenda aos requisitos abaixo.
O prazo limite é de uma semana a partir do recebimento do teste.
Hospede o código em uma plataforma de versionamento (Github, Gitlab e etc) e envie o link para o email jose_vinnicius@sicredi.com.br. Dúvidas também podem ser encaminhadas ao e-mail.

## Requisitos

- [x] ReactJS e Vite e/ou NextJS.
- [x] Typescript.
- [x] A aplicação precisa ter interface coesa e responsiva.
- [x] Deve-se mockar a API baseando-se nos JSONS de exemplo (vide seção API). Recomendamos o uso da lib MirageJS mas qualquer outra pode ser utilizada.
- [x] Todas as operações devem ser implementadas (CRUD).
- [x] Qualquer lib é liberada desde que importada corretamente.
- [x] Testes.
- [x] O código será executado, portanto ele precisa estar compilável e executável.

## Execução

### Desenvolvimento.

1. `pnpm i`, para instalar as dependências.

2. `pnpm dev` ou `bun dev`, para iniciar o servidor de desenvolvimento.

### Produção.

`pnpm build`.

### Prévia.

`pnpm build`, então `pnpm start`.

### Testes.

Inicie o servidor de desenvolvimento com `pnpm dev`, então execute a suíte de testes com `pnpm cy`.

## Stack

- React
- Next.js
- Node.js (20.12.2)
- TypeScript
- ESLint/Prettier
- TailwindCSS
- shadcn
- JSON Server
- Faker.js
- Cypress
- pnpm

## Sobre o projeto

Foi uma experiência enriquecedora, repleta de desafios e oportunidades para experimentar com diversas funcionalidades do React e Next.js, resolvendo uma variedade de problemas.

<b>Next.js 14</b> foi escolhido, devido aos benefícios na implementação de React Server Components (RSC), oferecendo melhorias de performance e experiência de desenvolvimento. Além disso, suas otimizações de assets e sistema de rotas são muito convenientes e efetivos, permitindo aproveitar o seu tempo de forma mais efetiva.

<b>TailwindCSS</b> e <b>shadcn</b> foram escolhidos para acelerar o desenvolvimento, garantindo consistência e facilitando a criação de interfaces com alta qualidade. <b>shadcn</b>, em particular, fornece uma estilização padrão fácil de extender e alto nível de controle sobre seus componentes. Sua integração com a Radix UI fornece várias soluções avançadas de acessibilidade, influenciando positivamente várias métricas-chave.

<b>React Hook Form</b> é fácil de usar e fornece muitas otimizações importantes ao lidar com uma quantidade maior de campos.

<b>Zod</b> fornece validação de schemas, útil na validação de formulários ou variáveis de ambiente. O mesmo também executa durante o runtime, permitindo um type checking mais forte que o TypeScript em certos cenários.

<b>JSON Server</b> fornece uma forma rápida e fácil de mockar um servidor de testes.

<b>Faker.js</b> é uma ótima opção para gerar dados fictícios, além de ser fácil de usar.

<b>Cypress</b> foi empregado devido à sua facilidade de uso e a possibilidade de mockar o comportamento de um usuário em sua aplicação.

<b>pnpm</b> é um gerenciador de pacotes rápido e estável. Também é eficiente, reutilizando os pacotes já presentes em sua máquina, a qual é uma vantagem significativa sobre o <b>Bun</b>, dependendo do cenário.

Patterns como <b>SOLID</b>, <b>Composition</b> e <b>Custom Hooks</b> foram indispensáveis na construção do projeto, facilitando a separação de responsabilidades, reutilização de código e manutenção de cada componente.

Os componentes foram abstraídos de forma a permitir uma maior separação entre as camadas de lógica e visual, semelhante à pattern de <b>Dumb e Smart Components</b>, porém um cuidado maior foi empregado para evitar excesso de abstrações, a qual poderia potencialmente poderia dificultar a navegação pelo projeto.

O boilerplate inicial foi gerado via [Progenitor](https://github.com/sidneifjr/Progenitor).

## Estrutura de pastas

```
└── 📁insurance-manager
    └── .eslintrc.json
    └── .gitignore
    └── .prettierrc
    └── components.json
    └── 📁cypress
        └── 📁downloads
        └── 📁e2e
            └── create-user.cy.ts
            └── delete-user.cy.ts
            └── header.cy.js
            └── pagination.cy.ts
            └── update-user.cy.ts
        └── 📁fixtures
            └── example.json
        └── 📁support
            └── commands.ts
            └── e2e.ts
    └── cypress.config.ts
    └── next-env.d.ts
    └── next.config.mjs
    └── package.json
    └── pnpm-lock.yaml
    └── postcss.config.mjs
    └── 📁public
        └── next.svg
        └── vercel.svg
    └── README.md
    └── 📁src
        └── 📁api
            └── createItem.ts
            └── deleteItem.ts
            └── getItems.ts
            └── updateItem.ts
        └── 📁app
            └── favicon.ico
            └── globals.css
            └── layout.tsx
            └── loading.tsx
            └── page.tsx
        └── 📁assets
            └── loader.svg
        └── 📁components
            └── 📁dashboard
                └── dashboard-pagination.tsx
                └── index.tsx
            └── header.tsx
            └── loader.tsx
            └── 📁modal
                └── modal-form-input-field.tsx
                └── modal-form.tsx
            └── 📁typography
                └── h1.tsx
                └── h2.tsx
                └── h3.tsx
                └── h4.tsx
                └── paragraph.tsx
            └── 📁ui
                └── button.tsx
                └── card.tsx
                └── dialog.tsx
                └── input.tsx
                └── label.tsx
                └── pagination.tsx
                └── sonner.tsx
        └── 📁data
            └── db.json
        └── 📁hooks
            └── useCrud.tsx
            └── useModal.tsx
            └── usePagination.tsx
        └── 📁lib
            └── utils.ts
        └── 📁modules
            └── formatCurrency.ts
            └── generateFakeData.ts
            └── writeDataToDB.ts
        └── 📁services
            └── api.tsx
        └── 📁types
            └── user.ts
    └── tailwind.config.ts
    └── tsconfig.json
```

## Pontos de melhoria

1) Implementação de testes unitários:

Para uma melhor cobertura do projeto, garantindo a qualidade do código.


2) Identidade visual mais diferenciada.

A intenção inicial era utilizar uma tabela para dispor os usuários. Embora esteticamente agradável no desktop, a usabilidade no responsivo era inadequada.

Esse aspecto recebeu menos atenção em comparação com as funcionalidades.


3) Validação de variáveis ambiente.

Zod é uma ótima opção, porém ocorreram falhas inesperadas durante o desenvolvimento.

## API

#### GET /apolices
Params:
- page: int
- pageSize: int
- search: string

```json
{   
    "content": [{
        "id": 1,
        "numero": 125456,
        "valor_premio": 100.0,
        "segurado": {
            "nome": "Rita de Cassia da Silva",
            "email": "ritadecassia@email.com",
            "cpf_cnpj": "123.456.789-00"
        },
        "coberturas": [
            {
                "nome": "Incêndio",
                "valor": 14.0
            }
        ]
    }],
    "page": 1,
    "totalItens": 1,
    "totalPages": 1
}
```

#### POST /apolices
```json
{
    "numero": 125456,
    "valor_premio": 100.0,
    "segurado": {
        "nome": "Rita de Cassia",
        "email": "ritadecassia@email.com",
        "cpf_cnpj": "123.456.789-00"
    },
    "coberturas": [
        {
            "nome": "Incêndio",
            "valor": 14.0
        }
    ]
}
```

#### PUT /apolices/{id}
```json
{
    "numero": 125456,
    "valor_premio": 1000.0,
    "segurado": {
        "nome": "Rita de Cassia",
        "email": "ritadecassia@email.com",
        "cpf_cnpj": "123.456.789-00"
    },
    "coberturas": [
        {
            "nome": "Incêndio",
            "valor": 14.0
        }
    ]
}
```


#### GET /apolices/{id}
```json
{
    "id": 1,
    "numero": 125456,
    "valor_premio": 100.0,
    "segurado": {
        "nome": "Rita de Cassia",
        "email": "ritadecassia@email.com",
        "cpf_cnpj": "123.456.789-00"
    },
    "coberturas": [
        {
            "nome": "Incêndio",
            "valor": 14.0
        }
    ]
}
```

#### DELETE /apolices/{id}

