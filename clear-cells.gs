// enter cells to clear in the array below
var cells = ["B9:D16","C6:F6","C7","C30:C32", "C34:C35", "F30:F32"];

function clearCells() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  for (var cell in cells) {
    sheet.getRange(cells[cell]).clearContent();
  }
}
