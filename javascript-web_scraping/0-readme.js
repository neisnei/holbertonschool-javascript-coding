#!/usr/bin/node

def read_file(file_path):
  """Reads the contents of a file and prints it to the console.

  Args:
    file_path: Path to the file to be read.
  """
  try:
    with open(file_path, "r", encoding="utf-8") as file:
      content = file.read()
      print(content)
  except Exception as error:
    print(error)
