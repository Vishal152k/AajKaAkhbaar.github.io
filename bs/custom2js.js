(function (){

	var app = angular.module('myApp', []);
	app.controller('MyController', ['$scope', myController]);

	var excelJsonObj = [];

	function myController($scope){


		$scope.uploadExcel= function(){

			var myFile = document.getElementById('file');
			console.log(myFile)
			var input = myFile;
			var reader = new FileReader();
			console.log(reader)
			reader.onload = function(){
				var fileData = reader.result;
				var workbook = XLSX.read(fileData, {type:'binary'});
				workbook.SheetNames.forEach(function(sheetName){
					var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
					excelJsonObj = rowObject;
					$("#upload_button").remove();
					$("#file").remove();
				});
				$('#myTable:last-child').append("");
				for( var i=0; i< excelJsonObj.length; i++){
					
					var data = excelJsonObj[i];
					var str = data.title;
					
					var img_URL = data.url_image;
					var str2 = 'image';
					


					link = data.url;
					var read_more = "read more";

					$('#myTable:last-child').append(
						'<div class="card">'+
 						'<a href="'+data.url+'">'+'<img src="'+img_URL+'" alt="Avatar" style="width:100%;">'+'</a>'
  						
    					
    					+'<a href="'+data.url+'"><p style="font-size:30px;font-style:italic;">'+data.title+'</p></a>'+
    					data.description+read_more.link(link)

  						
						+"</div>"+"<br>");

				}

			};
			input.files[0].name="Positive_News.xlsx"
			reader.readAsBinaryString(input.files[0]);
			console.log(input.files[0])

		};
	}

})();
