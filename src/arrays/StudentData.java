package arrays;

import java.util.Scanner;

class Student{
	int rollno;
	String name;
	double percentage;
	String prn;
	
	void acceptData() {
			Scanner scanner = new Scanner(System.in);
			System.out.println("enter your name :");
		    name = scanner.next();
		    System.out.println("enter your rollno :");
		    rollno = scanner.nextInt();
		    System.out.println("enter your percentage :");
		    percentage = scanner.nextDouble();
		    
	}
	
	void display() {
	System.out.println("name :"+ name+" rollno:"+rollno+" prt:"+percentage);
	}
}


 class StudentData {
	
	
	public static void main(String[] args) {
		 
		Student[] data = new Student[3];
		
		
	   for(int i=0;i<4;i++) {
		   Student s = new Student();
		    s.acceptData();
		    data[i]  = s;
	   }
	   
	   for(int i=0;i<3;i++) {
		   for(int j=0;j<2;j++) {
			   if(data[j].percentage<data[j+1].percentage) {
				   Student temp = data[j];
				   data[j] = data[j+1];
				   data[j+1] = temp;
			   }
		   }
	   }
	   
	   
	   
	   for(int i=0;i<3;i++) {
		   data[i].display();
		   
	   }
		
		
		
	}

}
