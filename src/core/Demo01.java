package core;

import java.util.Scanner;

public class Demo01 {
	
	public static void main(String[] args) {
		
		String mobNo = null;
		Scanner scanner = new Scanner(System.in);
		while(true) {
		System.out.println("Enter your mobile no :");
		mobNo = scanner.next();
		if(mobNo.length() == 10) {
		System.out.println("valid mob no");
		break;
		}else
		System.out.println("invalid mob no");
		}
		
		
	}
	
	
}
