import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

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
	
	Date entrega = new Date();
	
	@Given("^que a entrega eh dia (\\d+)/(\\d+)/(\\d+)$")
	public void que_a_entrega_eh_dia(int day, int month, int year) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DAY_OF_MONTH, day);
		cal.set(Calendar.MONTH, month-1);
		cal.set(Calendar.YEAR, year);
		entrega = cal.getTime();
	}

	@When("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void a_entrega_atrasar_em_dias(int arg1, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, arg1);
		}
		if(tempo.equals("meses")) {
			cal.add(Calendar.MONTH, arg1);
		}
		entrega = cal.getTime();
	}

	@Then("^a entrega sera efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void a_entrega_sera_efetuada_em(String data) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(data, dataFormatada);
	}


}
