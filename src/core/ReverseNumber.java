package core;

import java.util.Scanner;

public class ReverseNumber {
	public static void main(String[] args) {
		int num = 0;
		Scanner scanner = new Scanner(System.in);
		System.out.println("enter a number :");
		num = scanner.nextInt();
		int sum = 0;
		while(num>0) {
			int r = num % 10;
			num = num/10;
//			sum = sum+r;
			System.out.print(r);
		}
		System.out.println(num);
	}

}
