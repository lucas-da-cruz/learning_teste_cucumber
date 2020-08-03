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
		//Imprimi as informa��es no console gerando relat�rio
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		//Formata o que ser� exibido no console quando executar via prompt de comando
		monochrome = false,
		//snippets gera os m�todos com CAMELCASE ou divididos por _
		snippets = SnippetType.CAMELCASE,
		//dryRun apenas realiza a valida��o de mapeamento dos meus testes true/false
		dryRun = false,
		//Strict � considerar um m�todo undefined para aprovado ou n�o
		strict = false,
		//Defino o caminho das features
		features = "src/test/resources/features/alugar_filme.feature",
		//Defino a minha classe de steps
		glue = "steps"
		//TAGS
		//Quando delimito por tag qual testes executar(nivel de feature e cenario)
		//tags = "@featureDeAPrendizado"
		//Negando
		//tags = "~@Ignore"
		//Selecionando tipos de tags, retorna as de tipo1 e tipo2
		//tags = {"@tipo1", "@tipo2"}
		//Selecionando tipos de tags, retorna as que s�o tipo1 e tipo2
		//tags = {"@tipo1, @tipo2"}
		)
public class RunnerTest {

}
