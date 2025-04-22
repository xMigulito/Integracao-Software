 Feature: Checkout de Ifood
     Quando eu estiver comprando itens no app de delivery

 Scenario: Pagamento bem sucedido
     Given Dado que o usuário está logado
     And Tem itens adicionados no carrinho
     When Eu tento fazer checkout com cartão válido
     Then Recebo uma mensagem de pedido realizado com sucesso
    
 Scenario: Erro no código do cartão
     Given Dado que o usuário está logado
     And Tem itens adicionados no carrinho
     When Eu tento fazer checkout com cartão inválido
     Then Recebo uma mensagem de erro

 Scenario: Loja já fechou
     Given Dado que o usuário está logado
     And Tem itens adicionados no carrinho
     When Eu tento fazer checkout com cartão válido
     And A loja finalizou o expediente
     Then Recebo uma mensagem de que a loja está fechada



 Feature: Envio de Pix
     Quando eu estiver fazendo uma transação

 Scenario: Pix efetuado
     Given Dado que o usuário está logado e validado
     When Eu tento fazer o pix para uma chave correta
     And Tem saldo suficiente
     Then Recebo uma mensagem de pix efetuado

 Scenario: Chave inválida   
     Given Dado que o usuário está logado e validado
     When Eu tento fazer pix para uma chave incorreta
     And Tem saldo suficiente
     Then Recebo uma mensagem de chave incorreta

 Scenario: Pix não efetuado
     Given Dado que o usuário está logado e validado
     When Eu tento fazer o pix para uma chave correta
     And Não tem saldo suficiente
     Then Recebo uma mensagem de saldo insuficiente


Feature: Login em um jogo
    Quando estiver tentando acessar minha conta

Scenario: Login bem sucedido
    Given Dado que a aplicação esteja rodando
    When Tente realizar o login 
    And E-mail e senha corretos
    Then Recebo mensagem de conta acessada com sucesso

Scenario: Senha incorreta
    Given Dado que a aplicação esteja rodando
    When Tente realizar o login 
    And E-mail correto e senha incorreta
    Then Recebo mensagem de senha inválida

Scenario: E-mail não localizado
    Given Dado que a aplicação esteja rodando
    When Tente realizar o login 
    And E-mail incorreto e senha correto
    Then Recebo mensagem de conta não localizada
