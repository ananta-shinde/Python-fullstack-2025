package ProductManagement;

import java.util.List;
import java.util.Map;

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
	
	public Product(int id) {
		// TODO Auto-generated constructor stub
		
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
	
	
	
	
	
}

public class App {
	
	public static void main(String[] args) {
		ProductManager pm = new ProductManager();
		Product product = new Product(pm.getNextProductId());
		pm.addProduct(null);
	}

}
