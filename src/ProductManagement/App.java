package ProductManagement;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

class Offer{
	private int id;
	private String name;
	private String description;
	private double discount;
	private String vendor;
	
}

class ProductOffers{
	Product product;
	Offer offer;
}

class SpecItem{
	 Map<String,String> item;
}

class Specification{
	private List<SpecItem> specs;
}

class ProductSpecification{
	Product product;
	Specification spec;
}

class Brand{
	private int id;
	private String name;
	private String description;
	private String logo_url;
}

class Category{
	private int id;
	private String name;
	private String description;
	
	public Category(int id,String name,String description) {
		// TODO Auto-generated constructor stub
		this.id = id;
		this.name = name;
		this.description = description;
	}
	
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}

class StockManager{
	int sku;
	Product product;
	double available_Qty;
	double sold_Qty;
}

class Product{
	private int id;
	private String name;
	private String description;
	private double mrp;
	private double rating;
	private double discount;
	private Category category;
	private List<String> img_urls;
	private String thumbnail;
	private Brand brand;
	
	public Product(int id,String name,double mrp,Brand brand,Category category) {
		// TODO Auto-generated constructor stub
		this.id = id;
		this.category = category;
		this.name = name;
		this.mrp = mrp;
		this.brand = brand;
	}
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getMrp() {
		return mrp;
	}
	public void setMrp(double mrp) {
		this.mrp = mrp;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public List<String> getImg_urls() {
		return img_urls;
	}
	public void setImg_urls(List<String> img_urls) {
		this.img_urls = img_urls;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	public Brand getBrand() {
		return brand;
	}
	public void setBrand(Brand brand) {
		this.brand = brand;
	}
	public int getId() {
		return id;
	}
	
	
	
	
}

class ProductManager{
	private List<Product> list;
	
	public ProductManager() {
		// TODO Auto-generated constructor stub
		list = new ArrayList<Product>();
	}
	
	public int getNextProductId() {
		return list.size()+1;
	}
	
	public void addProduct(Product p) {
		list.add(p);
	}
	
	public void deleteProduct(int id) {
		
		for (Product p : list) {
			if(p.getId() == id) {
				list.remove(p);
			}
		}
	}
	
	public void updateMrp(int id, double newprice) {
		for (Product product : list) {
			if(product.getId() == id) {
				product.setMrp(newprice);
			}
		}
	}
	
	public void createNewProduct() {
		
		CategoryManager categoryManager = CategoryManager.getInstance();
		Scanner scanner = new Scanner(System.in);
		System.out.println("enter product name");
		String name=scanner.next();
		System.out.println("choose from following categories :");
		categoryManager.printAllCategories();
		System.out.println("enter product's category id :");
		int categoryId=scanner.nextInt();
		
		Category category = categoryManager.getCategory(categoryId);
		
		System.out.println("enter product mrp");
		double mrp=scanner.nextDouble();
		
		Product product = new Product(getNextProductId(), name, mrp,null,category);
		list.add(product);
	}
	
	
	
	
}

class CategoryManager{
	private List<Category> list;
	static private CategoryManager categoryManager;
	
	private CategoryManager() {
		// TODO Auto-generated constructor stub
		list = new ArrayList<Category>();
	}
	
	public static CategoryManager getInstance() {
		if(categoryManager == null) {
			 categoryManager=new CategoryManager();
		}
		return categoryManager;
	}
	
	public int getNextCategoryId() {
		return list.size()+1;
	}
	
	public void createNewCategory() {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("enter category name");
		String name=scanner.next();
		System.out.println("enter category description");
		String description=scanner.next();
		Category category = new Category(getNextCategoryId(), name, description);
//		list.add(category);
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn =DriverManager.getConnection("jdbc:mysql://localhost:3306/ecom_db","root","Demo@123");
			Statement statement = conn.createStatement();
			statement.execute("insert into categories values(null,'"+name+"','"+description+"',null,null)");
			conn.close();
		}
		catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
		}
	}
	
	public Category getCategory(int id){
		for (Category category : list) {
			if(category.getId() == id) {
				return category;
			}
		}
		return null;
	}
	
	public void addCategory(Category c) {
		list.add(c);
	}
	
	public void deleteCategory(int id) {
		
		for (Category p : list) {
			if(p.getId() == id) {
				list.remove(p);
			}
		}
	}
	
	
	
	public void updateName(int id, String newName) {
		for (Category c : list) {
			if(c.getId() == id) {
				c.setName(newName);
			}
		}
	}

	public void printAllCategories() {
		// TODO Auto-generated method stub
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn =DriverManager.getConnection("jdbc:mysql://localhost:3306/ecom_db","root","Demo@123");
			Statement statement = conn.createStatement();
			ResultSet result =statement.executeQuery("select * from categories");
			while(result.next()) {
				System.out.println(result.getInt("id")+" "+result.getString("name"));
			}
			conn.close();
		}
		catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
		}
	}
	
	
	
}

public class App {
	
	public static void main(String[] args) {
		ProductManager productManager = new ProductManager();
		CategoryManager categoryManager = CategoryManager.getInstance();
		
		//create new category
//		categoryManager.createNewCategory();
//		categoryManager.createNewCategory();
		
		//Print list of categories
		categoryManager.printAllCategories();
		
		
		
		// add new product
//		productManager.createNewProduct();
		
		
		
		
	}

}
