import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;

import cucumber.api.PendingException;
/**
 * Estados cucumber: 
 * - undefined: não encontra aquela step
 * - pending: lançou uma exception PendingException e está pendente
 * - skipped: nem tentou testar aquele step
 * - failed: falha quando gera outra exception que não seja PendingException
 * - passed: quando um teste passa
 */
public class CursoCucumber {
	@Given("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
	    //throw new PendingException();
		System.out.println("Passou aqui");
	}

	@When("^executa-lo$")
	public void executaLo() throws Throwable {
	}

	@Then("^a especificacao deve finalizar com sucesso$")
	public void aEspecificacaoDeveFinalizarComSucesso() throws Throwable {
	}
	
	private int contador = 0;
	@Given("^que o valor do contador eh (\\d+)$")
	public void que_o_valor_do_contador(int arg1) throws Throwable {
	    contador = arg1;
	}

	@When("^eu incrementar em (\\d+)$")
	public void eu_incrementar_em(int arg1) throws Throwable {
	    contador = contador + arg1;
	}

	@Then("^o valor do contador sera (\\d+)$")
	public void o_valor_do_contador_ser(int arg1) throws Throwable {
		Assert.assertEquals(arg1, contador);
	}

}
