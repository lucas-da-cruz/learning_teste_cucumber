$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/alugar_filme.feature");
formatter.feature({
  "line": 1,
  "name": "Alugar filme",
  "description": "Como usuario\nEu quero cadastrar alugueis de filmes\nPara controlar precos e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#Scenario: Deve alugar um filme com sucesso"
    },
    {
      "line": 7,
      "value": "#   Given um filme com estoque de 2 unidades"
    },
    {
      "line": 8,
      "value": "#   And que o preco do aluguel seja de R$ 3"
    },
    {
      "line": 9,
      "value": "#   When alugar"
    },
    {
      "line": 10,
      "value": "#   Then o preco do aluguel sera R$ 3"
    },
    {
      "line": 11,
      "value": "#   And a data de entrega sera em 1 dia"
    },
    {
      "line": 12,
      "value": "#   And o estoque do filme sera 1 unidade"
    },
    {
      "line": 14,
      "value": "### FAZENDO O QUE FOI FEITO ACIMA, MAS COM DATA TABLE ###"
    }
  ],
  "line": 15,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 17
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 18
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 19
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "que o preco do aluguel seja de R$ 3",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "o preco do aluguel sera R$ 3",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "a data de entrega sera em 1 dia",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "o estoque do filme sera 1 unidade",
  "keyword": "And "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 291834300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 34
    }
  ],
  "location": "AlugarFilmesSteps.queOPrecoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 5091900,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 2455700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 2518300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 1815900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "duration": 182000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Nao deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;nao-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "nao sera possivel por falta de estoque",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "o estoque do filme sera 0 unidade",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 140500,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 116500,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.naoSeraPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 56100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "duration": 187600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 32,
      "value": "#Scenario: Deve dar condicoes especiais para categoria extendida"
    },
    {
      "line": 33,
      "value": "#\t\tGiven um filme com estoque de 2 unidades"
    },
    {
      "line": 34,
      "value": "#    And que o preco do aluguel seja de R$ 4"
    },
    {
      "line": 35,
      "value": "#\t\tAnd que o tipo de aluguel seja extendido"
    },
    {
      "line": 36,
      "value": "#\t\tWhen alugar"
    },
    {
      "line": 37,
      "value": "#\t\tThen o preco do aluguel sera R$ 8"
    },
    {
      "line": 38,
      "value": "#\t\tAnd a data de entrega sera em 3 dias"
    },
    {
      "line": 39,
      "value": "#\t\tAnd a pontuacao recebida sera de 2 pontos"
    },
    {
      "line": 41,
      "value": "#Scenario: Deve alugar para categoria comum"
    },
    {
      "line": 42,
      "value": "#\t\tGiven um filme com estoque de 2 unidades"
    },
    {
      "line": 43,
      "value": "#   And que o preco do aluguel seja de R$ 4"
    },
    {
      "line": 44,
      "value": "#\t\tAnd que o tipo de aluguel seja comum"
    },
    {
      "line": 45,
      "value": "#\t\tWhen alugar"
    },
    {
      "line": 46,
      "value": "#\t\tThen o preco do aluguel sera R$ 4"
    },
    {
      "line": 47,
      "value": "#\t\tAnd a data de entrega sera em 1 dia"
    },
    {
      "line": 48,
      "value": "#\t\tAnd a pontuacao recebida sera de 1 pontos"
    },
    {
      "line": 50,
      "value": "### FAZENDO O QUE FOI FEITO ACIMA, MAS COM SCENARIO OUTLINE ###"
    }
  ],
  "line": 52,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "que o preco do aluguel seja de R$ \u003cpreco\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "que o tipo de aluguel seja \u003ctipo\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "o preco do aluguel sera R$ \u003cvalor\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "a data de entrega sera em \u003cqtdeDias\u003e dias",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "a pontuacao recebida sera de \u003cpontuacao\u003e pontos",
  "keyword": "And "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdeDias",
        "pontuacao"
      ],
      "line": 61,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 62,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 63,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 64,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 62,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "que o preco do aluguel seja de R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "que o tipo de aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "o preco do aluguel sera R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "a data de entrega sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "a pontuacao recebida sera de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 249000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "AlugarFilmesSteps.queOPrecoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 190900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 99600,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 150900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 132100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 2668600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "duration": 422700,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "que o preco do aluguel seja de R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "que o tipo de aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "o preco do aluguel sera R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "a data de entrega sera em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "a pontuacao recebida sera de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 239800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 34
    }
  ],
  "location": "AlugarFilmesSteps.queOPrecoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 122300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 430600,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 103200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 127500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 619100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "duration": 121500,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "que o preco do aluguel seja de R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "que o tipo de aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "o preco do aluguel sera R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "a data de entrega sera em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "a pontuacao recebida sera de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 137100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 34
    }
  ],
  "location": "AlugarFilmesSteps.queOPrecoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 159000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 126300,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 1735000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 168600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 551300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "duration": 933900,
  "status": "passed"
});
});