package arrays;

public class DynamicArray<T> {
	int[] nums = new int[1];
	
	
	
	private int count=0;
	
	
	public void addvalue(int value) {
		if(count<nums.length) {
			nums[count] = value;
			count++;
		}else {
			// increase capacity
			int[] nums_new = new int[count+1];
			// copy old data to new array
			for(int j=0;j<count;j++) {
				nums_new[j]=nums[j];
			}
			// add new value
			nums_new[count] = value;
			count++;
			// update reference to new array
			nums = nums_new;
		}
		
	}
	
	void addvalue(int index,int value) {
		addvalue(value);		
		// rearrange value to index
					for(int i = nums.length-1;i>index;i--) {
						int temp = nums[i];
						nums[i]= nums[i-1];
						nums[i-1] = temp;
					}
		
	}
	
	int indexOf(int value) {
		int index = -1;
		for(int i=0;i<nums.length;i++) {
			if(value == nums[i]) {
				index = i;
			}
		}
		return index;
	}
	
	void pop() {
		int[] nums_new = new int[count-1];
		count--;
		for(int j=0;j<count;j++) {
			nums_new[j]=nums[j];
		}
		nums = nums_new;
	}
	
	void remove(int index) {
		// take index value to end
		for(int i=index;i<nums.length-1;i++) {
			int temp = nums[i];
			nums[i]= nums[i+1];
			nums[i+1] = temp;
		}
		pop();
	}
	
	void print() {
		for(int i=0;i<count;i++) {
			System.out.print(nums[i]+"\t");
		}
	}
	
	public static void main(String[] args) {
		
//		int[] nums = new int[3];
		DynamicArray myArray = new DynamicArray();
         myArray.addvalue(20);
         myArray.addvalue(30);
//         myArray.pop();
//         myArray.pop();
//         myArray.pop();
//         myArray.pop();
//         myArray.pop();
         myArray.addvalue(1,80);
         myArray.addvalue(55);
         myArray.remove(2);
         
         System.out.println(myArray.indexOf(55));
         myArray.print();
         
         
		
	}

}
