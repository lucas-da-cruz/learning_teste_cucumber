package steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import entity.Filme;
import entity.NotaAluguel;
import entity.TipoAluguel;
import services.AluguelServices;
import utils.DateUtils;

public class AlugarFilmesSteps {
	private Filme filme;
	private AluguelServices aluguel = new AluguelServices();
	private NotaAluguel nota;
	private String erro;
	private TipoAluguel tipoAluguel;
	
	@Given("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int qtd) throws Throwable {
	    filme = new Filme();
	    filme.setEstoque(qtd);
	}

	@Given("^que o preco do aluguel seja de R\\$ (\\d+)$")
	public void queOPrecoDoAluguelSejaDeR$(int valor) throws Throwable {
		filme.setAluguel(valor);
	}
	
	@Given("^um filme$")
	public void umFilme(DataTable table) throws Throwable {
		Map<String, String> map = table.asMap(String.class, String.class);
		filme = new Filme();
		filme.setEstoque(Integer.parseInt(map.get("estoque")));
		filme.setAluguel(Integer.parseInt(map.get("preco")));
		String tipo = map.get("tipo");
		tipoAluguel = tipo.equals("semanal") ? 
  			  TipoAluguel.SEMANAL : tipo.equals("extendido") ? 
  					  			    TipoAluguel.EXTENDIDO : TipoAluguel.COMUM;
	}


	@When("^alugar$")
	public void alugar() throws Throwable {
		try {
			nota = aluguel.alugar(filme, tipoAluguel);
		} catch (RuntimeException e) {
			erro = e.getMessage();
		}		
	}

	@Then("^o preco do aluguel sera R\\$ (\\d+)$")
	public void oPrecoDoAluguelSeraR$(int valorEsperado) throws Throwable {
	    Assert.assertEquals(valorEsperado, nota.getPreco());
	}

	@Then("^o estoque do filme sera (\\d+) unidade$")
	public void oEstoqueDoFilmeSeraUnidade(int arg1) throws Throwable {
		Assert.assertEquals(arg1, filme.getEstoque());
	}
	
	@Then("^nao sera possivel por falta de estoque$")
	public void naoSeraPossivelPorFaltaDeEstoque() throws Throwable {
	    Assert.assertEquals("Filme sem estoque", erro);
	}
	
	/**
	 * Capturo um grupo via argumento de string
	 * Podendo ser extendido ou comum
	 */
	@Given("^que o tipo de aluguel seja (.*)$")
	public void queOTipoDeAluguelSejaExtendido(String tipo) throws Throwable {
	    tipoAluguel = tipo.equals("semanal") ? 
	    			  TipoAluguel.SEMANAL : tipo.equals("extendido") ? 
	    					  			    TipoAluguel.EXTENDIDO : TipoAluguel.COMUM;
	}

	@Then("^a data de entrega sera em (\\d+) dias?$")
	public void aDataDeEntregaSeraEmDias(int dia) throws Throwable {
		Date dataEsperada = DateUtils.obterDataDiferenciaDias(dia);
		Date dataReal = nota.getDataEntrega();
		
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		
		Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
	}

	@Then("^a pontuacao recebida sera de (\\d+) pontos$")
	public void aPontuacaoRecebidaSeraDePontos(int arg1) throws Throwable {
		Assert.assertEquals(arg1, nota.getPontuacao());
	}

}
