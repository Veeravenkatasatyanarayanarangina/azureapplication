



const key = '2jsUH1rxG4XS5XVeabwJBP9K69TPSc';

export const userDataStore = (data) => {
    localStorage.setItem('userData',JSON.stringify(data))
};


export const getUserData = () => {
    const userData = JSON.parse( localStorage.getItem('userData'));
    return(userData)

}