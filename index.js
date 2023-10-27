const openTab = (e, tabName) => {
    var i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName('tab_content')
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
    }
    tablinks = document.getElementsByClassName('tab_links')
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '')
    }
    document.getElementById(tabName).style.display = 'block'
    e.currentTarget.className += ' active'
}

document.getElementById('default_Open').click()