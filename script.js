const storyData = {
  // INÍCIO - Escolha dos 2 Caminhos Iniciais
  start: {
    title: "CAPÍTULO 1: O AVISO DE INCIDENTE",
    text: "O banco de dados da startup TechShield foi invadido às 02h00. Dados confidenciais vazaram e um ransomware bloqueou o acesso aos servidores. Como deseja iniciar as investigações?",
    choices: [
      { text: "1. Caminho 1: Investigação Técnica (Análise de Logs e Servidores).", target: "cam1_fase1" },
      { text: "2. Caminho 2: Investigação Humana (Interrogatórios e Pessoas).", target: "cam2_fase1" }
    ]
  },

  // ================= CAMINHO 1 (INVESTIGAÇÃO TÉCNICA) =================
  cam1_fase1: {
    title: "CAMINHO 1 - FASE 1: ANÁLISE DE REDE",
    text: "Você acessa os registros do servidor e identifica acessos usando as credenciais administrativas da funcionária Mariana a partir de um IP remoto não identificado. O que deseja fazer?",
    choices: [
      { text: "1. [Avançar] Rastrear os pacotes de dados do IP e procurar a porta de entrada.", target: "cam1_fase2" },
      { text: "2. [Retornar] Mudar a abordagem e ir interrogar a equipe presencialmente.", target: "cam2_fase1" },
      { text: "3. [Ação Direta] Bloquear imediatamente o IP remoto e revogar o acesso de Mariana.", target: "bad_end_bloqueio" }
    ]
  },
  cam1_fase2: {
    title: "CAMINHO 1 - FASE 2: ENCONTRANDO O TROJAN",
    text: "Ao rastrear a rede, você encontra um arquivo malicioso (Trojan) instalado no computador de Mariana. Ele estava enviando credenciais para um servidor externo 'Ciber_Shadow'. Como prosseguir?",
    choices: [
      { text: "1. [Avançar] Descompilar o malware para encontrar a chave de descriptografia e a localização do servidor.", target: "success" },
      { text: "2. [Retornar] Voltar para a análise geral de logs para verificar se outros servidores foram afetados.", target: "cam1_fase1" },
      { text: "3. [Ação Direta] Tentar invadir de volta o servidor 'Ciber_Shadow' sem mascarar seu IP.", target: "bad_end_invasao" }
    ]
  },

  // ================= CAMINHO 2 (INVESTIGAÇÃO HUMANA) =================
  cam2_fase1: {
    title: "CAMINHO 2 - FASE 1: INTERROGATÓRIO E SUSPEITOS",
    text: "Você conversa com a equipe. Alex (ex-desenvolvedor) diz que foi demitido injustamente e alerta sobre um e-mail suspeito de 'Atualização de Sistema' que todos receberam. Mariana diz que apenas clicou no link da TI. O que fazer?",
    choices: [
      { text: "1. [Avançar] Analisar o e-mail que Mariana recebeu e a caixa de entrada da equipe.", target: "cam2_fase2" },
      { text: "2. [Retornar] Mudar para o caminho técnico e analisar diretamente os logs do servidor.", target: "cam1_fase1" },
      { text: "3. [Ação Direta] Acusar Alex imediatamente e mandar prender o ex-funcionário.", target: "bad_end_alex" }
    ]
  },
  cam2_fase2: {
    title: "CAMINHO 2 - FASE 2: A ARMADILHA DE PHISHING",
    text: "Você confirma que Mariana foi vítima de um ataque de Engenharia Social (Phishing). O e-mail falso roubou suas senhas. O remetente utilizou um domínio disfarçado que aponta para um servidor remoto.",
    choices: [
      { text: "1. [Avançar] Usar o cabeçalho do e-mail para rastrear a origem do ataque e isolar o vírus.", target: "success" },
      { text: "2. [Retornar] Voltar e reinterrogar Alex para ver se ele tem relação com o domínio falso.", target: "cam2_fase1" },
      { text: "3. [Ação Direta] Tentar responder ao e-mail golpista oferecendo recompensa em dinheiro.", target: "bad_end_negociacao" }
    ]
  },

  // ================= FINAIS DE JOGO (DERROTA) =================
  bad_end_bloqueio: {
    title: " FIM DE JOGO: BLOQUEIO PREMATURO",
    text: "Ao bloquear o IP sem rastrear a origem, o invasor percebeu a movimentação e ativou um comando de destruição automática, apagando permanentemente os dados da empresa.",
    choices: [
      { text: "1. Ver Créditos", target: "credits" },
      { text: "2. Tentar Novamente", target: "start" },
      { text: "3. Voltar para a escolha anterior", target: "cam1_fase1" }
    ]
  },
  bad_end_invasao: {
    title: " FIM DE JOGO: CONTRA-ATAQUE FALHO",
    text: "Ao tentar contra-atacar o servidor remoto sem proteção adequada, o cibercriminoso detectou sua conexão, invadiu seu computador de investigação e vazou as informações.",
    choices: [
      { text: "1. Ver Créditos", target: "credits" },
      { text: "2. Tentar Novamente", target: "start" },
      { text: "3. Voltar para a escolha anterior", target: "cam1_fase2" }
    ]
  },
  bad_end_alex: {
    title: " FIM DE JOGO: ACUSAÇÃO SEM PROVAS",
    text: "Você prendeu Alex sem provas. Na verdade, ele era inocente e tentava alertar a empresa. O verdadeiro criminoso continuou com o acesso total e concluiu o roubo dos dados.",
    choices: [
      { text: "1. Ver Créditos", target: "credits" },
      { text: "2. Tentar Novamente", target: "start" },
      { text: "3. Voltar para a escolha anterior", target: "cam2_fase1" }
    ]
  },
  bad_end_negociacao: {
    title: " FIM DE JOGO: ARMADILHA DE NEGOCIAÇÃO",
    text: "O chantagista usou a negociação para ganhar tempo, extrair informações confidenciais do seu sistema e expor os dados na dark web mesmo assim.",
    choices: [
      { text: "1. Ver Créditos", target: "credits" },
      { text: "2. Tentar Novamente", target: "start" },
      { text: "3. Voltar para a escolha anterior", target: "cam2_fase2" }
    ]
  },

  // ================= FINAL DE SUCESSO =================
  success: {
    title: " CASO RESOLVIDO COM SUCESSO!",
    text: "Parabéns! Você identificou a técnica de invasão, isolou o malware e conseguiu recuperar a chave de descriptografia antes do vazamento final. O sistema foi restaurado e a segurança da TechShield foi reforçada!",
    choices: [
      { text: "1. Ver Créditos do Jogo", target: "credits" },
      { text: "2. Jogar Novamente do Início", target: "start" },
      { text: "3. Explora o Caminho 1", target: "cam1_fase1" }
    ]
  },

  // ================= CRÉDITOS =================
  credits: {
    title: " CRÉDITOS DO JOGO",
    text: "Desenvolvimento e Criação:\n• Isabella Spelier\n• Ana Luiza\n\nFontes e Suporte Tecnológico:\n• Gemini (Inteligência Artificial)",
    choices: [
      { text: "1. Voltar ao Início do Jogo", target: "start" },
      { text: "2. Ir para o Caminho Técnico (Caminho 1)", target: "cam1_fase1" },
      { text: "3. Ir para o Caminho Humano (Caminho 2)", target: "cam2_fase1" }
    ]
  }
};

function renderNode(nodeKey) {
  const node = storyData[nodeKey];
  document.getElementById("chapter-title").innerText = node.title;
  
  // Converte quebras de linha '\n' em marcação HTML '<br>'
  document.getElementById("story-text").innerHTML = node.text.replace(/\n/g, "<br>");
  
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  
  node.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => renderNode(choice.target);
    choicesContainer.appendChild(button);
  });
}

// Inicializa o jogo
window.onload = () => {
  renderNode("start");
};
