Feature: Aprender cucumber
  Como um aluno
  Eu quero aprender a utilizar cucumber
  Para que eu possa automatizar criterios de aceitacao

  Scenario: Deve executar especificacao
    Given que criei o arquivo corretamente
    When executa-lo
    Then a especificacao deve finalizar com sucesso
    
Scenario: Deve incrementar contador
  	Given que o valor do contador eh 15
  	When eu incrementar em 5
  	Then o valor do contador sera 20
  	
Scenario: Deve incrementar contador
  	Given que o valor do contador eh 123
  	When eu incrementar em 35
  	Then o valor do contador sera 158
  	
Scenario: Deve calcular atraso na entrega
	Given que a entrega eh dia 05/04/2018
	When a entrega atrasar em 2 dias
	Then a entrega sera efetuada em 07/04/2018
	
Scenario: Deve calcular atraso no prazo de entrega da china
	Given que a entrega eh dia 05/04/2018
	When a entrega atrasar em 2 meses
	Then a entrega sera efetuada em 05/06/2018
	
  	