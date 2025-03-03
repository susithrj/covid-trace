import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:slcovid_tracker/data/local/user/user_repository.dart';
import 'package:slcovid_tracker/models/user.dart';

@Injectable(as: UserRepository)
class UserRepositoryImpl extends UserRepository {
  @override
  Future<void> insert(User user) {
    return SharedPreferences.getInstance().then((pref) {
      pref.setString("id", user.id);
      pref.setString("phoneNumber", user.phoneNumber);
      pref.setBool("numberVerified", user.numberVerified);
      pref.setString("nic", user.nic);
      pref.setString("userType", user.userType);
    });
  }

  @override
  Future<Option<User>> getUser() {
    return SharedPreferences.getInstance().then((pref) {
      String userId = pref.getString("id");

      if (userId == null) {
        return optionOf(null);
      }

      User user = User(
        pref.getString("id"),
        pref.getString("phoneNumber"),
        pref.getBool("numberVerified"),
        pref.getString("nic"),
        '',
        pref.getString("userType"),
      );
      return optionOf(user);
    });
  }

  @override
  Future<void> delete() {
    return SharedPreferences.getInstance().then((pref) {
      pref.setString("id", null);
      pref.setBool("numberVerified", null);
      pref.setString("phoneNumber", null);
      pref.setString("nic", null);
      pref.setString("userType", null);
    });
  }
}
