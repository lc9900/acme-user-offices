function renderOfficeForm(config){
    let html, $html;
    html = `
        <div class='form-group'>
            <label>Name</label>
            <input class='form-control office_input' name="name" placeholder="Enter a location" autocomplete="off">
        </div>
    `;

    $html = $(html);
    $(config.id).empty();
    $(config.id).append($html);
}
