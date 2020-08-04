Feature: Cadastro de contas
Como um usuario
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

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

@ignore
Scenario: Nao deve inserir uma conta sem nome
	Given que estou acessando a aplicacao
	When informo o usuario "lucas.cruz2000@hotmail.com"
	And a senha "123456"
	And seleciono entrar
	Then visualizo a pagina inicial
	When seleciono Contas
	And seleciono Adicionar
	And seleciono Salvar
	Then sou notificar que o nome da conta eh obrigatorio

@ignore
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