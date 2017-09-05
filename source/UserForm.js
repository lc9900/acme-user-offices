//UserForm.js
function renderUserForm(config){
    // console.log('In renderUserForm');
    var html = `
        <div class='form-group'>
            <label>Name</label>
            <input id='user-input' class='form-control' name='name'>
        </div>
        <div class='form-group'>
            <button class='btn btn-primary'>Save</button>
        </div>
    `;

    var $html = $(html);
    $html.on('click', 'button', function(){
        // console.log("Save button clicked");
        var name = $(`${config.id} input`).val();
        // console.log(name);
        $.ajax({
            url: '/users',
            method: 'post',
            data: {
                name
            }
        }).then(result => {
            console.log(result);
            renderUsersList({id: '#usersList'}); // This is in Users.List.js
            $('#user-input').val('');
        }).catch(err => { throw err });
    });

    // $html.on('click', 'button', function(){
    //     console.log("Save button clicked")
    // })

    $(config.id).empty();
    $(config.id).append($html);
}
