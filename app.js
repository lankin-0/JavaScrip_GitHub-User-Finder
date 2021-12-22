//Init GitHub
const github = new Github;

//Init UI
const ui = new UI;

///Search Input
const searchUser = document.getElementById('searchUser');


///Search Input add event listener
searchUser.addEventListener('keyup', (e) => {

    //Get Input Text (Value)
    const userText = e.target.value;

    if(userText !== ''){

        //Make HTTP Call
        github.getUser(userText)
        .then(data => {
            
            if(data.profile.message === 'Not Found'){

                //Show Alert
                ui.showAlert('User not Found', 'alert alert-danger');

            }else{

                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }

        })

     }else {

        //Clear Profile
        ui.clearProfile();

     }

});//searchUser