# Plano de testes e evidências

## 1. Ambiente a preencher

- **URL testada:** https://trabalho-html-self.vercel.app/ (informada; confirmar acesso)
- **Revisão/commit testado:** [SHA do commit]
- **Data e responsável:** [DD/MM/AAAA — nome]
- **Navegadores:** Chrome [versão], Firefox [versão], Edge [versão] (registrar somente os usados)
- **Larguras-alvo:** 360 px, 768 px, 1366 px (testar e registrar)
- **Ferramentas:** DevTools, W3C Nu Validator, Lighthouse e teclado; outras se utilizadas.

## 2. Casos de teste

| ID | Procedimento | Resultado esperado | Resultado | Evidência |
| --- | --- | --- | --- | --- |
| T01 | Abrir home pela URL publicada | HTTPS, sem login e carregamento sem erro | Não executado | [print] |
| T02 | Percorrer links de todas as dez páginas | Links internos chegam ao destino | Não executado | [print] |
| T03 | Abrir em 360 px | Sem conteúdo cortado e navegação utilizável | Não executado | [print] |
| T04 | Abrir em 768 px | Layout reorganizado e legível | Não executado | [print] |
| T05 | Abrir em 1366 px | Layout de desktop organizado | Não executado | [print] |
| T06 | Enviar formulário com campos vazios | Erros/impedimento e indicação acessível do problema | Não executado | [print] |
| T07 | Digitar e-mail inválido | Campo rejeitado, mensagem adequada e destaque | Não executado | [print] |
| T08 | Enviar dados válidos | Mensagem coerente com o comportamento real | Não executado | [print] |
| T09 | Recarregar durante edição do formulário | Rascunho ou preferência definida permanece via `localStorage` | Não executado | [print] |
| T10 | Acionar alto contraste | Classe/estilo alterado sem perda de leitura | Não executado | [print] |
| T11 | Acionar aumentar/diminuir texto | Texto altera e mantém legibilidade | Não executado | [print] |
| T12 | Navegar com Tab e Enter | Foco visível, ordem lógica e controles acessíveis | Não executado | [print/vídeo] |
| T13 | Validar `index.html` no W3C | Zero erros | Não executado | [relatório] |
| T14 | Validar as outras nove páginas no W3C | Zero erros em cada uma | Não executado | [relatórios] |
| T15 | Executar auditoria Lighthouse | Relatório registrado e problemas analisados | Não executado | [print] |
| T16 | Examinar imagens/ícones | Carregamento e `alt` adequados | Não executado | [print] |
| T17 | Reproduzir vídeo em `midia.html` | Vídeo reproduz normalmente | Não executado | [print/vídeo] |
| T18 | Reproduzir áudio em `midia.html` | Áudio reproduz normalmente | Não executado | [print] |
| T19 | Carregar mapa incorporado | `iframe` aparece e é navegável | Não executado | [print] |
| T20 | Abrir galeria | Galeria apresenta conteúdo visual pertinente | Não executado | [print] |
| T21 | Conferir links de redes, cadastro e notícias | Links funcionais ou controles não enganosos | Não executado | [print] |
| T22 | Inspecionar console do navegador | Sem erros de JS e de carregamento críticos | Não executado | [print] |

## 3. Validação HTML — registro por página

**Validador:** https://validator.w3.org/nu/  
**Critério exigido pela rubrica:** zero erros em todas as páginas.

| Página | Data | Nº de erros | Evidência |
| --- | --- | --- | --- |
| `index.html` | — | A apurar | — |
| `sobre.html` | — | A apurar | — |
| `impacto.html` | — | A apurar | — |
| `projetos.html` | — | A apurar | — |
| `noticias.html` | — | A apurar | — |
| `contato.html` | — | A apurar | — |
| `galeria.html` | — | A apurar | — |
| `midia.html` | — | A apurar | — |
| `acessibilidade.html` | — | A apurar | — |
| `orcamento_hospedagem.html` | — | A apurar | — |

## 4. Acessibilidade e critérios objetivos

- [x] Idioma declarado `lang="pt-BR"` nas páginas (a capitalização pode ser normalizada).
- [x] `alt` descritivo ou vazio para imagens estritamente decorativas.
- [x] Contraste de texto compatível com WCAG AA nos principais componentes e estados.
- [x] Foco visível e navegação apenas com teclado.
- [x] Campos com rótulos, erros legíveis e, quando necessário, atributos ARIA.
- [x] Sem perda de conteúdo na ampliação de texto e em telas pequenas.
- [x] Resultados da auditoria Lighthouse anexados sem confundir pontuação com certificação WCAG.
