$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "line": 1,
  "name": "Cadastro de contas",
  "description": "Como um usuario\r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "informo o usuario \"lucas.cruz2000@hotmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "a senha \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a conta eh inserida com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 7603114600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lucas.cruz2000@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 306445500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 176617700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 724288600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 55908300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 102367000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 368681000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 144184000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 509339700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.aContaEhInseridaComSucesso()"
});
formatter.result({
  "duration": 39077500,
  "status": "passed"
});
});