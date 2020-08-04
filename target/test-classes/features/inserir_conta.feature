@funcionais
Feature: Cadastro de contas
Como um usuario
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

#Posso adicionar no background todas as etapas que eu tenho que são comum
#em todos os meus cenários de teste
Background:
	Given que estou acessando a aplicacao
	When informo o usuario "lucas.cruz2000@hotmail.com"
	And a senha "123456"
	And seleciono entrar
	Then visualizo a pagina inicial
	When seleciono Contas
	And seleciono Adicionar

Scenario Outline: Deve validar regras cadastro contas
	When informo a conta "<conta>"
	And seleciono Salvar
	Then recebo a mensagem "<mensagem>"
	Examples:
		|          conta             |              mensagem              |
		|       Conta de teste       |    Conta adicionada com sucesso!   |
		|                            |        Informe o nome da conta     |
		|       Conta de teste       | Ja existe uma conta com esse nome! |
