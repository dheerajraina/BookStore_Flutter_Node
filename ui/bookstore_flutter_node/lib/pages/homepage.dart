import 'package:flutter/material.dart';
import 'package:bookstore_flutter_node/responsive/responsive.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: ResponsiveHomeLayout(mobileBody: HomeMobileBody(), desktopBody: HomeDesktopBody()),
      ),
    );
  }
}
