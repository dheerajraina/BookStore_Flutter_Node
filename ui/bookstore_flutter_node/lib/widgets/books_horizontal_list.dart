import 'package:bookstore_flutter_node/controllers/homepage_controller.dart';
import 'package:bookstore_flutter_node/models/models.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class BooksHorizontalDisplayList extends StatelessWidget {
  final _homePageController = Get.find<HomePageController>();

  BooksHorizontalDisplayList({super.key});

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    final screenWidth = MediaQuery.of(context).size.width;

    return SizedBox(
      width: screenWidth,
      height: screenHeight * 0.4,
      child: Obx(() => ListView.builder(
          scrollDirection: Axis.horizontal,
          shrinkWrap: true,
          itemCount: _homePageController.bookList.length*10,
          itemBuilder: (context, index) {
            BookModel book =_homePageController.bookList.value[0];
            return Padding(
              padding: const EdgeInsets.all(8.0),
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  minHeight: 100,
                  minWidth: 200,
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Container(
                      width: 200,
                      height: 210,
                      color: Colors.grey,
                    ),
                    Container(
                      width: 200,
                      height: 60,
                      color: Colors.white,
                      child: Text(book.data.title),
                    )
                  ],
                ),
              ),
            );
          })),
    );
  }
}
