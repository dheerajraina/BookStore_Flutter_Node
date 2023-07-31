import 'package:flutter/material.dart';

class BooksHorizontalDisplayList extends StatelessWidget {
  final List booksList;
  BooksHorizontalDisplayList({super.key, required this.booksList});

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    final screenWidth = MediaQuery.of(context).size.width;

    return SizedBox(
      width: screenWidth,
      height: screenHeight * 0.4,
      child: ListView.builder(
          scrollDirection: Axis.horizontal,
          shrinkWrap: true,
          itemCount: 10,
          itemBuilder: (context, index) {
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
                      color: Colors.pink[100],
                    )
                  ],
                ),
              ),
            );
          }),
    );
  }
}
