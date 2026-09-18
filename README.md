# Portfólio

Portfólio pessoal construído com React + TypeScript + Vite + Tailwind CSS v4.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Outros comandos:

```bash
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build de produção
npm run lint     # roda o linter (oxlint)
```

## Onde editar o conteúdo

Todo o conteúdo do site (nome, cargo, biografia, habilidades, redes sociais,
projetos e experiências) está centralizado em:

```
src/content/portfolioData.ts
```

Basta substituir os placeholders entre colchetes (ex: `[SEU NOME]`,
`[LINK DO GITHUB]`) pelos seus dados reais. Não é necessário mexer em
nenhum componente para atualizar o conteúdo.

### Projetos

Cada projeto em `projects` aceita: `title`, `description`, `image` (caminho
para uma imagem em `src/assets/` ou `public/`, opcional — sem imagem, um
placeholder é exibido automaticamente), `category`, `tags`, `liveUrl` e
`repoUrl`.

## Estrutura

```
src/
  components/   Componentes de UI (Header, Hero, Projects, etc.)
  content/      Conteúdo editável (portfolioData.ts)
  hooks/        Hooks utilitários (useReveal para animações de entrada)
```
