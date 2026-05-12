public class UserController {

    public static void register(String name, String email) {

        User user = new User(name, email);

        UserService service = new UserService();

        service.addUser(user);
    }
}
