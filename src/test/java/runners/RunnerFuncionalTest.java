package runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

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
		//Imprimi as informa��es no console gerando relat�rio
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		//Formata o que ser� exibido no console quando executar via prompt de comando
		monochrome = true,
		//snippets gera os m�todos com CAMELCASE ou divididos por _
		snippets = SnippetType.CAMELCASE,
		//dryRun apenas realiza a valida��o/constru��o dos mapeamentos dos m�todos
		//dos meus testes
		dryRun = false,
		//Strict � considerar um m�todo undefined para aprovado ou n�o
		strict = false,
		//Defino o caminho das features
		features = "src/test/resources/features/",
		//Defino a minha classe de steps
		glue = {"steps", "config"},
		//TAGS
		tags = {"@funcionais"}
		//Quando delimito por tag qual testes executar(nivel de feature e cenario)
		//tags = "@featureDeAPrendizado"
		//Negando
		//tags = "~@Ignore"
		//Selecionando tipos de tags, retorna as de tipo1 e tipo2
		//tags = {"@tipo1", "@tipo2"}
		//Selecionando tipos de tags, retorna as que s�o tipo1 e tipo2
		//tags = {"@tipo1, @tipo2"}
		)
public class RunnerFuncionalTest {

	@BeforeClass
	public static void reset() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Lucas da Cruz\\Documents\\chromerDriver\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://srbarriga.herokuapp.com");
	    driver.findElement(By.id("email")).sendKeys("lucas.cruz2000@hotmail.com");
		driver.findElement(By.name("senha")).sendKeys("123456");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}

}
