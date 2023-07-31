import 'dart:convert';
import 'dart:developer';

import 'package:bookstore_flutter_node/helpers/helpers.dart';
import 'package:bookstore_flutter_node/models/models.dart';
import 'package:bookstore_flutter_node/controllers/controllers.dart';
import 'package:get/get.dart';

class ApiServices {
  final homePageController = Get.find<HomePageController>();
  Future<bool> getBooks() async {
    var response = await ApiHelper().get("book-store/books");
    homePageController.bookList.value = bookModelFromJson(response.body);
    return true;
  }
}
