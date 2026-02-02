package core;

import java.util.Scanner;

public class LargestNumberOfThree {

	public static void main(String[] args) {
		int n1,n2,n3;
		Scanner scanner = new Scanner(System.in);
		System.out.println("enter first number :");
		n1 = scanner.nextInt();
		System.out.println("enter second number :");
		n2 = scanner.nextInt();
		System.out.println("enter third number :");
		n3 = scanner.nextInt();
		if(n1>n2 && n1>n3) {
			System.out.println(n1+" is largest");
		}else if(n2>n1 && n2>n3){
			System.out.println(n2+" is largest");
		}else{
			System.out.println(n3+" is largest");
		}
	
		
		
	}
}
