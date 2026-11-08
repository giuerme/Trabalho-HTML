# Orçamento, publicação e justificativa técnica

## 1. Decisão de hospedagem

**URL informada pelo README:** https://trabalho-html-self.vercel.app/  
**Plataforma correspondente ao domínio:** Vercel.  
**Tipo de projeto:** website acadêmico estático em HTML, CSS e JavaScript, sem etapa de compilação ou back-end encontrada no repositório consultado.

A publicação na Vercel é uma escolha compatível com a proposta acadêmica porque oferece hospedagem de projetos estáticos, domínio de projeto e HTTPS sem a necessidade de manter um servidor próprio. A equipe deve confirmar o plano e demonstrar o site online durante a apresentação.

## 2. Alternativas exibidas na página do projeto

Os valores abaixo foram **reproduzidos da tabela ilustrativa existente em `orcamento_hospedagem.html`**. Eles **não são cotações atuais de fornecedores**.

| Modalidade | Referência ilustrativa | Custo anual simulado de hospedagem | Adequação apresentada na página |
| --- | ---: | ---: | --- |
| Hospedagem compartilhada | R$ 15,00/mês | R$ 180,00/ano | Sites institucionais simples |
| VPS | R$ 70,00/mês | R$ 840,00/ano | Aplicações com banco de dados |
| Nuvem | R$ 120,00/mês | R$ 1.440,00/ano | Crescimento sob demanda |

### Domínios citados na página

| Extensão | Referência ilustrativa | Periodicidade |
| --- | ---: | --- |
| `.org.br` | R$ 40,00 | ano |
| `.com.br` | R$ 40,00 | ano |
| `.org` | R$ 90,00 | ano |

**Exemplos simulados, assumindo `.org.br` por R$ 40/ano:** compartilhada + domínio = **R$ 220/ano**; VPS + domínio = **R$ 880/ano**; nuvem + domínio = **R$ 1.480/ano**. Os cálculos não incluem impostos, manutenção, e-mail profissional nem desenvolvimento.

## 3. Vercel — cenário acadêmico de referência

De acordo com a documentação e os preços oficiais, o plano **Hobby** da Vercel tem preço de referência de **US$ 0/mês**, é voltado a projetos pessoais e está condicionado a **uso não comercial** e limites de recursos. **Isso não comprova que a equipe utilize esse plano; confirmar na conta responsável pelo deploy.**

| Item | Cenário acadêmico possível | Observação |
| --- | --- | --- |
| Publicação estática na Vercel | Hobby: US$ 0/mês, se elegível | Confirmar plano atual e limites |
| Subdomínio `*.vercel.app` | Não exige comprar domínio próprio para usar a URL informada | Confirmar URL e HTTPS |
| Domínio próprio opcional | Usar cotação real no momento da contratação | Os valores do HTML são somente ilustrativos |
| Manutenção/conteúdo | Não quantificada | Depende da organização/equipe |
| Certificado HTTPS | Recurso disponibilizado pela plataforma | Demonstrar acesso seguro |

**Fontes da plataforma (consultadas em 08/11/2026):**

- https://vercel.com/pricing
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/plans

## 4. Critérios da escolha

1. **Simplicidade técnica:** adequada ao site estático desenvolvido com arquivos HTML, CSS e JavaScript.
2. **HTTPS:** necessário para a avaliação do professor.
3. **Publicação acessível por URL:** permite demonstração em diferentes dispositivos sem instalação.
4. **Integração ao processo Git:** facilita atualizar o conteúdo após revisão da equipe, se o repositório estiver conectado ao deploy.
5. **Custo:** cenário com plano gratuito potencialmente viável ao protótipo acadêmico, observadas as regras do provedor.

## 5. Alinhamento entre documentação e página pública

O arquivo `orcamento_hospedagem.html` recomenda, na versão consultada, **hospedagem compartilhada + domínio `.org.br`**. Já o README informa uma URL da **Vercel**. Para evitar contradição, recomenda-se que a página HTML identifique a **Vercel como a solução efetivamente escolhida para a demonstração acadêmica**, mantendo o comparativo de compartilhada/VPS/nuvem como estudo de alternativas. A equipe deve confirmar a configuração real antes de declarar o deploy concluído.

## 6. Verificação de publicação a registrar

| Verificação | Evidência esperada | Resultado |
| --- | --- | --- |
| URL abre sem login em HTTPS | Captura com barra de endereço | A registrar |
| Dez páginas online | Navegação por menu e links | A registrar |
| CSS e JS carregam | Console/rede do navegador sem falhas relevantes | A registrar |
| Imagens, vídeo, áudio e mapa carregam | Capturas e reprodução | A registrar |
| URL apresentada é a mesma versão do ZIP | Conferência de arquivos e último commit | A registrar |
