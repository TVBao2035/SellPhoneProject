
async function getData(){
    return fetch('http://localhost:8000/user')
    .then(res => res.json())
    .then(data => data)
    .catch(()=>{
        console.log("Please Running http://localhost:8000!!!");
        return [];
    });
}


export const DATA_USERS = await getData();
// export const DATA_USERS = [];
export const ACCOUNT_SIGNIN = "account-sign";

// const DATA_USERS = "data-users";
// const DATA_USERS_ORTHER = "data-users-orther";
// localStorage.setItem(DATA_USERS, JSON.stringify(dataUser));

// export {DATA_USERS, ACCOUNT_SIGNIN, DATA_USERS_ORTHER};
