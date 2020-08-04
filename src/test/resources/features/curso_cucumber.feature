@unitarios
Feature: Aprender cucumber
  Como um aluno
  Eu quero aprender a utilizar cucumber
  Para que eu possa automatizar criterios de aceitacao

  Scenario: Deve executar especificacao
    Given que criei o arquivo corretamente
    When executa-lo
    Then a especificacao deve finalizar com sucesso

@tipo1
Scenario: Deve incrementar contador
  	Given que o valor do contador eh 15
  	When eu incrementar em 5
  	Then o valor do contador sera 20
  	
@tipo2
Scenario: Deve incrementar contador
  	Given que o valor do contador eh 123
  	When eu incrementar em 35
  	Then o valor do contador sera 158

@tipo1 @tipo2
Scenario: Deve calcular atraso na entrega
	Given que a entrega eh dia 05/04/2018
	When a entrega atrasar em 2 dias
	Then a entrega sera efetuada em 07/04/2018

@atrasoEntrega
Scenario: Deve calcular atraso no prazo de entrega da china
	Given que a entrega eh dia 05/04/2018
	When a entrega atrasar em 2 meses
	Then a entrega sera efetuada em 05/06/2018

@Ignore
Scenario: Deve criar steps genericos para estes passos
    Given que o ticket eh AF345
    Given que o valor da passagem eh R$ 230,45
    Given que o nome do passageiro eh "Fulano da Silva"
    Given que o telefone do passageiro eh 9999-9999
    When criar os steps
    Then o teste vai funcionar

@Ignore
Scenario: Deve reaproveitar os steps "Dado" do cenario anterior
    Given que o ticket eh AB167
    Given que o ticket especial eh AB167
    Given que o valor da passagem eh R$ 1120,23
    Given que o nome do passageiro eh "Cicrano de Oliveira"
    Given que o telefone do passageiro eh 9888-8888

@Ignore
Scenario: Deve negar todos os steps "Dado" dos cenarios anteriores
    Given que o ticket eh CD123
    Given que o ticket eh AG1234
    Given que o valor da passagem eh R$ 1.1345,56
    Given que o nome do passageiro eh "Beltrano Souza Matos de Alcantara Azevedo"
    Given que o telefone do passageiro eh 1234-5678
    Given que o telefone do passageiro eh 999-2223

#Exemplo com AND e BUT
@Ignore
Scenario: Deve criar steps genericos para estes passos
    Given que o ticket eh AF345
    And que o valor da passagem eh R$ 230,45
    And que o nome do passageiro eh "Fulano da Silva"
    And que o telefone do passageiro eh 9999-9999
    When criar os steps
    Then o teste vai funcionar