/* Write here your custom javascript codes */
function arrayToTable(tableData) {
    // console.log('hereeee', tableData)
    var tableArr = []
    var inSession = false
    var table = null
    $(tableData).each(function (i, rowData) {
        var row = null
        if (rowData[0].includes('Ses Order')) {
            table = $('<table cellpadding="5" cellspacing="5" class="table table-bordered table-striped"></table>');
            row = $('<thead></thead>');
            var tr = $('<tr></tr>')
            $(rowData).each(function (j, cellData) {
                tr.append($('<th class="text-left" style="padding:8px;" colspan="1">' + cellData + '</th>'));
            });
            row.append(tr)
        } else {
            row = $('<tr></tr>');
            $(rowData).each(function (j, cellData) {
                row.append($('<td>' + cellData + '</td>'));
            });
        }

        table.append(row);

        if (tableData[i + 1] && tableData[i + 1][0].includes('Ses Order')) {
            tableArr.push(table)
        }


    });
    tableArr.push(table)
    console.log('table', tableArr)
    return tableArr;
}

$.ajax({
    type: "GET",
    url: "../assets/data/schedule.csv",
    success: function (data) {
        // console.log(arrayToTable(Papa.parse(data).data))
        $('#sessions').append(arrayToTable(Papa.parse(data).data));
    }
});


// console.log('hereeee')