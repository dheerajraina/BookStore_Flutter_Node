import 'package:bookstore_flutter_node/services/services.dart';
import 'package:test/test.dart';

void main() {


  test("list of books should be returned", () async {
    // is a border test just for seeing how is the api response
    final apiServices = ApiServices();
    var response=await apiServices.getBooks();
    expect(response, true);
  });
}
