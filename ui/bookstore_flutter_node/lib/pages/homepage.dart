import 'package:bookstore_flutter_node/services/api_services.dart';
import 'package:flutter/material.dart';
import 'package:bookstore_flutter_node/responsive/responsive.dart';

class StatefulWrapper extends StatefulWidget {
  final Function onInit;
  final Widget child;
  const StatefulWrapper({required this.onInit, required this.child});
  @override
  _StatefulWrapperState createState() => _StatefulWrapperState();
}

class _StatefulWrapperState extends State<StatefulWrapper> {
  @override
  void initState() {
    super.initState();
    widget.onInit();
  }

  @override
  Widget build(BuildContext context) {
    return widget.child;
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: StatefulWrapper(
        onInit: () {
          ApiServices().getBooks();
        },
        child: Scaffold(
          body: ResponsiveHomeLayout(mobileBody: HomeMobileBody(), desktopBody: HomeDesktopBody()),
        ),
      ),
    );
  }
}
