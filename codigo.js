function mostrarMensagem(){
    const mensagens = [
        "O temor do Senhor é o princípio do conhecimento, mas os insensatos desprezam a sabedoria e a instrução.",
        "O princípio da sabedoria é: adquira-a, e use tudo o que você possui para adquirir entendimento.",
        "Todos os caminhos do homem lhe parecem certos, mas o Senhor avalia o coração.",
        "A boa reputação vale mais que grandes riquezas; desfrutar boa estima vale mais que prata e ouro.",
        "O homem sábio é poderoso, e quem tem conhecimento aumenta a sua força."

    ];

    const sorteio = Math.floor(Math.random() * mensagens.length);
    
    document.getElementById("mensagem").innerText = mensagens[sorteio];
}