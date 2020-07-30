package runners;
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
		strict = false,
		//Defino o caminho das features
		features = "src/test/resources/features/curso_cucumber.feature",
		//Defino a minha classe de steps
		glue = "steps",
		//Quando delimito por tag qual testes executar(nivel de feature e cenario)
		//tags = "@featureDeAPrendizado"
		//Negando
		//tags = "~@Ignore"
		tags = {"@tipo1", "@tipo2"}
		)
public class Runner {

}
