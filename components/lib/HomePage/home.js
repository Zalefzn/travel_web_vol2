function getBooking(){
    setTimeout(()=>{
        const getDataBooked = [
            {
                name: 'Sultan',
                ratings: 8.1,
                captions: 'Travelin is the best!',
            }
    ];
    const [{name,ratings,captions}] = getDataBooked;
    alert(`nama: ${name}, rating: ${ratings}, caption: ${captions}`)
    },2000);
}

getBooking();


function getBooking2(){
    setTimeout(()=>{
        const getDataBooked2 = [
            {
                name: 'Rizal',
                ratings: 8.5,
                captions: 'Travelin always in my heart',
            }
    ];
    const [{name,ratings,captions}] = getDataBooked2;
    alert(`nama: ${name}, rating: ${ratings}, caption: ${captions}`)
    },5000);
}

getBooking2();

const getChangeText = document.querySelector('p#p1');
setTimeout(()=>{
    getChangeText.style.color = 'black';
    console.info(getChangeText);
},5000);

const getChangeImage =  document.querySelector('img#img1');

setInterval(()=>{
    setTimeout(() => {[
        getChangeImage.src="/assets/hotel3.jpg",
    ]},10000);
    
    setTimeout(() => {[
        getChangeImage.src="/assets/hotel1.jpg",
    ]},15000);
    
    setTimeout(()=>{[
        getChangeImage.src="/assets/wisata.jpg",
    ]},20000);
},10000);




