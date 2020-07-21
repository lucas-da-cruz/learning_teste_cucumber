import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
/**
 * Rodando cucumber via JUnit
 * @author Lucas da Cruz
 *
 */
@RunWith(Cucumber.class)
//Adiciona impress�o do cucumber no console
@CucumberOptions(
		//Imprimi as informa��es no console
		plugin = "pretty",
		//Formata o que ser� exibido no console
		monochrome = true,
		//snippets gera os m�todos com CAMELCASE ou divididos por _
		snippets = SnippetType.CAMELCASE,
		//dryRun apenas realiza a valida��o de mapeamento dos meus testes true/false
		dryRun = false,
		//Strict � considerar um m�todo undefined para aprovado ou n�o
		strict = false
		)
public class Runner {

}
