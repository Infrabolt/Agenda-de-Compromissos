# Agenda de Compromissos

Aluno: Jose Mateus Gouveia da Silva
Disciplina: Programação Web
CCO - 6º Período

## Descrição

A Agenda de Compromissos é uma aplicação web desenvolvida para cadastrar, consultar e organizar compromissos pessoais em uma interface simples. O projeto está sendo desenvolvido com HTML5, CSS3 e JavaScript, com foco nos requisitos acadêmicos do Tema 3 — Agenda de compromissos.

> **Estado atual:** a estrutura da interface e o fluxo inicial de cadastro estão em desenvolvimento. As funcionalidades descritas como planejadas ainda precisam ser concluídas.

## Funcionalidades

### Implementadas ou iniciadas
- Estrutura inicial da página com o título “Agenda de Compromissos”.
- Formulário para informar título, descrição, data, hora, categoria e prioridade.
- Validação básica dos campos obrigatórios de título, descrição, data e hora.
- Inclusão dos compromissos em uma lista mantida em memória durante a execução.
- Área inicial de pesquisa e filtros por categoria, prioridade e status.

### Planejadas
- Listagem dos compromissos cadastrados.
- Dashboard com totais de compromissos por status.
- Alteração de status entre Agendado, Realizado e Cancelado.
- Busca textual e aplicação dinâmica dos filtros.
- Visualização completa dos detalhes de cada compromisso.
- Demonstração de carregamento assíncrono.
- Refinamento da validação, da responsividade e da experiência de uso.

## Dados de um compromisso

Cada compromisso deverá reunir:
- Título
- Descrição
- Data
- Hora
- Categoria: aula, reunião, consulta ou pessoal
- Prioridade: alta, média ou baixa
- Status: agendado, realizado ou cancelado

O identificador único será incorporado durante a implementação completa do modelo de compromisso.

## Tecnologias

- HTML5 — estrutura e conteúdo da página.
- CSS3 — apresentação visual e responsividade.
- JavaScript — interações, validação e manipulação dinâmica da interface.
- Git e GitHub — versionamento e colaboração.

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Abra `index.html` em um navegador moderno.

O projeto está planejado para funcionar no navegador, sem servidor ou banco de dados. No estado atual, os compromissos são mantidos em memória e não devem ser considerados persistentes após recarregar ou fechar a página.

## Organização do projeto

- `index.html` — estrutura da interface.
- `script.js` — comportamento e interações da aplicação.
- `style.css` — estilos visuais referenciados pela página.

## Planejamento e fluxo de trabalho

O desenvolvimento foi organizado em etapas funcionais para priorizar os requisitos obrigatórios e caber em um orçamento de 16 horas de trabalho focado:

1. Estrutura visual e navegação.
2. Cadastro e validação dos compromissos.
3. Listagem e dashboard.
4. Alteração de status.
5. Busca e filtros.
6. Visualização de detalhes.
7. Carregamento assíncrono.
8. Testes, correções, responsividade e documentação.

As branches devem representar etapas reais de desenvolvimento, e os commits devem descrever mudanças efetivamente realizadas. O planejamento de branches e commits é uma orientação de trabalho; não significa que todas essas etapas já estejam concluídas.

## Uso de IA

**Ferramenta utilizada:** ChatGPT, da OpenAI.  
**Data de utilização:** 08/10/2026.  
**Finalidade:** apoio ao planejamento e à documentação do projeto.

### Como a IA foi utilizada

O ChatGPT foi solicitado a atuar como Product Owner para ajudar a definir o escopo da Agenda de Compromissos dentro de um limite de 16 horas de trabalho focado. A assistência incluiu:

- Identificação e priorização de oito grupos de funcionalidades para o MVP.
- Definição de critérios de aceite para cadastro, listagem, dashboard, alteração de status, busca, filtros, detalhes e carregamento assíncrono.
- Proposta de sequência de desenvolvimento e distribuição do tempo.
- Sugestão de nomes para branches e mensagens de commits.
- Orientação para manter o escopo limitado aos requisitos da atividade.

### Prompt/resumo da solicitação

“Interprete o papel de Product Owner para o Tema 3 — Agenda de compromissos. Identifique as funcionalidades necessárias, proponha branches e nomes de commits e organize o trabalho para ser concluído em 16 horas de foco real, respeitando os requisitos do PDF da atividade.”

### Aplicação no projeto e revisão humana

As recomendações foram usadas como apoio ao planejamento do backlog, à organização das etapas e à elaboração desta documentação. As sugestões são orientativas: devem ser comparadas com os requisitos oficiais da atividade e ajustadas ao progresso real do projeto. A implementação, os testes e a validação final devem ser realizados e compreendidos pelos integrantes do projeto.

Com base nos arquivos analisados, este README não declara que funcionalidades ainda planejadas já estão implementadas. A documentação deve ser atualizada conforme o desenvolvimento evoluir.

## Limitações conhecidas

- Os dados estão atualmente armazenados em memória e não persistem após o encerramento ou recarregamento da página.
- A listagem completa e os indicadores do dashboard ainda precisam ser implementados.
- A alteração de status e a atualização dinâmica dos resultados ainda precisam ser concluídas.
- A funcionalidade assíncrona e a revisão final da responsividade ainda estão pendentes.

## Licença

Nenhuma licença foi definida até o momento.