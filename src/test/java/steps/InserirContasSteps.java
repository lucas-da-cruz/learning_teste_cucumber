package steps;

import java.io.File;
import java.io.IOException;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class InserirContasSteps {
	private WebDriver driver;
	
	//Adicionando hook
	//Com o parametro order defino qual será o primeiro after a ser executado
	//Na ordem do before o 0 vêm primeiro
	@Before(order = 0)
	public void before() {
		System.out.println("Começando testes");
	}
	
	@Before(order = 1)
	public void nextBefore() {
		System.out.println("Começando testes - parte 2");
	}
	
	//Com o parametro order defino qual será o primeiro after a ser executado
	//Na ordem do after o 0 sempre será o último
	@After(order = 1, value = "@funcionais")
	public void screenshot(Scenario cenario) {
		//Tirando um screenshot da tela
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			Date d = new Date();
			String path = "target/screenshot/" + d.toString().trim() + ".jpg";
			path = path.replaceAll(":", "");
			System.out.println(path);
			FileUtils.copyFile(file, new File(path));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@After(order = 0, value = "@funcionais")
	public void fecharBrowser() {
		driver.quit();
	}
	
	@Given("^que desejo adicionar uma conta$")
	public void queDesejoAdicionarUmaConta() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Lucas da Cruz\\Documents\\chromerDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://srbarriga.herokuapp.com");
		driver.findElement(By.id("email")).sendKeys("lucas.cruz2000@hotmail.com");
		driver.findElement(By.name("senha")).sendKeys("123456");
		driver.findElement(By.tagName("button")).click();
	    driver.findElement(By.linkText("Contas")).click();
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@When("^adiciono a conta \"([^\"]*)\"$")
	public void adicionoAConta(String nomeConta) throws Throwable {
	    driver.findElement(By.id("nome")).sendKeys(nomeConta);
		driver.findElement(By.tagName("button")).click();
	}
	
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
	
	@Then("^sou notificado que o nome da conta eh obrigatorio$")
	public void souNotificarQueONomeDaContaEhObrigatorio() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Informe o nome da conta", texto);
	}
	
	@Then("^sou notificado que ja existe uma conta com esse nome$")
	public void souNotificadoQueJaExisteUmaContaComEsseNome() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Já existe uma conta com esse nome!", texto);
	}
	
	@Then("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String arg1) throws Throwable {
		//Comparação necessaria, pois no arquivo feature não reconhece a letra A com acento
		if("Ja existe uma conta com esse nome!".equals(arg1)) arg1 = "Já existe uma conta com esse nome!";
		
		String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
		Assert.assertEquals(arg1, texto);
	}
	
}
