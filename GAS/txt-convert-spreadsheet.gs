function importData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // ファイル名のパターンを定義
  var fileNamePattern = "tva_fold@.txt";
  
  // ファイルを1つずつ処理
  for (var i = 1; i <= 5; i++) {
    var fileName = fileNamePattern.replace("@", i.toString());
    var file = DriveApp.getFilesByName(fileName).next();
    var content = file.getBlob().getDataAsString();
    var lines = content.split("\n");
    
    // 新しいシートを作成し、ファイル名をシート名に設定
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(fileName);
    if (!sheet) {
      // シートが存在しない場合は新規作成
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(fileName);
    }
    
    // 各行を処理
    for (var j = 0; j < lines.length; j++) {
      var line = lines[j];
      
      // タブで分割してセルに配置
      var cells = line.split("\t");
      for (var k = 0; k < cells.length; k++) {
        sheet.getRange(j + 1, k + 1).setValue(cells[k]);
      }
    }
  }
}