$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "name": "Cadastro de contas",
  "description": "Como um usuario\nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.step({
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ]
    },
    {
      "cells": [
        "Conta de teste",
        "Conta adicionada com sucesso!"
      ]
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ]
    },
    {
      "cells": [
        "Conta de teste",
        "Ja existe uma conta com esse nome!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuario \"lucas.cruz2000@hotmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta de teste\"",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuario \"lucas.cruz2000@hotmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuario \"lucas.cruz2000@hotmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta de teste\"",
  "keyword": "When "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Ja existe uma conta com esse nome!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});