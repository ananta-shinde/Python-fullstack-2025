package arrays;

public class OperationsOnArray {
	
	public static void main(String[] args) {
		
		int sum = 0;
//		int[] numbers = new int[5];
		
		int[] marks = {55,52,45,56,65};
		
		// sum of array
		for(int i=0;i<marks.length;i++) {
			sum = marks[i]+sum;
		}
		System.out.println("Total marks : "+sum);
		
		// avg of array
		System.out.println("Avg marks :"+sum/marks.length);
		
		// largest of array
		int largest = marks[0];
		for(int i=0;i<marks.length;i++) {
			if(marks[i] > largest) {
				largest = marks[i];
			}
		}
		System.out.println("largest value is :"+ largest);
		
		
		
		// smallest of array
		int smallest = marks[0];
		for(int i=0;i<marks.length;i++) {
			if(marks[i] < smallest) {
				smallest = marks[i];
			}
		}
		System.out.println("largest value is :"+ smallest);
		
		//print an array
		System.out.print("values in array are :");
		for(int i=0;i<marks.length;i++) {
			System.out.print(marks[i]+" ");
		}
		
		// sort an array
		for(int i=0;i<marks.length;i++) {
			for(int j=0;j<marks.length-1;j++) {
				if(marks[j]>marks[j+1]) {
					int temp = marks[j];
					marks[j] = marks[j+1];
					marks[j+1] = temp;
				}
			}
		}
		
		//print an array
//		System.out.println();
		System.out.print("\nvalues in array after sort are :");
		for(int i=0;i<marks.length;i++) {
			System.out.print(marks[i]+" ");
		}
		
	}

}
