const storyData = {
  start: {
    title: "CAPÍTULO 1: O ALERTA DE VAZAMENTO",
    text: "Você recebe um chamado urgente às 02h00. O banco de dados da TechShield foi comprometido. Há duas pistas iniciais disponíveis para análise. Por onde deseja começar a investigação?",
    choices: [
      { text: "1. Analisar os logs de acesso ao servidor principal.", target: "logs" },
      { text: "2. Interrogar o ex-funcionário Alex, demitido recentemente.", target: "alex" }
    ]
  },
  logs: {
    title: "CAPÍTULO 2A: ANÁLISE DE LOGS",
    text: "Ao verificar os registros de log, você nota que o acesso foi realizado usando credenciais administrativas válidas da funcionária Mariana (Atendimento ao Cliente) a partir de um IP estrangeiro. O que você faz?",
    choices: [
      { text: "1. Investigar a máquina de Mariana em busca de phishing ou malware.", target: "phishing" },
      { text: "2. Mandar prender Mariana imediatamente por suspeita de cumplicidade.", target: "bad_end_1" }
    ]
  },
  alex: {
    title: "CAPÍTULO 2B: INTERROGANDO ALEX",
    text: "Alex jura inocência, mas revela que a empresa usava senhas fracas e que um e-mail suspeito de 'Atualização de Sistema' circulou entre os funcionários na semana passada.",
    choices: [
      { text: "1. Voltar e checar os e-mails recebidos pela equipe (Ataque de Phishing).", target: "phishing" },
      { text: "2. Ignorar a pista e focar nas redes sociais do Alex.", target: "bad_end_2" }
    ]
  },
  phishing: {
    title: "CAPÍTULO 3: A PISTA DO PHISHING",
    text: "Você descobre um e-mail falso de atualização com um link malicioso que infectou o computador de Mariana com um trojan. O malware roubou as credenciais e enviou para um servidor remoto sob a chave de comando 'Ciber_Shadow'.",
    choices: [
      { text: "1. Rastrear o IP de comando do malfeitor usando análise de rede.", target: "success" },
      { text: "2. Enviar uma mensagem para o invasor tentando negociar.", target: "bad_end_3" }
    ]
  },
  success: {
    title: " CASO RESOLVIDO!",
    text: "Excelente trabalho! Ao rastrear o servidor remoto, você identificou que o ataque foi orquestrado por um grupo cibercriminoso externo explorando engenharia social. As credenciais foram revogadas e os dados recuperados com sucesso!",
    choices: [
      { text: " Ver Créditos", target: "credits" },
      { text: " Jogar Novamente", target: "start" }
    ]
  },
  bad_end_1: {
    title: " FIM DE JOGO - ERRO FORENSE",
    text: "Você acusou Mariana sem provas. Na verdade, ela foi vítima de phishing e não sabia do ataque. O verdadeiro invasor teve tempo de apagar os rastros e sumir com os dados.",
    choices: [
      { text: " Ver Créditos", target: "credits" },
      { text: " Tentar Novamente", target: "start" }
    ]
  },
  bad_end_2: {
    title: " FIM DE JOGO - PISTA FALSA",
    text: "Você perdeu tempo investigando as redes sociais de Alex enquanto o verdadeiro invasor limpava os servidores e criptografava os arquivos permanentemente.",
    choices: [
      { text: " Ver Créditos", target: "credits" },
      { text: " Tentar Novamente", target: "start" }
    ]
  },
  bad_end_3: {
    title: " FIM DE JOGO - ARDIL DO INVASOR",
    text: "O invasor usou a negociação para ganhar tempo, extrair mais dados estratégicos e bloquear todo o acesso da polícia aos sistemas.",
    choices: [
      { text: " Ver Créditos", target: "credits" },
      { text: " Tentar Novamente", target: "start" }
    ]
  },
  credits: {
    title: " CRÉDITOS DO JOGO",
    text: "Desenvolvimento e Criação:\n• Isabella Spelier\n• Ana Luiza\n\nFontes e Suporte Tecnológico:\n• Gemini (Inteligência Artificial)",
    choices: [
      { text: " Voltar ao Início", target: "start" }
    ]
  }
};

function renderNode(nodeKey) {
  const node = storyData[nodeKey];
  document.getElementById("chapter-title").innerText = node.title;
  
  // Substitui quebras de linha '\n' por tags '<br>' no texto
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

// Inicia o jogo no carregamento da página
window.onload = () => {
  renderNode("start");
};
