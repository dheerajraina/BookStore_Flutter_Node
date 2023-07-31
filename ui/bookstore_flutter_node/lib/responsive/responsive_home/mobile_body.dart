import 'package:flutter/material.dart';
import 'package:bookstore_flutter_node/config/config.dart';
import 'package:bookstore_flutter_node/widgets/widgets.dart';

class HomeMobileBody extends StatelessWidget {
  const HomeMobileBody({super.key});

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    final screenWidth = MediaQuery.of(context).size.width;
    return SingleChildScrollView(
      physics: BouncingScrollPhysics(),
      child: Column(
        children: <Widget>[
          Center(
            child: Padding(
              padding: const EdgeInsets.only(bottom: 20, top: 10),
              child: Text(
                "Ebooks",
                style: basicBoldTextStyle(context),
              ),
            ),
          ),
          Divider(thickness: 1),
          BookCategories(),
        ],
      ),
    );
  }
}
