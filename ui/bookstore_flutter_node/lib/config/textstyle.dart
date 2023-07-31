import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

TextStyle basicTextStyle(BuildContext context) =>
    GoogleFonts.lato(textStyle: Theme.of(context).textTheme.bodyLarge);
TextStyle basicBoldTextStyle(BuildContext context) =>
    GoogleFonts.lato(textStyle: Theme.of(context).textTheme.bodyLarge,fontWeight: FontWeight.bold);
