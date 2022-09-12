document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        setTimeout(() => {
            $('.advertising-container-top').first().prepend(`<iframe scrolling="no" style="border: none; width: 100%;" src='https://animmini.com/banners/index.html'></iframe>`)
            $('.page-content').first().prepend(`<iframe scrolling="no" style="border: none; position: absolute; left: 0; height: 100%;" src='https://animmini.com/banners/index-2.html'></iframe>`)
            $('.page-content').first().prepend(`<iframe scrolling="no" style="border: none; position: absolute; right: 0; height: 100%;" src='https://animmini.com/banners/index-2.html'></iframe>`)
            // Copies of these two banner files can be found at public/banners folder
        }, 100)
    }
}