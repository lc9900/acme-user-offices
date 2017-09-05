function renderOfficesList(config){
    // console.log("renderOfficesList called");
    $.ajax({
        url: '/offices',
        method: 'get'
    }).then(offices => {
        OFFICES = offices;
        let html, $html;
        html = offices.reduce((html, office) => {
            return html + `
                <li class='list-group-item'>
                    ${office.name}<br>
                    <em>lat: </em> ${office.lat}
                    <br>
                    <em>lng: </em> ${office.lng}
                    <br>
                    <p style='margin-top: 10px'>
                        <label class='label label-default'>${office.users.length} Users
                    </p>
                    <button data-office-id='${office.id}' class='btn btn-warning pull-right'>delete</button>
                    <br clear='all'>
                </li>
            `;
        }, '');

        $html = $(html);

        // Removing office
        $html.on('click', 'button', function(){
            $.ajax({
                url: `/offices/${ $(this).attr('data-office-id') * 1 }?_method=DELETE`,
                method: 'post'
            }).then(result => {
                console.log(result);
                renderOfficesList(config);
                renderUsersList({id: '#usersList'}); // render user as well
            })
        });
        $(config.id).empty();
        $(config.id).append($html);
    })
}
