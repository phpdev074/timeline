const UserComponent = (props) => {
    const userInfo = props.userInfo;
    return (
        <div>
            {userInfo && (
                <div>
                    <h2>User Info</h2>
                    {userInfo.map(user => (
                        <div key={user._id}>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserComponent;
