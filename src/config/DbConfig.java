package config;

import java.sql.Connection;
import java.sql.DriverManager;

public abstract class DbConfig {
	
	private static String url = "jdbc:mysql://localhost:3306/ecom_db";
	private static	String user = "root";
	private static String password = "Demo@123";
	
	
    public static Connection getConnection(){
    	try {
    		Class.forName("com.mysql.cj.jdbc.Driver");
			return DriverManager.getConnection(url,user,password);
        }catch(Exception e) {
        		return null;
        }
    	
    }

}
