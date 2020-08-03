package utils;

import java.util.Calendar;
import java.util.Date;

public class DateUtils {
	//Metodo Static para não precisar ficar instanciando classe
	public static Date obterDataDiferenciaDias(int dias) {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, dias);
		return cal.getTime();
	}
}
