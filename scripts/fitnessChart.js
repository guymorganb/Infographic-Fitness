$(document).ready(function() {
    // Data for male students
    var maleData = [
        { indicator: 'Vital Capacity', description: '1000m run' },
        { indicator: 'Body Shape', description: 'Pull-ups.' }
        
    ];

    // Data for female students
    var femaleData = [
        { indicator: 'Lower Limb Explosive Power', description: 'Crucial for speed quality.' },
        { indicator: 'Body Shape', description: 'Plays a key role in speed quality.' },
        { indicator: 'Core Strength', description: 'Important for speed quality.' }
        
    ];

    // Populate male students table
    maleData.forEach(function(item) {
        $('#maleStudentsTable').append('<tr><td>' + item.indicator + '</td><td>' + item.description + '</td></tr>');
    });

    // Populate female students table
    femaleData.forEach(function(item) {
        $('#femaleStudentsTable').append('<tr><td>' + item.indicator + '</td><td>' + item.description + '</td></tr>');
    });
    
    $('#maleStudentsTable').DataTable({
        "paging": false,  // Disables pagination
        "searching": false, // Disables the search box
        "info": false, // Hides 'Showing 1 to X of X entries' info
        "ordering": false, // Disables column ordering
        "lengthChange": false // Hides entry length dropdown
    });
    $('#femaleStudentsTable').DataTable({
        "paging": false,  // Disables pagination
        "searching": false, // Disables the search box
        "info": false, // Hides 'Showing 1 to X of X entries' info
        "ordering": false, // Disables column ordering
        "lengthChange": false // Hides entry length dropdown
    });
    // Initialize DataTables
    $('#maleStudentsTable').DataTable();
    $('#femaleStudentsTable').DataTable();
    
});