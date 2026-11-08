# Escopo e critérios de aceitação

**Projeto:** Movimento Sem Fome · **Natureza:** website acadêmico demonstrativo · **Disciplina:** Desenvolvimento Front-End para Web — UNICID.

## 1. Contexto e problema

A fome e o desperdício de alimentos são problemas sociais e ambientais relacionados. A proposta do Movimento Sem Fome é utilizar um site informativo para divulgar possibilidades de apoio, incentivar a participação voluntária e aumentar a conscientização sobre segurança alimentar e consumo responsável.

**Importante:** conteúdos de impacto e atividades descritas no site têm finalidade demonstrativa; não representam, por si só, resultados operacionais comprovados da iniciativa.

## 2. Público-alvo e inclusão

- Pessoas interessadas em doação de alimentos e participação voluntária.
- Estabelecimentos e organizações interessados em futuras parcerias.
- Comunidades e instituições que procuram informações sobre apoio e segurança alimentar.
- Pessoas com deficiência (PCD), incluindo usuários de leitor de tela, pessoas que navegam com teclado e usuários com necessidade de contraste ampliado.
- Visitantes em celulares, tablets e computadores.

## 3. Relação com os ODS

| ODS | Relação com o site | Fonte oficial |
| --- | --- | --- |
| **ODS 2 — Fome zero e agricultura sustentável** | Divulga a causa da segurança alimentar e ações de solidariedade contra a fome. | https://brasil.un.org/pt-br/sdgs/2 |
| **ODS 12 — Consumo e produção responsáveis** | Aborda desperdício, reaproveitamento de alimentos e consumo responsável. | https://brasil.un.org/pt-br/sdgs/12 |

A relação com os ODS descreve **alinhamento temático**, não comprovação de impacto social mensurado.

## 4. Objetivos

### Objetivo geral

Desenvolver um website informativo, responsivo e acessível para apresentar o Movimento Sem Fome, divulgar suas iniciativas e facilitar o contato de pessoas interessadas na causa.

### Objetivos específicos e mensuráveis

1. **Entregar dez páginas HTML interligadas**, com navegação coerente e identidade visual uniforme.
2. **Disponibilizar formulário de contato/voluntariado**, com validação JavaScript, mensagens acessíveis e persistência de rascunho ou preferência via `localStorage`.
3. **Apresentar a temática social** por meio de páginas de impacto, projetos, notícias, galeria, recursos multimídia e orçamento.
4. **Oferecer navegação inclusiva**, com teclado, textos alternativos, contraste apropriado, foco visível e adequação a celular/tablet/desktop.
5. **Publicar o site em HTTPS** e manter evidências do processo de desenvolvimento, dos testes e do uso de IA no GitHub.

## 5. Escopo funcional

| Área | Comportamento esperado | Página/arquivo relacionado |
| --- | --- | --- |
| Apresentação da iniciativa | Explicar proposta, missão, ações e chamada para participação. | `index.html`, `sobre.html` |
| Projetos e apoio | Apresentar ações de doação, voluntariado e possibilidades de parceria. | `projetos.html`, `contato.html` |
| Impacto social | Exibir informações e indicadores **claramente identificados** como reais, projeções ou dados ilustrativos. | `impacto.html` |
| Conteúdo informativo | Publicar notícias/avisos com referências e links úteis. | `noticias.html` |
| Comunicação | Validar campos e informar claramente o resultado do envio; persistir rascunho ou preferência local. | `contato.html`, `src/js/main.js` |
| Galeria e mídia | Disponibilizar imagens, vídeo, áudio e `iframe` funcional. | `galeria.html`, `midia.html` |
| Acessibilidade | Disponibilizar ajustes de interface e navegação compreensível por teclado/leitor de tela. | `acessibilidade.html`, CSS e JS |
| Hospedagem | Explicar alternativa de publicação, custo e justificativa. | `orcamento_hospedagem.html`, `docs/orcamento.md` |

### Páginas exigidas

1. `index.html` — início
2. `sobre.html` — sobre
3. `impacto.html` — impacto
4. `projetos.html` — projetos
5. `noticias.html` — notícias
6. `contato.html` — contato
7. `galeria.html` — galeria
8. `midia.html` — mídia
9. `acessibilidade.html` — acessibilidade
10. `orcamento_hospedagem.html` — orçamento e hospedagem

## 6. Requisitos não funcionais

- HTML5 semântico; **zero erros** no validador W3C para as dez páginas.
- `lang="pt-BR"`, conteúdo alternativo adequado para imagens e atributos ARIA quando necessários.
- Contraste mínimo compatível com WCAG AA, navegação por teclado e indicação visual de foco.
- CSS responsivo com Flexbox/Grid e consistência de paleta, tipografia e componentes.
- JavaScript em arquivo externo, com tratamento de formulário, eventos de DOM e `localStorage`.
- Site publicado em endereço HTTPS, sem login, com links e recursos online funcionais.
- Histórico GitHub com participação documentada, mensagens de commit descritivas, branch e pull request.

## 7. Critérios de aceitação

O quadro relaciona o **que deve ser demonstrado**, não declara que os testes foram executados.

| ID | Critério de aceitação | Evidência necessária | Resultado da verificação |
| --- | --- | --- | --- |
| CA-01 | Dez páginas acessíveis entre si | Navegação online + captura do menu | A registrar |
| CA-02 | HTML sem erros de validação | Relatório W3C por página | A registrar |
| CA-03 | Layout funcional em 360, 768 e 1366 px | Capturas e teste de rolagem | A registrar |
| CA-04 | Formulário diferencia envio inválido e válido | Prints e teste funcional | A registrar |
| CA-05 | `localStorage` mantém a informação definida após recarga | Demonstração e captura | A registrar |
| CA-06 | Ao menos uma interação via DOM/evento funciona | Vídeo/print e código | A registrar |
| CA-07 | Teclado, foco, `alt`, contraste e idioma adequados | Testes manuais + Lighthouse | A registrar |
| CA-08 | Mídia e mapa carregam | Capturas do conteúdo reproduzido | A registrar |
| CA-09 | Site online em HTTPS e sem autenticação | URL e captura do navegador | A registrar |
| CA-10 | `/docs`, histórico Git e PR documentados | Links de arquivos, commits e PR | A registrar |
| CA-11 | Melhorias do MVP justificadas | Antes/depois e feedback original | A registrar |
| CA-12 | Uso de IA compreendido e registrado | Prompts e revisão humana | A registrar |

## 8. Limites do projeto acadêmico

A existência de textos sobre cadastro de estabelecimentos, logística de doações ou distribuição de alimentos **não implica** que exista um sistema operacional com back-end, banco de dados, transações ou parcerias ativas. Não devem ser anunciados como realizados sem evidências. O formulário pode ser demonstrativo; um envio de mensagem exibido em tela não prova que ocorreu envio de e-mail a um destinatário.

## 9. Responsáveis e aprovação

**Equipe:** consultar `processo_git.md` e o README principal.  
**Aprovação dos critérios:** preencher após validação coletiva e ensaio da apresentação.
