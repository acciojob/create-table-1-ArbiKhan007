const table=document.querySelector("#sampleTable")

function insert_Row() {
	//Write your code here
	let newRow=table.insertRow(0);
	let newData1=newRow.insertCell(0);
	let newData2=newRow.insertCell(1);

	newData1.textContent="New Cell 1";
	newData2.textContent="New Cell 2";
}
