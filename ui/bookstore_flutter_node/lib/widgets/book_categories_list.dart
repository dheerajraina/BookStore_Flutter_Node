import 'package:flutter/material.dart';
import 'package:bookstore_flutter_node/config/config.dart';
import 'widgets.dart';

class BookCategories extends StatelessWidget {
  const BookCategories({super.key});
  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    final screenWidth = MediaQuery.of(context).size.width;

    return SizedBox(
      height: screenHeight,
      width: screenWidth,
      child: Padding(
        padding: const EdgeInsets.only(bottom: 100.0),
        child: ListView.builder(
            itemCount: BOOK_CATEGORIES.length,
            itemBuilder: (context, index) {
              return Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.only(left: 20.0, right: 8.0, bottom: 8.0, top: 8.0),
                    child: Text(
                      BOOK_CATEGORIES[index],
                      style: basicBoldTextStyle(context),
                    ),
                  ),
                  BooksHorizontalDisplayList()
                ],
              );
            }),
      ),
    );
  }
}
