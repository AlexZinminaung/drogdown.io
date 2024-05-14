let templateSource = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(templateSource);
let schoolList = document.getElementById('school-information');

let context = {
    schools: [{
        name: 'Love and Care',
        class: 'G-4 t0 G-12, Pre GED, GED',
        address: 'Mae Pa/ Mae Sot / Tak / Thailand',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1059.2434415906182!2d98.54733764927322!3d16.757588991751074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda16cd75da483%3A0xc9bd1da4ec7d5ffb!2sLove%20and%20Care%20learning%20center!5e0!3m2!1sen!2sth!4v1715588328403!5m2!1sen!2sth'
    },
    {
        name: 'CDC',
        class: 'G-4 t0 G-12, Pre GED, GED',
        address: 'Mae Pa/ Mae Sot / Tak / Thailand',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1059.2434415906182!2d98.54733764927322!3d16.757588991751074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda16cd75da483%3A0xc9bd1da4ec7d5ffb!2sLove%20and%20Care%20learning%20center!5e0!3m2!1sen!2sth!4v1715588328403!5m2!1sen!2sth'
    },

    {
        name: 'BEHSO',
        class: 'G-4 t0 G-12, Pre GED',
        address: 'Mae Pa/ Mae Sot / Tak / Thailand',
        mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1059.2434415906182!2d98.54733764927322!3d16.757588991751074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda16cd75da483%3A0xc9bd1da4ec7d5ffb!2sLove%20and%20Care%20learning%20center!5e0!3m2!1sen!2sth!4v1715588328403!5m2!1sen!2sth'
    
}]
}


let html = template(context);
schoolList.innerHTML = html;