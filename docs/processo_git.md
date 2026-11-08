# Gestão da equipe e processo no GitHub

## 1. Repositório

- **Projeto:** Movimento Sem Fome
- **Repositório:** https://github.com/giuerme/Trabalho-HTML
- **Branch principal identificada:** `main`
- **Histórico de commits:** https://github.com/giuerme/Trabalho-HTML/commits/main/
- **Pull requests:** https://github.com/giuerme/Trabalho-HTML/pulls

A rubrica exige **commits descritivos de todos os integrantes**, **ao menos uma branch** e **ao menos um pull request**. A existência de um repositório público **não comprova**, sozinha, esses itens.

## 2. Integrantes

Os nomes e os perfis abaixo foram recuperados do README do projeto. Atribuições específicas só devem ser preenchidas mediante confirmação da equipe.

| Integrante | GitHub | Papel e arquivos de sua responsabilidade | Evidência |
| --- | --- | --- | --- |
| Guilherme Lima de Souza | [@giuerme](https://github.com/giuerme) | A confirmar | [commits/PR] |
| Guilherme Miranda Sena | [@mirandadev-creator](https://github.com/mirandadev-creator) | A confirmar | [commits/PR] |
| Guilherme Vilela Frassão | [@guilherme-vilelaf](https://github.com/guilherme-vilelaf) | A confirmar | [commits/PR] |
| Nathan de Oliveira Tavares | [@ghost-nana](https://github.com/ghost-nana) | A confirmar | [commits/PR] |
| Kaue Dogani Moreira | [@kauedogani](https://github.com/kauedogani) | A confirmar | [commits/PR] |
| João Vitor Gonçalves de Oliveira | [@ojoaovitor88](https://github.com/ojoaovitor88) | A confirmar | [commits/PR] |

## 3. Fluxo de versionamento recomendado

```text
Issue / tarefa -> Branch de funcionalidade -> Commits descritivos
     -> Pull request -> Revisão e testes -> Merge na main -> Deploy
```

O fluxo acima é uma **proposta de procedimento**, não um relato de que todas as etapas já ocorreram.

### Exemplo de comandos para uma alteração real

```bash
git checkout main
git pull origin main
git checkout -b docs/segunda-entrega
# copiar/editar os arquivos da pasta docs/
git add docs/
git commit -m "docs: adiciona documentação da segunda entrega"
git push -u origin docs/segunda-entrega
```

Depois do `push`, abrir um pull request para `main`, solicitar revisão e registrar o link após o merge. O nome de branch acima é apenas um **exemplo**.

## 4. Evidências de contribuição

| Integrante | Link de commit(s) real(is) | Branch | Pull request relacionado | Observações |
| --- | --- | --- | --- | --- |
| Guilherme Lima de Souza | [adicionar] | [adicionar] | [adicionar] | — |
| Guilherme Miranda Sena | [adicionar] | [adicionar] | [adicionar] | — |
| Guilherme Vilela Frassão | [adicionar] | [adicionar] | [adicionar] | — |
| Nathan de Oliveira Tavares | [adicionar] | [adicionar] | [adicionar] | — |
| Kaue Dogani Moreira | [adicionar] | [adicionar] | [adicionar] | — |
| João Vitor Gonçalves de Oliveira | [adicionar] | [adicionar] | [adicionar] | — |

## 5. Padrão sugerido para commits

- `feat: adiciona validação do formulário de contato`
- `fix: corrige navegação em telas pequenas`
- `style: melhora contraste e estados de foco`
- `docs: registra testes de acessibilidade`
- `test: adiciona evidências de validação W3C`

Essas mensagens são **exemplos**, não histórico do repositório.

## 6. Checklist do processo

- [ ] Confirmar que todos os integrantes contribuíram com commits próprios.
- [ ] Conferir se as mensagens explicam as mudanças.
- [ ] Registrar pelo menos uma branch e o link de seu pull request.
- [ ] Documentar revisões, decisões e problemas no diário de bordo.
- [ ] Demonstrar o histórico de commits e um PR na apresentação.
