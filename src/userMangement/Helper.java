package userMangement;

public class Helper {
	
	public static  boolean validateEmail(String email) throws Exception {
    	if(email.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
			return true;
		}else {
			throw new Exception("Invalid email format");
		}
    }

}
