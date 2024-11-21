import javax.management.PersistentMBean;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Lesson3 lesson3 = new Lesson3();

        System.out.print("write tut  ");
        lesson3.nonStaticNum = scanner.nextInt();

        System.out.println(lesson3.nonStaticNum);
    }

    }
//
//    Lesson3 lesson3 = new Lesson3();
//    lesson3.nonStaticNum = 8;
//
//    lesson3.method();
//
//    System.out.println(lesson3.nonStaticNum);
//    System.out.println(Lesson3.number);
//}