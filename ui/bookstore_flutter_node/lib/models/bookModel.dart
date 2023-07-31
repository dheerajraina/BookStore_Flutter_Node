import 'dart:convert';

List<BookModel> bookModelFromJson(String str) =>
    List<BookModel>.from(json.decode(str).map((x) => BookModel.fromJson(x)));

String bookModelToJson(List<BookModel> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class BookModel {
  String id;
  BookData data;

  BookModel({required this.id, required this.data});
  factory BookModel.fromJson(Map<String, dynamic> json) =>
      BookModel(id: json["id"], data: BookData.fromJson(json["data"]));

  Map<String, dynamic> toJson() => {
        "id": id == null ? null : id,
        "data": data == null ? null : data,
      };
}

class BookData {
  int pages;
  String genre;
  String author;
  String reference;
  String title;

  BookData(
      {required this.pages,
      required this.genre,
      required this.author,
      required this.reference,
      required this.title});

  factory BookData.fromJson(Map<String, dynamic> json) => BookData(
        pages: json['pages'],
        genre: json['genre'],
        author: json['author'],
        reference: json['reference'],
        title: json['title'],
      );

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['pages'] = pages;
    data['genre'] = genre;
    data['author'] = author;
    data['reference'] = reference;
    data['title'] = title;
    return data;
  }
}
