class Github {
    constructor(){

        /*
        If app is registered Example
        //this.client_id = 'd09870safas090fasf09'
        //this.client_secret = '827487aaslj92194812kafjkfasj19482109412
        */
       this.repos_count = 5;//Show per Page
       this.repos_sort = 'created: asc';//Sort the repos from Last Created

    }//constructor

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        //Reg:https://api.github.com/users/${user}?client_id=${this.client_id};

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}$sort=${this.repos_sort}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
             profile,
             repos
        }

    }//getUser



} //Github