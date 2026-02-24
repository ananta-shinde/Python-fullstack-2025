package oops;


public class Student {
	int prn;
	int rollNo;
	String name;
	String city;
	
	// default constructor
	public Student() {
		rollNo=100;
		city = "Pune";
	}
	
	// parameterized constructor
	
	Student(String name) {
		this.name = name;
	} 
	Student(String name,String city) {
		this.city = city;
		this.name = name;
	}

	
	//copy constructor
	Student(Student s){
		
		this.prn = s.prn;
		this.rollNo = s.rollNo;
		this.name = s.name;
		this.city = s.city;
		
	}
	
}


