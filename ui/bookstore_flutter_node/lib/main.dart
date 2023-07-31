import 'package:bookstore_flutter_node/controllers/homepage_controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'pages/pages.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MyApp());
  initializeController();

}

void initializeController() {
  Get.put(HomePageController());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: HomePage(),
    );
  }
}
