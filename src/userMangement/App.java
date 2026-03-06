package userMangement;

import java.util.Scanner;

import dao.UserDao;
import model.User;

public class App {
	    
		void signup() {
			
			// get user details encaspulate it
			User user = new User();
			UserDao userDao = new UserDao();
			Scanner scanner = new Scanner(System.in);
			System.out.println("enter your name :");
			user.setName(scanner.next());
			System.out.println("enter your email :");
			user.setEmail(scanner.next());
			System.out.println("enter your password :");
			user.setPassword(scanner.next());
			
			//send object to user DAO
			long result = userDao.create(user);
			
			//provide response
			if(result == 0) {
				System.out.println("somthing went wrong, try again");
			}else {
				System.out.println("user created successfully");
			}
		}
		void signin() {
				// get user details encaspulate it
				//ask dao for user by email
			    // if user found
				// match creds
			    // not found
			    // provide response
		}
		void resetPassword() {
			  //get user email
			  // validate user
			 // if valid
			   // ask user for new password
			// update user
			// response
			
		}
	
	public static void main(String[] args) {
		
	}

}
