import 'dart:convert';
import 'dart:developer';

import 'package:bookstore_flutter_node/config/config.dart';
import 'package:bookstore_flutter_node/controllers/homepage_controller.dart';
import 'package:bookstore_flutter_node/models/models.dart';
import 'package:bookstore_flutter_node/services/api_services.dart';
import 'package:get/get.dart';
import 'package:page_flip/page_flip.dart';
import 'package:flutter/material.dart';

class BookContentPage extends StatefulWidget {
  BookContentPage({super.key, required this.book});

  BookModel book;
  List pages = [];

  @override
  State<BookContentPage> createState() => _BookContentPageState();
}

class _BookContentPageState extends State<BookContentPage> {
  late AnimationController _controller;

  final _homePageController = Get.find<HomePageController>();
  var pages = [].obs;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((timeStamp) async {
      var response = await ApiServices().getBookContent(widget.book.data.reference);
      pages.value = response;
      log("this = ${pages.value}");
    });
  }

  @override
  Widget build(BuildContext context) {
    log("render ${pages.value.length}");
    return Obx(() {
      return Scaffold(
          backgroundColor: Colors.black,
          appBar: AppBar(
            backgroundColor: Colors.black,
            foregroundColor: Colors.white,
          ),
          body: _homePageController.isLoading.value
              ? Center(child: CircularProgressIndicator())
              : PageFlipWidget(
                  duration: Duration(milliseconds: 500),
                  cutoffForward: 10,
                  cutoffPrevious: 10,
                  backgroundColor: Colors.white,
                  lastPage: Center(
                      child: Text(
                    'The End!!',
                    style: basicBoldTextStyle(context),
                  )),
                  children: <Widget>[
                    for (var i = 0; i < pages.length; i++) Page(pageContent: pages[i]),
                  ],
                ));
    });
  }
}

class Page extends StatelessWidget {
  const Page({super.key, required this.pageContent});
  final String pageContent;

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    final screenWidth = MediaQuery.of(context).size.width;
    log(pageContent);

    return Container(
      height: screenHeight,
      width: screenWidth,
      child: Image.network(pageContent),
    );
  }
}
