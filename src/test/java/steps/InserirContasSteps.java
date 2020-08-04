package steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class InserirContasSteps {
	private WebDriver driver;
	
	@Given("^que estou acessando a aplicacao$")
	public void queEstouAcessandoAAplicacao() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Lucas da Cruz\\Documents\\chromerDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://srbarriga.herokuapp.com");
	}

	@When("^informo o usuario \"([^\"]*)\"$")
	public void informoOUsuario(String arg1) throws Throwable {
	    driver.findElement(By.id("email")).sendKeys(arg1);
	}

	@When("^a senha \"([^\"]*)\"$")
	public void aSenha(String arg1) throws Throwable {
		driver.findElement(By.name("senha")).sendKeys(arg1);
	}

	@When("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Then("^visualizo a pagina inicial$")
	public void visualizoAPaginaInicial() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Bem vindo, Lucas da Cruz!", texto);
	}

	@When("^seleciono Contas$")
	public void selecionoContas() throws Throwable {
	    driver.findElement(By.linkText("Contas")).click();
	}

	@When("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@When("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String arg1) throws Throwable {
	    driver.findElement(By.id("nome")).sendKeys(arg1);
	}

	@When("^seleciono Salvar$")
	public void selecionoSalvar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Then("^a conta eh inserida com sucesso$")
	public void aContaEhInseridaComSucesso() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}
}
