# Plano de testes e evidências

**Objetivo:** comprovar funcionamento do site e atender à rubrica (JavaScript, HTML, CSS, WCAG, multimídia, deploy e demonstração ao vivo).

> **Importante:** os casos abaixo são um **plano de execução**, e as observações de código foram feitas por inspeção estática do repositório em 08/11/2026. **Nenhum caso está marcado como “Aprovado” sem uma execução documentada.**

## 1. Ambiente a preencher

- **URL testada:** https://trabalho-html-self.vercel.app/ (informada; confirmar acesso)
- **Revisão/commit testado:** [SHA do commit]
- **Data e responsável:** [DD/MM/AAAA — nome]
- **Navegadores:** Chrome [versão], Firefox [versão], Edge [versão] (registrar somente os usados)
- **Larguras-alvo:** 360 px, 768 px, 1366 px (testar e registrar)
- **Ferramentas:** DevTools, W3C Nu Validator, Lighthouse e teclado; outras se utilizadas.

## 2. Casos de teste

**Legenda para resultado:** `Aprovado` / `Reprovado` / `Não executado` / `Não aplicável` — preencher após o teste.

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

## 3. Constatações de análise estática (não são execução de testes)

| Item examinado | Constatação no código consultado | Ação para obter aprovação |
| --- | --- | --- |
| `src/js/main.js` | Possui eventos DOM para fonte/contraste; **não foi localizado uso de `localStorage` nem lógica de validação do formulário nesse arquivo**. | Adicionar/comprovar persistência e validação em JS, testar T06–T09. |
| `contato.html` | O formulário usa `required`, `type="email"` e um `onsubmit` embutido com `preventDefault()` e aviso visual de sucesso. | Validar mensagens de erro específicas e bordas de destaque; esclarecer ausência de envio remoto, se for protótipo. |
| `src/css/pages.css` | Tem foco `:focus-visible`, `@media(max-width:900px)`, alto contraste e fontes ajustáveis. | Testar comportamento em telas e teclado e obter evidência. |
| Recursos locais em HTML | Referências a `src/assets/images/...`, `src/assets/video/...` e `src/assets/audio/...`, não encontradas na árvore Git consultada. | Incluir mídias ou ajustar caminhos antes dos testes T16–T20. |
| Links placeholder | Existem `href="#"` e `href=""` nas páginas. | Substituir por URLs/seções válidas ou desativar ações não disponíveis. |
| Impacto e galeria | `impacto.html` declara valores ilustrativos; `galeria.html` tem blocos de foto para substituir. | Identificar projeções e trocar placeholders por conteúdo final, se exigido. |

## 4. Validação HTML — registro por página

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

## 5. Acessibilidade e critérios objetivos

- [ ] Idioma declarado `lang="pt-BR"` nas páginas (a capitalização pode ser normalizada).
- [ ] `alt` descritivo ou vazio para imagens estritamente decorativas.
- [ ] Contraste de texto compatível com WCAG AA nos principais componentes e estados.
- [ ] Foco visível e navegação apenas com teclado.
- [ ] Campos com rótulos, erros legíveis e, quando necessário, atributos ARIA.
- [ ] Sem perda de conteúdo na ampliação de texto e em telas pequenas.
- [ ] Resultados da auditoria Lighthouse anexados sem confundir pontuação com certificação WCAG.

## 6. Registro de defeitos e retestes

| ID | Defeito observado **durante teste** | Responsável | Commit de correção | Reteste | Status |
| --- | --- | --- | --- | --- | --- |
| [BUG-01] | [preencher após teste] | [nome] | [URL] | [data/resultado] | Aberto |

As evidências devem ser salvas conforme `evidencias/README.md`. **Não preencha resultados positivos apenas porque um recurso é mencionado no README.**
