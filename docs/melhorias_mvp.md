# Evolução da 1ª entrega (MVP) à versão final

**Projeto:** Movimento Sem Fome  
**Disciplina:** Desenvolvimento Front-End para Web — UNICID  
**Entrega:** Atividade A1 — 2ª entrega (projeto de site)

## 1. Retorno da primeira entrega

**O professor não fez observações nem solicitou correções específicas sobre a primeira entrega (MVP).** Portanto, não há apontamentos do docente a listar como problemas corrigidos.

As mudanças descritas neste documento representam a **evolução do projeto para atender aos novos requisitos da 2ª entrega** e ajustes realizados pela equipe. Não devem ser interpretadas como correções exigidas pelo professor.

## 2. Comparação entre o MVP e a segunda entrega

| Aspecto | 1ª entrega (MVP), conforme roteiro | Evolução para a 2ª entrega | Evidência no repositório |
| --- | --- | --- | --- |
| Tecnologias | HTML5 e CSS3; JavaScript opcional | Inclusão de JavaScript para o formulário e controles de acessibilidade | [`form-contato.js`](../src/js/form-contato.js), [`main.js`](../src/js/main.js) |
| Páginas | Dez páginas interligadas | Preservação das dez páginas, com estrutura organizada na raiz | [Mapa e lista de páginas](./escopo.md) |
| Formulário | Base do MVP | Validação e rascunho via `localStorage` implementados; ainda há ajustes de validação a realizar | [`contato.html`](../contato.html), [`form-contato.js`](../src/js/form-contato.js) |
| Acessibilidade | Base de HTML/CSS | Controles de contraste e tamanho de texto por eventos JavaScript; testes completos ainda dependem de confirmação | [`main.js`](../src/js/main.js), [Plano de testes](./testes.md) |
| Multimídia | Estrutura inicial | Inclusão de vídeo, áudio, galeria e mapa incorporado | [`midia.html`](../midia.html), [`galeria.html`](../galeria.html) |
| Publicação | Projeto entregue localmente em `.zip` | Endereço de publicação HTTPS informado no README (Vercel) | [Site publicado](https://trabalho-html-self.vercel.app/), [Orçamento](./orcamento.md) |
| Versionamento | Entrega de arquivos | Repositório GitHub com branches `main` e `develop` e pull request integrado | [Histórico de commits](https://github.com/giuerme/Trabalho-HTML/commits/main/), [PR #1](https://github.com/giuerme/Trabalho-HTML/pull/1) |
| Documentação | Material da primeira etapa | Inclusão de README, escopo, arquitetura, diário, orçamento, testes, melhorias e registro de uso de IA | [Pasta `docs`](./README.md) |
| IA | Não avaliada no MVP | Documentação de regras e estrutura de registro criada; prompts concretos ainda precisam ser completados | [Uso de IA](./uso_ia.md), [Diário de bordo](./diario_de_bordo.md) |
| Apresentação | Avaliação da primeira etapa | A segunda entrega exige 14 slides e demonstração ao vivo | Materiais de apresentação devem ser conferidos na entrega do Blackboard |

> **Nota metodológica:** a coluna do MVP sintetiza as condições da primeira entrega segundo o roteiro da atividade. Ela não constitui um inventário verificado de arquivos da versão antiga. As evidências vinculadas à segunda entrega apontam para arquivos e registros existentes no projeto.

## 3. Evoluções concretas identificáveis

### 3.1. Estrutura e identidade do site

O projeto reúne as dez páginas exigidas: `index.html`, `sobre.html`, `impacto.html`, `projetos.html`, `noticias.html`, `contato.html`, `galeria.html`, `midia.html`, `acessibilidade.html` e `orcamento_hospedagem.html`.

Os estilos compartilhados estão em [`src/css/home.css`](../src/css/home.css) e [`src/css/pages.css`](../src/css/pages.css).

### 3.2. Interatividade em JavaScript

- [`src/js/form-contato.js`](../src/js/form-contato.js): captura dados digitados, salva rascunho em `localStorage`, recupera valores no carregamento e apresenta mensagens após interação com o botão de envio.
- [`src/js/main.js`](../src/js/main.js): altera classes no `body` em resposta a cliques para contraste e ajuste do tamanho de texto.

**Limitação conhecida:** o formulário ainda possui rotinas de envio no HTML e no JavaScript, não destaca individualmente todos os campos inválidos e não sincroniza completamente o estado interno após restaurar o rascunho. O site funciona como protótipo, sem envio real de mensagens a servidor. Esses pontos não devem ser registrados como resolvidos antes de sua correção.

### 3.3. Publicação e colaboração

A URL indicada para a versão publicada é **https://trabalho-html-self.vercel.app/**. A organização do trabalho no GitHub é verificável pelo [histórico de commits](https://github.com/giuerme/Trabalho-HTML/commits/main/) e pelo [pull request #1 — Atualização do visual da página inicial](https://github.com/giuerme/Trabalho-HTML/pull/1), integrado à branch principal.

### 3.4. Documentação e testes

A pasta [`docs`](./README.md) concentra os registros da entrega final. O [plano de testes](./testes.md) contém casos de navegação, formulário, responsividade, multimídia e validação HTML, acompanhados de capturas em `src/images/prints/`.

**Atenção:** o próprio plano ainda identifica como não executados os testes dos controles de contraste, ampliação de texto e auditoria Lighthouse. A declaração de validação W3C das dez páginas deve ser sustentada pelas evidências correspondentes.

## 4. Registro de melhorias do MVP — sem apontamentos do professor

| Origem | Situação da 1ª entrega | Providência na 2ª entrega | Status |
| --- | --- | --- | --- |
| Observações do professor | Nenhuma observação ou solicitação de correção foi comunicada | Não houve correção específica motivada por apontamento docente | **Não se aplica** |
| Novo requisito de JavaScript | Opcional no MVP | Arquivos JavaScript adicionados para formulário e controles da interface | **Implementado, com ajustes pendentes** |
| Novo requisito de deploy | Entrega local | Endereço HTTPS na Vercel informado no projeto | **URL documentada** |
| Novo requisito de versionamento | Entrega por arquivos | Repositório, branches, commits e PR | **Evidenciado** |
| Novo requisito de IA documentada | Não avaliado | Arquivo `uso_ia.md` e referências no diário | **Registro de prompts pendente** |
| Novo requisito de comprovação técnica | Avaliação do MVP | Plano de testes e capturas organizados | **Parcial: faltam testes e evidências** |

## 5. Evidências de antes e depois

Como **não houve observações do professor** e não foram anexadas a este documento capturas verificadas da primeira versão, **não é correto apresentar imagens atuais como se fossem imagens anteriores**.

Para a apresentação, a equipe pode utilizar:
- **Antes (MVP):** requisitos e entregáveis previstos para a primeira etapa, identificados explicitamente como comparação de escopo; se houver imagens ou commits históricos verificáveis, utilizá-los com data e link.
- **Depois (versão final):** capturas reais de `src/images/prints/`, código JavaScript e links do deploy e do pull request.

A comparação documenta a passagem de um MVP em HTML/CSS para uma entrega com JavaScript, publicação e versionamento, **sem atribuir ao professor problemas que ele não apontou**.

## 6. Próximas verificações antes da entrega

1. Corrigir e demonstrar integralmente a validação do formulário, incluindo destaque dos campos e restauração consistente do `localStorage`.
2. Completar os registros reais de prompts e revisões em [`uso_ia.md`](./uso_ia.md).
3. Realizar os testes de acessibilidade ainda não executados e registrar as evidências.
4. Verificar funcionamento de todas as páginas e links no site publicado.
5. Conferir a participação de todos os integrantes nos commits e os materiais exigidos no Blackboard.

---

**Conclusão:** a primeira entrega não recebeu observações do professor. A evolução registrada resulta dos **requisitos adicionais da segunda entrega**, das funcionalidades desenvolvidas e da documentação organizada no GitHub. Os itens ainda pendentes permanecem identificados para evitar declarar como concluído o que não foi comprovado.
