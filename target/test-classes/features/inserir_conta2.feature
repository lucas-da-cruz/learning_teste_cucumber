#@funcionais
Feature: Cadastro de contas
Como um usuario
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

### Cenario criado de forma imperativa
Scenario: Deve inserir uma conta com sucesso
	Given que estou acessando a aplicacao
	When informo o usuario "lucas.cruz2000@hotmail.com"
	And a senha "123456"
	And seleciono entrar
	Then visualizo a pagina inicial
	When seleciono Contas
	And seleciono Adicionar
	And informo a conta "Conta de Teste"
	And seleciono Salvar
	Then a conta eh inserida com sucesso

Scenario: Nao deve inserir uma conta sem nome
	Given que estou acessando a aplicacao
	When informo o usuario "lucas.cruz2000@hotmail.com"
	And a senha "123456"
	And seleciono entrar
	Then visualizo a pagina inicial
	When seleciono Contas
	And seleciono Adicionar
 	And informo a conta ""
	And seleciono Salvar
	Then sou notificado que o nome da conta eh obrigatorio

Scenario: Nao deve inserir uma conta com nome ja existente
	Given que estou acessando a aplicacao
	When informo o usuario "lucas.cruz2000@hotmail.com"
	And a senha "123456"
	And seleciono entrar
	Then visualizo a pagina inicial
	When seleciono Contas
	And seleciono Adicionar
	And informo a conta "Conta de Teste"
	And seleciono Salvar
	Then sou notificado que ja existe uma conta com esse nome
	
### Exemplo de um cenario criado de forma declarativa
#Scenario Outline: Exemplo de cenario declarativo
#	Given que desejo adicionar uma conta
#	When adiciono a conta "<conta>"
#	Then recebo a mensagem "<mensagem>"
#		Examples:
#		|          conta             |              mensagem              |
#		|       Conta de teste       |    Conta adicionada com sucesso!   |
#		|                            |        Informe o nome da conta     |
#		|       Conta de teste       | Ja existe uma conta com esse nome! |
	