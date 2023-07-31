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
    homePageController.bookList.value.forEach((book) async {
      book.data.coverUrl = await getBookCover(book.data.reference);
    });
    return true;
  }

  Future<String> getBookCover(String bookReference) async {
    var response = await ApiHelper().get("book-store/book-cover/$bookReference");
    return response.body;
  }

  Future getBookContent(String bookReference) async {
    homePageController.isLoading.value = true;
    var response = await ApiHelper().get("book-store/book-content/$bookReference");
    var pages = json.decode(response.body)['items'];
    homePageController.isLoading.value = false;
    return pages;
  }
}
