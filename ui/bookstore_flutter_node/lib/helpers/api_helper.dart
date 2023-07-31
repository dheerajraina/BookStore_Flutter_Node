import 'package:bookstore_flutter_node/config/constants.dart';
import 'package:http/http.dart' as http;

class ApiHelper {
   get(String endPointString) async{
    var url = Uri.parse("${SERVER_IP}/${endPointString}");
    var response = await http.get(url);
    return response;
  }
}
