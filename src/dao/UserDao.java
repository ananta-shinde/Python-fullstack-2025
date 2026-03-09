package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import config.DbConfig;
import model.User;

public class UserDao {
	
	  public long create(User u) {
		 try {
			 Connection conn  = DbConfig.getConnection();
//			 Statement stmt = conn.createStatement();
			 PreparedStatement stmt = conn.prepareStatement("insert into users (name,email,password) values (?,?,?)");
			 stmt.setString(1, u.getName());
			 stmt.setString(2, u.getEmail());
			 stmt.setString(3, u.getPassword());
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
	public User getUser(String email) {	
		try {
			 Connection conn  = DbConfig.getConnection();
//			 Statement stmt = conn.createStatement();
			 PreparedStatement stmt = conn.prepareStatement("select * from users where email = ?");
			 stmt.setString(1, email);
			 ResultSet result = stmt.executeQuery();
			 if(result.next()) {
				 User user  = new User();
				 user.setName(result.getString("name"));
				 user.setPassword(result.getString("password"));
				 user.setEmail(result.getString("email"));
				 return user;
			 }else {
				 return null;
			 }
		 }catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			return null;
		}
		  
	}
	
	public void restPassword(int id,String password) {
		try {
			Connection conn  = DbConfig.getConnection();
//			 Statement stmt = conn.createStatement();
			 PreparedStatement stmt = conn.prepareStatement("update users where id=? set password =?");
			 stmt.setInt(1, id);
			 stmt.setString(2,password);
			 stmt.execute();
		}
		catch (Exception e) {
			// TODO: handle exception
		}
	}
	
}
