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
//Adiciona impressão do cucumber no console
@CucumberOptions(
		//Imprimi as informações no console
		plugin = "pretty",
		//Formata o que será exibido no console
		monochrome = true,
		//snippets gera os métodos com CAMELCASE ou divididos por _
		snippets = SnippetType.CAMELCASE,
		//dryRun apenas realiza a validação de mapeamento dos meus testes true/false
		dryRun = false,
		//Strict é considerar um método undefined para aprovado ou não
		strict = false
		)
public class Runner {

}
