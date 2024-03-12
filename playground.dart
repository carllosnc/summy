import 'dart:isolate';

void main() async {
  var result = await Isolate.run(() {
    return "hello from isolate";
  });

  print(result);
  print("hello world");
}
