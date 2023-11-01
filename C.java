import java.util.Scanner;

public class C{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        boolean continueChecking = true;
        while (continueChecking) {
           
            System.out.println("Please enter a sentence: ");
            String userInput = scanner.nextLine().toLowerCase(); 
            
            String alphabet = "abcdefghijklmnopqrstuvwxyz";

            boolean isPangram = true;

            for (char letter : alphabet.toCharArray()) {
                if (!userInput.contains(String.valueOf(letter))) {
                    isPangram = false;
                    break;
                }
            }
            if (isPangram) {
                System.out.println("The sentence is a pangram.");
            } else {
                System.out.println("The sentence is not a pangram.");
                System.out.println("Would you like to check another sentence? (yes/no)");
                String response = scanner.nextLine().toLowerCase();
                if (!response.equals("yes")) {
                    continueChecking = false;
                }
            }
        }
    }
}
