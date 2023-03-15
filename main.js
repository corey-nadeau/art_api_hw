async function clickedEvent(img_index){
    let imginfo = document.getElementsByTagName('img')[img_index].attributes[1].value;
    let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${imginfo}`,{
        method: 'GET'
    });

    let result = await fetch(request);
    let response = await result.json();

    console.log(`Title: ${response.data[0].title}`)
    console.log(`Description: ${response.data[0].thumbnail.alt_text}`)
    console.log(`Id: ${response.data[0].id}`)



    
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                    width=600,height=300,left=100,top=100`;
    const popup = window.open("/", "MoreInfo", params);
    popup.document.open()
    popup.document.write("<h2>TITLE: </h2>", response.data[0].title, "<h2>DESCRIPTION: </h2>", response.data[0].thumbnail.alt_text, "<h2>GALLERY ID: </h2>", response.data[0].id);
    popup.document.close()
 }
    




function getInfo(id,event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5,1)
            break;
        }
    }
}

