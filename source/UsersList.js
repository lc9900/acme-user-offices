// UsersList.js
function renderUsersList(config) {
    // console.log('In renderUsersList');
    $.ajax({
        url: '/users',
        method: 'get',
    }).then(users => {
        // console.log(users);
        USERS = users;
        let html, $html;
        html = users.reduce((html, user) => {
            return html + `
                <li class='list-group-item'>
                    ${user.name}
                    <select class='form-control' data-user-id='${user.id}'>
                        ${renderOptions({ user })}
                    </select>
                    <div class='form-group' style='margin-top: 10px'>
                        <button class='btn btn-warning' data-user-id='${user.id}'>remove</button>
                    </div>
                </li>
            `;
        }, '');
        // console.log(html);
        $html = $(html);

        // Deleting user
        $html.on('click', '.btn-warning', function(){
            var userId = $(this).attr('data-user-id')*1;
            // console.log(userId);

            // console.log(USERS);
            $.ajax({
                url: `/users/${userId}?_method=DELETE`,
                method: 'post'
            }).then(() => {
                return renderUsersList(config);
            }).then(() => {
                // TBI -- Change office's user count
                renderOfficesList({id: '#officesList'});
            })
            .catch( err => { throw err });

        });

        // Changing select and update office label
        $html.on('change', 'select', function(){
            // console.log(typeof $(this).val());
            // console.log($(this).val() * 1);
            var officeId = $(this).val() * 1;
            var userId = $(this).attr('data-user-id')*1;
            // console.log(userId);
            $.ajax({
                url: `/users/${userId}?_method=PUT`,
                data: {
                    officeId
                },
                method: 'post'
            }).then((result) => {
                // console.log(result);
                return renderOfficesList({id: '#officesList'});
            }).catch(err => { throw err; });
        })

        $(config.id).empty();
        $(config.id).append($html);
    });
}

// List all offices in the options. That list is already in global OFFICES
// If option id is the same as user's option id, then that option gets select='selected'
// Otherwise, preselect option --none--
function renderOptions(config) {
    // console.log(config.user.office);
    let html, $html;
    // If user has no office, then the none option is selected
    // value for --none-- is an empty string
    html = `<option value='' ${config.user.office ? "" : "selected"}>-- none --</option>`;
    html = OFFICES.reduce((html, office) => {
        if (config.user.office) { // if user has an office, then select the assigned office
            return html + `
                <option value='${office.id}' ${office.id === config.user.office.id ? "selected" : ""}>${office.name}</option>
            `;
        }
        else { // If the user doesn't have an office, then don't worry about selected
            return html + `
            <option value='${office.id}'>${office.name}</option>
        `;
        }
    }, html);
    return html;
}
