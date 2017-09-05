function renderOfficeForm(config){
    let html, $html;
    html = `
        <div class='form-group'>
            <label>Name</label>
            <input id='map-input' class='form-control' name="name" placeholder="Enter a location" autocomplete="off">
        </div>
    `;

    $html = $(html);
    $(config.id).empty();
    $(config.id).append($html);


}
