package runners;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

/**
 * Rodando cucumber via JUnit
 * @author Lucas da Cruz
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(
		//Imprimi as informações no console gerando relatório
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		//Formata o que será exibido no console quando executar via prompt de comando
		monochrome = true,
		//snippets gera os métodos com CAMELCASE ou divididos por _
		snippets = SnippetType.CAMELCASE,
		//dryRun apenas realiza a validação/construção dos mapeamentos dos métodos
		//dos meus testes
		dryRun = false,
		//Strict é considerar um método undefined para aprovado ou não
		strict = false,
		//Defino o caminho das features
		features = "src/test/resources/features/",
		//Defino a minha classe de steps
		glue = {"steps", "config"},
		//TAGS
		tags = {"@unitarios", "not @Ignore"}
		//Quando delimito por tag qual testes executar(nivel de feature e cenario)
		//tags = "@featureDeAPrendizado"
		//Negando
		//tags = "~@Ignore"
		//Selecionando tipos de tags, retorna as de tipo1 e tipo2
		//tags = {"@tipo1", "@tipo2"}
		//Selecionando tipos de tags, retorna as que são tipo1 e tipo2
		//tags = {"@tipo1, @tipo2"}
		)
public class RunnerUnitTest {

}
