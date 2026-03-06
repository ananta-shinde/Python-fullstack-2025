package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

import config.DbConfig;
import model.User;

public class UserDao {
	
	  public long create(User u) {
		 try {
			 Connection conn  = DbConfig.getConnection();
//			 Statement stmt = conn.createStatement();
			 PreparedStatement stmt = conn.prepareStatement("insert into users (name,email,password) values (?,?,?)");
			 return stmt.executeLargeUpdate();
		 }catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			return 0;	
		}
		 
	  }
	  public void update(int id) {
		  
	  }
	 public void delete(int id) {
			  
		  }
	public User getUser(int id) {	
		  return null;
	}
}
