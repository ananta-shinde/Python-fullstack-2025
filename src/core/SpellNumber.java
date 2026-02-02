package core;

import java.util.Scanner;

public class SpellNumber {
	
	public static void main(String[] args) {
		int num =1;
		Scanner scanner = new Scanner(System.in);
	     do{
				System.out.println("Enter a number :");
				num = scanner.nextInt();
				if(num == 1) {
					System.out.println("One");
				}else if(num == 2) {
					System.out.println("Two");
				}
				else if(num == 3) {
					System.out.println("Three");
				}
				else if(num == 4) {
					System.out.println("FOUR");
				}
				else if(num == 5) {
					System.out.println("FIVE");
				}else {
					System.out.println("Invalid input, enter no between 1 to 5");
				}
	    }while(num >5 || num<=0);
	}

}
