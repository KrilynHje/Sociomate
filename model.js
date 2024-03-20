
const model = {
    app: {
        currentPage: null,
    },
    inputs: {
        searchText: '',
        detail: {
            activityId: null,
        },
        activities: {
            selectedFilters: [1, 3],
        },
        navbar: {
            
        }
    },
    filters: [
        {
            activityId: 0,
            name: "Sykkling",
            icon: "bike",
        },
        {
            activityId: 1,
            name: "Svømming",
            icon: "swimming",
        },
        {
            activityId: 2,
            name: "Kino",
            icon: "movie",
        },
        {
            activityId: 3,
            name: "Konsert",
            icon: "note"
        },
        {
            activityId: 4,
            name: "Bowling",
            icon: "cones"
        },
    ],
    activities: [
        {
            activityId: 1,
            // activityName: 'Konsert',
            friendName: 'Navn Navnesen',
            date: '16.03.2024',
            Participating: 20,
            location: 'Larvik',
            description: 'Inviterer til aktivitet den 24 Mars, 2024',
            // Classification: 'Konsert',
            //activityName og Classification er ikke noe vi trenger for å tegne opp akkurat dette viewet, men senere i prosjektet når en bruker skal generere en "activity" er dette properties vi må kunne ta imot. 
            
        },
    ],
    scheduleList:[
        {
            activityId: 4 ,
            isPending: false,
            isAccepted: true,
            friendsGoing: true,
            friendName: 'name',
            date: 'day.month.year', 
            participants: 5,
            location: 'Larvik',
            description: 'en beskrivelse',
        },
        {
            activityId: 4 ,
            isPending: false,
            isAccepted: true,
            friendsGoing: false,
            friendName: 'name',
            date: 'day.month.year', 
            participants: 5,
            location: 'Larvik',
            description: 'en beskrivelse',
        },
        {
            activityId: 4 ,
            isPending: false,
            isAccepted: true,
            friendsGoing: false,
            friendName: 'name',
            date: 'day.month.year', 
            participants: 5,
            location: 'Larvik',
            description: 'en beskrivelse',
        },
        {
            activityId: 4 ,
            isPending: false,
            isAccepted: true,
            friendsGoing: false,
            friendName: 'name',
            date: 'day.month.year', 
            participants: 5,
            location: 'Larvik',
            description: 'en beskrivelse',
        },
        {
            activityId: 4 ,
            isPending: true,
            isAccepted: true,
            friendsGoing: false,
            friendName: 'name',
            date: 'day.month.year', 
            participants: 5,
            location: 'Larvik',
            description: 'en beskrivelse',
        },
        {
            activityId: 4 ,
            isPending: false,
            isAccepted: true,
            friendsGoing: false,
            friendName: 'name',
            date: 'day.month.year', 
            participants: 5,
            location: 'Larvik',
            description: 'en beskrivelse',
        }
    ] 
};

function view() {
    let filter = {
        activityIdid: 0,
        name: "Bowling",
        icon: "cone",
    }

    let activity = {
        id: 6,
        filterId: 0,
        isPending:false,
        isAccepted:true,
        friendsGoing:false,
        activityName: 'Bowling',
        friendName,
        date:null,
        colors: ['brown', 'red'],
        description: 'Full størrelse, mekanisk...',
    }

// Funksjoner til kontroller. brukt mens vi diskuterte oppsett av modellen. 
//     for (let i = 0; i < filters.length; i++) {
//         if (filters[i].id === activity.filterId) {
//             return filters[i].icon
//         }
//     }

//     filter.forEach((e) => {
//         if (e.id === activity.filterId) {
//             return e.icon
//         }
//     })
// }
