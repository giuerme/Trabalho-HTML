# Evolução da 1ª entrega (MVP) à versão final

## 1. Objetivo

Documentar o que mudou entre a primeira entrega e a segunda, incluindo as **observações reais do professor**, as providências tomadas e a comparação visual/técnica **antes × depois**. Este registro é solicitado explicitamente pelo roteiro e corresponde ao critério 9 da rubrica (0,30 ponto).

## 2. Evolução exigida pelo roteiro

O quadro abaixo descreve a **diferença entre os requisitos das duas entregas**, não afirma que todas as correções já foram executadas.

| Área | 1ª entrega — MVP, segundo o roteiro | Requisito da 2ª entrega | Evidência a anexar |
| --- | --- | --- | --- |
| Tecnologias | HTML5 + CSS3; JS opcional | JavaScript obrigatório com validação, `localStorage` e eventos | Código e execução |
| Páginas | Dez páginas interligadas | Dez páginas revisadas e corrigidas | Links + W3C |
| Publicação | Pasta local em `.zip` | Site acessível publicamente em HTTPS | URL e captura |
| Versionamento | Arquivos ZIP | GitHub com commits de todos, branch e PR | Links de Git e PR |
| IA | Não avaliada | Prompts, decisões e correções documentados | Diário e `uso_ia.md` |
| Qualidade | MVP inicial | Acessibilidade, responsividade e testes comprovados | Lighthouse, W3C e capturas |
| Apresentação | Avaliação do MVP | 14 slides e demonstração técnica ao vivo | Slides e roteiro |

## 3. Mudanças identificáveis no repositório consultado

| Componente | Evidência observável em 08/11/2026 | Observação |
| --- | --- | --- |
| Dez páginas HTML | Dez arquivos HTML aparecem na raiz | A existência não prova ausência de erros de navegação. |
| Estilos | `src/css/home.css` e `src/css/pages.css` | Há Grid, Flexbox e media query. |
| Interação DOM | `src/js/main.js` | Controles de fonte e contraste; demais requisitos de JS requerem verificação/correção. |
| Deploy informado | URL `trabalho-html-self.vercel.app` no README | É preciso comprovar acesso online e recursos íntegros. |
| Documentação | README na raiz; esta pasta `/docs` é fornecida para inclusão | Evidência somente depois de publicar no repositório. |

**Não é possível identificar a data exata de cada implementação ou atribuir mudanças a integrantes apenas pelos arquivos atuais.** Para isso, usar histórico Git com links específicos.

## 4. Feedback da primeira entrega — preencher com os apontamentos recebidos

> O feedback da avaliação do MVP não foi fornecido entre os materiais analisados. Inserir a transcrição fiel dos apontamentos, sem criar críticas hipotéticas como se fossem do professor.

| Nº | Apontamento original do professor | Correção realmente aplicada | Evidência antes | Evidência depois | Commit/autor |
| --- | --- | --- | --- | --- | --- |
| 1 | [transcrever] | [descrever] | [arquivo/print] | [arquivo/print] | [URL] |
| 2 | [transcrever] | [descrever] | [arquivo/print] | [arquivo/print] | [URL] |
| 3 | [transcrever] | [descrever] | [arquivo/print] | [arquivo/print] | [URL] |

## 5. Como apresentar o antes × depois

1. Escolher um problema mencionado na correção original do MVP.
2. Capturar a tela da 1ª versão ou recuperar o código pelo commit/tag correspondente.
3. Capturar **a mesma tela ou funcionalidade** na versão final, com condições comparáveis.
4. Explicar qual alteração resolveu o problema, citando arquivo, mudança e teste de confirmação.
5. Vincular ambas as imagens na pasta `evidencias/`.

Exemplo de referência **a preencher apenas com arquivos reais**:

```markdown
| Antes | Depois |
| --- | --- |
| ![Antes](evidencias/mvp-antes-01.png) | ![Depois](evidencias/mvp-depois-01.png) |
```

## 6. Conclusão da equipe — preencher após revisão

- **Total de apontamentos recebidos:** [número real]
- **Total efetivamente corrigido:** [número real]
- **Itens ainda não resolvidos e justificativas:** [descrever ou “nenhum”, se comprovado]
- **Integrante responsável pela revisão:** [nome]
