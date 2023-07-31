import 'package:bookstore_flutter_node/models/models.dart';
import 'package:get/get.dart';

class HomePageController extends GetxController {
  RxList<BookModel> bookList = <BookModel>[].obs;
  RxList bookPages=[].obs;
  RxBool isLoading=false.obs;
}
