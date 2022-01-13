
const HomePage = ({ setLoginUser, user }) => (
    <>
        <h1>Welcome to the DigitalFuturesAcademy, {user.name}, A company of entrepreneurs, educators and technologists</h1>
        <br />
        <p>Your email address is: {user.email}</p>
        <button onClick={() => setLoginUser({})}>Log out</button>
    </>
);

export default HomePage;

