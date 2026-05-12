import java.util.ArrayList;

public class UserService {

    ArrayList<User> users = new ArrayList<>();

    public void addUser(User user) {
        users.add(user);
        System.out.println("User Added Successfully");
    }
}
