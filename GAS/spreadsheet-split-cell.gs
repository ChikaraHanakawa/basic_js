function splitCellValuesInSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetNames = ["tva_fold1.txt", "tva_fold2.txt", "tva_fold3.txt", "tva_fold4.txt", "tva_fold5.txt"]; // シート名のリスト

  for (var k = 0; k < sheetNames.length; k++) {
    var sheet = spreadsheet.getSheetByName(sheetNames[k]);
    if (sheet) {
      var range = sheet.getRange("A1:A"); // A列の範囲を指定します。必要に応じて変更してください。
      var values = range.getValues();

      for (var i = 0; i < values.length; i++) {
        if (values[i][0] !== "") {
          var splitValues = values[i][0].split(/\s+/);
          for (var j = 0; j < splitValues.length; j++) {
            sheet.getRange(i + 1, j + 4).setValue(splitValues[j]); // D列の新しいセルに値を配置します。
          }
        }
      }
    }
  }
}