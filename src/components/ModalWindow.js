function ModalWindow(props){
    const {user, isShow} = props;

    function closeWindow(){
        isShow(false);
    }

    return (
        <div id="modalWindow">
            <div id="modalWindowContent">
                <div className="user-info">
                    <p className="user-info__text">
                        <span className="user-info__title">Id: </span>
                        <span className="user-info__data">{`${user[0]?.id}`}</span>
                    </p>
                    <p className="user-info__text">
                        <span className="user-info__title">Name: </span>
                        <span className="user-info__data">{user[0]?.name}</span>
                    </p>
                    <p className="user-info__text">
                        <span className="user-info__title">Username: </span>
                        <span className="user-info__data">{user[0]?.username}</span>
                    </p>
                    <p className="user-info__text">
                        <span className="user-info__title">Email: </span>
                        <span className="user-info__data">{user[0]?.email}</span>
                    </p>
                    <p className="user-info__text">
                        <span className="user-info__title">Address: </span>
                        <span
                            className="user-info__data">{user[0]?.address?.city}, {user[0]?.address?.street}, {user[0]?.address?.suite}, {user[0]?.address?.zipcode}</span>
                    </p>
                    <p className="user-info__text">
                        <span className="user-info__title">Phone: </span>
                        <span className="user-info__data">{user[0]?.phone}</span>
                    </p>
                    <p className="user-info__text">
                        <span className="user-info__title">Website: </span>
                        <span className="user-info__data">{user[0]?.website}</span>
                    </p>
                    <p className="user-info__text">
                        <span className="user-info__title">Company: </span>
                        <span className="user-info__data">{user[0]?.company?.name}</span>
                    </p>
                    <button type="button" className="custom-btn modal-close-btn" id="modalCloseBtn" onClick={closeWindow}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;