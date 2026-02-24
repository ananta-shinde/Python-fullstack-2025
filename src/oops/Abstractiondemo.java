package oops;

import arrays.DynamicArray;

class Product{
	private int id;
	private String name;
	private double price;
	private String description;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}


interface List{
	 
	 public void add();
	 public void remove();
	 public void update();
	 
}

class productManager implements List{
	
	private DynamicArray product_list;

	@Override
	public void add() {
		// TODO Auto-generated method stub
		
	}
	
	
	public void add(int id,String name,String description,double price) {
		// TODO Auto-generated method stub
		product_list.addvalue(id);
	}

	@Override
	public void remove() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update() {
		// TODO Auto-generated method stub
		
	}
	
	
	
}










public class Abstractiondemo{
	
	public static void main(String[] args) {
		
	}
	
}









