package utils;

import java.util.Calendar;
import java.util.Date;

public class DateUtils {
	//Metodo Static para n�o precisar ficar instanciando classe
	public static Date obterDataDiferenciaDias(int dias) {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, dias);
		return cal.getTime();
	}
}
