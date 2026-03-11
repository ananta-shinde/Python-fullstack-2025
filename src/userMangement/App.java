package userMangement;

import java.util.Scanner;

import dao.UserDao;
import model.User;

public class App {
	
		private UserDao userDao;
		private User loggedInUser;
		
	    
		public App(){
			userDao = new UserDao();
		}
	    
		void signup () throws Exception {
			
			// get user details encaspulate it
			User user = new User();
			Scanner scanner = new Scanner(System.in);
			System.out.println("enter your name :");
			user.setName(scanner.nextLine());
			while(true) {
				try {
					System.out.println("enter your email :");
					String email = scanner.nextLine();
					if(Helper.validateEmail(email))
					{
						user.setEmail(email);
						break;
					}
					
				}catch (Exception e){
					System.out.println(e.getMessage());
//					continue;
				}
			}
			
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
			User user = new User();
			
			Scanner scanner = new Scanner(System.in);
			String email;
			while(true) {
				try {
					System.out.println("enter your email :");
					email = scanner.nextLine();
					if(Helper.validateEmail(email))
					{
						user.setEmail(email);
						break;
					}
					
				}catch (Exception e){
					System.out.println(e.getMessage());
//					continue;
				}
			}
			
			System.out.println("enter your password :");
			user.setPassword(scanner.next());
			
				//ask dao for user by email
			    User existingUser =userDao.getUser(email);
			    // if user found
			    if(existingUser != null) {
			    	if(user.getPassword().equals(existingUser.getPassword())) {
			    		System.out.println("login successful");
			    		loggedInUser = existingUser;
			    		System.out.println("welcome "+loggedInUser.getName());
			    	}else {
			    		System.out.println("invalid creds");
			    	}
			    }
			    else {
			    	System.out.println("user not found");
			    }
				
		}
		void resetPassword() {
			  //get user email
			User user = new User();
			Scanner scanner = new Scanner(System.in);
			String email;
			while(true) {
				try {
					System.out.println("enter your email :");
					email = scanner.nextLine();
					if(Helper.validateEmail(email))
					{
						user.setEmail(email);
						break;
					}
					
				}catch (Exception e){
					System.out.println(e.getMessage());
//					continue;
				}
			}
			
			  // validate user
			User existingUser =userDao.getUser(email);
			if(existingUser != null) {
				System.out.println("enter your password :");
				String password = scanner.nextLine();
				userDao.restPassword(existingUser.getId(), password);
				System.out.println("password reset successfully");
			}else {
		    	System.out.println("user not found");
		    }	
		}
	
	public static void main(String[] args) {
		App app = new App();
		try {
//			app.signup();
			app.signin();
//			app.resetPassword();
			
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
		}
		
	}

}
