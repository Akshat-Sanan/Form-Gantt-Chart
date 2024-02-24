google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChartFinal);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Difficulty');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['writer', 'Writer Copy Deck',
        new Date(2024, 1, 10), new Date(2024, 1, 13), null,  100, null],

        ['finalDesign', 'Final Design',
        null, new Date(2024, 1, 18), daysToMilliseconds(6), 95, 'writer'],

        ['Development', 'Final Development + Bugs and Testing',
        new Date(2024, 1, 15), new Date(2024, 1, 23), null, 90, 'finalDesign'],

    ]);

    var options = {
        height: 575
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);

}

function drawChartFinal() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Difficulty');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['writer', 'Writer Copy Deck',
        new Date(2024, 1, 10), new Date(2024, 1, 13), null,  100, null],

        ['finalDesign', 'Final Design',
        null, new Date(2024, 1, 18), daysToMilliseconds(6), 50, 'writer'],

        ['Development', 'Final Development + Bugs and Testing',
        new Date(2024, 1, 15), new Date(2024, 1, 23), null, 100, 'finalDesign'],

    ]);

    var options = {
        height: 575
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div_final'));

    chart.draw(data, options);

}