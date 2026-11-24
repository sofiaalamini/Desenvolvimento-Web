# Grão Dourado

Landing page de uma assinatura de café, feita para a disciplina de Desenvolvimento Web (FAG).

**Site publicado:** https://desenvolvimento-web.netlify.app

## Tecnologias

- React + TypeScript + Vite (páginas e componentes)
- Netlify Functions (back-end do formulário)
- Nodemailer (envio de e-mail por SMTP)

## Como funciona o formulário de contato

1. O React envia `{ email, message }` em JSON para `/api/send-email`.
2. O redirect do `netlify.toml` leva o pedido para a função `netlify/functions/send-email.ts`.
3. A função valida os dados e envia o e-mail com o Nodemailer, por SMTP.
4. A mensagem chega no e-mail definido em `CONTACT_EMAIL`.

## Como rodar no computador

```bash
npm install
cp .env.example .env     # preencha os valores (veja a tabela abaixo)
npx netlify dev          # abre em http://localhost:8888
```

Use `npx netlify dev` e não `npm run dev`: só o primeiro roda a função que envia o e-mail.

Para testar sem enviar e-mail de verdade, gere uma conta falsa em https://ethereal.email e use os dados dela no `.env`.

## Variáveis de ambiente

| Variável | Descrição | Exemplo |
|---|---|---|
| `SMTP_HOST` | servidor de e-mail | `smtp.gmail.com` |
| `SMTP_PORT` | porta | `587` |
| `SMTP_SECURE` | criptografia desde o início | `false` |
| `SMTP_USER` | conta que envia | `conta@gmail.com` |
| `SMTP_PASS` | Senha de App do Gmail | |
| `CONTACT_EMAIL` | quem recebe as mensagens | |
| `ALLOWED_ORIGIN` | endereço do site (CORS) | `https://desenvolvimento-web.netlify.app` |

No Gmail é preciso ativar a verificação em duas etapas e gerar uma Senha de App.
O arquivo `.env` não vai para o GitHub. No site publicado, as variáveis ficam no painel da Netlify.

## Estrutura

```
src/                       páginas, componentes e estilos
netlify/functions/         função que envia o e-mail
netlify.toml               build, pasta das funções e redirect de /api
.env.example               modelo das variáveis
```
