
public class byteChallenge {
    public static void main(String[] args){
        byte first = 15;
        short second = 20;
        int third = 10000;

        long myTotal = 50000 + (10 * (first + second + third));
        System.out.println(myTotal);


        double test =  20.00;
        double secondTest = 80.00;
        double total = (test + secondTest) * 100.00d;
        System.out.println("The total is " + total);
        double remainderVar = total % 40.00d;
        boolean remainderIs;
        if(remainderVar == 0){
              remainderIs = true;
        } else{
              remainderIs = false;
        }
        System.out.println(remainderIs);

    }
}


