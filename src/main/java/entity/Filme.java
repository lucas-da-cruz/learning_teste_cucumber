package entity;

public class Filme {
	
	private int estoque;
	private int aluguel;

	
	public void setAluguel(int valor) {
		this.aluguel = valor;		
	}

	public int getAluguel() {
		return aluguel;
	}

	public int getEstoque() {
		return estoque;
	}
	
	public void setEstoque(int estoque) {
		this.estoque = estoque;
	}
	
}
