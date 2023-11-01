import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class B {
    public static void main(String[] args) {
       
        Map<Character, Integer> romanNumeralValues = new HashMap<>();
        romanNumeralValues.put('I', 1);
        romanNumeralValues.put('V', 5);
        romanNumeralValues.put('X', 10);
        romanNumeralValues.put('L', 50);
        romanNumeralValues.put('C', 100);
        romanNumeralValues.put('D', 500);
        romanNumeralValues.put('M', 1000);

        Scanner scanner = new Scanner(System.in);
        boolean continueConversion = true;

        while (continueConversion) {
            System.out.println("Enter a Roman numeral: ");
            String input = scanner.nextLine().toUpperCase(); 

            if (isRomanNumeral(input)) {
                int result = 0;
                int previousValue = 0;
                
                for (int i = input.length() - 1; i >= 0; i--) {
                    char currentChar = input.charAt(i);
                    int currentValue = romanNumeralValues.get(currentChar);
                    if (currentValue < previousValue) {
                      
                        result -= currentValue;
                    } 
                    else {   
                        result += currentValue;
                    }
                    previousValue = currentValue;
                }
                System.out.println("The integer value of the Roman numeral " + input + " is " + result);
            } else {
                System.out.println("Please enter a valid Roman numeral.");
            }
        }
    }
    public static boolean isRomanNumeral(String input) {
        return input.matches("^[IVXLCDM]+$");
    }
}
