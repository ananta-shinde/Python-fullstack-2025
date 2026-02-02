package arrays;

import java.util.Scanner;

public class LargestOfArray {
	
	public static void main(String[] args) {
		
		Scanner scanner =  new Scanner(System.in);
		//declaring an array
		// datatype[] identifier;
		//int[] numbers = {20,25,46,45,55,56};
		System.out.println("enter no of values in collection :");
		int count = scanner.nextInt();
		
		int[] numbers = new int[count];
		
		
		for(int i=0;i<numbers.length;i++){
			System.out.println("enter a number");
			numbers[i] = scanner.nextInt();
		}
		
		
		int length = numbers.length;
		for(int i=0;i<length;i++){
			System.out.println(numbers[i]);
		}
		
				
	}

}
