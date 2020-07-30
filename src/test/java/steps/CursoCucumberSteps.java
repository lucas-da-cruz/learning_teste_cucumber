package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import converters.DateConverter;
import cucumber.api.PendingException;
import cucumber.api.Transform;
/**
 * Estados cucumber: 
 * - undefined: não encontra aquela step
 * - pending: lançou uma exception PendingException e está pendente
 * - skipped: nem tentou testar aquele step
 * - failed: falha quando gera outra exception que não seja PendingException
 * - passed: quando um teste passa
 */
public class CursoCucumberSteps {
	@Given("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
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
	
	//@Given("^que a entrega eh dia (\\d+)/(\\d+)/(\\d+)$")
	@Given("^que a entrega eh dia (.*)$")
	public void que_a_entrega_eh_dia(@Transform(DateConverter.class) Date data) throws Throwable {
		entrega = data;
		System.out.println(entrega);
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
	
	@Given("^que o ticket( especial)? eh (A.\\d{3})$")
	public void que_o_ticket_eh_AF(String tipo, String arg1) throws Throwable {
		
	}

	//@Given("^que o valor da passagem eh R\\$ (\\d+),(\\d+)$")
	@Given("^que o valor da passagem eh R\\$ (.*)$")
	public void que_o_valor_da_passagem_eh_R$(Double numero) throws Throwable {
		System.out.println(numero);
	}

	@Given("^que o nome do passageiro eh \"(.{5,20})\"$")
	public void que_o_nome_do_passageiro_eh(String arg1) throws Throwable {
		
	}

	@Given("^que o telefone do passageiro eh (9\\d{3}-\\d{4})$")
	public void que_o_telefone_do_passageiro(int arg1, int arg2) throws Throwable {

	}

	@When("^criar os steps$")
	public void criar_os_steps() throws Throwable {
		
	}

	@Then("^o teste vai funcionar$")
	public void o_teste_vai_funcionar() throws Throwable {
		
	}
}
