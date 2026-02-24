package oops;

public class Product {

	static int count = 0;
	private int id;
	private String name;
	private double price;
	private String description;
	
	public Product(String name){
		id = ++count;
		this.name = name;
	}
	
	int getId() {
		return id;
	}
	
	String getName() {
		return name;
	}
	
	void setName(String name) {
		this.name = name;
	}
	
}
