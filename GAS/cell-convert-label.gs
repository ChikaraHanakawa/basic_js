function replaceValuesInSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetNames = ["tva_fold1.txt", "tva_fold2.txt", "tva_fold3.txt", "tva_fold4.txt", "tva_fold5.txt"]; // シート名のリスト
  var labels = {0: "angry", 1: "excited", 2: "happy", 3: "sad", 4: "frustrated", 5: "neutral", 6: "surprise"}; // ラベルのマッピング

  for (var k = 0; k < sheetNames.length; k++) {
    var sheet = spreadsheet.getSheetByName(sheetNames[k]);
    if (sheet) {
      var range = sheet.getRange("E1:E"); // E列の範囲を指定します。必要に応じて変更してください。
      var values = range.getValues();

      for (var i = 0; i < values.length; i++) {
        if (values[i][0] !== "" && labels.hasOwnProperty(values[i][0])) {
          values[i][0] = labels[values[i][0]]; // E列の値をラベルに置き換えます。
        }
      }
      range.setValues(values); // 更新された値を範囲に設定します。
    }
  }
}