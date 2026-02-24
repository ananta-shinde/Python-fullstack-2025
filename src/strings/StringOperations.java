package strings;
import oops.Student;
public class StringOperations {
    public static void main(String[] args) {
		
    	String title = "Java Programming      ";
    	String email = "anantashinde@gmail.com";
    	String password = "dadsfdfsd";
    	String description = "Demo description";
    	String result = title.trim().concat(description);
    	System.out.println(title.length());
    	System.out.println(title.equals(title));
    	System.out.println(result.endsWith(description));
    	System.out.println(email.endsWith("@gmail.com") && email.matches("^[^@]+@[^@]+\\.[^@]+$"));
    	System.out.println(password.hashCode());
    	
    	
	}
}
